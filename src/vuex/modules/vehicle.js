import ApiService from "@/common/api.service";

export default {
    state: {
        vehicles: null
    },
    getters: {
        vehicles(state) {
            return state.vehicles
        }
    },
    mutations: {

    },
    actions: {
        markAsStolen(context, payload) {
            return ApiService.put("vehicle/stolen", {
                licensePlate: payload.licensePlate
            });
        },
        getAllLicensePlates(){
            return ApiService.get("vehicle/licenceplates");
        },
        getStolenVehicle(context, payload) {
        return ApiService.get(`${'vehicle'}/${payload.licencePlate}`)}
    }
}
