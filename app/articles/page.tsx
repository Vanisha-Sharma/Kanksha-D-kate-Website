"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, User } from "lucide-react";
import axios from "axios";

interface Article {
  _id: string;
  title: string;
  content: string;
  imageUrl: string;
  author: string;
  createdAt: string;
}

export default function BlogsPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/articles")
      .then((res) => setArticles(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const toggleExpand = (id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-stone-900 via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/transformation-events.jpg?height=800&width=1920')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 w-full max-w-3xl mx-auto text-center px-2 sm:px-4">
          <h1 className="text-4xl sm:text-6xl md:text-7xl mb-6 sm:mb-8 bg-gradient-to-r from-stone-300 via-gray-300 to-stone-200 bg-clip-text text-transparent leading-tight tracking-tight break-words">
            THE LOTUS LIFE
          </h1>
          <p className="text-sm sm:text-base md:text-xl text-gray-300 leading-relaxed max-w-xl mx-auto px-2 sm:px-0 break-words">
            Insights to nourish your mind, life and potential
            <br />
            micro-evolution, straight from Kanksha&apos;s journal
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-stone-400 to-gray-400 bg-clip-text text-transparent">
            Latest Articles
          </h2>

          {loading ? (
            <p className="text-center text-gray-400">Loading articles...</p>
          ) : articles.length === 0 ? (
            <p className="text-center text-gray-400">No articles yet.</p>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => (
                <Card
                  key={article._id}
                  className="bg-stone-900/60 border border-stone-800 hover:border-stone-600 transition rounded-2xl overflow-hidden"
                >
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <CardTitle className="line-clamp-2 text-lg font-bold text-stone-100">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-sm text-stone-400 mb-3">
                      <span className="flex items-center gap-1">
                        <User size={14} /> {article.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />{" "}
                        {new Date(article.createdAt).toDateString()}
                      </span>
                    </div>

                    <p
                      className={`text-stone-300 mb-4 ${
                        expanded[article._id] ? "" : "line-clamp-3"
                      }`}
                      dangerouslySetInnerHTML={{ __html: article.content }}
                    ></p>

                    <button
                      onClick={() => toggleExpand(article._id)}
                      className="text-blue-400 hover:text-blue-300 font-medium"
                    >
                      {expanded[article._id] ? "Show Less" : "Read More"}
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Blog Disclaimer */}
      <section className="py-12 px-4 bg-gradient-to-r from-stone-900/20 to-gray-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-stone-900/20 to-gray-900/20 rounded-lg p-6">
            <h5 className="text-sm font-bold text-stone-400 mb-2">
              CONTENT DISCLAIMER
            </h5>
            <p className="text-sm text-gray-300 italic leading-relaxed">
              The content shared is purely for contemplative and educational
              purposes. They are not intended as direct medical advice,
              inductions, neuro-programming, or installation tools.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
