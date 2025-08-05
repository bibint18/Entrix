import Image from "next/image"
import { Shield, DollarSign, Car, Clock, MapPin, Headphones } from "lucide-react"

export default function WhyEntrex() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why <span className="text-red-500">ENTREX</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Trusted by hundreds of travelers and corporates across India for a premium ride experience.
          </p>
        </div>
        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Chauffeurs</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      All our drivers are handpicked, background-verified, professionally dressed, and trained for
                      top-tier customer service.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Car className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Well-Maintained Vehicles</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Our fleet is serviced regularly, sanitized daily, and equipped with modern amenities for a smooth
                      and safe ride.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-Time Tracking</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      We offer GPS-enabled rides so you—and your loved ones—can track your journey with full
                      transparency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="relative">
                <Image
                  src="/entpic2.png"
                  alt="Entrex Premium Vehicle"
                  width={400}
                  height={250}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Transparent Pricing</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      No hidden charges. Transparent fare structure with real-time billing through our app.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Punctual & Reliable</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Time is valuable. Our chauffeurs arrive ahead of schedule and follow optimized routes for timely
                      arrivals.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Headphones className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">24x7 Dedicated Support</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Our operations team is available around the clock to assist with bookings, changes, or
                      emergencies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
