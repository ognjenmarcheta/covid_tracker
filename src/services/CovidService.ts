import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.covid19api.com",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getSummary() {
    return apiClient.get("/summary");
  },
};
