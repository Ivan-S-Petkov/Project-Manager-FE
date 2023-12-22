import axios from "axios";
import { API_ENDPOINT } from "../enviroments";

const API_URL = API_ENDPOINT + `api/projects`;

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
