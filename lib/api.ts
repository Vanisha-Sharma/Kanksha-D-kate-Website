interface ArticleData {
  title: string;
  content: string;
  author?: string;
  image?: File;
}

interface Article {
  _id: string;
  title: string;
  content: string;
  imageUrl?: string;
  author: string;
  createdAt: string;
}

interface SingleArticleResponse {
  article: Article;
}

// ✅ Two backend URLs
const API_ARTICLES = "http://localhost:5001/api";     // Articles server
const API_SUBSCRIBERS = "http://localhost:5000/api";  // Subscribers server

const api = {
  // ---------------- Subscribers ----------------
  subscribeEmail: async (email: string) => {
    try {
      const res = await fetch(`${API_SUBSCRIBERS}/subscribers`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to subscribe");
      return { success: true, data };
    } catch (err) {
      console.error("API subscribe error:", err);
      return { success: false, message: (err as Error).message };
    }
  },

  // ---------------- Articles ----------------
  createArticle: async (data: ArticleData) => {
    try {
      const token = localStorage.getItem("auth_token");
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("content", data.content);
      if (data.author) formData.append("author", data.author);
      if (data.image) formData.append("image", data.image);

      const res = await fetch(`${API_ARTICLES}/articles`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`, // do NOT set Content-Type when using FormData
        },
        body: formData,
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.error || result.message || "Failed to create article");

      // Backend automatically sends email to subscribers
      return { success: true, data: result.article };
    } catch (err) {
      console.error("API create article error:", err);
      return { success: false, message: (err as Error).message };
    }
  },

  getArticles: async () => {
    try {
      const res = await fetch(`${API_ARTICLES}/articles`);
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message || "Failed to fetch articles");
      return { success: true, data: { articles: (data.articles as Article[]) || [] } };
    } catch (err) {
      console.error("API fetch articles error:", err);
      return { success: false, message: (err as Error).message, data: { articles: [] } };
    }
  },

  getArticle: async (id: string) => {
    try {
      const res = await fetch(`${API_ARTICLES}/articles/${id}`);
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
