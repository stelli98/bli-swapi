import axios from "axios";
import path from "@/config";
const api = path.api;
export default {
  getCategories() {
    return axios.get(api.categories);
  },
  getDataPerCategory(name, params) {
    return axios.get(api.dataPerCategory.replace("$name", name), params);
  }
};
