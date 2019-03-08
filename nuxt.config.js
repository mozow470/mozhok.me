const pkg = require('./package');

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - Mozhok.ME',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Rozhok' },
      { name: 'robots', content: 'noindex,nofollow,noarchive' }, //SEOに引っかからないようにする

      //OGP
      { name: 'og:site_name', content: 'Mozuhok.me' } ,
      { name: 'og:title', content: 'Mozuhok.me' } ,
      { name: 'og:description', content: 'Rozhok' } ,
      { name: 'og:type', content: 'website' } ,
      { name: 'og:url', content: 'https://www.mozhok.me/' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Fredoka+One|Open+Sans|Strait|M+PLUS+Rounded+1c:300,500&amp;subset=japanese' },
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    { src: '~/assets/sass/style.scss', lang: 'scss' }
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [,
    // Doc: https://bootstrap-vue.js.org/docs/
    // 'bootstrap-vue/nuxt',
    ['nuxt-sass-resources-loader', [
      '@/assets/sass/variable.scss',
      '@/assets/sass/mixin.scss',
    ]],
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  }
}
