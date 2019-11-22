import Vue from 'vue'
import Router from 'vue-router'
import layout from '~/layout/index.vue'
import login from '~/views/login/login'

Vue.use(Router)


export const routeList = [{
		path: '/redirect/:path*',
		component: layout,
		meta: {
			title: "重定向页面",
			icon: "el-icon-s-home",
			// isHide: true
		},
		component: () => import('~/layout/redirect/index')
	},

	{
		path: '/index',
		meta: {
			title: "首页",
			icon: "el-icon-s-home",
			// isHide: true
		},
		component: () => import('~/views/index/index.vue'),
	},
	{
		path: '/components',
		meta: {
			title: "组件",
			icon: "el-icon-setting"
		},
		redirect: "/components/tree",
		component: () => import('~/views/components/index.vue'),
		children: [{
				path: '/components/tree',
				meta: {
					title: "树形组件tree",
					icon: ""
				},
				component: () => import('~/views/components/tree/index.vue')
			},
			{
				path: '/components/cascader',
				meta: {
					title: "Cascader级联选择器",
					icon: ""
				},
				component: () => import('~/views/components/cascader/index.vue')
			}
		],
	},
	{
		path: '/menu',
		meta: {
			title: "多级菜单",
			icon: "el-icon-menu"
		},
		component: () => import('~/views/menu/index.vue'),
		redirect: "/menu/menu1",
		children: [{
			path: '/menu/menu1',
			meta: {
				title: "第二层",
				icon: ""
			},
			component: () => import('~/views/menu/menu1/index.vue'),
			redirect: "/menu/menu1/menu2",
			children: [{
				path: '/menu/menu1/menu2',
				meta: {
					title: "第三层",
					icon: ""
				},
				component: () => import('~/views/menu/menu1/menu2/index.vue')
			}, ],
		}, ],
	},
	{
		path: '/about',
		meta: {
			title: "关于",
			icon: "el-icon-sugar"
		},
		component: () => import('~/views/about/index.vue'),
	},
	// {
	// 	path: '/echart',
	// 	meta: {
	// 		title: "饼状图",
	// 		icon: "el-icon-sugar"
	// 	},
	// 	component: () => import('~/views/echart/index.vue'),
	// },
]


export default new Router({
	mode: 'history',
	routes: [{
			path: '/login',
			component: login
		},
		{
			path: '/',
			component: layout,
			meta: {
				title: "组件",
				icon: "el-icon-setting"
			},
			children: routeList
		}
	]
})
