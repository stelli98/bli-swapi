import Vue from "vue";
import Vuex from "vuex";
import data from "@/data";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dataPerCategory: [],
    selectedCategory: ""
  },
  mutations: {
    setDataPerCategory(state, data) {
      state.dataPerCategory = data;
    },
    setSelectedCategory(state, data) {
      state.selectedCategory = data;
    }
  },
  getters: {
    dataPerCategory: state => state.dataPerCategory,
    selectedCategory: state => state.selectedCategory
  },
  actions: {
    getDataPerCategory: async ({ commit }, { name }) => {
      commit("setDataPerCategory", data.categories[name]);
    },
    changeSelectedCategory: ({ commit }, value) => {
      commit("setSelectedCategory", value);
    }
  },
  modules: {}
});
