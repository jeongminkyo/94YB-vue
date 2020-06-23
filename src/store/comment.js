import axios from 'axios'

const API_KEY = '9d38c929'

export default  {
    namespaced: true,

    state: () => ({
        comments: []
      }),

      mutations: {
        updateState (state, payload) {
          Object
            .keys(payload)
            .forEach(key => {
              state[key] = payload[key]
            })
        },

        pushIntoComments (state, comments) {
          state.comments.push(...comments)
        }
      },

      actions: {
        fetchComments ({ commit }, pageNum) {
          return new Promise(async resolve => {
            const res = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=asdf&page=${pageNum}`)
            commit('pushIntoComments', res.data.Search)
            resolve(res.data)
          })
        },
        
        async loadComments ({ commit, dispatch }) {
          commit('updateState', {
            notices: [] // 초기화
          })
    
          await dispatch('fetchComments', 1)
        }
      }
}