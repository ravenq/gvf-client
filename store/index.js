export const state = () => ({
  user: {
    name: 'unlogin',
    token: null
  }
})

export const mutations = {
  setUser(state, data) {
    state.user = data
    if (process.client) {
      window.sessionStorage.token = data.token
      window.sessionStorage.user = JSON.stringify(data)
    }
  }
}

export const getters = {
  isAuthenticated(state) {
    if (process.client) {
      return !!window.sessionStorage.token || state.user.token
    }
  },
  token(state) {
    if (process.client) {
      return window.sessionStorage.token || state.user.token
    }
  },
  user(state) {
    if (process.client) {
      const strUser = window.sessionStorage.user
      if (strUser) {
        return JSON.parse(strUser)
      } else {
        return state.user
      }
    } else {
      return {
        id: null
      }
    }
  }
}
