<template>
  <tr>
    <td>
      <div class="img-container">
        <img
          :src="eachWishlist.Product.image_url"
          alt="..."
        />
      </div>
    </td>
    <td class="td-name">
      <p>{{ eachWishlist.Product.name }}</p>
    </td>
    <td class="td-number text-center">{{filteredPrice}}</td>
    <td class="td-number text-center">
      <div class="btn-group">
        <button class="btn btn-round btn-info btn-sm" @click.prevent="addWishlistToCart(eachWishlist.Product.id)">
          <i class="fa fa-1x fa-plus-circle" aria-hidden="true"> Add to Cart</i>
        </button>
      </div>
    </td>
    <!--kenapa return result di computed showCategoryName tidak bisa dikasi [0].name, bisanya ditaruh di template ?-->
    <td class="td-number text-center">
      <div class="btn-group">
        <button class="btn btn-round btn-info btn-sm" @click.prevent="deleteWishlist(eachWishlist.id)">
          <i class="fa fa-trash" aria-hidden="true"> Remove Wishlist</i>
        </button>
      </div>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'WishlistItem',
  props: ['eachWishlist'],
  computed: {
    filteredPrice () {
      return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(this.eachWishlist.Product.price)
    }
  },
  methods: {
    deleteWishlist (wishId) {
      console.log(wishId)
      this.$store.dispatch('deleteWishlist', wishId)
    },
    addWishlistToCart (productId) {
      this.$store.dispatch('addProductToCart', productId)
      this.deleteWishlist(this.eachWishlist.id)
    }
  }
}
</script>

<style scoped>

a {
  color: #3e3947 !important;
  text-decoration: none;
}

a:hover {
  color: #89229b !important;
  text-decoration: none !important;
}
a:focus {
  color: #89229b !important;
  text-decoration: none !important;
}

.btn-group {
  position: relative;
  margin: 10px 1px;
  display: inline-flex;
  vertical-align: middle;
}
.btn-group .btn {
  padding: 6.5px 20px !important;
}
.btn.btn-round {
  border-radius: 30px !important;
}

.btn-group .btn.btn-round {
  border-radius: 30px !important;
}

.btn-group > .btn:not(:last-child):not(.dropdown-toggle) {
  border-top-right-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
}

.btn-group > .btn:not(:first-child) {
  border-top-left-radius: 0 !important;
  border-bottom-left-radius: 0 !important;
}
.btn {
  padding: 12px 30px !important;
  margin: 5px 1px;
  font-size: 12px !important;
  box-shadow: 0 2px 2px 0 hsla(0, 0%, 60%, 0.14),
    0 3px 1px -2px hsla(0, 0%, 60%, 0.2), 0 1px 5px 0 hsla(0, 0%, 60%, 0.12);
}
.btn .material-icons {
  position: relative;
  display: inline-block;
  top: 0;
  margin-top: -1.2em;
  margin-bottom: -1em;
  font-size: 1.1rem;
  vertical-align: middle;
}
.btn.btn-sm {
  border-radius: 3px !important;
}

.btn.btn-just-icon.btn-sm {
  height: 30px;
  min-width: 30px;
  width: 30px;
}

.btn.btn-just-icon {
  font-size: 24px;
  height: 41px;
  min-width: 41px;
  width: 41px;
  padding: 0 !important;
  overflow: hidden;
  position: relative;
  line-height: 41px;
}

.btn.btn-just-icon.btn-round {
  border-radius: 50% !important;
}

.btn.btn-link {
  background: transparent;
  box-shadow: none;
  color: #999;
}

.btn.btn-info {
  color: #fff !important;
  background-color: #00bcd4 !important;
  border-color: #00bcd4;
  box-shadow: 0 2px 2px 0 rgba(0, 188, 212, 0.14),
    0 3px 1px -2px rgba(0, 188, 212, 0.2), 0 1px 5px 0 rgba(0, 188, 212, 0.12) !important;
}

.btn.btn-info:hover {
  box-shadow: 0 14px 26px -12px rgba(0, 188, 212, 0.42),
    0 4px 23px 0 rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 188, 212, 0.2) !important;
  background: #00aec5 !important;
}

.btn.btn-info.btn-link {
  background-color: transparent !important;
  color: #00bcd4 !important;
  box-shadow: none !important;
}
.btn.btn-success {
  color: #fff !important;
  background-color: #4caf50 !important;
  border-color: #4caf50;
  box-shadow: 0 2px 2px 0 rgba(76, 175, 80, 0.14),
    0 3px 1px -2px rgba(76, 175, 80, 0.2), 0 1px 5px 0 rgba(76, 175, 80, 0.12) !important;
}

.btn.btn-success:hover {
  box-shadow: 0 14px 26px -12px rgba(76, 175, 80, 0.42),
    0 4px 23px 0 rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(76, 175, 80, 0.2) !important;
  background: #47a44b !important;
}
.btn.btn-success.btn-link {
  background-color: transparent !important;
  color: #4caf50 !important;
  box-shadow: none !important;
}

.btn.btn-danger {
  color: #fff !important;
  background-color: #f44336 !important;
  border-color: #f44336;
  box-shadow: 0 2px 2px 0 rgba(244, 67, 54, 0.14),
    0 3px 1px -2px rgba(244, 67, 54, 0.2), 0 1px 5px 0 rgba(244, 67, 54, 0.12) !important;
}

.btn.btn-danger:hover {
  box-shadow: 0 14px 26px -12px rgba(244, 67, 54, 0.42),
    0 4px 23px 0 rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(244, 67, 54, 0.2) !important;
  background-color: #f33527 !important;
}

.btn.btn-danger.btn-link {
  background-color: transparent !important;
  color: #f44336 !important;
  box-shadow: none !important;
}
.btn.btn-just-icon .material-icons {
  margin-top: 0;
  position: absolute;
  width: 100%;
  transform: none;
  left: 0;
  top: 0;
  height: 100%;
  line-height: 41px;
  font-size: 20px;
}

.btn.btn-just-icon.btn-sm .material-icons {
  font-size: 17px;
  line-height: 29px;
}

.table {
  width: 100%;
  max-width: 100%;
  margin-bottom: 16px;
  background-color: transparent;
}

.table thead tr th {
  font-size: 17px;
  font-weight: 300;
}

.table > thead > tr > th {
  padding: 12px 8px;
  vertical-align: middle;
  border-color: #ddd;
  font-weight: 300;
}

.table > tbody > tr > td {
  padding: 12px 8px;
  vertical-align: middle;
  border-color: #ddd;
  font-weight: 300;
  font-size: 14px;
  color: #3c4858;
}

.table .td-actions .btn {
  margin: 0;
  padding: 5px;
}

.table .form-check {
  margin: 0;
  padding-left: 0;
}

.table .td-total {
  font-weight: 500;
  font-size: 17px;
  padding-top: 20px;
  text-align: right;
}

.table .td-price {
  font-size: 26px;
  font-weight: 300;
  margin-top: 5px;
  text-align: right;
}
.table-shopping > thead > tr > th {
  font-size: 12px;
  text-transform: uppercase;
  color: #555;
}
.table-shopping .td-name {
  min-width: 200px;
  font-weight: 400;
  font-size: 24px;
  line-height: 1.42857143;
}

.table-shopping .td-name small {
  color: #999;
  font-size: 18px;
  font-weight: 300;
}

.table-shopping .img-container {
  width: 120px;
  max-height: 160px;
  overflow: hidden;
  display: block;
}

.table-shopping .img-container img {
  width: 100%;
}

.table-shopping > tbody > tr > td {
  font-size: 14px;
}

.table-shopping .td-number {
  text-align: right;
  min-width: 150px;
  font-size: 18px;
}

.table-shopping .td-number small {
  margin-right: 3px;
}

.table .form-check .form-check-sign {
  top: -13px;
  left: 0;
  padding-right: 0;
}

.table-striped > tbody > tr:nth-of-type(odd) {
  background-color: #f9f9f9 !important;
}

</style>
