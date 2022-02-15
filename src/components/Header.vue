<template>
    <!-- js for Brwoser -->
  <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  <!-- Global site tag (gtag.js) - Google Ads: 971083070 -->


      <!-- Start header -->
      <header class="header-nav-center no_blur active-orange2" id="myNavbar">
        <div class="container">
          <!-- navbar -->
          <nav class="navbar navbar-expand-lg navbar-light px-sm-0">
            <router-link :to="{ name: 'Home' }" class="navbar-brand">
              <img class="logo" src="../assets/varro/logo.png" alt="logo" />
            </router-link>

            <button class="navbar-toggler menu ripplemenu" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <svg viewBox="0 0 64 48">
                <path d="M19,15 L45,15 C70,15 58,-2 49.0177126,7 L19,37"></path>
                <path d="M19,24 L45,24 C61.2371586,24 57,49 41,33 L32,24"></path>
                <path d="M45,33 L19,33 C-8,33 6,-2 22,14 L45,37"></path>
              </svg>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mx-auto nav-pills">
                <li class="nav-item">
                  <a class="nav-link" href="#" id="btnAlert">Docs</a>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" :to="{ name: 'Wallets' }">Wallets</router-link>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#Services">Apps</a>
                </li>
                <li class="nav-item">
                  <router-link :to="{ name: 'Home' }" class="nav-link">About</router-link>
                </li>

              </ul>
              <div class="nav_account">
                <router-link :to="{ name: 'Wallets' }" class="btn btn_sm_primary bg-white opacity-1 c-orange2 border-0 rounded-pill">
                  Connect Now
                </router-link>
              </div>
            </div>
          </nav>
          <!-- End Navbar -->
        </div>
        <!-- end container -->
      </header>
      <!-- End header -->
</template>

<script>
    import xtra from '@/mixins/xtra.js'

    export default {
    mixins: [xtra],
        
    }
</script>

<style lang="scss" scoped>

</style>