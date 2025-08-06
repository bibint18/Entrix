
"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const Navbar = ({ onBookRideClick }: { onBookRideClick?: () => void }) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [hoverMenu, setHoverMenu] = useState<string | null>(null);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const navItems = [
    { label: "About Us", path: "/about", subItems: [] },
    { label: "Bookings", path: "/myBookings", subItems: [] },
    {
      label: "Services",
      path: "/services",
      subItems: [
        {
          category: "Corporate Mobility Solutions",
          items: [
            { label: "Employee Transportation", path: "/services/employee-transportation" },
            { label: "Employee Trips", path: "/services/employee-trips" },
            { label: "Executive Leasing", path: "/services/executive-leasing" },
            { label: "Roster Planning & Routing", path: "/services/roster-planning" },
            { label: "Management Reporting", path: "/services/management-reporting" },
            { label: "Systemized Billing", path: "/services/systemized-billing" },
            { label: "Transport Desk & Ticketing", path: "/services/transport-desk" },
          ],
        },
        {
          category: "Event & Custom Travel",
          items: [
            { label: "Events & Seminars", path: "/services/events-seminars" },
            { label: "Elite Weddings", path: "/services/elite-weddings" },
            { label: "Family Events & Holidays", path: "/services/family-events" },
            { label: "Customized Tours", path: "/services/customized-tours" },
          ],
        },
        {
          category: "Tour & Rental Services",
          items: [
            { label: "Pilgrim Tours", path: "/services/pilgrim-tours" },
            { label: "Package Tours", path: "/services/package-tours" },
            { label: "Premium Rent-a-Cab", path: "/services/premium-rent-a-cab" },
            { label: "Ticketing", path: "/services/ticketing" },
          ],
        },
      ],
    },
    { label: "Tour Packages", path: "/tour-packages", subItems: [] },
    { label: "Luxury Car Rentals", path: "/luxury-car-rentals", subItems: [] },
    { label: "Clients", path: "/clients", subItems: [] },
    { label: "Contact Us", path: "/contact", subItems: [] },
  ];

  return (
    <nav className={`relative z-10 ${isHomePage ? "bg-transparent" : "bg-white shadow-md"}`}>
      <div className="flex items-center justify-between py-4 px-4 max-w-7xl mx-auto">
        <div className="flex items-center">
          <Link href="/">
            <div className="relative w-30 h-10 sm:w-56 sm:h-16 md:w-[336px] md:h-[96px]">
              <Image
                src="/logo.svg"
                alt="Entrex Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-8 relative">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setHoverMenu(item.label)}
              onMouseLeave={() => setHoverMenu(null)}
            >
              <Link
                href={item.path}
                className={`${
                  isHomePage ? "text-white hover:text-orange-300" : "text-gray-900 hover:text-orange-500"
                } transition-colors whitespace-nowrap font-medium`}
              >
                {item.label}
              </Link>
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
                              <Link
                                href={subItem.path}
                                className="text-gray-600 hover:text-orange-500 transition-colors"
                              >
                                {subItem.label}
                              </Link>
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
          <button
            className="text-sm bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full font-medium"
            onClick={onBookRideClick}
          >
            Book Ride
          </button>
          <button
            onClick={() => setMobileNavOpen((o) => !o)}
            className={`p-2 rounded-md border ${
              isHomePage ? "border-white/50 backdrop-blur-sm" : "border-gray-300 bg-white/50"
            }`}
          >
            {mobileNavOpen ? (
              <X className={`w-5 h-5 ${isHomePage ? "text-white" : "text-gray-900"}`} />
            ) : (
              <Menu className={`w-5 h-5 ${isHomePage ? "text-white" : "text-gray-900"}`} />
            )}
          </button>
        </div>
      </div>

      {mobileNavOpen && (
        <div className={`md:hidden mt-2 ${isHomePage ? "bg-black/60 backdrop-blur-sm" : "bg-white"} rounded-lg p-4 mx-4 shadow-md`}>
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.path}
                className={`${
                  isHomePage ? "text-white hover:text-orange-300" : "text-gray-900 hover:text-orange-500"
                } transition-colors block font-medium`}
                onClick={() => setMobileNavOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;