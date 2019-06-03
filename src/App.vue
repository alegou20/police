<template>
  <v-app id="inspire">
    <v-toolbar color="white" app flat>
        <img  class="politieimage" :src="image"/>
        <v-spacer></v-spacer>
            <v-text-field class="ml-5" name="licensePlate" label="Mark as stolen" v-model="licensePlate" type="text" required></v-text-field>
            <v-btn round color="primary"  @click="toSave">save</v-btn>

            <v-spacer></v-spacer>

            <img  class="politielogo" :src="logo"/>

        </v-toolbar>

    <v-content>
      <v-layout fill-height>
        <v-flex xs4>
          <license-plates></license-plates>
        </v-flex>
        <v-flex xs8>
          <mapbox-map></mapbox-map>
        </v-flex>
      </v-layout>
    </v-content>
  </v-app>
</template>

<script>
    import MapboxMap from '@/components/MapboxMap'
    import LicensePlates from '@/components/Vehicle/licensePlates'
    import image from '@/assets/politie-logo.png'
    import logo from '@/assets/logo.png'

export default {
  components: {
    MapboxMap,
      LicensePlates
  },
  data: () => ({
    dialog: false,
    drawer: null,
    image,
    logo,
      licensePlate: null
  }),

    methods: {
        toSave () {
            this.$store.dispatch("markAsStolen", {licensePlate: this.licensePlate})
        },
    },
};
</script>

<style lang="scss">
.politieimage {
  width: 135px;
  height: 55px;
}
.politielogo {
  width: 100px;
  height: 70px;
}
.fillheight {
  height: 100%;
}
</style>

