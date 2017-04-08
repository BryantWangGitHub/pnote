import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/system/Home.vue'
import YysIndex from '../components/yys/Index.vue'
import Reward from '../components/yys/Reward.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/yys/index',
      name: 'YysIndex',
      component: YysIndex
    },
    {
      path: '/yys/reward',
      name: 'Reward',
      component: Reward
    }
  ]
})
