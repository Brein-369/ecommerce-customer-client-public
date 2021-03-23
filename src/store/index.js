import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/axios/axios'
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userData: {},
    allProducts: {}
  },
  mutations: {
    login (state, payload) {
      state.userData = payload
    },
    allProducts (state, payload) {
      state.allProducts = payload
    }
  },
  actions: {
    register (context, payload) {
      return axios({
        url: '/user/register',
        method: 'post',
        data: payload
      }).then(response => {
        console.log(response.data)
        router.push('/')
      }).catch(err => {
        console.log(err.response.data)
      })
    },
    login (context, payload) {
      return axios({
        url: '/user/login',
        method: 'post',
        data: payload
      }).then(response => {
        console.log(response.data)
        context.commit('login', response.data)
        localStorage.setItem('access_token', response.data.access_token)
        router.push('/home')
      }).catch(err => {
        console.log(err.response.data)
      })
    },
    getAllProducts (context, payload) {
      axios({
        url: '/user/products',
        method: 'get',
        headers: {
          access_token: localStorage.access_token
        }
      }).then(response => {
        console.log(response.data)
        context.commit('allProducts', response.data)
      }).catch(err => {
        console.log(err.response.data)
      })
    }
  },
  modules: {
  }
})
