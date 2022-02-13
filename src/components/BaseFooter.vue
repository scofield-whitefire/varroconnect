<template>
    <!-- Video Modal -->
    <div class="modal mdll_video fade" id="mdllVideo" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <!-- Close -->
      <button type="button" class="close bbt_close ripple_circle" data-dismiss="modal" aria-label="Close">
        <i class="tio clear"></i>
      </button>
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="modal-body">
            <div class="embed-responsive embed-responsive-16by9">
              <iframe class="embed-responsive-item" src="#" id="video" allowscriptaccess="always" allow="autoplay"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Back to top with progress indicator-->
    <div class="prgoress_indicator">
      <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
      </svg>
    </div>

    <!-- Tosts -->
    <div aria-live="polite" aria-atomic="true" class="d-flex justify-content-center align-items-center">
      <div class="toast toast_demo" id="myTost" role="alert" aria-live="assertive" aria-atomic="true" data-animation="true" data-autohide="false">
        <div class="toast-body">
          <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
            <i class="tio clear"></i>
          </button>
          <h5>Hi there 👋</h5>
          <p>We are glad you joined us <a href="#">&nbsp;</a></p>
        </div>
      </div>
    </div>
    <!-- End. Toasts -->

    <!-- Start Section Loader -->
    <section class="loading_overlay">
      <div class="loader_logo">
        <img class="logo" src="https://orinostudio.com/rakon-theme/assets/img/logo.svg" />
      </div>
    </section>
    <!-- End. Loader -->
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>