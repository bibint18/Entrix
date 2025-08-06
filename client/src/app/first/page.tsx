"use client";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Shield, MapPin, Clock } from "lucide-react";
import BookingForm from "../BookingForm/page";
import Navbar from "../Navbar/page"; 
import { Car, X } from "lucide-react";
export default function Component() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="hidden md:block bg-white/95 backdrop-blur-sm border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-2 text-sm text-gray-600">
            <div>bookings@entrex.in</div>
            <div className="flex flex-wrap gap-4 text-xs">
              <span>+91 44 4953 0055</span>
              <span>+91 98400 27990</span>
              <span>+91 91767 81444</span>
            </div>
          </div>
        </div>
      </div>

      <section className="relative flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/entpic1.png"
            alt="Premium chauffeur service"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="max-w-7xl mx-auto px-4 w-full relative z-10">
          <Navbar onBookRideClick={ () => setShowForm(true)} />

          <div className="grid lg:grid-cols-2 gap-12 items-start py-16">
            <div className="text-white">
              <div className="flex items-center mb-6">
                <Car className="w-12 h-12 text-white mr-4" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-1 leading-tight">
                Premium Chauffeur
              </h1>
              <h1 className="text-2xl sm:text-4xl font-bold mb-6 leading-tight">
                Services for Every Journey
              </h1>
              <p className="text-lg sm:text-xl mb-8 text-white/90 max-w-lg">
                From corporate travel to airport transfers, ENTREX ensures a
                safe, punctual, and comfortable ride—every time.
              </p>
              <Button className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-6 py-3 rounded-full text-base font-semibold mb-8">
                Call Us Now
              </Button>
              <div className="grid grid-cols-3 gap-6 mt-6 max-w-md">
                <div className="text-center">
                  <Shield className="w-8 h-8 mx-auto mb-2 text-white" />
                  <div className="font-semibold">Verified</div>
                  <div className="text-sm text-white/80">Chauffeurs</div>
                </div>
                <div className="text-center">
                  <MapPin className="w-8 h-8 mx-auto mb-2 text-white" />
                  <div className="font-semibold">Real-time</div>
                  <div className="text-sm text-white/80">Tracking</div>
                </div>
                <div className="text-center">
                  <Clock className="w-8 h-8 mx-auto mb-2 text-white" />
                  <div className="font-semibold">24*7</div>
                  <div className="text-sm text-white/80">Support</div>
                </div>
              </div>
            </div>

            <div className="hidden md:flex justify-center">
              <div className="w-full max-w-sm">
                <div className="relative p-6 rounded-2xl shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 rounded-2xl bg-white/5 backdrop-blur-lg pointer-events-none" />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500 to-orange-400 opacity-60 mix-blend-overlay pointer-events-none" />
                  <div className="absolute inset-0 rounded-2xl border border-white/25 pointer-events-none" />
                  <div className="relative">
                    <h2 className="text-2xl font-bold text-white mb-4">
                      Book Your Ride Instantly
                    </h2>
                      <BookingForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showForm && (
        <div className="fixed inset-0 bg-black/50 overflow-y-auto flex items-center justify-center z-50 pt-60 px-4 py-8">
          <div className="relative w-full max-w-sm">
            <div className="absolute top-2 right-2 z-50">
              <button
                onClick={() => setShowForm(false)}
                className="p-2 rounded-full bg-white/20 text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="relative p-6 rounded-2xl shadow-2xl overflow-hidden">
              <div className="absolute inset-0 rounded-2xl bg-white/5 backdrop-blur-lg pointer-events-none" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500 to-orange-400 opacity-60 mix-blend-overlay pointer-events-none" />
              <div className="absolute inset-0 rounded-2xl border border-white/25 pointer-events-none" />
              <div className="relative">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Book Your Ride Instantly
                </h2>
                  <BookingForm />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}