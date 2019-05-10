<template>
    <v-layout>
        <v-flex >
            <v-card width="100%">
                <v-toolbar color="white">
                    <v-toolbar-title color="primary"><strong class="indigo--text text--darken-3">License plates</strong></v-toolbar-title>

                </v-toolbar>

                <v-list class="LicenseplateList">

                    <template v-for="item in items">

                        <v-list-tile
                                :key="item"
                                @click="setLicensePlate(item)"
                                :class="{'active': item === licenseplate}"

                        >
                            <v-list-tile-content><strong class="indigo--text text--darken-3">{{ item }}</strong></v-list-tile-content>
                        </v-list-tile>
                    </template>
                </v-list>
            </v-card>

            <div class="betweenCards">

            <v-card width="100%" height="51%">
                <v-img
                        src="https://res.cloudinary.com/dptzuo0ky/image/upload/v1557454552/tang1_car.png"
                        aspect-ratio="2.75"
                        height="71%"
                ></v-img>

                <v-card-title primary-title>
                    <div>
                        <h3 class="headline mb-0">99-BB-45</h3>
                    </div>
                </v-card-title>

                <v-card-actions>
                    <v-btn flat color="orange">Do something</v-btn>
                    <v-btn flat color="orange">Save</v-btn>
                </v-card-actions>
            </v-card>
            </div>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        data () {
            return {
                licenseplate: '',
                items: []
            }
        },
        mounted(){
            this.getAllLicensePlates()
        },
        methods:{
            getStolenVehicle(){
                if(this.licenseplate){
                    this.$store.dispatch("getStolenVehicle", {licensePlate: this.licensePlate})
                }
                else{
                    alert('no licenseplate selected')
                }
            },
            getAllLicensePlates(){
                    this.$store.dispatch("getAllLicensePlates").then(res => {
                        this.items = res
                    })
            },
            setLicensePlate(plate){
                this.licenseplate = plate
                this.getStolenVehicle()
            }
        }
    }
</script>

<style scoped>

    .active{
        background-color: #f4e542;
        color: white;
    }

    .LicenseplateList{
        height: 300px;
        overflow-y: auto;
    }

    .betweenCards{
        margin-top: 90px;
    }

</style>
