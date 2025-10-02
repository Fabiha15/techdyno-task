 
 
 
 
 
 
 
 
 
 
//  <div className="w-[1308px] flex border border-white-700 rounded-md">
//       {/* Left column */}
//       <div className="w-[436px] bg-white-400 pt-[34px] border-r border-white-700">
//         <div className="flex flex-col px-[21px] mb-[348px]">
//           <p className="text-2xl font-semibold text-orange-500">
//             Compare Products
//           </p>
//           <p className="text-lg font-normal text-orange-400 mt-3">
//             Find and select products to see the differences and similarities
//             between them
//           </p>
//         </div>

//         {/* Feature list */}
//         <ul className="text-[22px] font-normal text-gray-500">
//           {features.map((feature, index) => (
//             <li
//               key={feature}
//               className={`flex items-center px-[21px] py-[26px] ${
//                 index === 0
//                   ? "border-y border-white-700"
//                   : index === features.length - 1
//                   ? ""
//                   : "border-b border-white-700"
//               }`}
//             >
//               {feature}
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* middle column */}
//       <div className="w-[436px]   pt-[34px] flex flex-col border-r border-white-700">
//         <div className="px-[20px] ">
//           <div className="flex  items-center justify-between bg-white-400  h-12 rounded-full ">
//             <Input
//               placeholder="Search your favorite accessories"
//               className="h-full w-2/3   text-xs font-light text-gray-400  "
//             />
//             <button className="h-9 w-9 mr-3 flex   items-center justify-center rounded-full  bg-orange-500">
//               <div className="h-4 w-4 relative  ">
//                 <Image fill src="/search.svg" alt="search" />
//               </div>
//             </button>
//           </div>
//           <div className="h-[296px] w-[ 396px] flex items-center justify-center  bg-white-400 rounded-[6px] mt-2">
//             <div className="w-[117px] h-[196px]   relative ">
//               <Image src="/adapter.svg" alt="adapter" fill />
//             </div>
//           </div>
//           <p className="text-[22px] font-medium text-black mt-3">
//             Apple 20W USB-C Power Adapter
//           </p>
//           <div className="flex items-center gap-[9px] pt-[11px] pb-[7px] ">
//             <p className="text-[22px] font-semibold text-orange-500">৳2600</p>
//             <div className="flex rounded-full items-center justify-center w-[80px] h-[24px] gap-[10px] bg-green-200 ">
//               <p className="text-base font-medium text-green-500">10% OFF</p>
//             </div>
//             <p className="text-base font-semibold text-white-700 line-through">
//               ৳2800
//             </p>
//           </div>
//         </div>
//         {/* Feature list */}
//         <ul className="text-[22px] font-normal text-gray-500">
//           {featureDetails.map((feature, index) => (
//             <li
//               key={feature}
//               className={`flex items-center px-[21px] py-[26px] ${
//                 index === 0
//                   ? "border-y border-white-700"
//                   : index === features.length - 1
//                   ? ""
//                   : "border-b border-white-700"
//               }`}
//             >
//               {feature}
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Right column */}
//       <div className="w-[436px]   pt-[34px] flex flex-col border-r border-white-700">
//         <div className="px-[20px]">
//           <div className="flex  items-center justify-between bg-white-400  h-12 rounded-full ">
//             <Input
//               placeholder="Search your favorite accessories"
//               className="h-full w-2/3   text-xs font-light text-gray-400  "
//             />
//             <button className="h-9 w-9 mr-3 flex   items-center justify-center rounded-full  bg-orange-500">
//               <div className="h-4 w-4 relative  ">
//                 <Image fill src="/search.svg" alt="search" />
//               </div>
//             </button>
//           </div>
//         </div>
//         {/* Feature list */}
//         <ul className="text-[22px] font-normal text-gray-500 mt-[400px]">
//           {Array.from({ length: 7 }).map((_, index) => (
//             <li
//               key={index}
//               className="flex items-center w-[437px] h-[76px] px-[21px] py-[26px] border-b border-white-700 first:border-y last:border-b-0"
//             >
             
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>