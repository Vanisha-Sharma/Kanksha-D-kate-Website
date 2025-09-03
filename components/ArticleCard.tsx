"use client";
import React from "react";
import Link from "next/link";

interface ArticleCardProps {
  _id: string;
  title: string;
  imageUrl: string;
  author: string;
  createdAt: string;
  content: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ _id, title, imageUrl, author, createdAt, content }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-56 object-cover rounded-t-lg" />
      <div className="p-4">
        <p className="text-gray-500 text-sm">By {author} • {new Date(createdAt).toDateString()}</p>
        <h2 className="text-xl font-semibold mt-2">{title}</h2>
        <p className="text-gray-700 mt-2 line-clamp-3" dangerouslySetInnerHTML={{ __html: content }}></p>
        <Link href={`/articles/${_id}`} className="text-blue-600 font-medium mt-3 inline-block">
          Read more →
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
