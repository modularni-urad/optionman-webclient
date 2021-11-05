/* global Vue, Vuex, localStorage, API, axios, _ */

const KEY = '_opencomm_user_'

function _loadUser() {
  const u = localStorage.getItem(KEY)
  const user = u ? JSON.parse(u) : null
  user && axios.post('http://localhost:24000/set', { 
    id: user.id, groups: ['admins'] 
  })
  return user
}

export default (router, cfg) => (new Vuex.Store({
  state: {
    user: _loadUser(),
    router: router,
    cfg
  },
  getters: {
    userLogged: state => {
      return state.user !== null
    },
    UID: state => {
      const UID = state.router.currentRoute.query.uid || state.user.id
      axios.post('http://localhost:24000/set', { id: UID, groups: ['admins'] })
      return UID
    },
    isMember: state => group => {
      try {
        return state.user.groups.indexOf(group) >= 0
      } catch (_) {
        return false
      }
    }
  },
  mutations: {
    profile: (state, profile) => {
      localStorage.setItem(KEY, JSON.stringify(profile))
      state.user = profile
    }
  },
  actions: {
    toast: function (ctx, opts) {
      // Vue.$toast.open(opts)
    },
    onerror: function (ctx, err) {
      console.error(err)
    },
    send: function (ctx, opts) {
      Object.assign(opts, {  // for debug only
        headers: { 'Authorization': `Bearer bjbjbj`}
      })
      return axios(opts)
    }
  }
}))
