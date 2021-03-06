module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'story' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  plugins: [{
    src: 'plugins/lazylod.js',
    ssr: false
  }],
  /*
   ** Global CSS
   */
  css: ['~static/css/main.css'],
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#3B8070' }
}
