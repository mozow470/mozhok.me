import Vuex from 'vuex'

const store = () => new Vuex.Store({
  state: {
    isMenuActive: false,
    pages: [
      {
        title: "PROFILE",
        path: "/profile",
        background: require('~/assets/images/profile.png'),
        color: "#549b97"
      },
      {
        title: "PROJECTS",
        path: "/projects",
        background: require('~/assets/images/projects.png'),
        color: "#6887C1"
      },
      {
        title: "GAMES",
        path: "/games",
        background: require('~/assets/images/games.png'),
        color: "#C16D68"
      },
      {
        title: "MUSIC",
        path: "/music",
        background: require('~/assets/images/music.png'),
        color: "#A0C168"
      },
    ],
  },
  mutations: {
    toggleMenu (state) {
      state.isMenuActive = !state.isMenuActive
    },
    resetMenu (state) {
      state.isMenuActive = false
    }
  }
});

export default store
