import ApiService from "@/common/api.service";

export default {
    state: {
        vehicles: null,
        licensePlates: []
    },
    getters: {
        vehicles(state) {
            return state.vehicles
        },
        licensePlates (state) {
            return state.licensePlates
        }
    },
    mutations: {
        setLicensePlates (state, licensePlates) {
            state.licensePlates = licensePlates;
        }
    },
    actions: {
        markAsStolen(context, payload) {
            return ApiService.put("vehicle/stolen", {
                licencePlate: payload.licencePlate
            });
        },
        getAllLicensePlates(context){
            ApiService.get("vehicle/licenceplates/stolen").then(res => {
                context.commit('setLicensePlates', res.data);
            }).catch(err => {
                console.log(err);
                alert('Error getting stolen license plates');
            });
        },
        getStolenVehicle(context, payload) {
        return ApiService.get(`${'vehicle'}/${payload.licencePlate}`)}
    }
}
