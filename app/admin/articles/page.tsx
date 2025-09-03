"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import ArticleForm from "@/components/ArticleForm";

interface Article {
  _id: string;
  title: string;
  author: string;
  content: string;
  imageUrl?: string;
  createdAt: string;
}

const AdminArticles: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingArticle, setEditingArticle] = useState<Article | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) router.push("/login");
    else fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/articles");
      const sorted = res.data.sort(
        (a: Article, b: Article) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      setArticles(sorted);
    } catch (err) {
      console.error("Failed to fetch articles:", err);
    } finally {
      setLoading(false);
    }
  };

  const deleteArticle = async (id: string) => {
    if (!confirm("Are you sure?")) return;
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:5000/api/articles/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchArticles();
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  const startEdit = (article: Article) => {
    setEditingArticle(article);
    window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to form
  };

  const cancelEdit = () => {
    setEditingArticle(null);
  };

  if (loading) return <p className="text-center py-10">Loading...</p>;

  return (
    <div className="max-w-5xl mx-auto p-6">
      <ArticleForm
        onSuccess={() => {
          fetchArticles();
          setEditingArticle(null); // reset edit state
        }}
        article={editingArticle}
        onCancel={cancelEdit}
      />
      <h2 className="text-2xl font-bold mt-10 mb-4">Manage Articles</h2>
      <ul>
        {articles.map((a) => (
          <li
            key={a._id}
            className="flex justify-between items-center border-b py-2"
          >
            <div>
              <span className="font-semibold">{a.title}</span>{" "}
              <span className="text-gray-400 text-sm">
                ({new Date(a.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })})
              </span>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => startEdit(a)}
                className="text-blue-500 hover:underline"
              >
                Edit
              </button>
              <button
                onClick={() => deleteArticle(a._id)}
                className="text-red-600 hover:underline"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminArticles;
