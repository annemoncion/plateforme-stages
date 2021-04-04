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
    newApplication (state, application) {
      Vue.set(state.application, 'id', application.id);
      Vue.set(state.application, 'title', application.title);
      Vue.set(state.application, 'field', application.field);
      Vue.set(state.application, 'city', application.city);
      Vue.set(state.application, 'startDate', application.startDate);
      Vue.set(state.application, 'endDate', application.endDate);
      Vue.set(state.application, 'description', application.description);
      Vue.set(state.application, 'hoursPerWeek', application.hoursPerWeek);
      Vue.set(state.application, 'acquiredSkillset', application.acquiredSkillset);
      Vue.set(state.application, 'wantsPay', application.wantsPay);
      Vue.set(state.application, 'additionalInfos', application.additionalInfos);
      Vue.set(state.application, 'weeksNumber', application.weeksNumber);
      Vue.set(state.application, 'mainTraining', application.mainTraining);
      Vue.set(state.application, 'otherTrainings', application.otherTrainings);
      Vue.set(state.application, 'internshipType', application.internshipType);
      Vue.set(state.application, 'parutionDate', application.parutionDate);
      Vue.set(state.application, 'authorID', application.authorID);
      Vue.set(state.application, 'isActive', application.isActive);
      Vue.set(state.application, 'isDeleted', application.isDeleted);
      Vue.set(state.application, 'isValidated', application.isValidated);
      state.applications.push(state.application);
    },
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
    addApplication ({ commit }, newData) {
      return client      
        .addApplication(newData)
        .then(newData => commit('newApplication', newData))
    },
  }
})