import { getSettings } from '../../api/site'

const state = {
  site_name: '',
  site_desc: '',
  site_keyword: '',
  site_author: '',
  site_record: '',
  site_icon_url: ''
}

const mutations = {
  set_site_name(state, site_name) {
    state.site_name = site_name
  },
  set_site_desc(state, site_desc) {
    state.site_desc = site_desc
  },
  set_site_keyword(state, site_keyword) {
    state.site_keyword = site_keyword
  },
  set_site_author(state, site_author) {
    state.site_author = site_author
  },
  set_site_record(state, site_record) {
    state.site_record = site_record
  },
  set_site_icon_url(state, site_icon_url) {
    state.site_icon_url = site_icon_url
  }
}

const actions = {
  getHomeSettings({ commit }) {
    return new Promise((resolve, reject) => {
      getSettings().then(({ code, data }) => {
        if (code === 1) {
          commit('set_site_name', data.web_name)
          commit('set_site_desc', data.web_desc)
          commit('set_site_author', data.web_author)
          commit('set_site_record', data.web_record)
          commit('set_site_icon_url', data.web_icon)
          commit('set_site_keyword', data.web_keyword)
        }
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}