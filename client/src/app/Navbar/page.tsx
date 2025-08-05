// "use client";
// import { useState } from "react";
// import { Car, Menu, X } from "lucide-react";

// const Navbar = () => {
//   const [mobileNavOpen, setMobileNavOpen] = useState(false);
//   const [hoverMenu, setHoverMenu] = useState<string | null>(null);

//   const navItems = [
//     {
//       label: "About Us",
//       subItems: [],
//     },
//     {
//       label: "Services",
//       subItems: [
//         { category: "Corporate Mobility Solutions", items: ["Employee Transportation", "Employee Trips", "Executive Leasing", "Roster Planning & Routing", "Management Reporting", "Systemized Billing", "Transport Desk & Ticketing"] },
//         { category: "Event & Custom Travel", items: ["Events & Seminars", "Elite Weddings", "Family Events & Holidays", "Customized Tours"] },
//         { category: "Tour & Rental Services", items: ["Pilgrim Tours", "Package Tours", "Premium Rent-a-Cab", "Ticketing"] },
//       ],
//     },
//     {
//       label: "Tour Packages",
//       subItems: [],
//     },
//     {
//       label: "Luxury Car Rentals",
//       subItems: [],
//     },
//     {
//       label: "Clients",
//       subItems: [],
//     },
//     {
//       label: "Contact Us",
//       subItems: [],
//     },
//   ];

//   return (
//     <nav className="relative z-10">
//       <div className="flex items-center justify-between py-4 px-4 max-w-7xl mx-auto">
//         <div className="flex items-center">
//           <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mr-2">
//             <Car className="w-4 h-4 text-white" />
//           </div>
//           <span className="text-2xl font-bold text-white">Entrex</span>
//         </div>

//         <div className="hidden md:flex items-center space-x-8 relative">
//           {navItems.map((item) => (
//             <div
//               key={item.label}
//               className="relative"
//               onMouseEnter={() => setHoverMenu(item.label)}
//               onMouseLeave={() => setHoverMenu(null)}
//             >
//               <a
//                 href="#"
//                 className="text-white hover:text-red-300 transition-colors whitespace-nowrap font-medium"
//               >
//                 {item.label}
//               </a>
//               {item.subItems.length > 0 && hoverMenu === item.label && (
//                 <div
//                   className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg p-4 w-80 z-20"
//                   onMouseEnter={() => setHoverMenu(item.label)}
//                   onMouseLeave={() => setHoverMenu(null)}
//                 >
//                   <div className="grid grid-cols-3 gap-6">
//                     {item.subItems.map((category, index) => (
//                       <div key={index}>
//                         <h3 className="text-lg font-semibold text-gray-800 mb-2">
//                           {category.category}
//                         </h3>
//                         <ul className="text-gray-600 space-y-1">
//                           {category.items.map((subItem, subIndex) => (
//                             <li key={subIndex} className="text-sm">
//                               {subItem}
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         <div className="flex items-center gap-4 md:hidden">
//           <button className="text-sm bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full font-medium">
//             Book Ride
//           </button>
//           <button
//             onClick={() => setMobileNavOpen((o) => !o)}
//             className="p-2 rounded-md border border-white/50 backdrop-blur-sm"
//           >
//             {mobileNavOpen ? (
//               <X className="w-5 h-5 text-white" />
//             ) : (
//               <Menu className="w-5 h-5 text-white" />
//             )}
//           </button>
//         </div>
//       </div>

//       {mobileNavOpen && (
//         <div className="md:hidden mt-2 bg-black/60 backdrop-blur-sm rounded-lg p-4 mx-4">
//           <div className="flex flex-col gap-3">
//             {navItems.map((item) => (
//               <a
//                 key={item.label}
//                 href="#"
//                 className="text-white hover:text-red-300 transition-colors block font-medium"
//               >
//                 {item.label}
//               </a>
//             ))}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;





"use client";
import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Navbar = ({onBookRideClick} : {onBookRideClick?: () => void}) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [hoverMenu, setHoverMenu] = useState<string | null>(null);

  const navItems = [
    {
      label: "About Us",
      subItems: [],
    },
    {
      label: "Services",
      subItems: [
        {
          category: "Corporate Mobility Solutions",
          items: [
            "Employee Transportation",
            "Employee Trips",
            "Executive Leasing",
            "Roster Planning & Routing",
            "Management Reporting",
            "Systemized Billing",
            "Transport Desk & Ticketing",
          ],
        },
        {
          category: "Event & Custom Travel",
          items: [
            "Events & Seminars",
            "Elite Weddings",
            "Family Events & Holidays",
            "Customized Tours",
          ],
        },
        {
          category: "Tour & Rental Services",
          items: [
            "Pilgrim Tours",
            "Package Tours",
            "Premium Rent-a-Cab",
            "Ticketing",
          ],
        },
      ],
    },
    {
      label: "Tour Packages",
      subItems: [],
    },
    {
      label: "Luxury Car Rentals",
      subItems: [],
    },
    {
      label: "Clients",
      subItems: [],
    },
    {
      label: "Contact Us",
      subItems: [],
    },
  ];

  return (
    <nav className="relative z-10">
      <div className="flex items-center justify-between py-4 px-4 max-w-7xl mx-auto">
        <div className="flex items-center">
          <div className="relative w-30 h-10 sm:w-56 sm:h-16 md:w-[336px] md:h-[96px]">
            <Image
              src="/logo.svg"
              alt="Entrex Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-8 relative">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setHoverMenu(item.label)}
              onMouseLeave={() => setHoverMenu(null)}
            >
              <a
                href="#"
                className="text-white hover:text-red-300 transition-colors whitespace-nowrap font-medium"
              >
                {item.label}
              </a>
              {item.subItems.length > 0 && hoverMenu === item.label && (
                <div
                  className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg p-4 w-80 z-20"
                  onMouseEnter={() => setHoverMenu(item.label)}
                  onMouseLeave={() => setHoverMenu(null)}
                >
                  <div className="grid grid-cols-3 gap-6">
                    {item.subItems.map((category, index) => (
                      <div key={index}>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                          {category.category}
                        </h3>
                        <ul className="text-gray-600 space-y-1">
                          {category.items.map((subItem, subIndex) => (
                            <li key={subIndex} className="text-sm">
                              {subItem}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <button className="text-sm bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full font-medium" onClick={onBookRideClick}>
            Book Ride
          </button>
          <button
            onClick={() => setMobileNavOpen((o) => !o)}
            className="p-2 rounded-md border border-white/50 backdrop-blur-sm"
          >
            {mobileNavOpen ? (
              <X className="w-5 h-5 text-white" />
            ) : (
              <Menu className="w-5 h-5 text-white" />
            )}
          </button>
        </div>
      </div>

      {mobileNavOpen && (
        <div className="md:hidden mt-2 bg-black/60 backdrop-blur-sm rounded-lg p-4 mx-4">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href="#"
                className="text-white hover:text-red-300 transition-colors block font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
