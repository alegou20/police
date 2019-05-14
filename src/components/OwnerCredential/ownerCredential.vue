<template>
  <div>
    <v-card v-if="ownerCredential" dark flat color="primary" class="mx-auto">
      <v-card-title>
        <v-icon large left>fas fa-user</v-icon>
        <span class="title font-weight-light">Owner Credentials #{{ownerCredential.id}}</span>
      </v-card-title>

      <v-card-text class>
        <v-layout row wrap>
          <v-flex xs6>Name</v-flex>
          <v-flex xs6>{{ownerCredential.name}}</v-flex>

          <v-flex xs6>Is account driver</v-flex>
          <v-flex xs6>{{ownerCredential.accountRider}}</v-flex>

          <v-flex xs6>Address</v-flex>
          <v-flex
                  xs6
          >{{ownerCredential.streetName}} {{ownerCredential.houseNumber}}, {{ownerCredential.postalCode}} {{ownerCredential.city}}</v-flex>

          <v-flex xs6>Begin</v-flex>
          <v-flex xs6>{{ownerCredential.beginFormatted | date}}</v-flex>

          <v-flex xs6>End</v-flex>
          <v-flex xs6>{{ownerCredential.endFormatted | date}}</v-flex>
        </v-layout>
      </v-card-text>

      <v-card-actions></v-card-actions>
    </v-card>
  </div>
</template>

<script>
  export default {
    props: ["ownerCredential"]
  };
</script>

<style>
</style>
