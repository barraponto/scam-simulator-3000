const state = {
  level: 1,
  mission: false,
};

const mutations = {
  startMission(state) {
    state.mission = true;
  },
};

const actions = {
  respond({ commit }, { message, option }) { // eslint-disable-line
    const responses = {
      1: [ // Re: Aumente seu tênis
        () => { commit('startMission'); }, // blz pai
      ],
    };
    responses[message][option]();
  },
};

const getters = {
  mission: state => state.mission,
  level: state => state.level,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
