import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './vuex/store'
import './registerServiceWorker'
import moment from 'moment'

// custom vue components
import Loader from '@/components/Loader'
Vue.component('loader', Loader)

// import Vehicle from '@/components/Vehicle/Vehicle'
// Vue.component('vehicle', Vehicle)

// import OwnerCredential from '@/components/OwnerCredential/OwnerCredential'
// Vue.component('owner-credential', OwnerCredential)

import ApiService from "./common/api.service";

ApiService.init();

// filters
Vue.filter('date', function (value) {
  if (value) {
    return moment(String(value)).format('MM/DD/YYYY hh:mm:ss') + "u"
  }
})

Vue.config.productionTip = false

new Vue({
  // router,
  store,
  render: h => h(App)
}).$mount('#app')
