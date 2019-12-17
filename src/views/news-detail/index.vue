<template>
	<div v-loading="loading" style="background-color: #f9f9f9;padding: 10px 350px;">

		<div class="article-wrap" v-if="newsDetail.id">

			<!-- 一张图片样式 -->
			<el-row :gutter="10" v-if="newsDetail.url_to_small_image && newsDetail.url_to_small_image.length===1">
				<el-col :xs="16" :sm="20">
					<h1 class="article-title">
						{{newsDetail.title}}
					</h1>

					<!-- 作者和发表日期 -->
					<el-row :gutter="2" v-if="newsDetail.content.author && newsDetail.content.publishTime">
						<el-col :span="4">
							<div class="author-publish author">作者：{{newsDetail.content.author}}</div>
						</el-col>
						<el-col :span="12">
							<div class="author-publish publish">时间：{{newsDetail.content.publishTime}}</div>
						</el-col>
					</el-row>

				</el-col>
				<el-col :xs="8" :sm="4">
					<img class="article-img" :src="newsDetail.url_to_small_image[0]" alt="">
				</el-col>
			</el-row>

			<!-- 三张图片样式 -->
			<div v-if="newsDetail.url_to_small_image && newsDetail.url_to_small_image.length===3">
				<el-row class="article-title">{{newsDetail.title}}</el-row>

				<!-- 作者和发表日期 -->
				<el-row :gutter="2" v-if="newsDetail.content.author && newsDetail.content.publishTime">
					<el-col :span="4">
						<div class="author-publish author">作者：{{newsDetail.content.author}}</div>
					</el-col>
					<el-col :span="12">
						<div class="author-publish publish">时间：{{newsDetail.content.publishTime}}</div>
					</el-col>
				</el-row>

				<el-row>
					<img class="article-img img-three" :src="newsDetail.url_to_small_image[0]" alt="">
					<img class="article-img img-three" :src="newsDetail.url_to_small_image[1]" alt="">
					<img class="article-img img-three" :src="newsDetail.url_to_small_image[2]" alt="">
				</el-row>
			</div>
			<div class="article-space"></div>

			<!-- content的内容 -->
			<div v-for="item in newsDetail.content.content" :key="item.title">

				<p v-if="item.text" class="content-text">
					{{item.text}}
				</p>

				<div v-if="item.imgurl" class="content-img">
					<img :src="item.imgurl" alt="">
				</div>

				<h6 v-if="item.imgdesc" class="content-desc">
					{{item.imgdesc}}
				</h6>

				<div v-if="item.viedo" class="content-viedo">
					<video controls>
						<source src="item.viedo">
						Sorry, your browser doesn't support embedded videos.
					</video>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
	import {
		newsDeatilApi
	} from '~/api/api.js'

	export default {
		data() {
			return {
				newsDetail: '',
				loading: true
			}
		},
		created() {
			
		},
		methods: {
			getNewsDetail() {
				newsDeatilApi(this.$route.params.id).then(res => {
					this.loading = false
					if (res && res.code === 0) {
						console.log(res)
						this.newsDetail = res.data
					}
				})
			}
		},
		watch:{
			'$route'(to,from){
				this.getNewsDetail()
			}
		}

	}
</script>

<style scoped>
	.content-viedo video {
		min-width: 85% !important;
	}

	.content-desc {
		font-weight: 500 !important;
		text-align: center;
		margin-bottom: 50px;
	}

	.content-img img,
		{
		max-width: 100%;
		height: auto;
	}

	.content-img,
	.content-viedo {
		width: 100%;
		height: 100%;
		overflow: hidden;
		margin: 20px 10px;
	}

	.content-text {
		margin-bottom: 20px;
	}

	.author-publish {
		font-size: 16px;
		font-weight: 500;
		box-sizing: border-box;
		padding: 10px 0;
	}

	.author {
		color: #606266;
		margin-left: 10px;
	}

	.publish {
		color: #969696;
		font-size: 13px;
	}

	.content-wrap {
		width: 100%;
		height: 100%;
	}

	.article-source {
		font-size: 40px;
	}

	.el-row img {
		transition: all 0.3s ease-in-out;
	}

	.el-row img:hover {
		transform: scale(1.05);
		cursor: pointer;
	}

	.img-three {
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
		padding: 15px 100px;
		background-color: #fff;
		border-radius: 4px;
	}

	.article-title {
		font-size: 26px;
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
