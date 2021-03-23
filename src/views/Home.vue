<template>
  <div class="home">
    <Navbar></Navbar>
    <div class="text-center backgroundIMG mb-5">
      <img class="" style="max-height: 500px;" src="https://i.imgur.com/z3luEyU.jpg" alt="">
    </div>
    <h1 class="mt-3 font-weight-bold text-uppercase">Products</h1>
    <div class="wrapper cards">
      <ProductCard v-for="product in allProducts" :key="product.id"
        :product="product"
        ></ProductCard>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex'
import ProductCard from '@/components/ProductCard.vue'
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'Home',
  components: {
    Navbar,
    ProductCard
  },
  computed: {
    ...mapState({
      allProducts: 'allProducts'
    })
  },
  methods: {
    getAllProducts () {
      this.$store.dispatch('getAllProducts')
    }
  },
  created () {
    this.getAllProducts()
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: "Montserrat", sans-serif;
}

.backgroundIMG {
  background-color: rgb(255, 238, 252);
}

.wrapper {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}

</style>
