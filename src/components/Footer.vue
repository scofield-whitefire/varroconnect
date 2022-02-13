<template>
      <!-- Start footer -->
      <footer class="sh_footer_email padding-b-8 bg_fitness">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="email_logo">
                <div class="media">
                  <router-link :to="{ name: 'Home' }" class="brand_logo my-auto">
                    <img src="https://orinostudio.com/rakon-theme/assets/img/logo.svg" alt="">
                  </router-link>
                  <div class="media-body my-auto">
                    <div class="txt">
                      <span>Neet help? Contact us at</span>
                      <a href="mailto:info@varrowalletconnect.com">
                        info@varrowalletconnect.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 ml-auto text-lg-right mt-auto">
              <a href="#Testimonial" class="btn-social c-white color-facebook border-0 mb-0 mr-2">
                <i class="tio facebook"></i>
              </a>
              <a href="#Testimonial" class="btn-social c-white color-instagram border-0 mb-0 mr-2">
                <i class="tio instagram"></i>
              </a>
              <a href="#Testimonial" class="btn-social c-white color-tik_tok border-0 mb-0 mr-2">
                <i class="tio tik_tok"></i>
              </a>
              <a href="#Testimonial" class="btn-social c-white color-youtube border-0 mb-0 mr-2">
                <i class="tio youtube"></i>
              </a>
            </div>
          </div>
          <div class="dividar"></div>
          <div class="row">
            <div class="col-md-5 col-lg-4">
              <div class="copyright">
                <p>© 2022 <router-link :to="{ name: 'Home' }" target="_blank">Varro INC.</router-link> All Right
                  Reserved</p>
              </div>
            </div>
            <div class="col-md-7 col-lg-8">
              <ul class="nav justify-content-md-end">
                <li class="nav-item">
                  <a class="nav-link" href="#">Support</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Privacy Policy</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Terms of Use Policy</a>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </footer>
      <!-- End. footer -->

</template>

<script>
    import xtra from '@/mixins/xtra.js'

    export default {
    mixins: [xtra],
        
    }
</script>

<style lang="scss" scoped>

</style>