import Vue from "vue";
import Vuex from "vuex";
import api from "@/api";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    categories: [],
    dataPerCategory: []
  },
  mutations: {
    setCategories(state, data) {
      state.categories = data;
    },
    setDataPerCategory(state, data) {
      state.dataPerCategory = data;
    }
  },
  getters: {
    categories: state => state.categories,
    dataPerCategory: state => state.dataPerCategory
  },
  actions: {
    getCategories: async ({ commit }) => {
      const { data } = await api.getCategories();
      commit("setCategories", data);
    },
    getDataPerCategory: async ({ commit }, { name, params }) => {
      const { data } = await api.getDataPerCategory(name, params);
      commit("setDataPerCategory", data);
    }
  },
  modules: {}
});
