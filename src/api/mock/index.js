import applications from './data/applications'
import fields from './data/fields'
import internships from './data/internships'
import users from './data/users'

const fetch = (mockData, time = 0) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData)
    }, time)
  })
}

export default {
  fetchApplications () {
    return fetch(applications, 1000) // wait 1s before returning applications
  },
  fetchFields () {
    return fetch(fields, 100) // wait 0.1s before returning fields
  },
  fetchInternships () {
    return fetch(internships, 100) // wait 0.1s before returning internships
  },
  fetchUsers () {
    return fetch(users, 100) // wait 0.1s before returning users
  },
  addApplication (application) {
    console.log(application);
    applications.push(application);
  }
}