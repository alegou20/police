<template>
    <v-layout>
        <v-flex >
            <v-card width="100%">
                <v-toolbar color="white" flat>
                    <v-toolbar-title color="primary"><strong class="red--text text--darken-3">Stolen License plates</strong></v-toolbar-title>

      </v-toolbar>


                <v-list class="LicenceplateList">

                    <template v-for="(item, index) in licensePlates">

                        <v-list-tile
                                class="ml-2 mr-2"
                                :key="item + index"
                                @click="setLicencePlate(item)"
                                :class="{'active': item === licencePlate}"

                        >
                            <v-list-tile-content><strong class="indigo--text text--darken-3">{{ item }}</strong></v-list-tile-content>
                        </v-list-tile>
                    </template>
                </v-list>
            </v-card>

                <vehicle v-if="OneVehicle" :v="OneVehicle"></vehicle>

        </v-flex>
    </v-layout>
</template>

<script>
import vehicle from "@/components/Vehicle/vehicle.vue";

export default {
      components: {
        vehicle
      },
    data () {
        return {
            licencePlate: '',
            items: [],
            OneVehicle: '',
        }
    },
    computed: {
          licensePlates () {
              return this.$store.getters.licensePlates
          }
    },
    mounted(){
        this.getAllLicencePlates()
    },
    methods:{
        getStolenVehicle(){
            if(this.licencePlate){
                this.$store.dispatch("getStolenVehicle", {licencePlate: this.licencePlate}).then(res => {
                    this.OneVehicle = res.data;
                    this.getMovements(res.data.carTracker.id)
                })
            }
            else{
                alert('no licenseplate selected')
            }
        },
        getAllLicencePlates(){
            this.$store.dispatch("getAllLicensePlates");
        },
        setLicencePlate(plate){
            this.licencePlate = plate
            this.getStolenVehicle()
        },
        getMovements(carTrackerId) {
            if (!carTrackerId) return;

            this.$store.dispatch('getMovements', carTrackerId);
        }
    },
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

.card {
  overflow-y: auto;
}
</style>
