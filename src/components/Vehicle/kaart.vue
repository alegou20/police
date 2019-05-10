v<template>
        <div id='map'></div>
</template>

<script>
    import mapboxgl from 'mapbox-gl/dist/mapbox-gl';

    export default {
        name: 'kaart',
        components: {
        },
        data () {
            return {
                map: null,
            }
        },
        mounted () {
            mapboxgl.accessToken = 'pk.eyJ1IjoiYWxlZ291MjAiLCJhIjoiY2p1OXB4OXd2MmF0NzN5bnJyemcycmM2eSJ9.p9wJEoADwnFW7ji-rkr9OQ';
            this.map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/outdoors-v10',
                center: [-96, 37.8],
                zoom: 1
            });

        }
    }
</script>

<style scoped>
    #map {
        position:absolute; top: 65px; bottom:0;
        width: 100%;
    }
</style>

