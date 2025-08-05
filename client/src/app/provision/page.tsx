import { Button } from "@/components/ui/button"
import {
  Droplets,
  Newspaper,
  FileText,
  Cookie,
  PenTool,
  Snowflake,
  Shield,
  Sparkles,
  Smartphone,
  MapPin,
  Umbrella,
  Flashlight,
  Heart,
} from "lucide-react"

export default function InCarProvisions() {
  const provisions = [
    {
      id: 1,
      name: "Water bottle",
      icon: Droplets,
      color: "text-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      id: 2,
      name: "Newspaper",
      icon: Newspaper,
      color: "text-gray-700",
      bgColor: "bg-gray-50",
    },
    {
      id: 3,
      name: "Tissue Paper pouch",
      icon: FileText,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      id: 4,
      name: "Cookies",
      icon: Cookie,
      color: "text-red-500",
      bgColor: "bg-red-50",
    },
    {
      id: 5,
      name: "Writing slip & Pen",
      icon: PenTool,
      color: "text-red-500",
      bgColor: "bg-red-50",
    },
    {
      id: 6,
      name: "Ice Box (Based on request)",
      icon: Snowflake,
      color: "text-red-500",
      bgColor: "bg-red-50",
    },
    {
      id: 7,
      name: "Fire Extinguisher Kit",
      icon: Shield,
      color: "text-gray-800",
      bgColor: "bg-gray-50",
    },
    {
      id: 8,
      name: "Perfume",
      icon: Sparkles,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      id: 9,
      name: "Hand-phone Charger",
      icon: Smartphone,
      color: "text-red-500",
      bgColor: "bg-red-50",
    },
    {
      id: 10,
      name: "GPS Tracking",
      icon: MapPin,
      color: "text-red-500",
      bgColor: "bg-red-50",
    },
    {
      id: 11,
      name: "Umbrella",
      icon: Umbrella,
      color: "text-red-500",
      bgColor: "bg-red-50",
    },
    {
      id: 12,
      name: "Torch Light",
      icon: Flashlight,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      id: 13,
      name: "First Aid Kit",
      icon: Heart,
      color: "text-red-500",
      bgColor: "bg-red-50",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">In-car Provisions</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Every ENTREX ride comes with thoughtful in-car provisions to ensure your comfort, safety, and satisfaction.
          </p>
        </div>
        <div className="max-w-6xl mx-auto mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {provisions.map((provision) => {
              const IconComponent = provision.icon
              return (
                <div
                  key={provision.id}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 flex flex-col items-center text-center"
                >
                  <div className={`w-16 h-16 ${provision.bgColor} rounded-full flex items-center justify-center mb-4`}>
                    <IconComponent className={`w-8 h-8 ${provision.color}`} />
                  </div>
                  <h3 className="text-sm font-medium text-gray-900 leading-tight">{provision.name}</h3>
                </div>
              )
            })}
          </div>
        </div>
        <div className="text-center">
          <Button className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold">
            Book Your Journey Now
          </Button>
        </div>
      </div>
    </section>
  )
}
