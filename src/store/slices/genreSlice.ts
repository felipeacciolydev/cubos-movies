import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Genre } from "@/types/types";

const API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";
const BASE_LANG = "pt-BR";

// Thunk para buscar gêneros
export const fetchGenres = createAsyncThunk(
  "genres/fetchGenres",
  async (): Promise<Genre[]> => {
    const response = await axios.get(`${BASE_URL}/genre/movie/list`, {
      params: { api_key: API_KEY, language: BASE_LANG },
    });
    return response.data.genres;
  }
);

// Slice para gerenciar gêneros
const genreSlice = createSlice({
  name: "genres",
  initialState: {
    genres: [] as Genre[],
    loading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGenres.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchGenres.fulfilled, (state, action) => {
        state.loading = false;
        state.genres = action.payload;
      })
      .addCase(fetchGenres.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || null;
      });
  },
});

export default genreSlice.reducer;
