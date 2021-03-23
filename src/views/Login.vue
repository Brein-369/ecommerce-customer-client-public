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
                <h3 class="display-4 mb-5" >Customer Login</h3>
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
                  <button
                    @click.prevent="login"
                    class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                  >
                    Sign in
                  </button>
                </form>
                <p>Dont have account ? <a href="#" @click.prevent="goToSignUp">Sign Up Here</a></p>
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
  name: 'Login',
  data () {
    return {
      inputEmail: '',
      inputPassword: ''
    }
  },
  methods: {
    goToSignUp () {
      this.$router.push('/register')
    },
    login () {
      const payload = {
        email: this.inputEmail,
        password: this.inputPassword
      }
      this.$store.dispatch('login', payload)
        .then(() => {
          this.inputEmail = ''
          this.inputPassword = ''
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
  background-image: url('https://images.pexels.com/photos/4127636/pexels-photo-4127636.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260');
  background-size: cover;
  /* background-position: center center; */
}
</style>
