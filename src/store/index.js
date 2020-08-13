import Vue from "vue";
import Vuex from "vuex";
import data from "@/data";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dataPerCategory: []
  },
  mutations: {
    setDataPerCategory(state, data) {
      state.dataPerCategory = data;
    }
  },
  getters: {
    dataPerCategory: state => state.dataPerCategory
  },
  actions: {
    getDataPerCategory: async ({ commit }, { name }) => {
      commit("setDataPerCategory", data.categories[name]);
    }
  },
  modules: {}
});
