import axios from "axios";
import { API_ENDPOINT } from "../enviroments";

const API_URL = API_ENDPOINT + `api/statistics`;

export function getAllStatistics() {
  return axios.get(API_URL);
}
