import axios from 'axios'

export default {
  fetchApplications () {
    return axios
      .get('https://jsonplaceholder.typicode.com/applications')
      .then(response => response.data)
  },
  fetchFields () {
    return axios
      .get('https://jsonplaceholder.typicode.com/fields')
      .then(response => response.data)
  },
  fetchInternships () {
    return axios
      .get('https://jsonplaceholder.typicode.com/internships')
      .then(response => response.data)
  },
  fetchUsers () {
    return axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => response.data)
  }
}