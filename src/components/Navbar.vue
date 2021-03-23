<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
      <div id="navbarContent" class="collapse navbar-collapse">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item mr-5">
            <a href="" class="nav-link font-weight-bold text-uppercase"
              >Home</a>
          </li>
          <li class="nav-item ml-5 mr-5">
            <a href="" class="nav-link font-weight-bold text-uppercase"
              >About</a>
          </li>
          <li class="nav-item ml-5">
            <a href="" class="nav-link font-weight-bold text-uppercase"
              ><i class="fa fa-shopping-cart" aria-hidden="true"></i> Cart</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
body {
    background: #eaafc8;
    background: -webkit-linear-gradient(to right, #eaafc8, #654ea3);
    background: linear-gradient(to right, #eaafc8, #654ea3);
    min-height: 100vh
}

code {
    color: #745eb1;
    background: rgb(255, 255, 255);
    padding: 0.1rem 0.2rem;
    border-radius: 0.2rem
}

.text-uppercase {
    letter-spacing: 0.08em
}
</style>
