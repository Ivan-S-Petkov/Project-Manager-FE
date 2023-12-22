import axios from "axios";

const API_URL = "http://localhost:8080/api/statistics";

export function getAllStatistics() {
  return axios.get(API_URL);
}
