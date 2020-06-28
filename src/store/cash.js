import axios from 'axios'

export default  {
    namespaced: true,

    state: () => ({
        cashes: [],
        userList: [],
        totalPage: 1,
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
        },

        setUserList (state, user_list) {
          state.userList.push(...user_list)
        },
      },

      actions: {
        fetchCashes ({ commit }, pageNum) {
          return new Promise(async resolve => {
            const res = await axios.get(`https://yb94.name/api/v1/cashes?page=${pageNum}`)
            commit('pushIntoCashes', res.data.cashes)
            commit('updateState', {
              totalCash: res.data.total_cash,
              updatedAt: res.data.total_cash_update_at,
              totalPage: res.data.total_page
            })
            resolve(res.data)
          })
        },

        fetchUserList ({ commit }) {
          return new Promise(async resolve => {
            const res = await axios.get(`https://yb94.name/api/v1/user_list`)
            commit('setUserList', res.data)
            resolve(res.data)
          })
        },

        createCashApi (_, payload) {
          var params = new  URLSearchParams();
          Object
            .keys(payload)
            .forEach(key => {
            params.append(key, payload[key])
          })
          return new Promise(async (resolve) => {
            try {
              const res = await axios.post(`https://yb94.name/api/v1/cashes`, params)
              resolve(res)
            } catch (error) {
              console.log(error)
            }
          })
        },
        
        async loadCashes ({ commit, dispatch }, pageNum) {
          commit('updateState', {
            cashes: [] // 초기화
          })
    
          await dispatch('fetchCashes', pageNum)
        },

        async loadUserList ({ dispatch }) {
          await dispatch('fetchUserList')
        },

        async createCash ({ dispatch }, params) {
          await dispatch('createCashApi', params)
        }
      },

      
}