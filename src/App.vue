<template>
  <div id="app">
    <section class="hero is-info is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="column is-12">
            <h1 class="title">
              Türkiye Veterinerler Listesi
            </h1>
            <h2 class="subtitle">
              Türkiye Veterinerler listesi ile isme, şehir adına ve ilçe ismine göre arama yapabilirsiniz.
            </h2>
            <div class="box">
              <router-view/>
            </div>
          </div>
        </div>
      </div>
      <div class="hero-foot">
        <div class="container">
          <div class="tabs is-centered">
            <ul>
              <li class="footer-text">
                <a href="https://www.peyloride.xyz" style="color:white;">
                  Made with &nbsp;<span style="color: #e25555;">&#9829;</span>&nbsp; by Peyloride
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <link rel="stylesheet" href="//cdn.materialdesignicons.com/2.0.46/css/materialdesignicons.min.css">
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html,body {
  font-family: 'Open Sans', serif;
}
.hero.is-info {
  background: linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ), url('https://source.unsplash.com/1600x900/?pet') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.hero .nav, .hero.is-success .nav {
  -webkit-box-shadow: none;
  box-shadow: none;
}
.hero .subtitle {
  padding: 3rem 0;
  line-height: 1.5;
}
</style>
