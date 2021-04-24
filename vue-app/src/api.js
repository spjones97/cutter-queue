import Vue from 'vue'
import axios from 'axios'

var PORT = process.env.PORT || 8080

const client = axios.create({
    baseURL: `http://localhost:${PORT}`,
    json: true
})

export default {
    async execute (method, resource, data) {
        let accessToken = await Vue.prototype.$auth.getAccessToken()
        return client({
            method,
            url: resource,
            data,
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }).then(req => {
            return req.data
        })
    },
    getUsers () {
        return this.execute('get', '/users')
    },
    getUser (id) {
        return this.execute('get', `/users/${id}`)
    },
    createUser (data) {
        return this.execute('post', '/users', data)
    },
    updateUser (id, data) {
        return this.execute('put', `/users/${id}`, data)
    },
    deleteUser (id) {
        return this.execute('delete', `/users/${id}`)
    }
}
