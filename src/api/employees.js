import axios from "axios";
import { API_ENDPOINT } from "../enviroments";

const API_URL = API_ENDPOINT + `api/employees`;

export function getAllEmployees() {
  return axios.get(API_URL);
}

export function getEmployeeById(id) {
  return axios.get(API_URL + "/" + id);
}

export function getEmployeeByName(name) {
  return axios.get(API_URL + "name=" + name);
}

export function createEmployee(name, department) {
  return axios.post(API_URL, {
    name,
    department,
  });
}

export function updateEmployee(id, name, department) {
  return axios.put(API_URL + "/" + id, {
    name,
    department,
  });
}

export function deleteEmployee(id) {
  return axios.delete(API_URL + "/" + id);
}

export function deleteAllEmployees() {
  return axios.delete(API_URL);
}
