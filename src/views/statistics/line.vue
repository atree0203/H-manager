<template>
	<div class="chart-container">
		<chart height="100%" width="100%" />
	</div>
</template>

<script>
	import Chart from './components/LineMarker'
	import {
		countApi
	} from '~/api/api.js'

	export default {
		name: 'LineChart',
		components: {
			Chart
		},
		data() {
			return {
				newsDetail: '',
				params:{
					// "group_by":"content_style",
					// "desc":true,
					"from_date":"2019-12-18",
					"to_date":"2019-12-18"
				}
			}
		},
		created() {
			// this.getCount()
		},
		methods:{
			getCount(){
				countApi(this.params).then(res => {
					console.log(res)
				})
			}
		}
	}
</script>

<style scoped>
	.chart-container {
		position: relative;
		width: 100%;
		height: calc(100vh - 84px);
	}
</style>
