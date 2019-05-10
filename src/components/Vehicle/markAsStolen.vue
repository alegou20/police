<template>
    <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
    <div class="mb-4">
        <v-form >
            <h3 class="title">Mark as stolen</h3>
            <v-text-field name="licensePlate" label="license plate" v-model="licensePlate" type="licencePlate" required></v-text-field>
            <v-btn round color="primary"  @click="toSave">save</v-btn>
        </v-form>
    </div>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        data() {
            return {
                licensePlate: '',
                stolen: true
            };
        },
        methods: {
            toSave () {
                this.$store.dispatch("markAsStolen", {licensePlate: this.licensePlate, stolen: this.stolen})
            },
        },
    };
</script>

<style>
</style>
