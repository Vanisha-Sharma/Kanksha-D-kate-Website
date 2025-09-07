"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import api from "@/lib/api";
import { Calendar } from "lucide-react";

interface Article {
  _id: string;
  title: string;
  content: string;
  imageUrl?: string;
  author: string;
  createdAt: string;
}

const ArticleDetail: React.FC = () => {
  const { id } = useParams();
  const articleId = Array.isArray(id) ? id[0] : id;
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      if (!articleId) return;
      const res = await api.getArticle(articleId);
      if (res.success && res.data?.article) {
        setArticle(res.data.article);
      } else {
        console.error("Failed to fetch article:", res.message);
      }
      setLoading(false);
    };
    fetchArticle();
  }, [articleId]);

  if (loading) return <p className="text-center mt-20">Loading...</p>;
  if (!article) return <p className="text-center mt-20">Article not found.</p>;

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="max-w-3xl mx-auto px-4 py-16">
        {article.imageUrl && (
          <img
            src={`http://localhost:5001/api${article.imageUrl}`}
            alt={article.title}
            className="w-full h-80 object-cover rounded-xl mb-8"
          />
        )}

        <h1 className="text-4xl font-bold mb-4">{article.title}</h1>

        <p className="text-gray-400 mb-6 flex items-center gap-6">
          <span>By {article.author}</span>
          <span className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {new Date(article.createdAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </p>

        <div
          className="prose prose-invert max-w-none mb-10"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* Back Button */}
        <Link
          href="/articles"
          className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition"
        >
          ← Back to Articles
        </Link>
      </section>
    </div>
  );
};

export default ArticleDetail;
