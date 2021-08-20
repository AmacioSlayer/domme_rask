import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
    actions: {
        GET_REQUESTS_FROM_API({ commit }) {
            return axios('http://localhost:3000/requests', {
                method: 'GET'
            })
                .then((response) => {
                    commit('SET_REQUESTS_TO_VUEX', response.data)
                })
        }
    },
    mutations: {
        SET_REQUESTS_TO_VUEX: (state, requests) => {
            state.requests = requests
        }
    },
    state: {
        requests: []
    },
    getters: {
        REQUESTS(state) {
            return state.requests;
        }
    }
})

export default store
