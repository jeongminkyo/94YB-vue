import axios from 'axios'

export default  {
    namespaced: true,

    state: () => ({
        travelPosts: []
      }),
    
    mutations: {
        updateState (state, payload) {
            Object
            .keys(payload)
            .forEach(key => {
                state[key] = payload[key]
            })
        },

        pushIntoTravelPosts (state, travelPosts) {
            state.travelPosts.push(...travelPosts)
        }
    },
    
    actions: {
        fetchTravelPosts ({ commit }, pageNum) {
            return new Promise(async resolve => {
                const res = await axios.get(`http://localhost:3000/api/v1/travel_posts?page=${pageNum}`)
                commit('pushIntoTravelPosts', res.data)
                resolve(res.data)
            })
        },
        
        async loadTravelPosts ({ commit, dispatch }) {
            commit('updateState', {
                travelPosts: [] // 초기화
            })

            await dispatch('fetchTravelPosts', 1)
        }
    }
}