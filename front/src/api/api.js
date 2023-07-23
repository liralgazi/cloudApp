import axios from "axios";

const api = axios.create({
  baseURL: "final-project-LB-142331911.eu-north-1.elb.amazonaws.com:3010",
  headers: {
    "Content-type": "application/json",
  },
});

export const getBooks = async () => await api.get("/books");
