import axios from 'axios'

export default  {
    namespaced: true,

    state: () => ({
        travelPosts: [],
        totalPage: 1
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
                const res = await axios.get(`https://yb94.name/api/v1/travel_posts?page=${pageNum}`)
                commit('pushIntoTravelPosts', res.data.travel_posts)
                commit('updateState', {
                    totalPage: res.data.total_page
                })
                resolve(res.data)
            })
        },
        
        async loadTravelPosts ({ commit, dispatch }, pageNum) {
            commit('updateState', {
                travelPosts: [] // 초기화
            })

            await dispatch('fetchTravelPosts', pageNum)
        }
    }
}