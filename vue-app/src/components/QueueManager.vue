<template>
    <div class="container-fluid mt-4">
        <h1 class="h1">Queue Manager</h1>
        <b-alert :show="loading" variant="info">Loading...</b-alert>
        <b-row>
            <b-col>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Updated At</th>
                            <th>&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user in users" :key="user.id">
                            <td>{{ user.id }}</td>
                            <td>{{ user.name }}</td>
                            <td>{{ user.updatedAt }}</td>
                            <td class="text-right">
                                <a href="#" @click.prevent="populateUserToEdit(user)">Edit</a> -
                                <a href="#" @click.prevent="deleteUser(user.id)">Delete</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </b-col>
            <b-col lg="3">
                <b-card :title="(model.id ? 'Edit User ID#' + model.id : 'New User')">
                    <form @submit.prevent="saveUser">
                        <b-form-group label="Name">
                            <b-form-input type="text" v-model="model.name"></b-form-input>
                        </b-form-group>
                        <b-form-group label="Body">
                            <b-form-textarea rows="4" v-model="model.body"></b-form-textarea>
                        </b-form-group>
                        <div>
                            <b-btn type="submit" variant="success">Save User</b-btn>
                        </div>
                    </form>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import api from '@/api'

export default {
    data () {
        return {
            loading: false,
            users: [],
            model: {}
        }
    },
    async created () {
        this.refreshUsers()
    },
    methods: {
        async refreshUsers () {
            this.loading = true
            this.users = await api.getUsers()
            this.loading = false
        },
        async populateUserToEdit (user) {
            this.model = Object.assign({}, user)
        },
        async saveUser () {
            if (this.model.id) {
                await api.updateUser(this.model.id, this.model)
            } else {
                await api.createUser(this.model)
            }
            this.model = {}
            await this.refreshUsers()
        },
        async deleteUser (id) {
            if (confirm('Are you sure you want to delete this user?')) {
                if (this.model.id === id) {
                    this.model = {}
                }
                await api.deleteUser(id)
                await this.refreshUsers()
            }
        }
    }
}
</script>
