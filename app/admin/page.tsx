"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function AdminPage() {
  const router = useRouter();
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      // no token, go to login immediately
      router.replace("/admin/login");
      return;
    }

    // optional: verify token with backend
    axios
      .get("http://localhost:5000/api/auth/verify", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        // token valid, go to articles
        router.replace("/admin/articles");
      })
      .catch(() => {
        // invalid token, remove it and go to login
        localStorage.removeItem("token");
        router.replace("/admin/login");
      })
      .finally(() => setCheckingAuth(false));
  }, [router]);

  if (checkingAuth) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-white">
        <p>Checking authentication...</p>
      </div>
    );
  }

  return null;
}
