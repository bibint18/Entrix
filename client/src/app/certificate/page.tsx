import Image from "next/image"

export default function OurCertifications() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="text-center lg:text-left">
              <div className="mb-6 flex justify-center lg:justify-start">
                <Image
                  src="/entpic11.png"
                  alt="IATO Indian Association of Tour Operators"
                  width={200}
                  height={120}
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Affiliations: IATO - Indian Association of Tour Operators
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We offer GPS-enabled rides so you—and your loved ones—can track your journey with full transparency.
              </p>
            </div>
            <div className="relative flex justify-center items-center">
              <div className="relative">
                <Image
                  src="/entpic10.png"
                  alt="Laurel Wreath Decoration"
                  width={300}
                  height={300}
                  className="object-contain"
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center -mt-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                      Our
                      <br />
                      Certifications
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center lg:text-right">
              <div className="mb-6 flex justify-center lg:justify-end">
                <Image
                  src="/entpic12.png"
                  alt="IATO Indian Association of Tour Operators"
                  width={200}
                  height={120}
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Affiliations: IATO - Indian Association of Tour Operators
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We offer GPS-enabled rides so you—and your loved ones—can track your journey with full transparency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
