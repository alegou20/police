<template>
  <v-app id="inspire">
    <v-toolbar color="white" app flat>

            <v-text-field name="licensePlate" label="Mark as stolen" v-model="licensePlate" type="licencePlate" required></v-text-field>
            <v-btn round color="primary"  @click="toSave">save</v-btn>

            <v-spacer></v-spacer>

            <img  class="politielogo" :src="logo"/>

        </v-toolbar>

        <router-view></router-view>
    <v-content>
      <v-layout fill-height>
        <v-flex xs4>
          <licenseplates></licenseplates>
        </v-flex>
        <v-flex xs8>
          <mapbox-map :movements="movements"></mapbox-map>
        </v-flex>
      </v-layout>
    </v-content>
  </v-app>
</template>

<script>
export default {
  components: {
    MapboxMap,
    licenseplates
  },
  data: () => ({
    movements,
    dialog: false,
    drawer: null,
    image: image,
    logo: logo,
    items: [
      { icon: "fas fa-map-marker-alt", text: "Map", link: "/" },
      { icon: "fas fa-car", text: "Vehicle", link: "/licensePlates" },
      {
        icon: "fas fa-angry",
        text: "Mark as stolen",
        link: "/vehicles/markAsStolen"
      }
    ]
  }),
  props: {
    source: String
  }
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

