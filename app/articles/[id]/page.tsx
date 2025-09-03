"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";

interface Article {
  _id: string;
  title: string;
  content: string;
  imageUrl: string;
  author: string;
  createdAt: string;
}

const ArticleDetail: React.FC = () => {
  const { id } = useParams();
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:5000/api/articles/${id}`).then((res) => setArticle(res.data));
    }
  }, [id]);

  if (!article) return <p className="text-center mt-20">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <img src={article.imageUrl} alt={article.title} className="w-full rounded-lg mb-6" />
      <h1 className="text-3xl font-bold mb-2">{article.title}</h1>
      <p className="text-gray-500">By {article.author} • {new Date(article.createdAt).toDateString()}</p>
      <div className="mt-6 prose" dangerouslySetInnerHTML={{ __html: article.content }}></div>
    </div>
  );
};

export default ArticleDetail;
