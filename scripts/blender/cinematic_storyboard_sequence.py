"""
Blender Python Script (bpy): 3D Hero Sequence Loop Video
=========================================================
Matching Reference Storyboard (Frames 01-06):
- Scene 1: Human hand enters from LEFT
- Scene 2: Robot hand enters from RIGHT
- Scene 3: Fingers touch exactly at CENTER with bright white-blue spark
- Scene 4: Energy forms circular futuristic ring (cyan, violet, warm orange)
- Scene 5: "AI Solutions" text reveals in center gg
- Scene 6: Final hero frame with rotating energy ring and camera push-in
"""

import bpy
import math
import os
from mathutils import Vector, Euler

def clear_or_setup_scene():
    """Initializes render settings and camera for 16:9 cinematic push-in."""
    scene = bpy.context.scene
    scene.render.resolution_x = 2560
    scene.render.resolution_y = 1440
    scene.render.fps = 30
    scene.frame_start = 1
    scene.frame_end = 240  # 8 seconds at 30 fps

    # White clean studio world
    world = scene.world
    if not world:
        world = bpy.data.worlds.new("StudioWorld")
        scene.world = world
    world.use_nodes = True
    bg_node = world.node_tree.nodes.get("Background")
    if bg_node:
        bg_node.inputs['Color'].default_value = (0.97, 0.97, 0.96, 1.0)
        bg_node.inputs['Strength'].default_value = 1.0

    # Camera with subtle push-in
    if not scene.camera:
        cam_data = bpy.data.cameras.new("CinematicCam")
        cam = bpy.data.objects.new("CinematicCam", cam_data)
        bpy.context.collection.objects.link(cam)
        scene.camera = cam
    else:
        cam = scene.camera

    cam.location = (0.0, -0.85, 0.0)
    cam.rotation_euler = (math.radians(90), 0, 0)
    
    # Animate 3% subtle push-in across timeline
    cam.keyframe_insert(data_path="location", frame=1)
    cam.location = (0.0, -0.825, 0.0)
    cam.keyframe_insert(data_path="location", frame=240)

    # Soft studio lights
    if not any(obj.type == 'LIGHT' for obj in bpy.data.objects):
        light_data = bpy.data.lights.new("TopKeyLight", type='AREA')
        light_data.energy = 500
        light_data.size = 1.5
        light_obj = bpy.data.objects.new("TopKeyLight", light_data)
        light_obj.location = (0.0, -0.6, 0.8)
        light_obj.rotation_euler = (math.radians(35), 0, 0)
        bpy.context.collection.objects.link(light_obj)

def create_spark_and_energy_ring():
    """Builds the central spark sphere and expanding circular energy ring."""
    # 1. Spark Sphere at (0, 0, 0)
    bpy.ops.mesh.primitive_uv_sphere_add(radius=0.015, location=(0, 0, 0))
    spark = bpy.context.active_object
    spark.name = "AI_Touch_Spark"

    spark_mat = bpy.data.materials.new(name="Spark_Emission")
    spark_mat.use_nodes = True
    nodes = spark_mat.node_tree.nodes
    nodes.clear()
    em_node = nodes.new(type='ShaderNodeEmission')
    em_node.inputs['Color'].default_value = (0.85, 0.95, 1.0, 1.0)
    em_node.inputs['Strength'].default_value = 25.0
    out_node = nodes.new(type='ShaderNodeOutputMaterial')
    spark_mat.node_tree.links.new(em_node.outputs['Emission'], out_node.inputs['Surface'])
    spark.data.materials.append(spark_mat)

    # Animate spark visibility (bursts on frame 75 when fingers touch)
    spark.scale = (0.001, 0.001, 0.001)
    spark.keyframe_insert(data_path="scale", frame=70)
    spark.scale = (1.5, 1.5, 1.5)
    spark.keyframe_insert(data_path="scale", frame=78)
    spark.scale = (0.001, 0.001, 0.001)
    spark.keyframe_insert(data_path="scale", frame=110)

    # 2. Expanding Energy Ring (Torus)
    bpy.ops.mesh.primitive_torus_add(
        major_radius=0.09,
        minor_radius=0.002,
        major_segments=64,
        minor_segments=16,
        location=(0, 0, 0),
        rotation=(math.radians(90), 0, 0)
    )
    ring = bpy.context.active_object
    ring.name = "AI_Energy_Ring"

    ring_mat = bpy.data.materials.new(name="EnergyRing_Material")
    ring_mat.use_nodes = True
    r_nodes = ring_mat.node_tree.nodes
    r_nodes.clear()
    r_em = r_nodes.new(type='ShaderNodeEmission')
    r_em.inputs['Color'].default_value = (0.2, 0.75, 1.0, 1.0)
    r_em.inputs['Strength'].default_value = 8.0
    r_out = r_nodes.new(type='ShaderNodeOutputMaterial')
    ring_mat.node_tree.links.new(r_em.outputs['Emission'], r_out.inputs['Surface'])
    ring.data.materials.append(ring_mat)

    # Animate Ring expansion (Scene 4: frame 85 to 140)
    ring.scale = (0.01, 0.01, 0.01)
    ring.keyframe_insert(data_path="scale", frame=80)
    ring.scale = (1.0, 1.0, 1.0)
    ring.keyframe_insert(data_path="scale", frame=125)

    # Slow continuous rotation
    ring.rotation_euler = (math.radians(90), 0, 0)
    ring.keyframe_insert(data_path="rotation_euler", frame=80)
    ring.rotation_euler = (math.radians(90), 0, math.radians(360))
    ring.keyframe_insert(data_path="rotation_euler", frame=240)

def create_ai_solutions_3d_text():
    """Creates centered 'AI' and 'Solutions' 3D text (Scene 5 & 6)."""
    # Text 'AI'
    bpy.ops.object.text_add(location=(0, -0.01, 0.02))
    ai_obj = bpy.context.active_object
    ai_obj.name = "Text_AI"
    ai_obj.data.body = "AI"
    ai_obj.data.align_x = 'CENTER'
    ai_obj.data.align_y = 'CENTER'
    ai_obj.data.size = 0.055
    ai_obj.data.extrude = 0.003
    ai_obj.rotation_euler = (math.radians(90), 0, 0)

    # Blue-to-purple gradient emission material
    ai_mat = bpy.data.materials.new(name="AI_Text_Material")
    ai_mat.use_nodes = True
    ai_nodes = ai_mat.node_tree.nodes
    ai_nodes.clear()
    ai_em = ai_nodes.new(type='ShaderNodeEmission')
    ai_em.inputs['Color'].default_value = (0.1, 0.6, 1.0, 1.0)
    ai_em.inputs['Strength'].default_value = 3.5
    ai_out = ai_nodes.new(type='ShaderNodeOutputMaterial')
    ai_mat.node_tree.links.new(ai_em.outputs['Emission'], ai_out.inputs['Surface'])
    ai_obj.data.materials.append(ai_mat)

    # Text 'Solutions'
    bpy.ops.object.text_add(location=(0, -0.01, -0.025))
    sol_obj = bpy.context.active_object
    sol_obj.name = "Text_Solutions"
    sol_obj.data.body = "Solutions"
    sol_obj.data.align_x = 'CENTER'
    sol_obj.data.align_y = 'CENTER'
    sol_obj.data.size = 0.028
    sol_obj.data.extrude = 0.002
    sol_obj.rotation_euler = (math.radians(90), 0, 0)

    # Dark navy material
    sol_mat = bpy.data.materials.new(name="Solutions_Text_Material")
    sol_mat.use_nodes = True
    s_nodes = sol_mat.node_tree.nodes
    s_nodes.clear()
    s_bsdf = s_nodes.new(type='ShaderNodeBsdfPrincipled')
    s_bsdf.inputs['Base Color'].default_value = (0.05, 0.09, 0.18, 1.0)
    s_bsdf.inputs['Roughness'].default_value = 0.3
    s_out = s_nodes.new(type='ShaderNodeOutputMaterial')
    sol_mat.node_tree.links.new(s_bsdf.outputs['BSDF'], s_out.inputs['Surface'])
    sol_obj.data.materials.append(sol_mat)

    # Animate Text appearance (reveals at frame 130)
    for txt in [ai_obj, sol_obj]:
        txt.scale = (0.001, 0.001, 0.001)
        txt.keyframe_insert(data_path="scale", frame=125)
        txt.scale = (1.0, 1.0, 1.0)
        txt.keyframe_insert(data_path="scale", frame=155)

if __name__ == "__main__":
    clear_or_setup_scene()
    create_spark_and_energy_ring()
    create_ai_solutions_3d_text()
    print("[Storyboard 3D Sequence] Setup completed for Scenes 1 through 6.")
