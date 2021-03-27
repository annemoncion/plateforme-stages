import Vue from 'vue'
import Vuex from 'vuex'
import client from './api/mock/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    applications: [],
    fields: [],
    internships: [],
    users: [],
  },

  mutations: {
    setApplications (state, applications) {
      state.applications = applications
    },
    setFields (state, fields) {
      state.fields = fields
    },
    setInternships (state, internships) {
      state.internships = internships
    },
    setUsers (state, users) {
      state.users = users
    }
  },

  actions: {
    fetchApplications ({ commit }) {
      return client
        .fetchApplications()
        .then(applications => commit('setApplications', applications))
    },
    fetchFields ({ commit }) {
      return client
        .fetchFields()
        .then(fields => commit('setFields', fields))
    },
    fetchInternships ({ commit }) {
      return client
        .fetchInternships()
        .then(internships => commit('setInternships', internships))
    },
    fetchUsers ({ commit }) {
      return client
        .fetchUsers()
        .then(users => commit('setUsers', users))
    }
  }
})