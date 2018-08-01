import Vue from 'vue'
import Router from 'vue-router'


import film from "../components/film.vue"
import cinema from "../components/cinema.vue"
import mine from "../components/mine.vue"
import detail from "../components/detail.vue"

import nowplaying from "../components/nowplaying.vue"
import comingsoon from "../components/comingsoon.vue"
import navbar from "../components/common/navbar.vue"
import footerbar from "../components/common/footerbar.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/film',
      component: film,

      //  二级路由
      children:[
      	{
      		path: 'nowplaying',
      		component: nowplaying
      	},
      	{
      		path: 'comingsoon',
      		component: comingsoon
      	},
      /*	{
      		path:'/film',
      		redirect: "/film/nowplaying",
      	}*/
      ]
    },
    {
      path: '/cinema',
      component: cinema
    },
    {
      path: '/mine',
      component: mine
    },
    {
      path: '/detail',
      component: detail
    },
    {
	  path: '*',
	  redirect : '/film'
    }
  ]
})
