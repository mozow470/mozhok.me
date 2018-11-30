import Vuex from 'vuex'

const store = () => new Vuex.Store({
  state: {
    isMenuActive: false,
    pages: [
      {
        title: "PROFILE",
        path: "/profile",
        background: require('~/assets/images/profile.jpeg'),
        color: "#549b97"
      },
      {
        title: "PROJECTS",
        path: "/projects",
        background: require('~/assets/images/projects.jpeg'),
        color: "#6887C1"
      },
      {
        title: "GAMES",
        path: "/games",
        background: require('~/assets/images/games.jpeg'),
        color: "#C16D68"
      },
      {
        title: "MUSIC",
        path: "/music",
        background: require('~/assets/images/music.jpeg'),
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
