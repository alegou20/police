<template>
  <div>
    <v-card v-if="vehicle" dark flat color="primary" class="mx-auto">
      <v-card-title>
        <v-icon large left>fas fa-car</v-icon>
        <span class="title font-weight-light">Vehicle #{{vehicle.id}}</span>

      </v-card-title>

      <v-card-text class>
        <v-layout row wrap>
          <v-flex xs6>Licence plate</v-flex>
          <v-flex xs6>{{vehicle.licencePlate}}</v-flex>
          <!--<v-flex xs12 md6>-->
            <!--<rate-category class="mt-4 ml-4" v-if="vehicle.rateCategory" :rc="vehicle.rateCategory"></rate-category>-->
          <!--</v-flex>-->
          <v-flex xs12 md6>
            <v-tabs v-model="activeCarTracker" color="primary" dark slider-color="warning">
              <v-tab
                      v-for="(carTracker, index) in vehicle.carTrackers"
                      :key="`tab-ct-${index}`"
                      ripple
              >{{carTracker.hardware}}</v-tab>
              <v-tab-item
                      v-for="(carTracker, index) in vehicle.carTrackers"
                      :key="`tab-item-ct-${index}`"
              >
                <car-tracker class="mt-2 ml-4" v-if="carTracker" :car-tracker="carTracker"></car-tracker>
              </v-tab-item>
            </v-tabs>
          </v-flex>
          <v-flex xs12 md6>
            <v-tabs v-model="activeOwnerCredential" color="primary" dark slider-color="warning">
              <v-tab
                      v-for="(ownerCredential, index) in vehicle.ownerCredentials"
                      :key="`tab-${index}`"
                      ripple
              >{{ownerCredential.name}}</v-tab>
              <v-tab-item
                      v-for="(ownerCredential, index) in vehicle.ownerCredentials"
                      :key="`tab-item-${index}`"
              >
                <owner-credential class="mt-2 ml-4" :owner-credential="ownerCredential"></owner-credential>
              </v-tab-item>
            </v-tabs>
          </v-flex>

        </v-layout>
      </v-card-text>

    </v-card>
  </div>
</template>

<script>
  import ownerCredential from '@/components/OwnerCredential/ownerCredential.vue'
  import carTracker from '@/components/CarTracker/carTracker.vue'

  export default {
    props: ["vehicle"],
    components: {
      ownerCredential,
      carTracker
    },
    data() {
      return {
        activeOwnerCredential: null,
        activeCarTracker: null,

      };
    },
    created () {
      console.log(this.vehicle)
    }
  };
</script>

<style>
</style>
