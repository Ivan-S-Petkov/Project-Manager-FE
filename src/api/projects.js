import axios from "axios";

const API_URL = "http://localhost:8080/api/projects";

export function getAllProjects() {
  return axios.get(API_URL);
}

export function getProjectById(id) {
  return axios.get(API_URL + "/" + id);
}

export function getProjectsByTitle(title) {
  return axios.get(API_URL + "title=" + title);
}

export function createProject(name, description) {
  return axios.post(API_URL, {
    name,
    description,
  });
}

export function updateProject(id, name, description) {
  return axios.put(API_URL + "/" + id, {
    name,
    description,
  });
}

export function deleteProject(id) {
  return axios.delete(API_URL + "/" + id);
}

export function deleteAllProjects() {
  return axios.delete(API_URL);
}
