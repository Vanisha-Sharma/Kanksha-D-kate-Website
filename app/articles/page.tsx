"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, User } from "lucide-react";
import api from "@/lib/api";
import Link from "next/link";

interface Article {
  _id: string;
  title: string;
  content: string;
  imageUrl?: string;
  author: string;
  createdAt: string;
}

export default function BlogsPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await api.getArticles();
        if (res.success) setArticles(res.data.articles);
      } catch (err) {
        console.error("Error fetching articles:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 px-4 bg-gradient-to-br from-stone-900 via-gray-900 to-black">
        <div className="relative z-10 w-full max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-stone-300 via-gray-300 to-stone-200 bg-clip-text text-transparent">
            THE LOTUS LIFE
          </h1>
          <p className="text-lg text-gray-300">
            Insights to nourish your mind, life and potential
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-stone-400 to-gray-400 bg-clip-text text-transparent">
            Latest Articles
          </h2>

          {loading ? (
            <p className="text-center text-gray-400">Loading...</p>
          ) : articles.length === 0 ? (
            <p className="text-center text-gray-400">Coming Soon...</p>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => (
                <Card
                  key={article._id}
                  className="bg-stone-900/60 border border-stone-800 hover:border-stone-600 transition rounded-2xl overflow-hidden"
                >
                  {article.imageUrl && (
                    <img
                      src={`http://localhost:5001/api${article.imageUrl}`}
                      alt={article.title}
                      className="w-full h-48 object-cover"
                      loading="lazy"
                    />
                  )}

                  <CardHeader>
                    <CardTitle className="line-clamp-2 text-lg font-bold text-stone-100">
                      {article.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <div className="flex items-center gap-4 text-sm text-stone-400 mb-3">
                      <span className="flex items-center gap-1">
                        <User size={14} /> {article.author || "Unknown"}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={14} /> {formatDate(article.createdAt)}
                      </span>
                    </div>

                    <p
                      className="text-stone-300 mb-4 line-clamp-3"
                      dangerouslySetInnerHTML={{
                        __html: article.content || "",
                      }}
                    />

                    <Link
                      href={`/articles/${article._id}`}
                      className="text-blue-400 hover:text-blue-300 font-medium"
                    >
                      Read More →
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
