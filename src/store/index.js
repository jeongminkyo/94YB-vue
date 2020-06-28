import Vue from 'vue'
import Vuex from 'vuex'
import notice from '@/store/notice'
import travelPost from '@/store/travelPost'
import cash from '@/store/cash'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    notice,
    travelPost,
    cash
  }
})
