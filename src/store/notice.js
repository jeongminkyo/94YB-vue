import axios from 'axios'

export default  {
    namespaced: true,

    state: () => ({
        notices: [],
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
        pushIntoNotices (state, notices) {
          state.notices.push(...notices)
        }
      },
      actions: {
        fetchNotices ({ commit }, pageNum) {
          return new Promise(async resolve => {
            const res = await axios.get(`https://yb94.name/api/v1/notices?page=${pageNum}`)
            commit('pushIntoNotices', res.data.notices)
            commit('updateState', {
              totalPage: res.data.total_page
            })
            resolve(res.data)
          })
        },
        
        async loadNotices ({ commit, dispatch }, pageNum) {
          commit('updateState', {
            notices: [] // 초기화
          })
    
          await dispatch('fetchNotices', pageNum)
        }
      }
}