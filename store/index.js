export const state = () => ({
  user: {
    name: 'unlogin',
    token: null
  }
})

export const mutations = {
  setUser(state, data) {
    state.user = data
    window.sessionStorage.token = data.token
    window.sessionStorage.user = JSON.stringify(data)
  }
}

export const getters = {
  isAuthenticated(state) {
    return !!window.sessionStorage.token || state.user.token
  },
  token(state) {
    return window.sessionStorage.token || state.user.token
  },
  user(state) {
    const strUser = window.sessionStorage.user
    if (strUser) {
      return JSON.parse(strUser)
    } else {
      return state.user
    }
  }
}
