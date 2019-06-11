<template>
  <div>
    <v-card v-if="vehicle" dark flat color="primary" class="mx-auto">
      <v-card-title>
        <v-icon large left>fas fa-car</v-icon>
        <span class="title font-weight-light">Vehicle #{{vehicle.id}}</span>
        <v-spacer></v-spacer>
        <v-btn v-if="!v" icon @click="hide()">
          <v-icon>fas fa-times</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class>

        <v-layout row wrap v-if="!ownershipHistory">
          <v-flex xs6>Licence plate</v-flex>
          <v-flex xs6>{{vehicle.licencePlate}}</v-flex>
          <v-flex xs6>Emission type</v-flex>
          <v-flex xs6>{{vehicle.vehicleType}}</v-flex>
          <v-flex xs12>
            <owner-credential class="mt-2 ml-4" :ownerCredential="vehicle.ownerCredentials"></owner-credential>
          </v-flex>
        </v-layout>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
  import OwnerCredential from '@/components/OwnerCredential/ownerCredential.vue';

  export default {
    props: ["v"],
    components: {OwnerCredential},
    data() {
      return {
        activeOwnerCredential: null,
        activeCarTracker: null,
        ownerCredentials: null,
        carTrackers: null,
        bills: null,
        ownershipHistory: null
      };
    },
    methods: {

    },
    computed: {
      vehicle() {
        if (this.v) return this.v;

        return this.$store.getters.vehicle;
      }
    }
  };
</script>

<style>
</style>
