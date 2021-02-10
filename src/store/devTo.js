const devTo = {
  namespaced: true,

  state: {
    devToData: []
  },
  mutations: {
    ADD_DEV_TO_DATA(state, data) {
      state.devToData = data;
    }
  },
  actions: {
    storeDevToData({ commit }, data) {
      commit("ADD_DEV_TO_DATA", data);
    }
  },
  getters: {
    devToData: state => {
      return state.devToData;
    }
  }
};

export default devTo;
