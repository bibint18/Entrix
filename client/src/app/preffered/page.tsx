import Image from "next/image";
export default function PreferredPartner() {
  return (
    <section className="py-16 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Why <span className="text-blue-900">ENTREX</span> Is the Preferred
            Partner
            <br />
            for Premium Tourist Travel in India
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Whether you are an international traveler, a corporate guest, or an
            expat exploring India, ENTREX delivers a seamless journey with
            professional chauffeurs, luxury vehicles, and end-to-end travel
            solutions.
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="relative w-full h-96 md:h-[500px] rounded-3xl overflow-hidden bg-gray-200">
              <Image
                src="/entpic9.png"
                alt="Family enjoying premium travel experience"
                fill
                className="object-cover"
              />

              <div className="absolute top-4 left-4 bg-white rounded-2xl p-4 shadow-lg w-44 sm:w-64">
                <div className="text-xs sm:text-sm font-medium text-gray-600 mb-1">
                  Tours Completed
                </div>
                <div className="flex items-baseline gap-1 sm:gap-2 mb-1">
                  <span className="text-xl sm:text-3xl font-bold text-gray-900">
                    27,632
                  </span>
                  <span className="text-[10px] sm:text-sm font-semibold text-green-500 bg-green-50 px-2 py-1 rounded">
                    +2.5% ↗
                  </span>
                </div>
                <div className="text-[9px] sm:text-xs text-gray-500">
                  Compared to (21340 last year)
                </div>
              </div>
              <div className="absolute sm:top-5 sm:right-8 top-70 right-4 bg-white rounded-2xl p-4 shadow-lg w-40 sm:w-48">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 sm:w-12 sm:h-12">
                    <svg
                      className="w-10 h-10 sm:w-12 sm:h-12 transform -rotate-90"
                      viewBox="0 0 36 36"
                    >
                      <path
                        className="text-gray-200"
                        stroke="currentColor"
                        strokeWidth="3"
                        fill="transparent"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-teal-500"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeDasharray="68, 100"
                        strokeLinecap="round"
                        fill="transparent"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="text-lg sm:text-2xl font-bold text-gray-900">
                      68%
                    </div>
                    <div className="text-[9px] sm:text-xs text-gray-500">
                      Hit Rate this year
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
