<template>
	<div :id="id" :class="className" :style="{height:height,width:width}" />
</template>

<script>
	import resize from './mixins/resize'
	import {
		countApi
	} from '~/api/api.js'

	export default {
		mixins: [resize],
		props: {
			className: {
				type: String,
				default: 'chart'
			},
			id: {
				type: String,
				default: 'chart'
			},
			width: {
				type: String,
				default: '200px'
			},
			height: {
				type: String,
				default: '200px'
			}
		},
		data() {
			return {
				chart: null,
				params: {
					"from_date": "2019-12-10",
					"to_date": "2019-12-18"
				},
				lengendObj:{
							1: "图文",
							2: "youtube视频",
							3: "gif",
							9: "moment",
							10: "instagram视频"
						}
			}
		},
		created(){
			
		},
		mounted() {
			this.getCount()
		},
		beforeDestroy() {
			if (!this.chart) {
				return
			}
			this.chart.dispose()
			this.chart = null
		},
		methods: {
			getCount() {
				countApi(this.params).then(res => {
					if (res && res.code === 0) {
						let data = res.data
						let legendDataTemp = data.content_style_data.map((item,index)=>{
							return this.lengendObj[item]
						})
						return this.initChart(legendDataTemp,data.news_date,data.data)
					}
					
				})
			},
			initChart(legendData,xAxisData,seriesData) {
				this.chart = this.$echarts.init(document.getElementById(this.id))
				seriesData = seriesData.map((item,index)=>{
					console.log(item)
					return {
							name: this.lengendObj[item.content_style],
							type: 'line',
							smooth: true,
							symbol: 'circle',
							symbolSize: 5,
							showSymbol: false,
							lineStyle: {
								normal: {
									width: 1
								}
							},
							areaStyle: {
								normal: {
									color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
										offset: 0,
										color: 'rgba(137, 189, 27, 0.3)'
									}, {
										offset: 0.8,
										color: 'rgba(137, 189, 27, 0)'
									}], false),
									shadowColor: 'rgba(0, 0, 0, 0.1)',
									shadowBlur: 10
								}
							},
							itemStyle: {
								normal: {
									color: 'rgb(137,189,27)',
									borderColor: 'rgba(137,189,2,0.27)',
									borderWidth: 12

								}
							},
							data: item.num
						}
				})

				this.chart.setOption({
					backgroundColor: '#394056',
					title: {
						top: 20,
						text: 'Statistics',
						textStyle: {
							fontWeight: 'normal',
							fontSize: 16,
							color: '#F1F1F3'
						},
						left: '1%'
					},
					tooltip: {
						trigger: 'axis',
						axisPointer: {
							lineStyle: {
								color: '#57617B'
							}
						}
					},
					legend: {
						top: 20,
						icon: 'rect',
						itemWidth: 14,
						itemHeight: 5,
						itemGap: 13,
						data: legendData,
						right: '4%',
						textStyle: {
							fontSize: 12,
							color: '#F1F1F3'
						}
					},
					grid: {
						top: 100,
						left: '2%',
						right: '2%',
						bottom: '2%',
						containLabel: true
					},
					xAxis: [{
						type: 'category',
						boundaryGap: false,
						axisLine: {
							lineStyle: {
								color: '#57617B'
							}
						},
						data: xAxisData
					}],
					yAxis: [{
						type: 'value',
						name: '(%)',
						axisTick: {
							show: false
						},
						axisLine: {
							lineStyle: {
								color: '#57617B'
							}
						},
						axisLabel: {
							margin: 10,
							textStyle: {
								fontSize: 14
							}
						},
						splitLine: {
							lineStyle: {
								color: '#57617B'
							}
						}
					}],
					series:seriesData
					// series: [{
					// 		name: '图文',
					// 		type: 'line',
					// 		smooth: true,
					// 		symbol: 'circle',
					// 		symbolSize: 5,
					// 		showSymbol: false,
					// 		lineStyle: {
					// 			normal: {
					// 				width: 1
					// 			}
					// 		},
					// 		areaStyle: {
					// 			normal: {
					// 				color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
					// 					offset: 0,
					// 					color: 'rgba(137, 189, 27, 0.3)'
					// 				}, {
					// 					offset: 0.8,
					// 					color: 'rgba(137, 189, 27, 0)'
					// 				}], false),
					// 				shadowColor: 'rgba(0, 0, 0, 0.1)',
					// 				shadowBlur: 10
					// 			}
					// 		},
					// 		itemStyle: {
					// 			normal: {
					// 				color: 'rgb(137,189,27)',
					// 				borderColor: 'rgba(137,189,2,0.27)',
					// 				borderWidth: 12

					// 			}
					// 		},
					// 		data: [220, 182, 191, 134, 150, 120, 110, 125, 145, 122, 165, 1]
					// 	},
					// 	// {
					// 	// 	name: 'CTCC',
					// 	// 	type: 'line',
					// 	// 	smooth: true,
					// 	// 	symbol: 'circle',
					// 	// 	symbolSize: 5,
					// 	// 	showSymbol: false,
					// 	// 	lineStyle: {
					// 	// 		normal: {
					// 	// 			width: 1
					// 	// 		}
					// 	// 	},
					// 	// 	areaStyle: {
					// 	// 		normal: {
					// 	// 			color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
					// 	// 				offset: 0,
					// 	// 				color: 'rgba(0, 136, 212, 0.3)'
					// 	// 			}, {
					// 	// 				offset: 0.8,
					// 	// 				color: 'rgba(0, 136, 212, 0)'
					// 	// 			}], false),
					// 	// 			shadowColor: 'rgba(0, 0, 0, 0.1)',
					// 	// 			shadowBlur: 10
					// 	// 		}
					// 	// 	},
					// 	// 	itemStyle: {
					// 	// 		normal: {
					// 	// 			color: 'rgb(0,136,212)',
					// 	// 			borderColor: 'rgba(0,136,212,0.2)',
					// 	// 			borderWidth: 12

					// 	// 		}
					// 	// 	},
					// 	// 	data: [120, 110, 125, 145, 122, 165, 122, 220, 182, 191, 134, 150]
					// 	// }, {
					// 	// 	name: 'CUCC',
					// 	// 	type: 'line',
					// 	// 	smooth: true,
					// 	// 	symbol: 'circle',
					// 	// 	symbolSize: 5,
					// 	// 	showSymbol: false,
					// 	// 	lineStyle: {
					// 	// 		normal: {
					// 	// 			width: 1
					// 	// 		}
					// 	// 	},
					// 	// 	areaStyle: {
					// 	// 		normal: {
					// 	// 			color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
					// 	// 				offset: 0,
					// 	// 				color: 'rgba(219, 50, 51, 0.3)'
					// 	// 			}, {
					// 	// 				offset: 0.8,
					// 	// 				color: 'rgba(219, 50, 51, 0)'
					// 	// 			}], false),
					// 	// 			shadowColor: 'rgba(0, 0, 0, 0.1)',
					// 	// 			shadowBlur: 10
					// 	// 		}
					// 	// 	},
					// 	// 	itemStyle: {
					// 	// 		normal: {
					// 	// 			color: 'rgb(219,50,51)',
					// 	// 			borderColor: 'rgba(219,50,51,0.2)',
					// 	// 			borderWidth: 12
					// 	// 		}
					// 	// 	},
					// 	// 	data: [220, 182, 125, 145, 122, 191, 134, 150, 120, 110, 165, 122]
					// 	// }
					// ]
				})
			}
		}
	}
</script>
