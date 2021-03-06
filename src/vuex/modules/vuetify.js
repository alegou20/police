import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  theme: {
    primary: '#2D7DD2',
    secondary: '#E53935',
    background: '#E53935',
    accent: '#FFF275',
    error: '#FF4E00',
    success: '#FFF275',
    warning: '#F5B700'
  },
  options: {
    customProperties: true
  },
  iconfont: 'fa',
})
