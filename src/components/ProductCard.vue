<template>
  <!--content start here-->
  <!-- <div class="card">
    <input type="checkbox" id="card1" class="more" aria-hidden="true" />
    <div class="content">
      <div class="front">
        <img
          class="front"
          :src="product.image_url"
          alt=""
        />
        <div class="inner">
          <h3 class="mb-5 font-weight-bold">{{product.name}}</h3>
          <label for="card1" class="button" aria-hidden="true"> Detail </label>
        </div>
      </div>
      <div class="back justify-content-center">
        <div class="">
          <button type="button" class="btn btn-success mt-5">
            <i class="fa fa-cart-plus" aria-hidden="true"></i> Add to Cart
          </button>
          <div class="row w-100" style="padding-top: 50px">
            <div class="col-6">
              <h5 class="font-weight-bold description">IDR</h5>
            </div>
            <div class="col-6">
              <h5 class="font-weight-bold description">Stock</h5>
            </div>
          </div>
          <div class="row w-100">
            <div class="col-6">
              <h5 class="description">{{product.price}}</h5>
            </div>
            <div class="col-6">
              <h5 class="description">{{product.stock}}</h5>
            </div>
          </div>
          <label for="card1" class="buttonleft return" aria-hidden="true">
            <i class="fas fa-arrow-left"></i> Back
          </label>
        </div>
      </div>
    </div>
  </div> -->
  <!-- <div class="card">
    <h2>Cozy apartment</h2>
    <input type="checkbox" id="card1" class="more" aria-hidden="true" />
    <div class="content">
      <div
        class="front"
        style="
          background-image: url('https://images.unsplash.com/photo-1529408686214-b48b8532f72c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=986e2dee5c1b488d877ad7ba1afaf2ec&auto=format&fit=crop&w=1350&q=80');
        "
      >
        <div class="inner">
          <label for="card1" class="button" aria-hidden="true"> Details </label>
        </div>
      </div>
      <div class="back">
        <div class="inner">
          <label for="card1" class="button return" aria-hidden="true">
            <i class="fas fa-arrow-left"></i>
          </label>
        </div>
      </div>
    </div>
  </div> -->
  <div>
    <h1 class="text-shadow">{{product.name}}</h1>
    <div class="flip mx-5">
      <div
        class="front"
        :style="{ backgroundImage: `url(${product.image_url})`}">
      </div>
      <div class="back">
        <h2>Mini Description</h2>
        <p>
          May the product be useful for anyone in need
        </p>
        <button v-if="product.stock" type="button" class="btn btn-success mt-5" @click.prevent="addProductToCart(product.id)">
              <i class="fa fa-cart-plus" aria-hidden="true"></i> Add to Cart
            </button>
            <span class="mx-3"> </span>
            <button v-if="product.stock" type="button" class="btn btn-danger mt-5" @click.prevent="addProductToWishlist(product.id)">
              <i class="fa fa-heart" aria-hidden="true"></i> Add to Wishlist
            </button>
        <div class="row w-100" style="padding-top: 50px">
              <div class="col-6">
                <h5 class="font-weight-bold description">IDR</h5>
              </div>
              <div class="col-6">
                <h5 class="font-weight-bold description">Stock</h5>
              </div>
            </div>
            <div class="row w-100">
              <div class="col-6">
                <h5 class="description"><small>{{filteredPrice}}</small></h5>
              </div>
              <div class="col-6">
                <h5 class="description"><small>{{product.stock}} unit</small></h5>
              </div>
            </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['product'],
  computed: {
    filteredPrice () {
      return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(this.product.price)
    }
  },
  methods: {
    addProductToCart (productId) {
      this.$store.dispatch('addProductToCart', productId)
    },
    addProductToWishlist (productId) {
      this.$store.dispatch('addProductToWishlist', productId)
    }
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto+Mono");
* {
  box-sizing: border-box;
  font-weight: normal;
}
body {
  color: #555;
  background: #222;
  text-align: center;
  font-family: "Roboto Mono";
  padding: 1em;
}
h1 {
  font-size: 2.2em;
}
.flip {
  position: relative;
}
.flip > .front,
.flip > .back {
  display: block;
  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition-duration: 0.5s;
  transition-property: transform, opacity;
}
.flip > .front {
  transform: rotateY(0deg);
}
.flip > .back {
  position: absolute;
  opacity: 0;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  transform: rotateY(-180deg);
}
.flip:hover > .front {
  transform: rotateY(180deg);
}
.flip:hover > .back {
  opacity: 1;
  transform: rotateY(0deg);
}
.flip.flip-vertical > .back {
  transform: rotateX(-180deg);
}
.flip.flip-vertical:hover > .front {
  transform: rotateX(180deg);
}
.flip.flip-vertical:hover > .back {
  transform: rotateX(0deg);
}
.flip {
  position: relative;
  display: inline-block;
  margin-right: 2px;
  margin-bottom: 1em;
  width: 400px;
}
.flip > .front,
.flip > .back {
  display: block;
  color: white;
  width: inherit;
  background-size: cover !important;
  background-position: center !important;
  height: 400px;
  padding: 1em 2em;
  background: #525252;
  border-radius: 10px;
}
.flip > .front p,
.flip > .back p {
  font-size: 0.9125rem;
  line-height: 160%;
  color: #999;
}
.text-shadow {
  text-shadow: 1px 1px rgba(0, 0, 0, 0.04), 2px 2px rgba(0, 0, 0, 0.04),
    3px 3px rgba(0, 0, 0, 0.04), 4px 4px rgba(0, 0, 0, 0.04),
    0.125rem 0.125rem rgba(0, 0, 0, 0.04), 6px 6px rgba(0, 0, 0, 0.04),
    7px 7px rgba(0, 0, 0, 0.04), 8px 8px rgba(0, 0, 0, 0.04),
    9px 9px rgba(0, 0, 0, 0.04), 0.3125rem 0.3125rem rgba(0, 0, 0, 0.04),
    11px 11px rgba(0, 0, 0, 0.04), 12px 12px rgba(0, 0, 0, 0.04),
    13px 13px rgba(0, 0, 0, 0.04), 14px 14px rgba(0, 0, 0, 0.04),
    0.625rem 0.625rem rgba(0, 0, 0, 0.04), 16px 16px rgba(0, 0, 0, 0.04),
    17px 17px rgba(0, 0, 0, 0.04), 18px 18px rgba(0, 0, 0, 0.04),
    19px 19px rgba(0, 0, 0, 0.04), 1.25rem 1.25rem rgba(0, 0, 0, 0.04);
}
</style>
