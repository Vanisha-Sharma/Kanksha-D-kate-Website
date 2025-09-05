"use client";

import { useEffect, useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, User } from "lucide-react";
import api from "@/lib/api";

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
  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});
  const [showToggle, setShowToggle] = useState<{ [key: string]: boolean }>({});

  const contentRefs = useRef<{ [key: string]: HTMLParagraphElement | null }>({});

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await api.getArticles();
        if (res.success) setArticles(res.data.articles);
        else console.error("Failed to fetch articles:", res.message);
      } catch (err) {
        console.error("Error fetching articles:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, []);

  useEffect(() => {
    // Check if content exceeds 3 lines to show Read More
    articles.forEach((article) => {
      const el = contentRefs.current[article._id];
      if (el) {
        const lineHeight = parseInt(getComputedStyle(el).lineHeight, 10) || 18;
        const maxHeight = lineHeight * 3; // 3 lines
        setShowToggle((prev) => ({
          ...prev,
          [article._id]: el.scrollHeight > maxHeight,
        }));
      }
    });
  }, [articles]);

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
            <p className="text-center text-gray-400">Coming Soon...</p>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => {
                const isExpanded = expanded[article._id];
                return (
                  <Card
                    key={article._id}
                    className="bg-stone-900/60 border border-stone-800 hover:border-stone-600 transition rounded-2xl overflow-hidden cursor-pointer"
                  >
                    {article.imageUrl && (
                      <img
                        src={`http://localhost:5001/api${article.imageUrl}`}
                        alt={article.title || "Article Image"}
                        className={`w-full object-cover transition-all duration-300 ${
                          isExpanded ? "h-auto" : "h-48"
                        }`}
                        loading="lazy"
                      />
                    )}

                    <CardHeader>
                      <CardTitle className="line-clamp-2 text-lg font-bold text-stone-100">
                        {article.title || "Untitled"}
                      </CardTitle>
                    </CardHeader>

                    <CardContent
                      className={`transition-all duration-300 overflow-hidden`}
                      onClick={() => toggleExpand(article._id)}
                    >
                      <div className="flex items-center gap-4 text-sm text-stone-400 mb-3">
                        <span className="flex items-center gap-1">
                          <User size={14} /> {article.author || "Unknown Author"}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />{" "}
                          {article.createdAt
                            ? new Date(article.createdAt).toDateString()
                            : "Unknown Date"}
                        </span>
                      </div>

                      <p
                        ref={(el) => (contentRefs.current[article._id] = el)}
                        className="text-stone-300 mb-4 transition-all duration-300"
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: !isExpanded ? 3 : "unset",
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                        dangerouslySetInnerHTML={{ __html: article.content || "" }}
                      ></p>

                      {showToggle[article._id] && (
                        <p
                          className="text-blue-400 hover:text-blue-300 font-medium cursor-pointer"
                          onClick={() => toggleExpand(article._id)}
                        >
                          {isExpanded ? "Show Less" : "Read More"}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
