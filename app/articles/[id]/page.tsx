"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import api from "@/lib/api";

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
      if (res.success && res.data?.article) setArticle(res.data.article);
      else console.error("Failed to fetch article:", res.message);
      setLoading(false);
    };
    fetchArticle();
  }, [articleId]);

  if (loading) return <p className="text-center mt-20">Loading...</p>;
  if (!article) return <p className="text-center mt-20">Article not found.</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      {article.imageUrl && (
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full rounded-lg mb-6"
        />
      )}
      <h1 className="text-3xl font-bold mb-2">{article.title}</h1>
      <p className="text-gray-500">
        By {article.author} • {new Date(article.createdAt).toDateString()}
      </p>
      <div
        className="mt-6 prose"
        dangerouslySetInnerHTML={{ __html: article.content }}
      ></div>
    </div>
  );
};

export default ArticleDetail;
