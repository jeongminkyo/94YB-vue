import axios from 'axios'

const API_KEY = '9d38c929'

export default  {
    namespaced: true,

    state: () => ({
        cashes: []
      }),

      mutations: {
        updateState (state, payload) {
          Object
            .keys(payload)
            .forEach(key => {
              state[key] = payload[key]
            })
        },
        pushIntoCashes (state, cashes) {
          state.cashes.push(...cashes)
        }
      },

      actions: {
        fetchCashes ({ commit }, pageNum) {
          return new Promise(async resolve => {
            const res = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=parasite&page=${pageNum}`)
            commit('pushIntoCashes', res.data.Search)
            resolve(res.data)
          })
        },
        
        async loadCashes ({ commit, dispatch }) {
          commit('updateState', {
            notices: [] // 초기화
          })
    
          await dispatch('fetchCashes', 1)
        }
      }
}