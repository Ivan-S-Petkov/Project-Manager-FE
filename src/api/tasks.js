import axios from "axios";

const API_URL = "http://localhost:8080/api/tasks";

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
