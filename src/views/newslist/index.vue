<template>
	<div style="padding: 30px;background-color: #f9f9f9;" v-infinite-scroll="scrollMoreData" infinite-scroll-disabled="disabled">
		<div v-for="item in newsListData" :key="item.id">
			<div class="article-wrap">
				
				<!-- 一张图片样式 -->
				<el-row :gutter="10" v-if="item.url_to_small_image.length===1">
					<el-col :xs="16" :sm="20">
						<div class="article-title">
							{{item.title}}
						</div>
					</el-col>
					<el-col :xs="8" :sm="4">
						<img class="article-img" :src="item.url_to_small_image[0]" alt="">
					</el-col>
				</el-row>
				
				<!-- 三张图片样式 -->
				<div v-if="item.url_to_small_image.length===3">
					<el-row class="article-title">{{item.title}}</el-row>
					<el-row>
						<img class="article-img img-three" :src="item.url_to_small_image[0]" alt="">
						<img class="article-img img-three" :src="item.url_to_small_image[1]" alt="">
						<img class="article-img img-three" :src="item.url_to_small_image[2]" alt="">
					</el-row>
				</div>
				
			</div>
			<div class="article-space"></div>
		</div>

		<div class="load-more flex-row-center">
			<el-button v-if="loading" :loading="true" round>加载中</el-button>
			<div v-if="noMore && !loading" class="load-more-btn flex-row-center">没有更多了...</div>
		</div>
	</div>
</template>

<script>
	import {
		newsListApi
	} from '~/api/api.js'

	export default {
		data() {
			return {
				loading: false,
				pageIndex: 0,
				pageSize: 10,
				newsListData: [],
				total_page: 1
			}
		},
		computed: {
			noMore() {
				return this.pageIndex >= this.total_page
			},
			disabled() {
				return this.loading || this.noMore
			}
		},
		methods: {
			scrollMoreData() {
				this.loading = true
				let pageNo = this.pageIndex += 1
				newsListApi(this.$route.params.id, {
				// newsListApi('27', {
					page: pageNo,
					page_size: this.pageSize
				}).then(res => {
					if (res && res.code === 0) {
						this.loading = false
						this.total_page = res.data.total_page
						if (res.data.result.length > 0) {
							this.newsListData = [...this.newsListData, ...res.data.result]
						}
					}
				})
			}
		},
	}
</script>

<style scoped>
	
	.el-row img{
		transition: all 0.3s ease-in-out;
	}
	
	.el-row img:hover{
		transform: scale(1.05);
		cursor: pointer;
	}
	
	.img-three{
		margin: 20px 0;
		margin-right: 40px;
	}
	
	.article-space {
		height: 18px;
	}

	.load-more-btn {
		height: 40px;
		width: 100px;
		color: #303133;
		font-size: 14px;
	}

	.load-more {
		height: 100px;
		width: 100%;
	}

	.article-wrap {
		padding: 15px 15px;
		background-color: #fff;
		border-radius: 4px;
	}

	.article-title {
		font-size: 20px;
		padding: 5px;
	}

	.article-img {
		max-height: 150px;
		max-width: 300px;
		text-align: right;
	}

	@media screen and (max-width: 2400px) {
		.article-img {
			max-height: 150px;
			max-width: 220px;
		}
	}

	@media screen and (max-width: 1800px) {
		.article-img {
			max-height: 150px;
			max-width: 180px;
		}
	}

	@media screen and (max-width: 1600px) {
		.article-img {
			max-height: 150px;
			max-width: 150px;
		}
	}

	@media screen and (max-width: 1250px) {
		.article-img {
			max-height: 150px;
			max-width: 120px;
		}
	}

	@media screen and (max-width: 460px) {
		.article-img {
			max-height: 150px;
			max-width: 100px;
		}
	}

	@media screen and (max-width: 400px) {
		.article-img {
			max-height: 150px;
			max-width: 80px;
		}
	}

	@media screen and (max-width: 350px) {
		.article-img {
			max-height: 150px;
			max-width: 60px;
		}
	}
</style>
