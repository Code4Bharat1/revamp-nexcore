// "use client";
// import React from "react";
// import TestimonialCard from "./TestimonialCard/Card";
// import { motion } from "framer-motion"; // Import Framer Motion

// const TestimonialsSection = () => {
//   return (
//     <section className="w-full h-full relative py-10">
//       {/* Header Section */}
//       <div className="w-full h-auto flex flex-col md:flex-row items-center justify-between px-5 md:px-24 py-10">
//         {/* Animate the Testimonials title */}
//         <motion.div
//           className="w-full md:w-[50%] text-center md:text-left mb-5 md:mb-0"
//           initial={{ opacity: 0, x: -100 }} // Initial state (offscreen)
//           whileInView={{ opacity: 1, x: 0 }} // Animate into view
//           viewport={{ amount: 0.2 }} // Trigger animation every time 20% of the section is visible
//           transition={{ duration: 0.6, ease: "easeInOut" }} // Smooth transition
//         >
//           <motion.span
//             className="text-[4vw] md:text-[1.2vw] font-semibold text-[#576066]"
//             initial={{ opacity: 0, x: -50 }} // Start hidden and slightly off to the left
//             whileInView={{ opacity: 1, x: 0 }} // Animate into view
//             viewport={{ amount: 0.2 }} // Trigger animation every time it enters view
//             transition={{ duration: 0.4, delay: 0.2, ease: "easeInOut" }} // Delayed effect
//           >
//             Testimonials
//           </motion.span>
//           <motion.h3
//             className="text-[6vw] md:text-[2.5vw] font-sans font-bold leading-tight md:leading-none"
//             initial={{ opacity: 0, x: -100 }} // Hidden and off-screen to the left
//             whileInView={{ opacity: 1, x: 0 }} // Animate into view
//             viewport={{ amount: 0.2 }} // Trigger animation every time it comes into view
//             transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }} // Cascading effect
//           >
//             What Our Clients <br /> Say
//           </motion.h3>
//         </motion.div>

//         {/* Animate the description */}
//         <motion.div
//           className="w-full md:w-[48%] text-center md:text-left"
//           initial={{ opacity: 0, x: 100 }} // Hidden and off-screen to the right
//           whileInView={{ opacity: 1, x: 0 }} // Animate into view
//           viewport={{ amount: 0.2 }} // Trigger animation every time it enters view
//           transition={{ duration: 0.6, delay: 0.6, ease: "easeInOut" }} // Delayed cascading effect
//         >
//           <p className="text-[4vw] md:text-[1vw] font-medium text-black">
//             At NEXCORE ALLIANCE LLP, we’re proud to partner with clients across
//             e-commerce, healthcare, education, and finance. Our commitment to
//             understanding their unique needs has fostered long-term
//             relationships.
//           </p>
//         </motion.div>
//       </div>

//       {/* Testimonial Cards Section */}
//       <div className="w-full px-5 md:px-24 flex flex-wrap justify-center gap-5 md:gap-10">
//         {/* Testimonial Cards */}
//         <TestimonialCard
//           image="/images/faces/peoples_image1.webp"
//           description="NEXCORE ALLIANCE LLP transformed our online operations with efficient, timely solutions and unmatched quality."
//           name="Neelesh Shukla"
//           username="Education"
//           stars={5}
//         />
//         <TestimonialCard
//           image="/images/faces/peoples_image2.webp"
//           description="We’re thrilled with the custom CRM NEXCORE ALLIANCE LLP delivered. Their attention to detail and support have greatly improved our operations."
//           name="Utkarsh Tiwari"
//           username="Hospitality "
//           stars={4}
//         />
//         <TestimonialCard
//           image="/images/faces/peoples_image3.webp"
//           description="NEXCORE ALLIANCE LLP’s expertise in scalable web solutions helped us manage property listings and client interactions efficiently. A trusted partner for real estate."
//           name="Snehashish Datta"
//           username="Real Estate"
//           stars={5}
//         />
//         <TestimonialCard
//           image="/images/faces/peoples_image4.webp"
//           description="Working with NEXCORE ALLIANCE LLP was a great experience. They enhanced our e-commerce platform with advanced features, boosting our user experience. Highly recommended"
//           name="Varada Jadhav"
//           username="Retail"
//           stars={5}
//         />
//         <TestimonialCard
//           image="/images/faces/peoples_image5.webp"
//           description="NEXCORE ALLIANCE LLP did an excellent job revamping our website and integrating a seamless booking system, delivering exceptional results."
//           name="Isha Sawant"
//           username="Healthcare"
//           stars={5}
//         />
//         <TestimonialCard
//           image="/images/faces/peoples_image6.webp"
//           description="NEXCORE ALLIANCE LLP’s Odoo expertise streamlined our processes, boosting efficiency and productivity with tailored solutions."
//           name="Ankit Chaurasia"
//           username="Manufacturing "
//           stars={5}
//         />
        
//       </div>
//     </section>
//   );
// };

// export default TestimonialsSection;
