import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

//-------------------------------------------------------------------

export const fetchCards = (page) => API.get(`/cards?page=${page}`);
export const fetchCard = (id) => API.get(`/cards/${id}`);
export const fetchCardsBySearch = (searchQuery) =>
  API.get(`/cards/search?searchQuery=${searchQuery.search || "none"}`);

//-------------------------------------------------------------------

export const createCard = (newCard) => API.post("/cards", newCard);
export const deleteCard = (id) => API.delete(`/cards/${id}`);
export const updateCard = (id, updatedCard) =>
  API.patch(`/cards/${id}`, updatedCard);

//-------------------------------------------------------------------

export const likeCard = (id) => API.patch(`/cards/${id}/likeCard`);

//-------------------------------------------------------------------

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
