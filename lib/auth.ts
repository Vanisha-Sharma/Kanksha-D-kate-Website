import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET || "changeme";

export function decodeToken(token: string) {
  try {
    return jwt.verify(token, SECRET);
  } catch {
    return null;
  }
}

export function isAuthenticated(): boolean {
  if (typeof window === "undefined") return false;
  const token = localStorage.getItem("token");
  if (!token) return false;

  return !!decodeToken(token);
}
