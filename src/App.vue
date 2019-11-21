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
</style>
