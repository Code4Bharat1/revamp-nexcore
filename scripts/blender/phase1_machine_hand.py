"""
Phase 1: Machine Hand Geometry (Blender Python API / bpy)
=========================================================
Builds a hard-surface robotic hand entering from screen-right, matching reference:
- Distinct phalange segments (3 per finger) connected by visible cylindrical joint pivots
  with subtle bolt/washer cap details at each hinge.
- Index finger extended toward center, stopping 1-2cm short of human fingertip.
- Compact mechanical palm housing with subtle panel-seam lines.
- Wrist-to-forearm transition with a visible tendon/cable wire element peeking out.
- Bevel modifier (small width, 2-3 segments) + Subdivision Surface (2 levels) on every part.
- All parts parented under 'MachineHand_Root'.
- Leaves human hand and existing scene objects completely untouched.
"""

import bpy
import math
import os
from mathutils import Vector, Matrix, Euler

def apply_chamfer_and_subsurf(obj, bevel_width=0.002, bevel_segments=3, subsurf_levels=2):
    """Adds Bevel and Subsurf modifiers for clean, non-faceted chamfered edges."""
    for poly in obj.data.polygons:
        poly.use_smooth = True

    bev = obj.modifiers.new(name="Bevel", type='BEVEL')
    bev.width = bevel_width
    bev.segments = bevel_segments
    bev.limit_method = 'ANGLE'
    bev.angle_limit = math.radians(35)

    sub = obj.modifiers.new(name="Subdivision", type='SUBSURF')
    sub.levels = 1
    sub.render_levels = subsurf_levels

def create_phalange(name, radius=0.009, length=0.032):
    """Creates a finger phalange capsule/cylinder segment."""
    bpy.ops.mesh.primitive_cylinder_add(
        vertices=24,
        radius=radius,
        depth=length,
        end_fill_type='TRIFAN',
        location=(0, 0, 0)
    )
    obj = bpy.context.active_object
    obj.name = name
    apply_chamfer_and_subsurf(obj, bevel_width=0.002, subsurf_levels=2)
    return obj

def create_hinge_pivot(name, radius=0.007, width=0.019):
    """Creates a visible cylindrical joint hinge with bolt/washer cap details."""
    # Central hinge cylinder (oriented along Y axis)
    bpy.ops.mesh.primitive_cylinder_add(
        vertices=24,
        radius=radius,
        depth=width,
        location=(0, 0, 0),
        rotation=(math.radians(90), 0, 0)
    )
    pivot = bpy.context.active_object
    pivot.name = name
    apply_chamfer_and_subsurf(pivot, bevel_width=0.0012, bevel_segments=2, subsurf_levels=2)

    # Washer / bolt cap on positive Y
    bpy.ops.mesh.primitive_cylinder_add(
        vertices=20,
        radius=radius * 0.7,
        depth=0.002,
        location=(0, width / 2.0 + 0.001, 0),
        rotation=(math.radians(90), 0, 0)
    )
    cap1 = bpy.context.active_object
    cap1.name = f"{name}_Cap_R"
    cap1.parent = pivot

    # Washer / bolt cap on negative Y
    bpy.ops.mesh.primitive_cylinder_add(
        vertices=20,
        radius=radius * 0.7,
        depth=0.002,
        location=(0, -(width / 2.0 + 0.001), 0),
        rotation=(math.radians(90), 0, 0)
    )
    cap2 = bpy.context.active_object
    cap2.name = f"{name}_Cap_L"
    cap2.parent = pivot

    return pivot

def build_phase1_machine_hand():
    # 1. Parent Empty "MachineHand_Root"
    if "MachineHand_Root" in bpy.data.objects:
        root = bpy.data.objects["MachineHand_Root"]
    else:
        root = bpy.data.objects.new("MachineHand_Root", None)
        root.empty_display_type = 'ARROWS'
        root.empty_display_size = 0.1
        bpy.context.collection.objects.link(root)

    # Position machine hand entering from screen-right
    # Human fingertip is near center-left; machine fingertip stops 1-2cm short
    root.location = (0.22, 0.0, 0.0)

    # 2. Compact Mechanical Palm Housing
    bpy.ops.mesh.primitive_cube_add(size=1.0, location=(0.045, 0.0, 0.0))
    palm = bpy.context.active_object
    palm.name = "MachineHand_Palm"
    palm.scale = (0.065, 0.082, 0.026)
    bpy.ops.object.transform_apply(scale=True)
    palm.parent = root
    apply_chamfer_and_subsurf(palm, bevel_width=0.0035, subsurf_levels=2)

    # Palm panel seam line (subtle recessed groove)
    bpy.ops.mesh.primitive_cube_add(size=1.0, location=(0.045, 0.0, 0.013))
    seam = bpy.context.active_object
    seam.name = "MachineHand_PalmSeam"
    seam.scale = (0.05, 0.0015, 0.002)
    bpy.ops.object.transform_apply(scale=True)
    seam.parent = root
    apply_chamfer_and_subsurf(seam, bevel_width=0.0005, subsurf_levels=1)

    # 3. Wrist Base & Forearm Housing
    bpy.ops.mesh.primitive_cylinder_add(
        vertices=32,
        radius=0.038,
        depth=0.024,
        location=(0.096, 0.0, 0.0),
        rotation=(0, math.radians(90), 0)
    )
    wrist = bpy.context.active_object
    wrist.name = "MachineHand_WristCoupler"
    wrist.parent = root
    apply_chamfer_and_subsurf(wrist, bevel_width=0.002, subsurf_levels=2)

    # Forearm housing shell (tapering outwards to screen-right)
    bpy.ops.mesh.primitive_cylinder_add(
        vertices=32,
        radius=0.048,
        depth=0.16,
        location=(0.19, 0.0, 0.0),
        rotation=(0, math.radians(90), 0)
    )
    forearm = bpy.context.active_object
    forearm.name = "MachineHand_Forearm"
    forearm.scale = (1.0, 0.88, 1.0)
    bpy.ops.object.transform_apply(scale=True)
    forearm.parent = root
    apply_chamfer_and_subsurf(forearm, bevel_width=0.003, subsurf_levels=2)

    # 4. Wrist-to-Forearm Tendon Cable / Wire (peeking out from housing gap)
    # Using a curved path/bezier or articulated segmented curve
    curve_data = bpy.data.curves.new('WristWire_Curve', type='CURVE')
    curve_data.dimensions = '3D'
    curve_data.bevel_depth = 0.0022  # Wire thickness
    curve_data.bevel_resolution = 4

    spline = curve_data.splines.new('BEZIER')
    spline.bezier_points.add(2)  # 3 points total
    # Point 0: inside wrist gap
    spline.bezier_points[0].co = Vector((0.082, 0.028, 0.012))
    spline.bezier_points[0].handle_left = Vector((0.075, 0.028, 0.012))
    spline.bezier_points[0].handle_right = Vector((0.090, 0.030, 0.016))
    # Point 1: arched peek
    spline.bezier_points[1].co = Vector((0.115, 0.035, 0.020))
    spline.bezier_points[1].handle_left = Vector((0.100, 0.033, 0.018))
    spline.bezier_points[1].handle_right = Vector((0.130, 0.036, 0.018))
    # Point 2: entering forearm slot
    spline.bezier_points[2].co = Vector((0.150, 0.032, 0.014))
    spline.bezier_points[2].handle_left = Vector((0.140, 0.034, 0.016))
    spline.bezier_points[2].handle_right = Vector((0.160, 0.030, 0.012))

    wire_obj = bpy.data.objects.new('MachineHand_WristWire', curve_data)
    bpy.context.collection.objects.link(wire_obj)
    wire_obj.parent = root

    # 5. Articulated Fingers (3 distinct segments + cylindrical joint pivots)
    # Index finger extended toward center-left
    fingers_data = [
        # name, base_y, base_z, [seg_lengths], [seg_radii], [curls_deg]
        ("Thumb", -0.046, -0.014, [0.028, 0.024, 0.020], [0.0095, 0.0085, 0.0075], [-20, -15, -10]),
        ("Index", -0.026, 0.002, [0.038, 0.030, 0.024], [0.0090, 0.0080, 0.0070], [3, 4, 3]), # nearly straight forward
        ("Middle", 0.000, 0.004, [0.042, 0.034, 0.026], [0.0095, 0.0085, 0.0075], [22, 28, 25]),
        ("Ring", 0.026, 0.002, [0.037, 0.029, 0.023], [0.0090, 0.0080, 0.0070], [30, 36, 32]),
        ("Pinky", 0.050, -0.003, [0.030, 0.022, 0.018], [0.0080, 0.0070, 0.0060], [36, 42, 38]),
    ]

    for f_name, base_y, base_z, lengths, radii, curls in fingers_data:
        curr_x = 0.012
        curr_y = base_y
        curr_z = base_z
        accum_curl = 0.0

        for seg_idx, (seg_len, seg_rad, curl) in enumerate(zip(lengths, radii, curls)):
            # 1. Joint Hinge Pivot
            pivot = create_hinge_pivot(
                name=f"MachineHand_{f_name}_Pivot_{seg_idx+1}",
                radius=seg_rad * 0.95,
                width=seg_rad * 2.2
            )
            pivot.location = (curr_x, curr_y, curr_z)
            pivot.parent = root

            # 2. Phalange Segment
            seg = create_phalange(
                name=f"MachineHand_{f_name}_Phalange_{seg_idx+1}",
                radius=seg_rad,
                length=seg_len
            )
            # Position phalange extending forward along -X with slight curl
            accum_curl += math.radians(curl)
            seg.rotation_euler = Euler((0, math.radians(90) + accum_curl, 0), 'XYZ')
            seg.location = (curr_x - (seg_len / 2.0) - 0.001, curr_y, curr_z)
            seg.parent = root

            # Advance current joint origin forward for next segment
            curr_x -= (seg_len + 0.0035)

    print("[Phase 1 Complete] Procedural Machine Hand Geometry built successfully under MachineHand_Root.")

def render_phase1_preview(output_path="previews/phase1_preview.png"):
    scene = bpy.context.scene
    scene.render.resolution_x = 1920
    scene.render.resolution_y = 1080
    scene.render.image_settings.file_format = 'PNG'

    # Ensure Camera
    if not scene.camera:
        cam_data = bpy.data.cameras.new(name="PreviewCam")
        cam = bpy.data.objects.new(name="PreviewCam", object_data=cam_data)
        bpy.context.collection.objects.link(cam)
        scene.camera = cam

    scene.camera.location = (0.0, -0.62, 0.03)
    scene.camera.rotation_euler = (math.radians(88), 0, 0)

    # Soft studio key light
    if not any(obj.type == 'LIGHT' for obj in bpy.data.objects):
        light_data = bpy.data.lights.new(name="StudioLight", type='AREA')
        light_data.energy = 450
        light_data.size = 1.0
        light_obj = bpy.data.objects.new(name="StudioLight", object_data=light_data)
        light_obj.location = (0.05, -0.6, 0.35)
        light_obj.rotation_euler = (math.radians(50), math.radians(10), 0)
        bpy.context.collection.objects.link(light_obj)

    abs_path = bpy.path.abspath(f"//{output_path}")
    os.makedirs(os.path.dirname(abs_path), exist_ok=True)
    scene.render.filepath = abs_path

    print(f"[Phase 1] Rendering preview to: {abs_path}")
    bpy.ops.render.render(write_still=True)
    print(f"[Phase 1 Preview Saved] {abs_path}")

if __name__ == "__main__":
    build_phase1_machine_hand()
    try:
        render_phase1_preview()
    except Exception as err:
        print(f"[Phase 1 Render Note] {err}")
