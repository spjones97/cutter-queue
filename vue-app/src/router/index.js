import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import QueueManager from '@/components/QueueManager'
import OktaVue, { LoginCallback } from '@okta/okta-vue'
import { OktaAuth } from '@okta/okta-auth-js'

const oktaAuth = new OktaAuth({
  issuer: 'https://dev-10307142.okta.com/oauth2/default',
  clientId: '0oal3rkv5hHbjO0ey5d6',
  redirectUri: window.location.origin + '/callback',
  scopes: ['openid', 'profile', 'email']
})

Vue.use(Router)
Vue.use(OktaVue, { oktaAuth })

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/callback',
      component: LoginCallback
    },
    {
      path: '/queue-manager',
      name: 'QueueManager',
      component: QueueManager,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

export default router
