import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import { API_URL } from "@/common/config";

const ApiService = {
  init() {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = API_URL;
  },

  get(resource, slug = "") {

    // return Vue.axios.get(`${resource}/${slug}`).catch(error => {
    //   throw new Error(`[RWV] ApiService ${error}`);
    // });

    let items = ["AA-BB-VV", "77-FF-23", "DC-678-A","77-aa-21", "99-BB-45", "HH-FF-03","AA-BB-VV", "77-FF-23", "DC-678-A","77-aa-21", "99-BB-45", "HH-FF-03"];
    return items
  },


  post(resource, params) {
    return Vue.axios.post(`${resource}`, params);
  },

  put(resource, params) {
    return Vue.axios.put(`${resource}`, params);
  },

  delete(resource) {
    return Vue.axios.delete(resource).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  }
};
export default ApiService;

