const url = "http://localhost:3000/data";
import axios from "axios";

export const apiHandler = {
  async get() {
    return axios.get(url).then((result) => result.data);
  },
  async delete(id) {
    axios
      .delete(`${url}/${id}`)
      .then((res) => res)
      .catch((err) => err.message);
  },
  async find(id) {
    return axios
      .get(`${url}/${id}`)
      .then((res) => res)
      .catch((err) => err.message);
  },
  async edit(project) {
    return axios
      .put(`${url}/${project.id}`, project)
      .then((res) => res)
      .catch((err) => err.message);
  },
};
