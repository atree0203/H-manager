<template>
	<div id="app">
		<router-view/>
		<!-- <login></login> -->
		
	</div>
</template>

<script>
	import "~/layout/layoutStyle/layout.scss"
	import login from "~/views/login/login"
	export default {
		name: 'App',
		components: {
			login
		},
		data() {
			return {}
		}
	}
</script>

<style lang="scss">
	html,
	body {
		height: 100%;
	}

	* {
		margin: 0;
		padding: 0;
	}

	#app {
		height: 100%;
	}
	// #nprogress .bar {
	// 		background: #F56C6C !important; //自定义颜色
	// }
	
	.flex-row-center{
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}
	
	.flex-column-center{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
