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

  getters: {
    currentUser: (state) => (id) => {
      return state.users.find(user => user.id === id)
    },
    userByPost: (state) => (authorID) => {
      return state.users.find(user => user.id === authorID)
    },
    publicApplications: (state) => {
      return state.applications.filter(application => application.isValidated && !application.isDeleted)
    },
    publicInternships: (state) => {
      return state.internships.filter(internship => internship.isValidated && !internship.isDeleted)
    },
    applicationByID: (state) => (id) => {
      return state.applications.find(application => application.id === id)
    },
    applicationsByUser: (state) => (id) => {
      return state.applications.filter(application => application.authorID === id && !application.isDeleted)
    },
    internshipByID: (state) => (id) => {
      return state.internships.find(internship => internship.id === id)
    },
    internshipsByUser: (state) => (id) => {
      return state.internships.filter(internship => internship.authorID === id && !internship.isDeleted)
    },
    applicationsByField: (state) => (field) => {
      return state.applications.filter(application => application.field === field && application.isValidated && !application.isDeleted)
    },
    internshipsByField: (state) => (field) => {
      return state.internships.filter(internship => internship.field === field && internship.isValidated && !internship.isDeleted)
    },
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
      // Obtenir l'index de l'objet grâce à son ID
      const dataIndex = state.applications.findIndex(x => x.id == application.id);

      // Remplacer l'ancien objet par la nouveau
      state.applications.splice(dataIndex,1,application);
    },
    deleteApplication (state, id) {
      // Obtenir l'index de l'objet grâce à son ID
      const dataIndex = state.applications.findIndex(x => x.id == id);
      // Définir "isDeleted" à "true"
      state.applications[dataIndex].isDeleted = true;
    },
    addInternship (state, internship) {
      state.internships.push(internship)
    },
    modifyInternship (state, internship) {
      // Obtenir l'index de l'objet grâce à son ID
      const dataIndex = state.internships.findIndex(x => x.id == internship.id);

      // Remplacer l'ancien objet par la nouveau
      state.internships.splice(dataIndex,1,internship);
    },
    deleteInternship (state, id) {
      // Obtenir l'index de l'objet grâce à son ID
      const dataIndex = state.internships.findIndex(x => x.id == id);
      // Définir "isDeleted" à "true"
      state.internships[dataIndex].isDeleted = true;
    },
    addUser (state, user) {
      state.users.push(user)
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
    addApplication (context, newData) {
      context.commit('addApplication', newData)
    },
    modifyApplication (context, newData) {
      context.commit('modifyApplication', newData)
    },
    deleteApplication (context, id) {
      context.commit('deleteApplication', id)
    },
    addInternship (context, newData) {
      context.commit('addInternship', newData)
    },
    modifyInternship (context, newData) {
      context.commit('modifyInternship', newData)
    },
    deleteInternship (context, id) {
      context.commit('deleteInternship', id)
    },
    addUser (context, newData) {
      context.commit('addUser', newData)
    },
  }
})