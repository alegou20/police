<template>
    <v-app id="inspire">
        <v-navigation-drawer
                permanent
                v-model="drawer"
                :clipped="$vuetify.breakpoint.lgAndUp"
                fixed
                app                width="400px"


        >
           <licenseplates></licenseplates>
        </v-navigation-drawer>

        <v-toolbar
                :clipped-left="$vuetify.breakpoint.lgAndUp"
                color="white"
                app
                fixed
                flat
        >
            <img  class="politieimage" :src="image"/>

            <v-spacer></v-spacer>

            <v-text-field name="licensePlate" label="Mark as stolen" v-model="licensePlate" type="licencePlate" required></v-text-field>
            <v-btn round color="primary"  @click="toSave">save</v-btn>

            <v-spacer></v-spacer>

            <img  class="politielogo" :src="logo"/>

        </v-toolbar>

        <router-view></router-view>
    </v-app>
</template>

<script>
    import image from '@/assets/politie-logo.png'
    import logo from '@/assets/logo.png'
    import licenseplates from '@/components/Vehicle/licensePlates'

        export default {
        components: {
            licenseplates
        },
        data: () => ({
            dialog: false,
            drawer: null,
            image: image,
            licensePlate: '',
            logo: logo,
            items: [
                { icon: 'fas fa-map-marker-alt', text: 'Map', link: '/' },
                { icon: 'fas fa-car', text: 'Vehicle', link: '/licensePlates' },
                { icon: 'fas fa-angry', text: 'Mark as stolen', link: '/vehicles/markAsStolen' },
            ],
        }),
        props: {
            source: String
        },
            methods: {
                toSave () {
                    alert('tsvsdfgdfgdfgdfg')
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
</style>

