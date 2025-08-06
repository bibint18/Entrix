"use client";
import { useState } from "react";
import Navbar from "../Navbar/page"; 
import Footer from "../footer/page"; 
import { myBookings } from "@/services/BookingService";

export default function BookingHistory() {
  const [email, setEmail] = useState("");
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      const response = await myBookings(email);
      setBookings(response.data || []); // 
    } catch (err) {
      setError("Failed to fetch booking history. Please try again.");
      console.error("Error fetching bookings:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
          Your Booking History
        </h1>
        <div className="max-w-md mx-auto bg-gray-50 p-6 rounded-lg shadow-md mb-12">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Enter Your Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="you@example.com"
              required
            />
          </div>
          <button
            onClick={handleSubmit}
            disabled={isLoading || !email}
            className={`w-full py-2 px-4 rounded-md text-white font-medium transition-colors ${
              isLoading || !email
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
            }`}
          >
            {isLoading ? "Loading..." : "View Booking History"}
          </button>
          {error && <p className="mt-4 text-sm text-red-600 text-center">{error}</p>}
        </div>

        {bookings.length > 0 && (
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Recent Bookings</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-orange-100">
                    <th className="py-3 px-4 text-sm font-semibold text-gray-900">Booking ID</th>
                    <th className="py-3 px-4 text-sm font-semibold text-gray-900">Date</th>
                    <th className="py-3 px-4 text-sm font-semibold text-gray-900">Time</th>
                    <th className="py-3 px-4 text-sm font-semibold text-gray-900">Name</th>
                    <th className="py-3 px-4 text-sm font-semibold text-gray-900">Passengers</th>
                    <th className="py-3 px-4 text-sm font-semibold text-gray-900">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((booking: any) => (
                    <tr key={booking._id} className="border-b border-gray-200 hover:bg-orange-50">
                      <td className="py-3 px-4 text-sm text-gray-700">{booking._id}</td>
                      <td className="py-3 px-4 text-sm text-gray-700">{booking.date}</td>
                      <td className="py-3 px-4 text-sm text-gray-700">{booking.time}</td>
                      <td className="py-3 px-4 text-sm text-gray-700">{booking.name}</td>
                      <td className="py-3 px-4 text-sm text-gray-700">
                        {parseInt(booking.adults) + parseInt(booking.children)} ({booking.adults} Adult{parseInt(booking.adults) !== 1 ? 's' : ''}, {booking.children} Child{parseInt(booking.children) !== 1 ? 'ren' : ''})
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-700">
                        <span
                          className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                            booking.message.toLowerCase() === "completed"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {booking.message.charAt(0).toUpperCase() + booking.message.slice(1)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
        {bookings.length === 0 && !isLoading && email && (
          <p className="text-center text-gray-600">No bookings found for this email.</p>
        )}
      </main>
      <Footer />
    </div>
  );
}