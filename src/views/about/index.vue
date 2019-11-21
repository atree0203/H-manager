<template>
	<div>
		<div class="container">
			<div id="piePict" style="width: 600px;height:600px;"></div>
			<div id="technologyPict" style="width: 600px;height::;00px;"></div>
		</div>
		<div class="container">
			<div id="histogramPict" style="width: 800px;height:400px;"></div>
		</div>
		<div class="container">
			<div id="histogramPict2" style="width: 800px;height:400px;"></div>
		</div>
	</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {

			}
		},
		mounted() {
			this.piePict();
			this.technologyPict();
			this.histogramPicture();
			this.histogramPict2();
		},
		methods: {
			histogramPict2() {
				let myChart = this.$echarts.init(document.getElementById('histogramPict2'))
				// 绘制图表
				myChart.setOption({
					backgroundColor: '#00265f',
					tooltip: {
						trigger: 'axis',
						axisPointer: {
							type: 'shadow'
						}
					},
					grid: {
						top: '15%',
						right: '3%',
						left: '5%',
						bottom: '12%'
					},
					xAxis: [{
						type: 'category',
						data: ['工作票', '操作票', '抢修', '用电调查', '设备巡视', '现场勘查', '到岗到位'],
						axisLine: {
							lineStyle: {
								color: 'rgba(255,255,255,0.12)'
							}
						},
						axisLabel: {
							margin: 10,
							color: '#e2e9ff',
							textStyle: {
								fontSize: 14
							},
						},
					}],
					yAxis: [{
						axisLabel: {
							formatter: '{value}',
							color: '#e2e9ff',
						},
						axisLine: {
							show: false
						},
						splitLine: {
							lineStyle: {
								color: 'rgba(255,255,255,0.12)'
							}
						}
					}],
					series: [{
						type: 'bar',
						data: [300, 450, 770, 203, 255, 188, 156],
						barWidth: '20px',
						itemStyle: {
							normal: {
								color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
									offset: 0,
									color: 'rgba(0,244,255,1)' // 0% 处的颜色
								}, {
									offset: 1,
									color: 'rgba(0,77,167,1)' // 100% 处的颜色
								}], false),
								barBorderRadius: [30, 30, 30, 30],
								shadowColor: 'rgba(0,160,221,1)',
								shadowBlur: 4,
							}
						},
						label: {
							normal: {
								show: true,
								lineHeight: 30,
								width: 80,
								height: 30,
								backgroundColor: 'rgba(0,160,221,0.1)',
								borderRadius: 200,
								position: ['-8', '-60'],
								distance: 1,
								formatter: [
									'    {d|●}',
									' {a|{c}}     \n',
									'    {b|}'
								].join(','),
								rich: {
									d: {
										color: '#3CDDCF',
									},
									a: {
										color: '#fff',
										align: 'center',
									},
									b: {
										width: 1,
										height: 30,
										borderWidth: 1,
										borderColor: '#234e6c',
										align: 'left'
									},
								}
							}
						}
					}]
				})
			},
			histogramPicture() {
				let demoData = [{
					name: '时钟',
					value: 60,
					unit: '%',
					pos: ['50%', '50%'],
					range: [0, 100],
					colora: 'rgba(193,136,244,0.9)',
					colorb: 'rgba(242,166,200,0.6)'
				}]
				let myChart = this.$echarts.init(document.getElementById('histogramPict'))
				// 绘制图表
				myChart.setOption({
					tooltip: {
						trigger: 'axis'
					},
					legend: {
						color: ["#F58080", "#47D8BE", "#F9A589"],
						data: ['新报', '流失', '续费'],
						left: 'center',
						bottom: 'bottom'
					},
					grid: {
						top: 'middle',
						left: '3%',
						right: '4%',
						bottom: '3%',
						height: '80%',
						containLabel: true
					},
					xAxis: {
						type: 'category',
						data: [100, 200, 20, 30, 60, 89],
						axisLine: {
							lineStyle: {
								color: "#999"
							}
						}
					},
					yAxis: {
						type: 'value',

						splitLine: {
							lineStyle: {
								type: 'dashed',
								color: '#DDD'
							}
						},
						axisLine: {
							show: false,
							lineStyle: {
								color: "#333"
							},
						},
						nameTextStyle: {
							color: "#999"
						},
						splitArea: {
							show: false
						}
					},
					series: [{
							name: '新报',
							type: 'line',
							data: [800, 900, 220, 130, 660, 289],
							color: "#F58080",
							lineStyle: {
								normal: {
									width: 5,
									color: {
										type: 'linear',

										colorStops: [{
											offset: 0,
											color: '#FFCAD4' // 0% 处的颜色
										}, {
											offset: 0.4,
											color: '#F58080' // 100% 处的颜色
										}, {
											offset: 1,
											color: '#F58080' // 100% 处的颜色
										}],
										globalCoord: false // 缺省为 false
									},
									shadowColor: 'rgba(245,128,128, 0.5)',
									shadowBlur: 10,
									shadowOffsetY: 7
								}
							},
							itemStyle: {
								normal: {
									color: '#F58080',
									borderWidth: 10,
									/*shadowColor: 'rgba(72,216,191, 0.3)',
									 shadowBlur: 100,*/
									borderColor: "#F58080"
								}
							},
							smooth: true
						},
						{
							name: '流失',
							type: 'line',
							data: [123, 568, 111, 222, 123, 56],
							lineStyle: {
								normal: {
									width: 5,
									color: {
										type: 'linear',

										colorStops: [{
												offset: 0,
												color: '#AAF487' // 0% 处的颜色
											},
											{
												offset: 0.4,
												color: '#47D8BE' // 100% 处的颜色
											}, {
												offset: 1,
												color: '#47D8BE' // 100% 处的颜色
											}
										],
										globalCoord: false // 缺省为 false
									},
									shadowColor: 'rgba(71,216,190, 0.5)',
									shadowBlur: 10,
									shadowOffsetY: 7
								}
							},
							itemStyle: {
								normal: {
									color: '#AAF487',
									borderWidth: 10,
									/*shadowColor: 'rgba(72,216,191, 0.3)',
									 shadowBlur: 100,*/
									borderColor: "#AAF487"
								}
							},
							smooth: true
						},
						{
							name: '续费',
							type: 'line',
							data: [125, 568, 25, 36, 784, 56],
							lineStyle: {
								normal: {
									width: 5,
									color: {
										type: 'linear',

										colorStops: [{
												offset: 0,
												color: '#F6D06F' // 0% 处的颜色
											},
											{
												offset: 0.4,
												color: '#F9A589' // 100% 处的颜色
											}, {
												offset: 1,
												color: '#F9A589' // 100% 处的颜色
											}
										],
										globalCoord: false // 缺省为 false
									},
									shadowColor: 'rgba(249,165,137, 0.5)',
									shadowBlur: 10,
									shadowOffsetY: 7
								}
							},
							itemStyle: {
								normal: {
									color: '#F6D06F',
									borderWidth: 10,
									/*shadowColor: 'rgba(72,216,191, 0.3)',
									 shadowBlur: 100,*/
									borderColor: "#F6D06F"
								}
							},
							smooth: true
						}
					]
				})
			},

			technologyPict() {
				// 基于准备好的dom，初始化echarts实例
				let myChart = this.$echarts.init(document.getElementById('technologyPict'))
				// 绘制图表
				myChart.setOption({
					backgroundColor: '#142468',
					series: [{
							type: 'pie',
							zlevel: 1,
							silent: true,
							radius: ['98%', '97%'],
							hoverAnimation: false,
							color: "rgba(88,142,197,0.5)",
							// animation:false,    //charts3 no
							label: {
								normal: {
									show: false
								},
							},
							labelLine: {
								normal: {
									show: false
								}
							},
							data: [1]
						}, {
							type: 'pie',
							zlevel: 2,
							silent: true,
							radius: ['90%', '91%'],
							startAngle: 50,
							hoverAnimation: false,
							// animation:false,    //charts3 no
							label: {
								normal: {
									show: false
								},
							},
							labelLine: {
								normal: {
									show: false
								}
							},
							data: this._pie2()
						},
						{
							type: 'pie',
							zlevel: 3,
							silent: true,
							radius: ['88%', '87%'],
							label: {
								normal: {
									show: false
								},
							},
							labelLine: {
								normal: {
									show: false
								}
							},
							data: this._pie2()
						},
						{
							type: 'pie',
							zlevel: 4,
							silent: true,
							radius: ['84%', '83%'],
							label: {
								normal: {
									show: false
								},
							},
							labelLine: {
								normal: {
									show: false
								}
							},
							data: this._pie3()
						}, {
							type: 'pie',
							zlevel: 5,
							silent: true,
							radius: ['80%', '78%'],
							color: ["#fc8d89", "#46d3f3", "rgba(203,203,203,.2)"],
							startAngle: 50,
							hoverAnimation: false,
							// animation:false,    //charts3 no
							label: {
								normal: {
									show: false
								},
							},
							data: [50, 20, 40]
						},
						{
							name: "",
							type: 'gauge',
							splitNumber: 30, //刻度数量
							min: 0,
							max: 100,
							radius: '73%', //图表尺寸
							center: ['50%', '50%'],
							startAngle: 90,
							endAngle: -269.9999,
							axisLine: {
								show: false,
								lineStyle: {
									width: 0,
									shadowBlur: 0,
									color: [
										[1, '#0dc2fe']
									]
								}
							},
							axisTick: {
								show: false,
								lineStyle: {
									color: 'auto',
									width: 2
								},
								length: 20,
								splitNumber: 5
							},
							splitLine: {
								show: true,
								length: 32,
								lineStyle: {
									color: 'auto',
								}
							},
							axisLabel: {
								show: false
							},
							pointer: { //仪表盘指针
								show: 0,
							},
							detail: {
								show: 0,
							},
						},
						{
							name: '统计',
							type: 'gauge',
							splitNumber: 30, //刻度数量
							min: 0,
							max: 100,
							radius: '68%', //图表尺寸
							center: ['50%', '50%'],
							startAngle: 90,
							endAngle: -269.9999,
							axisLine: {
								show: true,
								lineStyle: {
									width: 0,
									shadowBlur: 0,
									color: [
										[0, '#0dc2fe'],
										[1, '#0dc2fe']
									]
								}
							},
							axisTick: {
								show: true,
								lineStyle: {
									color: '#0dc2fe',
									width: 2
								},
								length: 20,
								splitNumber: 5
							},
							splitLine: {
								show: true,
								length: 20,
								lineStyle: {
									color: '#0dc2fe',
								}
							},
							axisLabel: {
								show: false
							},
							pointer: { //仪表盘指针
								show: 0,
							},
							detail: {
								borderColor: '#fff',
								shadowColor: '#fff', //默认透明
								shadowBlur: 2,
								offsetCenter: [0, '0%'], // x, y，单位px
								textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
									color: '#fff',
									fontSize: 30,
								},
								formatter: '{value}'
							},
							data: [{
								name: "",
								value: 14
							}]
						},
						{
							type: 'pie',
							zlevel: 20,
							silent: true,
							radius: ['60%', '59%'],
							hoverAnimation: false,
							color: '#2dc0c9',
							// animation:false,
							data: [1],
							labelLine: {
								normal: {
									show: false
								}
							}
						},
						{
							name: '中间环形图',
							type: 'pie',
							radius: ['35%', '55%'],
							avoidLabelOverlap: false,
							hoverAnimation: false,
							itemStyle: {
								normal: {
									color: '#80ADD2',
									borderColor: '#3D4268',
								}
							},
							label: {
								normal: {
									show: false,
									position: 'center',

								},
								emphasis: {
									show: true,
									textStyle: {
										fontSize: '30',
										fontWeight: 'bold'
									}
								}
							},
							labelLine: {
								normal: {
									show: false
								}
							},
							data: [
								25, 25, 25, 25, 25, 25
							]
						},
					]
				})
			},
			piePict() {
				// 基于准备好的dom，初始化echarts实例
				let demoData = [{
					name: '时钟',
					value: 60,
					unit: '%',
					pos: ['50%', '50%'],
					range: [0, 100],
					colora: 'rgba(193,136,244,0.9)',
					colorb: 'rgba(242,166,200,0.6)'
				}]
				let highlight = 'white';
				let myChart = this.$echarts.init(document.getElementById('piePict'))
				// 绘制图表
				myChart.setOption({
					backgroundColor: '#212121',
					series: (() => {
						var result = [];

						demoData.forEach((item) => {
							result.push(
								// 内侧指针、数值显示
								{
									name: item.name,
									type: 'gauge',
									center: item.pos,
									radius: '90%',
									startAngle: 225,
									endAngle: -45,
									min: 0,
									max: 100,
									axisLine: {
										show: true,
										lineStyle: {
											width: 2,
											color: [
												[
													item.value / 100, new this.$echarts.graphic.LinearGradient(
														0, 0, 1, 0, [{
																offset: 0,
																color: 'rgba(255,255,255,0)',
															},
															{
																offset: 1,
																color: 'white',
															}
														]
													)
												],
												[
													1, 'rgba(255,255,255, 0)'
												]
											]
										}
									},
									axisTick: {
										show: 0,
									},
									splitLine: {
										show: 0,
									},
									axisLabel: {
										show: 0
									},
									pointer: {
										show: 0,
									},
									detail: {
										show: 0
									},
									data: [{
										value: item.value,
									}]
								},
								// 外围刻度
								{
									type: 'gauge',
									center: item.pos,
									radius: '50%', // 1行3个
									splitNumber: item.splitNum || 10,
									min: 0,
									max: 100,
									startAngle: 225,
									endAngle: -45,
									axisLine: {
										show: true,
										lineStyle: {
											width: 1,
											color: [
												[1, 'rgba(0,0,0,0)']
											]
										}
									}, //仪表盘轴线
									axisTick: {
										show: true,
										lineStyle: {
											color: 'rgba(255,255,255,0.6)',
											width: 1
										},
										length: -6
									}, //刻度样式
									splitLine: {
										show: true,
										length: 10,
										lineStyle: {
											color: 'rgba(255,255,255,0.6)'
										}
									}, //分隔线样式
									axisLabel: {
										show: true,
										distance: 2,
										textStyle: {
											color: highlight,
											fontSize: '12',
											fontWeight: 'bold'
										}
									},
									pointer: {
										show: 0
									},
									detail: {
										show: 0
									}
								},

								// 内侧指针、数值显示
								{
									name: item.name,
									type: 'gauge',
									center: item.pos,
									radius: '54%',
									startAngle: 225,
									endAngle: -45,
									min: 0,
									max: 100,
									axisLine: {
										show: true,
										lineStyle: {
											width: 50,
											color: [
												[
													item.value / 100, new this.$echarts.graphic.LinearGradient(
														0, 0, 1, 0, [{
																offset: 0,
																color: 'rgba(0,0,0, 0)',
															},
															{
																offset: 1,
																color: item.colorb,
															}
														]
													)
												],
												[
													1, 'rgba(255,255,255, 0)'
												]
											]
										}
									},
									axisTick: {
										show: 0,
									},
									splitLine: {
										show: 0,
									},
									axisLabel: {
										show: 0
									},
									pointer: {
										show: true,
										length: '102%',
										width: 3
									},
									title: {
										show: true,
										offsetCenter: [0, '65%'],
										color: 'white',
										fontSize: 20,
										/* backgroundColor: "#D8d8d8",*/
										borderRadius: 21,
										padding: 5
									},
									detail: {
										show: true,
										offsetCenter: [0, 0],
										textStyle: {
											fontSize: 25,
											color: '#fff'
										},
										formatter: [
											'{value}' + (item.unit || ''),
											/* '{name|' + item.name + '}'*/
										].join('\n'),

										rich: {
											name: {
												fontSize: 20,
												lineHeight: 10,
												color: '#ddd',
												padding: [30, 0, 0, 0]
											}
										}
									},
									itemStyle: {
										normal: {
											color: highlight,
										}
									},
									data: [{
										value: item.value,
										name: item.name
									}]
								}
							);
						});

						return result;
					})()
				})
			},
			_pie1() {
				let dataArr = [];
				for (var i = 0; i < 8; i++) {
					dataArr.push({
						name: (i + 1).toString(),
						value: 20,
						itemStyle: {
							normal: {
								color: "rgba(88,142,197,0.4)",
								borderWidth: 0,
								borderColor: "rgba(0,0,0,0)"
							}
						}
					})
				}
				return dataArr
			},
			_pie2() {
				let dataArr = [];
				for (var i = 0; i < 8; i++) {
					if (i % 2 === 0) {
						dataArr.push({
							name: (i + 1).toString(),
							value: 25,
							itemStyle: {
								normal: {
									color: "rgba(88,142,197,0.5)",
									borderWidth: 0,
									borderColor: "rgba(0,0,0,0)"
								}
							}
						})
					} else {
						dataArr.push({
							name: (i + 1).toString(),
							value: 20,
							itemStyle: {
								normal: {
									color: "rgba(0,0,0,0)",
									borderWidth: 0,
									borderColor: "rgba(0,0,0,0)"
								}
							}
						})
					}
				}
				return dataArr
			},
			_pie3() {
				let dataArr = [];
				for (var i = 0; i < 100; i++) {
					if (i % 2 === 0) {
						dataArr.push({
							name: (i + 1).toString(),
							value: 25,
							itemStyle: {
								normal: {
									color: "rgb(126,190,255)",
									borderWidth: 0,
									borderColor: "rgba(0,0,0,0)"
								}
							}
						})
					} else {
						dataArr.push({
							name: (i + 1).toString(),
							value: 20,
							itemStyle: {
								normal: {
									color: "rgba(0,0,0,0)",
									borderWidth: 0,
									borderColor: "rgba(0,0,0,0)"
								}
							}
						})
					}
				}
				return dataArr
			}
		}
	}
</script>
<style scoped>
	.container {
		display: flex;
	}
</style>