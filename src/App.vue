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

                <v-text-field
                        label="Mark as stolen"
                        single-line
                ></v-text-field>
            <v-btn color="success">save</v-btn>

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
            licenseplates,
        },
        data: () => ({
            dialog: false,
            drawer: null,
            image: image,
            logo: logo,
            items: [
                { icon: 'fas fa-map-marker-alt', text: 'Map', link: '/' },
                { icon: 'fas fa-car', text: 'Vehicle', link: '/licensePlates' },
                { icon: 'fas fa-angry', text: 'Mark as stolen', link: '/vehicles/markAsStolen' },
            ],
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
</style>

