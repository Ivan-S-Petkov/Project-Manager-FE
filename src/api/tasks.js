import axios from "axios";
import { API_ENDPOINT } from "../enviroments";

const API_URL = API_ENDPOINT + `api/tasks`;

export function getAllTasks() {
  return axios.get(API_URL);
}

export function getTasksByEmployee(id) {
  return axios.get(API_URL + "?employee=" + id);
}

export function getTasksByProject(id) {
  return axios.get(API_URL + "?project=" + id);
}

export function createTask(data) {
  return axios.post(API_URL, data);
}

export function createTasks(data) {
  return axios.post(API_URL + "/upload", {
    data,
  });
}

export function deleteTask(id) {
  return axios.delete(API_URL + "/" + id);
}
