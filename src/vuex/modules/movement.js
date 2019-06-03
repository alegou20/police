import axios from 'axios'

export default {
    state: {
        movements: null
    },
    getters: {
        movements(state) {
            return state.movements;
        }
    },
    mutations: {
        setMovements(state, movements) {
            state.movements = movements;
        }
    },
    actions: {
        getMovements(context, carTrackerId) {
            return new Promise((resolve, reject) => {
                if (!carTrackerId) {
                    reject()
                    return;
                }

                axios.get('http://192.168.25.102:8080/MovementRegistration/movement/' + carTrackerId).then(res => {
                    context.commit('setMovements', res.data)
                    resolve(res.data);
                }).catch(err => reject(err));
            });
        }
    }
}
