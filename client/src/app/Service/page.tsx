"use client"
import Image from "next/image"
import { useState } from "react"
export default function OurServices() {
  const [activeTab, setActiveTab] = useState("corporate")

  const corporateServices = [
    {
      id: "01",
      title: "Employee Commute Solutions",
      description:
        "Daily transportation for corporate staff with fixed routes, real-time tracking, and punctual pickups.",
      image: "/entpic3.png",
    },
    {
      id: "02",
      title: "Executive Chauffeur Service",
      description: "Suited, trained chauffeurs with luxury vehicles for directors, clients, and VIP executives.",
      image: "/entpic4.png",
    },
    {
      id: "03",
      title: "Event & Conference Travel",
      description:
        "Coordinated fleet for business meetings, offsites, seminars, and corporate gatherings—managed end-to-end.",
      image: "/entpic5.png",
    },
    {
      id: "04",
      title: "Airport Transfers",
      description:
        "Timely drop-offs and pickups for your team and guests from all major airports with live flight monitoring.",
      image: "/entpic6.png",
    },
    {
      id: "05",
      title: "Transport Desk Management",
      description:
        "On-demand ride management with 24×7 support, live dashboards, and centralized control from our app or portal.",
      image: "/entpic7.png",
    },
  ]

  return (
    <section className="py-16 bg-gray-50 w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Premium travel solutions tailored for businesses and individuals across India.
          </p>
          <div className="flex justify-center">
            <div className="inline-flex rounded-full bg-gray-200 p-1">
              <button
                onClick={() => setActiveTab("corporate")}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTab === "corporate"
                    ? "bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Corporate Solutions
              </button>
              <button
                onClick={() => setActiveTab("personal")}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTab === "personal"
                    ? "bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Personal / Retail Rides
              </button>
            </div>
          </div>
        </div>
        {activeTab === "corporate" && (
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {corporateServices.slice(0, 2).map((service, index) => (
                <div
                  key={service.id}
                  className={`relative h-80 rounded-2xl overflow-hidden group cursor-pointer ${
                    index === 0 ? "md:col-span-2" : "md:col-span-1"
                  }`}
                >
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 66vw"
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-white/90 text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {corporateServices.slice(2, 5).map((service) => (
                <div key={service.id} className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30"></div>
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-white/90 text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "personal" && (
          <div className="max-w-7xl mx-auto">
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">Personal / Retail Rides services coming soon...</p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
