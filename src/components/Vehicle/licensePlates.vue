<template>
  <v-layout>
    <v-flex>
      <v-card width="100%">
        <v-toolbar color="white" flat>
          <v-toolbar-title color="primary">
            <strong class="indigo--text text--darken-3">License plates</strong>
          </v-toolbar-title>
        </v-toolbar>

        <v-list class="LicenseplateList">
          <template v-for="(item, index) in items">
            <v-list-tile
              :key="item + index"
              @click="setLicensePlate(item)"
              :class="{'active': item === licenseplate}"
            >
              <v-list-tile-content>
                <strong class="indigo--text text--darken-3">{{ item }}</strong>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-card>

      <vehicle v-if="vehicle" :vehicle="vehicle"></vehicle>
    </v-flex>
  </v-layout>
</template>

<script>
import vehicle from "@/components/Vehicle/vehicle.vue";

export default {
  components: {
    vehicle
  },
  data() {
    return {
      licenseplate: "",
      items: [],
      vehicle: {
        carTracker: {
          deleted: false,
          hardware: "asdas",
          id: 19,
          mileage: 0
        },
        carTrackers: [
          {
            deleted: false,
            hardware: "123",
            id: 2,
            mileage: 0
          },
          {
            deleted: false,
            hardware: "i5",
            id: 8,
            mileage: 0
          },
          {
            deleted: false,
            hardware: "asdas",
            id: 19,
            mileage: 0
          }
        ],
        id: 9,
        licencePlate: "xxxxx4",
        ownerCredentials: [
          {
            accountRider: false,
            address: "tyest 1, 5709MB, Helmond",
            begin: "2019-04-17T12:14:42.278Z[UTC]",
            beginFormatted: "2019-04-17 02:14:42",
            city: "Helmond",
            endFormatted: "2019-04-17 02:14:42",
            houseNumber: 1,
            id: 12,
            name: "Sander Hooff",
            postalCode: "5709MB",
            streetName: "tyest"
          }
        ],
        rateCategory: {
          id: 1,
          name: "45",
          price: 3.0,
          vehicles: []
        },
        stolen: false
      }
    };
  },
  mounted() {
    this.getAllLicensePlates();
  },
  methods: {
    getStolenVehicle() {
      if (this.licenseplate) {
        // this.vehicle = this.$store.dispatch("getStolenVehicle", {licensePlate: this.licensePlate}
        return this.vehicle;
      } else {
        alert("no licenseplate selected");
      }
    },
    getAllLicensePlates() {
      this.$store.dispatch("getAllLicensePlates").then(res => {
        this.items = res;
      });
    },
    setLicensePlate(plate) {
      this.licenseplate = plate;
      this.getStolenVehicle();
    }
  }
};
</script>

<style scoped>
.active {
  background-color: #f4e542;
  color: white;
}

.LicenseplateList {
  height: 200px;
  overflow-y: auto;
}
</style>
