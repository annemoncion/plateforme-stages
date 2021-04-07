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
    },
    addApplication (state, application) {
      state.applications.push(application)
    },
    modifyApplication (state, application) {
      // get index of object with param id
      //const dataIndex = state.applications.map(function(application) { return application.id; }).indexOf(id);
      const dataIndex = state.applications.findIndex(x => x.id == application.id);

      // replace object with new data
      state.applications.splice(dataIndex,1,application);
    },
    deleteApplication (state, id) {
      // get index of object with id property
      const removeIndex = state.applications.map(function(application) { return application.id; }).indexOf(id);

      // remove object
      state.applications.splice(removeIndex, 1);
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
    },
    addApplication (context, newData) {
      context.commit('addApplication', newData)
    },
    modifyApplication (context, newData) {
      context.commit('modifyApplication', newData)
    },
    deleteApplication (context, id) {
      context.commit('deleteApplication', id)
    }
  }
})