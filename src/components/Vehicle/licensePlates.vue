<template>
    <v-layout>
        <v-flex >
            <v-card width="100%">
                <v-toolbar color="white" flat>
                    <v-toolbar-title color="primary"><strong class="red--text text--darken-3">Stolen License plates</strong></v-toolbar-title>

      </v-toolbar>


                <v-list class="LicenceplateList">

                    <template v-for="(item, index) in items">

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

                <vehicle v-if="OneVehicle" :vehicle="OneVehicle"></vehicle>

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
    mounted(){
        this.getAllLicencePlates()
    },
    methods:{
        getStolenVehicle(){
                if(this.licencePlate){
                    this.$store.dispatch("getStolenVehicle", {licencePlate: this.licencePlate}).then(res => {
                        this.OneVehicle = res.data
                    })
                }
                else{
                    alert('no licenseplate selected')
                }
            },
            getAllLicencePlates(){
                this.$store.dispatch("getAllLicensePlates").then(res => {
                    this.items = res.data
                })
            },
            setLicencePlate(plate){
                this.licencePlate = plate
                this.getStolenVehicle()
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

.card {
  overflow-y: auto;
}
</style>
