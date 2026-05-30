import axios from "axios";
const uri =
  process.env.NODE_ENV === "production"
    ? "https://api.imramesh.in"
    : "http://localhost:5000";

export const api = axios.create({
  baseURL: uri,
  withCredentials: true,
});
