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
            return ApiService.put("vehicles/stolen", {
                licensePlate: payload.licensePlate,
                stolen: payload.stolen
            });
        },
        getAllLicensePlates(){
            return ApiService.get("licenseplates");
        },

        getStolenVehicle(context, payload) {
            return ApiService.get("vehicles/stolen", {
                licensePlate: payload.licensePlate,
            });
        },
    }
}
