<template>
  <div class="container-fluid">
    <div class="row no-gutter">
      <!-- The image half -->
      <div class="col-md-6 d-none d-md-flex bg-image"></div>

      <!-- The content half -->
      <div class="col-md-6 bg-light">
        <div class="login d-flex align-items-center py-5">
          <!-- Demo content-->
          <div class="container">
            <div class="row">
              <div class="col-lg-10 col-xl-7 mx-auto">
                  <div class="">
                    <img src="https://i.imgur.com/JscTdAe.png" alt="logo" class="">
                </div>
                <h3 class="display-4 mb-5" >Customer Register</h3>
                <form class="mb-5">
                  <div class="form-group mb-3">
                    <input
                      v-model="inputEmail"
                      type="email"
                      placeholder="Email address"
                      required=""
                      autofocus=""
                      class="form-control rounded-pill border-0 shadow-sm px-4"
                    />
                  </div>
                  <div class="form-group mb-3">
                    <input
                      v-model="inputPassword"
                      type="password"
                      placeholder="Password"
                      required=""
                      class="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                    />
                  </div>
                  <div class="form-group mb-3">
                    <input
                      v-model="inputAddress"
                      type="text"
                      placeholder="Address"
                      required=""
                      class="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                    />
                  </div>
                  <div class="form-group mb-3">
                    <input
                      v-model="inputPhone"
                      type="text"
                      placeholder="Phone Number"
                      required=""
                      class="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                    />
                  </div>
                  <button
                    class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                    @click.prevent="register"
                  >
                    Sign Up
                  </button>
                </form>
                <p>Already have account ? <a href="#" @click.prevent="goToSignIn">Sign In Here</a></p>
              </div>
            </div>
          </div>
          <!-- End -->
        </div>
      </div>
      <!-- End -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      inputEmail: '',
      inputPassword: '',
      inputAddress: '',
      inputPhone: ''
    }
  },
  methods: {
    goToSignIn () {
      this.$router.push('/')
    },
    register () {
      const payload = {
        email: this.inputEmail,
        password: this.inputPassword,
        address: this.inputAddress,
        phone: this.inputPhone
      }
      this.$store.dispatch('register', payload)
        .then(() => {
          this.inputEmail = ''
          this.inputPassword = ''
          this.inputAddress = ''
          this.inputPhone = ''
        })
    }
  }
}
</script>

<style scoped>
.login,
.image {
  min-height: 100vh;
}

.bg-image {
  background-image: url('https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
  background-size: cover;
  /* background-position: center center; */
}
</style>
