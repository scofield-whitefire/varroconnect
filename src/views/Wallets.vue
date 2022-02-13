<template>
  <div id="wrapper">
    <div id="content">
    <Header />

      <!-- Stat main -->
      <main data-spy="scroll" data-target="#navbar-example2" data-offset="0">
        <!-- Start Banner Section -->
        <section class="pt_banner_inner banner_blog_inner">
          <div class="container">
            <div class="row">
              <div class="col-md-8 col-lg-3 order-2 order-lg-1 my-auto">
                <div class="banner_title_inner margin-b-8">
                  <div class="before_title">
                      <nav aria-label="breadcrumb">
                        <ol class="breadcrumb default">
                            <li class="breadcrumb-item"><router-link :to="{ name: 'Home' }">Home</router-link></li>
                            <li class="breadcrumb-item active" aria-current="page">wallets</li>
                        </ol>
                    </nav>
                  </div>
                  <h1>
                    Select Your Wallet To begin 🖐
                  </h1>
                  <p class="c-gray">
                    Multiple iOS and Android wallets support the VarroWalletConnect protocol. Interaction between mobile apps and mobile browsers are supported via mobile deep linking.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>
        <!-- End Banner -->

        <!-- Start categories_creative -->
        <section class=" category_films">
          <div class="container">
            <div class="content cont">
              <div class="row justify-content-center">

                <div class="col-11 col-lg-10">
                  <div class="row checkbox-item">
                    <div class="row">
                      <div class="col-12 aos-init aos-animate" data-aos="fade-up" data-aos-delay="0">
                        <router-link :to="{ name: 'Connect', params: {path: 'aave'}}">
                          <div class="item">
                            <div class="content">
                              <img src="../assets/varro/wallets/aave.jpg" alt="" width="100" height="100">
                              <p>AAVE</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'adapa'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/adapad.jpg' width="100" height="100" />
                              <p>ADAPA</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'aeternity'}}">
                          <div class="item">
                            <div class="content">
                            <img src='../assets/varro/wallets/aeternity.png' width="100" height="100" />
                              <p>aeternity</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'aion'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/aion.png' width="100" height="100" />
                              <p>aion</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'aktionariat'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/aktionariat.png' width="100" height="100" />
                              <p>aktionariat</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'anypad'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/anypad.jpg' width="100" height="100" />
                              <p>anypad</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'atomic'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/atomic.png' width="100" height="100" />
                              <p>atomic</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'atwallet'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/atwallet.png' width="100" height="100" />
                              <p>atwallet</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'authereu'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/authereum.png' width="100" height="100" />
                              <p>authereu</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'binance'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/binance.png' width="100" height="100" />
                              <p>binance</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'bitkeep'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/bitkeep.png' width="100" height="100" />
                              <p>bitkeep</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'bitpay'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/bitpay.jpg' width="100" height="100" />
                              <p>bitpay</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'bnb'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/bnb.png' width="100" height="100" />
                              <p>bnb</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'callisto'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/callisto.png' width="100" height="100" />
                              <p>callisto</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'coin98'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/coin98.png' width="100" height="100" />
                              <p>coin98</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'coinbase'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/coinbase.jpg' width="100" height="100" />
                              <p>coinbase</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'cosmos'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/cosmos.png' width="100" height="100" />
                              <p>cosmos</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'cosmostation'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/cosmostation.png' width="100" height="100" />
                              <p>cosmostation</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'defiat'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/defiat.jpg' width="100" height="100" />
                              <p>defiat</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'digitex'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/digitex.png' width="100" height="100" />
                              <p>digitex</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'elrond'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/elrond.jpg' width="100" height="100" />
                              <p>elrond</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'enjin'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/enjin.jpg' width="100" height="100" />
                              <p>enjin</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'eth classic'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/ethereum-classic.png' width="100" height="100" />
                              <p>eth classic</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'exodus'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/exodus.jpg' width="100" height="100" />
                              <p>exodus</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'fantom'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/fantom.png' width="100" height="100" />
                              <p>fantom</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'filecoin'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/filecoin.png' width="100" height="100" />
                              <p>filecoin</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'fio'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/fio.png' width="100" height="100" />
                              <p>fio</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'flare'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/flare.jpg' width="100" height="100" />
                              <p>flare</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'fortmatic'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/fortmatic.png' width="100" height="100" />
                              <p>fortmatic</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'gochain'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/gochain.png' width="100" height="100" />
                              <p>gochain</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'guard'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/guard.png' width="100" height="100" />
                              <p>guard</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'harmony'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/harmony.jpg' width="100" height="100" />
                              <p>harmony</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'icon'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/icon.png' width="100" height="100" />
                              <p>icon</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'iotex'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/iotex.png' width="100" height="100" />
                              <p>iotex</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'kava'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/kava.png' width="100" height="100" />
                              <p>kava</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'kin'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/kin.png' width="100" height="100" />
                              <p>kin</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'ledger'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/ledger.png' width="100" height="100" />
                              <p>ledger</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'lightning'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/lightning.jpg' width="100" height="100" />
                              <p>lightning</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'lunchpool'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/lunchpool.jpg' width="100" height="100" />
                              <p>lunchpool</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'math wallet'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/math-wallet.png' width="100" height="100" />
                              <p>math wallet</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'metamask'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/metamask.png' width="100" height="100" />
                              <p>metamask</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'MEW'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/MEW.png' width="100" height="100" />
                              <p>MEW</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'nano'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/nano.png' width="100" height="100" />
                              <p>nano</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'nearpad'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/nearpad.jpg' width="100" height="100" />
                              <p>nearpad</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'nebulas'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/nebulas.png' width="100" height="100" />
                              <p>nebulas</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'nimiq'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/nimiq.png' width="100" height="100" />
                              <p>nimiq</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'ontology'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/ontology.png' width="100" height="100" />
                              <p>ontology</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'paid'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/paid.jpg' width="100" height="100" />
                              <p>paid</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'pancakesawp'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/pancakeswap.png' width="100" height="100" />
                              <p>pancakesawp</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'parsiq'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/parsiq.jpg' width="100" height="100" />
                              <p>parsiq</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'poa'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/poa.png' width="100" height="100" />
                              <p>poa</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'polka'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/polka.jpg' width="100" height="100" />
                              <p>polka</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'polkadot'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/polkadot.png' width="100" height="100" />
                              <p>polkadot</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'portis'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/portis.png' width="100" height="100" />
                              <p>portis</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'ronin'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/ronin.jpg' width="100" height="100" />
                              <p>ronin</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'safepal'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/safepal.png' width="100" height="100" />
                              <p>safepal</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'scale'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/scale.jpg' width="100" height="100" />
                              <p>scale</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'scatter'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/scatter.jpg' width="100" height="100" />
                              <p>scatter</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'skale'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/skale.png' width="100" height="100" />
                              <p>skale</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'solana'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/solana.png' width="100" height="100" />
                              <p>solana</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'squarelink'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/squarelink.png' width="100" height="100" />
                              <p>squarelink</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'stellar'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/stellar.png' width="100" height="100" />
                              <p>stellar</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'swapp'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/swapp.jpg' width="100" height="100" />
                              <p>swapp</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'terra'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/terra.png' width="100" height="100" />
                              <p>terra</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'tezos'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/tezos.png' width="100" height="100" />
                              <p>tezos</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'theta'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/theta.png' width="100" height="100" />
                              <p>theta</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'thundertoken'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/thundertoken.png' width="100" height="100" />
                              <p>thundertoken</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'tomo'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/tomo.png' width="100" height="100" />
                              <p>tomo</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'torus'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/torus.jpg' width="100" height="100" />
                              <p>torus</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'trezor'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/trezor.png' width="100" height="100" />
                              <p>trezor</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'tron'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/tron.png' width="100" height="100" />
                              <p>tron</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'trustvault'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/trustvault.png' width="100" height="100" />
                              <p>trustvault</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'trustwallet'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/trustwallet.png' width="100" height="100" />
                              <p>trustwallet</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'unifarm'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/unifarm.jpg' width="100" height="100" />
                              <p>unifarm</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'uniswap'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/uniswap.png' width="100" height="100" />
                              <p>uniswap</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'vechain'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/vechain.jpg' width="100" height="100" />
                              <p>vechain</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'wallet connect'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/logo.svg' width="100" height="100" />
                              <p>wallet connect</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'wanchain'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/wanchain.png' width="100" height="100" />
                              <p>wanchain</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'waves'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/waves.png' width="100" height="100" />
                              <p>waves</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'xrp'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/xrp.png' width="100" height="100" />
                              <p>xrp</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'zelcore'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/zelcore.png' width="100" height="100" />
                              <p>zelcore</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'zilliqa'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/zilliqa.png' width="100" height="100" />
                              <p>zilliqa</p>
                            </div>
                          </div>
                        </router-link>
                        <router-link :to="{ name: 'Connect', params: {path: 'more wallet'}}">
                          <div class="item">
                            <div class="content">
                              <img src='../assets/varro/wallets/btc.png' width="100" height="100" />
                              <p>more wallet</p>
                            </div>
                          </div>
                        </router-link>
        
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- End. categories_creative -->


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
        <meta property="og:title" content="Wallet - Verro Wallet Connect" />
        <meta property="og:image" content="https://orinostudio.com/rakon-theme/assets/img/favicon.ico" />
        <meta property="og:url" content="https://verrowalletconnect.com/" />
        <meta property="og:locale" content="en_US"/>
      <meta name="description" content="Secured Open Source Protocol - Dapp Connection" />
      <meta name="keywords" content="Varro Wallet , Home, Wallets, varro, varro wallet connect, wallet connect, secure wallet connect, wallet linking, VWC" />
      <meta name="author" content="Varro Inc - Open Source Protocol" />
      <link rel="shortcut icon" href="https://orinostudio.com/rakon-theme/assets/img/favicon.ico" type="image/x-icon" />
      <title>Wallet - Verro Wallet Connect</title>
  </Teleport>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import BaseFooter from '@/components/BaseFooter.vue'
import dialog from '@/mixins/dialog.js'
import xtra from '@/mixins/xtra.js'

export default {
  name: 'Wallets',
  mixins: [dialog, xtra],
  components: {
    Header, Footer, BaseFooter
  },
  mounted() {
    
  }
}
</script>

<style lang="scss" scoped>

</style>