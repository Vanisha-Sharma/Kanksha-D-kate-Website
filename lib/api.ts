interface ArticleData {
  title: string;
  content: string;
  author?: string;
  image?: File;
}

interface SingleArticleResponse {
  article: {
    _id: string;
    title: string;
    content: string;
    imageUrl?: string;
    author: string;
    createdAt: string;
  };
}

const api = {
  // Create article (admin)
  createArticle: async (data: FormData) => {
    try {
      const token = localStorage.getItem("auth_token");
      const res = await fetch("http://localhost:5001/api/articles", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`, // FormData => do NOT set Content-Type
        },
        body: data,
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.message || "Failed to create article");
      return result;
    } catch (err) {
      console.error("API request error:", err);
      throw err;
    }
  },

  // Fetch all articles (public)
  getArticles: async () => {
    try {
      const res = await fetch("http://localhost:5001/api/articles");
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message || "Failed to fetch articles");
      return { success: true, data: { articles: data.articles || [] } };
    } catch (err) {
      console.error("API fetch articles error:", err);
      return { success: false, message: (err as Error).message, data: { articles: [] } };
    }
  },

  // Fetch single article by ID (public)
  getArticle: async (id: string) => {
    try {
      const res = await fetch(`http://localhost:5001/api/articles/${id}`);
      const data: SingleArticleResponse = await res.json();
      if (!res.ok || !data.article) throw new Error((data as any).message || "Failed to fetch article");
      return { success: true, data };
    } catch (err) {
      console.error("API fetch article error:", err);
      return { success: false, message: (err as Error).message, data: null };
    }
  },
};

export default api;
