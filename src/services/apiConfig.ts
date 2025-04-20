import axios from "axios";

export const API_KEY = process.env.TMDB_API_KEY;
export const BASE_URL = "https://api.themoviedb.org/3";
export const BASE_LANG = "pt-BR";

export const apiClient = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: BASE_LANG,
  },
});
