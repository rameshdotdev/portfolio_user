import axios from "axios";
const uri =
  process.env.NODE_ENV === "production" ? "/api" : "http://localhost:5000/api";

export const api = axios.create({
  baseURL: uri,
  withCredentials: true,
});

// lib/api.ts
export async function fetchApi<T>(
  endpoint: string,
  options?: RequestInit & {
    next?: {
      revalidate?: number;
      tags?: string[];
    };
  },
): Promise<T> {
  const res = await fetch(`${uri}${endpoint}`, {
    credentials: "include",
    ...options,
  });

  if (!res.ok) {
    throw new Error(`API Error: ${res.status}`);
  }

  return res.json();
}
