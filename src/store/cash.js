import axios from 'axios'

export default  {
    namespaced: true,

    state: () => ({
        cashes: [],
        totalCash: 0,
        updatedAt: ''
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
            const res = await axios.get(`https://yb94.name/api/v1/cashes?page=${pageNum}`)
            commit('pushIntoCashes', res.data.cashes)
            console.log(res.data)
            commit('updateState', {
              totalCash: res.data.total_cash,
              updatedAt: res.data.total_cash_update_at
            })
            resolve(res.data)
          })
        },
        
        async loadCashes ({ commit, dispatch }) {
          commit('updateState', {
            cashes: [] // 초기화
          })
    
          await dispatch('fetchCashes', 1)
        }
      }
}