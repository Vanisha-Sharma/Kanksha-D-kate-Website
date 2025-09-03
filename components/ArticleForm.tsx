"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });
import "react-quill-new/dist/quill.snow.css";

export interface Article {
  _id?: string;
  title: string;
  author: string;
  content: string;
  imageUrl?: string;
  createdAt?: string;
}

interface ArticleFormProps {
  onSuccess?: () => void;
  article?: Article | null;
  onCancel?: () => void;
}

const ArticleForm: React.FC<ArticleFormProps> = ({ onSuccess, article, onCancel }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [createdAt, setCreatedAt] = useState("");
  const [preview, setPreview] = useState<string | null>(null);

  // Populate form if editing
  useEffect(() => {
    if (article) {
      setTitle(article.title);
      setAuthor(article.author);
      setContent(article.content);
      setCreatedAt(
        article.createdAt
          ? new Date(article.createdAt).toISOString().slice(0, 10)
          : ""
      );
      setImage(null);
      setPreview(article.imageUrl || null);
    } else {
      setTitle("");
      setAuthor("");
      setContent("");
      setCreatedAt("");
      setImage(null);
      setPreview(null);
    }
  }, [article]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setImage(file);
    if (file) setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const formData = new FormData();
      formData.append("title", title);
      formData.append("author", author);
      formData.append("content", content);
      formData.append(
        "createdAt",
        createdAt ? new Date(createdAt).toISOString() : new Date().toISOString()
      );

      if (image) formData.append("image", image);

      if (article?._id) {
        // Update existing article
        await axios.put(`http://localhost:5000/api/articles/${article._id}`, formData, {
          headers: { Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" },
        });
      } else {
        // Create new article
        await axios.post("http://localhost:5000/api/articles", formData, {
          headers: { Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" },
        });
      }

      if (onSuccess) onSuccess();
    } catch (err) {
      console.error("Error saving article:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 border p-4 rounded">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 border rounded bg-black text-white"
        required
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className="w-full p-2 border rounded bg-black text-white"
        required
      />
      <ReactQuill value={content} onChange={setContent} />
      <input
        type="date"
        value={createdAt}
        onChange={(e) => setCreatedAt(e.target.value)}
        className="w-full p-2 border rounded bg-black text-white"
        required
      />
      <input
        type="file"
        onChange={handleImageChange}
        className="w-full p-2"
      />
      {preview && (
        <div className="mt-2">
          <p className="text-gray-300 mb-1">Image Preview:</p>
          <img src={preview} alt="Preview" className="w-48 h-48 object-cover rounded" />
        </div>
      )}
      <div className="flex items-center gap-2 mt-2">
        <button
          type="submit"
          className="px-4 py-2 bg-stone-700 text-white rounded hover:bg-stone-600"
        >
          {article?._id ? "Update Article" : "Add Article"}
        </button>
        {article && onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-500"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default ArticleForm;
