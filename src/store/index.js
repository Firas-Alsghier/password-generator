import { createStore } from 'vuex';

export default createStore({
  state: {
    randomPassword: '',
    numbers: 1234567890,
    symols: '!@#$%^&*()+=-',
    checkUpperCase: false,
    checkLowerCase: false,
    checkNumbers: true,
    checkSymols: true,
  },
  getters: {},
  mutations: {
    RANDOMPASSWORD(state, val) {
      state.randomPassword = val;
    },
  },
  actions: {
    makeRandomPassword({ commit }, val) {
      commit('RANDOMPASSWORD', val);
    },
  },
  modules: {},
});
