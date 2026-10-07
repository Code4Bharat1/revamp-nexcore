// import React from "react";
// import Image from "next/image"; // Importing Next.js Image component
// import { FaStar } from "react-icons/fa";
// import { motion } from "framer-motion"; // Import Framer Motion for animations

// const TestimonialCard = ({ image, description, name, username, stars }) => {
//   // Define animation variants for the card
//   const cardVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { 
//       opacity: 1, 
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" }
//     },
//     hover: {
//       scale: 1.05,
//       backgroundColor: "#E0F7FA", // Light blue background on hover
//       borderColor: "#0288D1", // Darker blue border on hover
//       transition: { type: "spring", stiffness: 300, damping: 15 }
//     },
//   };

//   // Define animation variants for stars
//   const starVariants = {
//     hover: { scale: 1.2 },
//   };

//   // Define animation variants for the quote icon
//   const quoteVariants = {
//     hover: { rotate: 360, color: "#0288D1" }, // Change color to blue on hover
//     initial: { color: "#555" },
//   };

//   return (
//     <motion.div
//       className="w-[90vw] md:w-[30vw] lg:w-[25vw] h-auto md:h-[45vh] border-2 cursor-pointer border-gray-300 rounded-2xl overflow-hidden shadow-lg flex flex-col justify-between p-5 hover:shadow-xl transition-shadow duration-300"
//       variants={cardVariants}
//       initial="hidden"
//       animate="visible"
//       whileHover="hover"
//     >
//       {/* Stars Section */}
//       <motion.div className="w-full flex justify-start items-center gap-1 md:gap-2">
//         {[...Array(stars)].map((_, index) => (
//           <motion.div key={index} variants={starVariants} whileHover="hover">
//             <FaStar className="text-[#106EB5] w-4 h-4 md:w-6 md:h-6" />
//           </motion.div>
//         ))}
//       </motion.div>

//       {/* Description */}
//       <motion.div
//         className="w-full text-center mt-2 mb-2"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.2, duration: 0.6 }}
//       >
//         <p className="text-[4vw] md:text-[1vw] text-gray-600 line-clamp-3 hover:text-[#0288D1] transition-colors duration-300">
//           {description}
//         </p>
//       </motion.div>

//       {/* User Info */}
//       <div className="w-full flex justify-between items-center">
//         <div className="flex items-center gap-2">
//           <motion.div
//             className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-[#112d43] transform transition-transform duration-300"
//             whileHover={{ scale: 1.1 }}
//           >
//             <Image
//               src={image}
//               alt={name}
//               width={64}
//               height={64}
//               className="w-full h-full object-cover"
//             />
//           </motion.div>
//           <div>
//             <span className="text-[4vw] md:text-[1vw] font-medium text-black hover:text-[#0288D1] transition-colors duration-300">
//               {name}
//             </span>
//             <p className="text-[3.5vw] md:text-[0.9vw] text-gray-500 hover:text-[#0288D1] transition-colors duration-300">
//               {username}
//             </p>
//           </div>
//         </div>
//         <motion.div
//           className="w-6 h-6 md:w-8 md:h-8 text-gray-500"
//           variants={quoteVariants}
//           initial="initial"
//           whileHover="hover"
//           transition={{ duration: 0.8, ease: "easeInOut" }}
//         >
//           <Image
//             src="/images/quote.png"
//             alt="quote"
//             width={32}
//             height={32}
//             className="w-full h-full object-contain"
//           />
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// export default TestimonialCard;
