import Vue from 'vue'
import Router from 'vue-router'
import OwnerCredentials from '@/views/OwnerCredentials'
import markAsStolen from '@/components/Vehicle/markAsStolen'
import kaart from '@/components/Vehicle/kaart'
import licensePlates from '@/components/Vehicle/licensePlates'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/licensePlates',
      name: 'licensePlates',
      component: licensePlates
    },
    {
      path: '/',
      name: 'kaart',
      component: kaart
    },

    {
      path: '/vehicles/markAsStolen',
      name: 'markAsStolen',
      component: markAsStolen
    },
    {
      path: '/owner-credentials',
      name: 'ownercredentials',
      component: OwnerCredentials
    },
  ]
})
