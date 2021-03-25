import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/axios/axios'
import router from '@/router'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userData: {},
    allProducts: [],
    allCart: [],
    allWishlist: []
  },
  mutations: {
    login (state, payload) {
      state.userData = payload
    },
    allProducts (state, payload) {
      state.allProducts = payload
    },
    allCart (state, payload) {
      state.allCart = payload
    },
    allWishlist (state, payload) {
      state.allWishlist = payload
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
    },
    getAllCart (context) {
      axios({
        url: '/user/cart',
        method: 'get',
        headers: {
          access_token: localStorage.access_token
        }
      }).then(response => {
        console.log(response.data)
        context.commit('allCart', response.data)
      }).catch(err => {
        console.log(err.response.data)
      })
    },
    getAllWishlist (context) {
      axios({
        url: '/user/wishlist',
        method: 'get',
        headers: {
          access_token: localStorage.access_token
        }
      }).then(response => {
        console.log(response.data)
        context.commit('allWishlist', response.data)
      }).catch(err => {
        console.log(err.response.data)
      })
    },
    addProductToWishlist (context, productId) {
      console.log(productId, 'productId di dispatch')
      axios({
        url: '/user/wishlist',
        method: 'post',
        data: {
          ProductId: productId
        },
        headers: {
          access_token: localStorage.access_token
        }
      }).then(response => {
        console.log(response.data)
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500
        })
      }).catch(err => {
        console.log(err.response.data)
      })
    },
    deleteWishlist (context, wishId) {
      axios({
        url: '/user/wishlist/' + wishId,
        method: 'delete',
        headers: {
          access_token: localStorage.access_token
        }
      }).then(response => {
        console.log(response.data)
        context.dispatch('getAllWishlist')
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500
        })
      }).catch(err => {
        console.log(err.response.data)
      })
    },
    addProductToCart (context, productId) {
      console.log(productId, 'productId di dispatch')
      axios({
        url: '/user/cart',
        method: 'post',
        data: {
          ProductId: productId
        },
        headers: {
          access_token: localStorage.access_token
        }
      }).then(response => {
        console.log(response.data)
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500
        })
      }).catch(err => {
        console.log(err.response.data)
      })
    },
    deleteCart (context, cartId) {
      axios({
        url: '/user/cart/' + cartId,
        method: 'delete',
        headers: {
          access_token: localStorage.access_token
        }
      }).then(response => {
        console.log(response.data)
        context.dispatch('getAllCart')
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500
        })
      }).catch(err => {
        console.log(err.response.data)
      })
    },
    addQuantity (context, cartId) {
      axios({
        url: 'user/cart/addqty/' + cartId,
        method: 'patch',
        headers: {
          access_token: localStorage.access_token
        }
      }).then(response => {
        console.log(response.data)
        context.dispatch('getAllCart')
      }).catch(err => {
        console.log(err.response.data)
      })
    },
    subQuantity (context, cartId) {
      axios({
        url: 'user/cart/subqty/' + cartId,
        method: 'patch',
        headers: {
          access_token: localStorage.access_token
        }
      }).then(response => {
        console.log(response.data)
        context.dispatch('getAllCart')
      }).catch(err => {
        console.log(err.response.data)
      })
    },
    checkout (context) {
      axios({
        url: 'user/cart/checkout',
        method: 'delete',
        headers: {
          access_token: localStorage.access_token
        }
      }).then(response => {
        console.log(response.data)
        context.dispatch('getAllCart')
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: response.data.message,
          showConfirmButton: false,
          timer: 1500
        })
      }).catch(err => {
        console.log(err.response.data)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'looks like the stock quantity has been changeg, please check the product again to see stock changes ',
          footer: `error message: ${err.response.data.theErr[0]}`
        })
      })
    }
  },
  modules: {
  }
})
