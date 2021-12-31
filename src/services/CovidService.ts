import axios, { AxiosResponse } from "axios";
import SummaryData from "@/types/SummaryData";

const apiClient = axios.create({
  baseURL: "https://api.covid19api.com",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getSummary(): Promise<AxiosResponse<SummaryData>> {
    return apiClient.get("/summary");
  },
};
