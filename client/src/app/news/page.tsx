import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function NewsUpdates() {
  const articles = [
    {
      id: 1,
      title: "Surviving through tough times as a first time SaaS...",
      description:
        "Self-service data analytics software that lets you create visually appealing data visualizations and insightful dashboards in minutes.",
      category: "BUSINESS",
      categoryColor: "bg-orange-100 text-orange-800",
      date: "Oct 3",
      readTime: "7 min read",
      image: "/entpic13.png",
    },
    {
      id: 2,
      title: "SaaS customer development and no-code prototypes",
      description:
        "Self-service data analytics software that lets you create visually appealing data visualizations and insightful dashboards in minutes.",
      category: "MARKETING",
      categoryColor: "bg-teal-100 text-teal-800",
      date: "Oct 3",
      readTime: "7 min read",
      image: "/entpic14.png",
    },
    {
      id: 3,
      title: "Highnote Emerges from Stealth with $54 Million in ...",
      description:
        "Self-service data analytics software that lets you create visually appealing data visualizations and insightful dashboards in minutes.",
      category: "ANALYTICS",
      categoryColor: "bg-green-100 text-green-800",
      date: "Oct 3",
      readTime: "7 min read",
      image: "/entpic15.png",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">News & Updates</h2>
        </div>
        <div className="max-w-7xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="relative h-48 bg-gray-200">
                  <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{article.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{article.description}</p>
                  <div className="flex items-center justify-between">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${article.categoryColor}`}
                    >
                      {article.category}
                    </span>
                    <div className="text-xs text-gray-500">
                      {article.date} • {article.readTime}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="text-center">
          <Button variant="ghost" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 font-medium">
            View more articles
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
