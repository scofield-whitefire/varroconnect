<template>
  <div id="wrapper">
    <div id="content">
    <Header />

      <!-- Stat main -->
      <main data-spy="scroll" data-target="#navbar-example2" data-offset="0">

        <!-- Start Banner -->
        <section class="pt_banner_inner no-before banner_app_two banner_app_three" id="myNavbar">
          <div class="container">
            <div class="row justify-content-center text-center">
              <div class="col-md-8 col-lg-6">
                <div class="banner_title">
                  <h1 class="margin-b-2">
                    <span class="c-orange2">Lukky</span> Wallet Connect.
                  </h1>
                  <p class="c-dark">An Open Source protocol for connecting Wallets to Dapps.
                  </p>
                </div>
                <div class="button_app padding-t-3">
                  <router-link :to="{ name: 'Wallets' }" class="btn btn_with_ico rounded-pill">
                    <span>Connect Now</span>
                    <i class="tio arrow_drop_down_circle_outlined"></i>
                  </router-link>
                  <!-- <div class="c-gray mt-4">
                    <span class="pr-1">Available on</span>
                    <i class="tio apple align-middle font-s-16"></i>
                    <i class="tio android align-middle font-s-16"></i>
                  </div> -->
                </div>
              </div>
            </div>
            <div class="mockup_ap">
              <img v-show="show" class="img_top floating-simple" src="../assets/varro/img/app/float-1.png" alt="">
              <img v-show="show" class="img_bottom floating-simple2" src="../assets/varro/img/app/float-3.png" alt="">
            </div>
          </div>
        </section>
        <!-- End. Banner -->

        <!-- Start Service -->
        <section class="services_section service_four">
          <div class="container">
            <div class="row justify-content-center text-center">
              <div class="col-md-4 item mx-auto">
                <div class="items_serv sevice_block" data-aos="fade-up" data-aos-delay="100">
                  <div class="icon--top gradient_red">
                    <img src="../assets/varro/img/png/001-shield.png" alt="" style="width: 31px;height: 30px;">
                  </div>
                  <div class="txt">
                    <h3>Secure Encryption</h3>
                    <p>
                      The protocol establishes a remote connection between two apps and/or devices. These payloads are symmetrically encrypted through a shared key between the two peers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row justify-content-center text-center">
              <div class="col-md-4 item">
                <div class="items_serv sevice_block" data-aos="fade-up" data-aos-delay="0">
                  <div class="icon--top gradient_blue">
                    <img src="../assets/varro/img/png/003-qr-code.png" alt="" style="width: 31px;height: 30px;">
                  </div>
                  <div class="txt">
                    <h3>QR Codes & Deep Links</h3>
                    <p>
                      The connection is initiated by one peer displaying a QR Code or deep link with a standard VarroWalletConnect URI and is established when the counter-party approves this connection request.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-lg-3 item my-md-auto order-3 order-md-0">
                <div data-aos="fade-up" data-aos-delay="100">
                  <router-link :to="{ name: 'Wallets' }" class="btn btn_md_primary sweep_letter bg-orange2 c-white sweep_top rounded-pill">
                    <div class="inside_item">
                      <span data-hover="Let's go 💪">Connect Now 💪</span>
                    </div>
                  </router-link>
                </div>
              </div>
              <div class="col-md-4 item">
                <div class="items_serv sevice_block" data-aos="fade-up" data-aos-delay="200">
                  <div class="icon--top gradient_green">
                    <img src="../assets/varro/img/png/004-protocol.png" alt="" style="width: 31px;height: 30px;">
                  </div>
                  <div class="txt">
                    <h3>Protocol</h3>
                    <p>VarroWalletConnect is not an app, but an open protocol to communicate securely between Wallets and Dapps (Web3 Apps).</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- End. Services -->

        <!-- Start features_app_fitness -->
        <section class="features_app_fitness padding-t-12 margin-b-3" id="Features">
          <div class="container">
            <div class="row justify-content-center text-center">
              <div class="col-lg-6">
                <div class="title_sections">
                  <h2 class="font-s-60 font-w-700"><span class="c-orange2">Connect</span> in 3 Simple Steps.</h2>
                </div>
              </div>
            </div>
            <div class="body_features">
              <div class="row justify-content-center">
                <div class="col-md-6 col-lg-4 mb-5 mb-md-0">
                  <div v-show="show" class="moc_app">
                    <div class="tab-content" id="v-pills-tabContent">
                      <div class="tab-pane fade" id="v-pills-screenOne" role="tabpanel" aria-labelledby="v-pills-screenOne-tab">
                        <img class="slide-in-bottom" src="../assets/varro/img/app/002.png" alt="">
                      </div>
                      <div class="tab-pane fade show active" id="v-pills-screenTwo" role="tabpanel" aria-labelledby="v-pills-screenTwo-tab">
                        <img class="slide-in-bottom" src="../assets/varro/img/app/001.png" alt="">
                      </div>
                      <div class="tab-pane fade" id="v-pills-screenThree" role="tabpanel" aria-labelledby="v-pills-screenThree-tab">
                        <img class="slide-in-bottom" src="../assets/varro/img/app/003.png" alt="">
                      </div>
                    </div>

                  </div>

                </div>
                <div class="col-md-6 col-lg-6 offset-lg-1">
                  <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <a class="nav-link" id="v-pills-screenOne-tab" data-toggle="pill" href="#v-pills-screenOne" role="tab" aria-controls="v-pills-screenOne" aria-selected="false">
                      <div class="row">
                        <div class="col-lg-8">
                          <div class="txt_feat">
                            <span>Network</span>
                            <h3>Choose the network you want to connect to.</h3>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a class="nav-link active" id="v-pills-screenTwo-tab" data-toggle="pill" href="#v-pills-screenTwo" role="tab" aria-controls="v-pills-screenTwo" aria-selected="true">
                      <div class="row">
                        <div class="col-lg-8">
                          <div class="txt_feat">
                            <span>Wallet</span>
                            <h3>Choose your wallet .</h3>
                          </div>
                        </div>
                        <div v-show="show" class="col-lg-4 my-auto">
                          <div class="play_vv">
                            <button type="button" class="btn btn_video" data-toggle="modal" data-src="https://www.youtube.com/embed/YbJOTdZBX1g" data-target="#mdllVideo">
                              <div class="scale rounded-circle b play_video no-before no-after">
                                <i class="tio play_outlined"></i>
                              </div>
                            </button>
                            <span class="name_vv">Play Video</span>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a class="nav-link" id="v-pills-screenThree-tab" data-toggle="pill" href="#v-pills-screenThree" role="tab" aria-controls="v-pills-screenThree" aria-selected="false">
                      <div class="row">
                        <div class="col-lg-8">
                          <div class="txt_feat">
                            <span>Connect</span>
                            <h3>Use a secured method to connect your wallet.</h3>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- End. features_app_fitness -->

        <!-- Start fitures_Appfitness -->
        <section class="services_section service_four fitures_Appfitness padding-t-15" id="Services">
          <div class="container">
            <div class="row justify-content-center text-center">
              <div class="col-lg-6">
                <div class="title_sections">
                  <h2 class="font-s-60 font-w-700"><span class="c-orange2">Top </span>Features</h2>
                </div>
              </div>
            </div>

            <div class="features_bb">
              <div class="row">
                <div class="col-lg-7 margin-t-5">
                  <div class="row">
                    <div class="col-md-6 col-lg-6 item">
                      <div class="items_serv sevice_block" data-aos="fade-up" data-aos-delay="0">
                        <div class="icon--top gradient_orange">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                            <g id="Group_6445" data-name="Group 6445" transform="translate(-3 -2)">
                              <path id="Path-75" d="M5,15,3,21.5l6.5-2Z" fill="#fd7028" fill-rule="evenodd" opacity="0.3" />
                              <path id="Combined-Shape" d="M13,2A10,10,0,1,1,3,12,10,10,0,0,1,13,2ZM7.168,13.555A6.862,6.862,0,0,0,13,17a6.862,6.862,0,0,0,5.832-3.445,1,1,0,1,0-1.664-1.109A4.894,4.894,0,0,1,13,15a4.894,4.894,0,0,1-4.168-2.555,1,1,0,1,0-1.664,1.109Z"
                                fill="#fd7028" fill-rule="evenodd" />
                            </g>
                          </svg>
                        </div>
                        <div class="txt">
                          <h3>Chain Agnostic</h3>
                          <p>
                            Interoperate with any blockchain. Support new blockchains and rollups out-of-the-box.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 col-lg-6 item">
                      <div class="items_serv sevice_block" data-aos="fade-up" data-aos-delay="100">
                        <div class="icon--top gradient_blue">
                          <svg id="Stockholm-icons-_-General-_-Notification_2" data-name="Stockholm-icons-/-General-/-Notification#2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <rect id="bound" width="24" height="24" fill="none" />
                            <path id="Combined-Shape" d="M13.207,4A5.5,5.5,0,0,0,20,10.793V17a3,3,0,0,1-3,3H7a3,3,0,0,1-3-3V7A3,3,0,0,1,7,4Z" fill="#165df5" fill-rule="evenodd" />
                            <circle id="Oval" cx="2.5" cy="2.5" r="2.5" transform="translate(16 3)" fill="#165df5" opacity="0.3" />
                          </svg>
                        </div>
                        <div class="txt">
                          <h3>Multi Session</h3>
                          <p>
                            Manage as many sessions as needed. A flexible API is provided to build the desired UX.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 col-lg-6 item">
                      <div class="items_serv sevice_block" data-aos="fade-up" data-aos-delay="200">
                        <div class="icon--top gradient_green">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 18">
                            <g id="Group_6446" data-name="Group 6446" transform="translate(0 -3)">
                              <path id="Combined-Shape" d="M18,14a3,3,0,1,1,3-3A3,3,0,0,1,18,14ZM9,11a4,4,0,1,1,4-4A4,4,0,0,1,9,11Z" fill="#31d1ab" opacity="0.3" />
                              <path id="Combined-Shape-2" data-name="Combined-Shape" d="M17.6,15c3.407.037,6.188,1.76,6.4,5.4a.51.51,0,0,1-.543.6H19.6A9.956,9.956,0,0,0,17.6,15ZM0,20.2C.388,15.427,4.262,13,8.983,13,13.771,13,17.7,15.293,18,20.2a.687.687,0,0,1-.751.8H.728A1.107,1.107,0,0,1,0,20.2Z"
                                fill="#31d1ab" />
                            </g>
                          </svg>
                        </div>
                        <div class="txt">
                          <h3>Multi Chain</h3>
                          <p>
                            Connect to a wallet with one or more chains simultaneously and send transactions to different chains at the same time. No more chain switching.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 col-lg-6 item">
                      <div class="items_serv sevice_block" data-aos="fade-up" data-aos-delay="300">
                        <div class="icon--top gradient_red">
                          <svg id="Stockholm-icons-_-Media-_-Equalizer" data-name="Stockholm-icons-/-Media-/-Equalizer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <rect id="bound" width="24" height="24" fill="none" />
                            <rect id="Rectangle-62-Copy" width="3" height="16" rx="1.5" transform="translate(13 4)" fill="#f93542" opacity="0.3" />
                            <rect id="Rectangle-62-Copy-2" width="3" height="11" rx="1.5" transform="translate(8 9)" fill="#f93542" />
                            <rect id="Rectangle-62-Copy-4" width="3" height="9" rx="1.5" transform="translate(18 11)" fill="#f93542" />
                            <rect id="Rectangle-62-Copy-3" width="3" height="7" rx="1.5" transform="translate(3 13)" fill="#f93542" />
                          </svg>
                        </div>
                        <div class="txt">
                          <h3>Permission System</h3>
                          <p>
                            Explicitly require wallets to meet compatibility with all signing methods that your dapp requires.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="Image_fitness">
                <img src="../assets/varro/img/app/fitness.png" alt="">
              </div>
            </div>
          </div>
        </section>
        <!-- End. fitures_Appfitness -->

        <!-- Start reviews_app_random -->
        <!-- <section class="reviews_app_random">

          <div class="container">
            <div class="body_text">
              <div class="row justify-content-center text-center">
                <div class="col-lg-8">
                  <div class="title_sections mb-0">
                    <h2 class="font-s-60 font-w-700 margin-b-4"><span class="c-orange2">What </span> our users have to
                      say</h2>
                    <button type="button" class="btn btn_md_primary sweep_letter sweep_top rounded-pill btn_review">
                      <div class="inside_item">
                        <span data-hover="Let's go 💪">More Reviews</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="emoji_shap">
              <img src="../assets/varro/img/app/1f44d.png" alt="">
              <img src="../assets/varro/img/app/1f60d.png" alt="">
              <img src="../assets/varro/img/app/1f4aa.png" alt="">
              <img src="../assets/varro/img/app/1f600.png" alt="">
            </div>


            <div class="col-md-3 item_review review_one">
              <p class="content">
                "Just super :) We have a better feeling now when our daughter is on her way home alone...accurate to
                within a few meters. Great app therefore also 5 stars"
              </p>
              <div class="footer_content">
                <div class="media user_oo">
                  <img src="../assets/varro/img/app/app_store.png" alt="">
                  <div class="media-body">
                    <h4>Virgin974</h4>
                    <span>App Store</span>
                  </div>
                </div>
                <div class="rated">
                  <i class="tio star"></i>
                  <i class="tio star"></i>
                  <i class="tio star"></i>
                  <i class="tio star"></i>
                  <i class="tio star"></i>
                </div>
              </div>
            </div>

            <div class="col-md-3 item_review review_two">
              <p class="content">
                "Just super :) We have a better feeling now when our daughter is on her way home alone...accurate to
                within a few meters. Great app therefore also 5 stars"
              </p>
              <div class="footer_content">
                <div class="media user_oo">
                  <img src="../assets/varro/img/app/app_store.png" alt="">
                  <div class="media-body">
                    <h4>Virgin974</h4>
                    <span>App Store</span>
                  </div>
                </div>
                <div class="rated">
                  <i class="tio star"></i>
                  <i class="tio star"></i>
                  <i class="tio star"></i>
                  <i class="tio star"></i>
                  <i class="tio star"></i>
                </div>
              </div>
            </div>

            <div class="col-md-3 item_review review_three">
              <p class="content">
                "Very very very useful especially because the person who wants to be tracked starts the way by himself
                and can not be observed without him knowing this. Super app for our daughter,."
              </p>
              <div class="footer_content">
                <div class="media user_oo">
                  <img src="../assets/varro/img/app/googleplay.png" alt="">
                  <div class="media-body">
                    <h4>Slack1ner</h4>
                    <span>Google Play</span>
                  </div>
                </div>
                <div class="rated">
                  <i class="tio star"></i>
                  <i class="tio star"></i>
                  <i class="tio star"></i>
                  <i class="tio star"></i>
                  <i class="tio star"></i>
                </div>
              </div>
            </div>

            <div class="col-md-3 item_review review_four">
              <p class="content">
                "Very very very useful especially because the person who wants to be tracked starts the way by himself
                and can not be observed without him knowing this. Super app for our daughter,."
              </p>
              <div class="footer_content">
                <div class="media user_oo">
                  <img src="../assets/varro/img/app/googleplay.png" alt="">
                  <div class="media-body">
                    <h4>Slack1ner</h4>
                    <span>Google Play</span>
                  </div>
                </div>
                <div class="rated">
                  <i class="tio star"></i>
                  <i class="tio star"></i>
                  <i class="tio star"></i>
                  <i class="tio star"></i>
                  <i class="tio star"></i>
                </div>
              </div>
            </div>

          </div>

        </section> -->
        <!-- End. reviews_app_random -->

        <!-- Start download_section_app -->
        <!-- <section class="download_section_app padding-t-10" id="Download">
          <div class="container">
            <div class="row justify-content-center text-center">
              <div class="col-lg-4">
                <div class="title_sections margin-b-6">
                  <h2 class="font-s-60 c-white font-w-700">Get it now
                    for free
                  </h2>
                </div>
              </div>
              <div class="col-12">
                <div class="button_apoo">
                  <div class="app-mobile-btn">
                    <a href="#" target="_blank" class="btn btn_apple rounded-pill">
                      <div class="media">
                        <div class="txt">
                          <span>Download on the</span>
                          <p>Apple Store</p>
                        </div>
                        <div class="media-body my-auto">
                          <div class="icoon">
                            <i class="tio apple"></i>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="#" target="_blank" class="btn btn_google rounded-pill">
                      <div class="media">
                        <div class="txt">
                          <span>Download on the</span>
                          <p>Apple Store</p>
                        </div>
                        <div class="media-body my-auto">
                          <div class="icoon">
                            <svg id="google-play" xmlns="http://www.w3.org/2000/svg" width="16.78" height="18.977" viewBox="0 0 16.78 18.977">
                              <path id="Path_1617" data-name="Path 1617" d="M262.218,169.194,259,167.338l-4.4,3.29,4.4,3.29,3.225-1.862a1.67,1.67,0,0,0-.011-2.861Z" transform="translate(-246.252 -161.129)" fill="#ff9100" />
                              <path id="Path_1618" data-name="Path 1618" d="M39.063,21.784l-3.9,5.009L30.1,30.783a1.691,1.691,0,0,1-.5-1.2V13.96a1.691,1.691,0,0,1,.5-1.2l5.065,4.017Z" transform="translate(-29.601 -12.285)" fill="#25d9f8" />
                              <path id="Path_1619" data-name="Path 1619" d="M255.714,218.735l-1.113,1.436V217.3Z" transform="translate(-246.252 -209.236)" fill="#00c0f1" />
                              <path id="Path_1620" data-name="Path 1620" d="M55.358,6.2l-3.3,3.3L43.1.474a2.51,2.51,0,0,1,.345-.256,1.648,1.648,0,0,1,1.692.033l5.811,3.415Z" transform="translate(-42.6 0)" fill="#7fe881" />
                              <path id="Path_1621" data-name="Path 1621" d="M259.009,101.338l-3.3,3.3L254.6,103.52V98.8Z" transform="translate(-246.252 -95.134)" fill="#5bc980" />
                              <path id="Path_1622" data-name="Path 1622" d="M55.358,259.3l-4.408,2.538-5.822,3.4a1.7,1.7,0,0,1-.857.245,1.728,1.728,0,0,1-.824-.223A2.516,2.516,0,0,1,43.1,265l8.961-9Z" transform="translate(-42.6 -246.501)" fill="#ff637b" />
                              <path id="Path_1623" data-name="Path 1623" d="M259.009,259.3l-4.408,2.538v-4.72L255.714,256Z" transform="translate(-246.252 -246.501)" fill="#e63950" />
                            </svg>

                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="row justify-content-center text-center">
              <div class="col-md-6 col-lg-4">
                <div class="mockupapp_footer">
                  <img src="../assets/varro/img/app/002.png" alt="">
                </div>
              </div>
            </div>
          </div>
        </section> -->
        <!-- End. download_section_app -->

      </main>
      <!-- end main -->

        <Footer />
          </div>
          <BaseFooter />
          </div>
  <!-- End. wrapper -->

  <Teleport to="#head">
      <meta name="theme-color" content="#fd7028">
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width,maximum-scale=1, initial-scale=1.0">
        <meta property="og:site_name" content="Verro Wallet Connect" />
        <meta property="og:title" content="Home - Verro Wallet Connect" />
        <meta property="og:image" content="https://orinostudio.com/rakon-theme/assets/img/favicon.ico" />
        <meta property="og:url" content="https://verrowalletconnect.com/" />
        <meta property="og:locale" content="en_US"/>
      <meta name="description" content="Secured Open Source Protocol - Dapp Connection" />
      <meta name="keywords" content="Varro Home , Home, Wallets, varro, varro wallet connect, wallet connect, secure wallet connect, wallet linking, VWC" />
      <meta name="author" content="Varro Inc - Open Source Protocol" />
      <link rel="shortcut icon" href="https://orinostudio.com/rakon-theme/assets/img/favicon.ico" type="image/x-icon" />
      <title>Home - Verro Wallet Connect</title>
  </Teleport>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import BaseFooter from '@/components/BaseFooter.vue'
import dialog from '@/mixins/dialog.js'
import xtra from '@/mixins/xtra.js'

export default {
  name: 'Home',
  mixins: [dialog, xtra],
  components: {
    Header, Footer, BaseFooter
  },
  mounted() {
    
  }
}
</script>
