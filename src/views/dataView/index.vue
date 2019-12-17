<template>
	<div style="padding:30px;">
		<el-form :inline="true" :model="filterParams" class="demo-form-inline">
			<!-- <el-form-item label="审批人">
				<el-input v-model="filterParams.user" placeholder="审批人"></el-input>
			</el-form-item> -->
			<el-form-item label="国家">
				<el-select v-model="filterParams.idna" clearable placeholder="国家">
					<el-option v-for="item in countryArr" :key="item.id" :label="item.country_iso" :value="item.country_iso"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="源状态">
				<el-select v-model="filterParams.status" clearable placeholder="源状态">
					<el-option v-for="(value, name) in statusType" :key="name" :label="value" :value="name"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="授权状态">
				<el-select v-model="filterParams.content_type" clearable placeholder="授权状态">
					<el-option v-for="(value, name) in contentType" :key="name" :label="value" :value="name"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="媒体类型">
				<el-select v-model="filterParams.job_type" clearable placeholder="媒体类型">
					<el-option v-for="(value, name) in jobType" :key="name" :label="value" :value="name"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="onSubmit">查询</el-button>
			</el-form-item>
		</el-form>

		<el-table :data="tableData" border stripe style="width: 100%" header-row-class-name="headerClass" v-loading="loading"
		 element-loading-text="拼命加载中">
			<el-table-column prop="source" label="媒体名称">
			</el-table-column>
			<el-table-column label="类型">
				<template slot-scope="{row}">
					{{ jobType[row.job_type] }}
				</template>
			</el-table-column>
			<el-table-column label="源展示格式">
				<template slot-scope="{row}">
					{{ contentType[row.content_type] }}
				</template>
			</el-table-column>
			<el-table-column prop="idna" label="国家">
			</el-table-column>
			<el-table-column label="状态">
				<template slot-scope="{row}">
					<el-tag :type="row.status | statusFilter">
						{{ statusType[row.status] }}
					</el-tag>
				</template>
			</el-table-column>
			<el-table-column label="预览">
				<template slot-scope="scope">
					<!-- <router-link :to="'/newslist/'+scope.row.id"> -->
					<el-button v-if="scope.row.job_type === 10" size="mini" type="primary" circle icon="el-icon-edit" @click="handleView(scope.row.id)">
					</el-button>
					<!-- </router-link> -->
				</template>
			</el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑
					</el-button>
					<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除
					</el-button>
				</template>
			</el-table-column>
		</el-table>
		<el-pagination style="padding: 30px 0;" background @size-change="handleSizeChange" @current-change="handleCurrentChange"
		 :current-page="currentPage" :page-sizes="[10, 20, 50, 100]" :page-size="10" layout="total, sizes, prev, pager, next, jumper"
		 :total="totalCount">
		</el-pagination>

		<el-dialog title="新闻列表" :visible.sync="dialogTableVisible">
			<div class="infinite-list-wrapper" style="overflow:auto">
				<ul class="list" v-infinite-scroll="loadMoreNews" infinite-scroll-disabled="disabled">
					<li v-for="item in newsListData" :key="item.id" class="list-item">{{ item.source }}</li>
				</ul>
				<p style="height: 50px" v-if="true">加载更多...</p>
				<p v-if="noMore">没有更多了</p>
			</div>
		</el-dialog>
	</div>

</template>

<script>
	import {
		dataViewApi,
		countryApi,
		newsListApi,
		newsDeatilApi
	} from '~/api/api.js'

	export default {
		filters: {
			statusFilter(status) {
				const statusMap = {
					1: 'success',
					0: 'danger'
				}
				return statusMap[status]
			}
		},
		data() {
			return {
				countryArr: [],
				jobType: {
					10: 'NEWS',
					11: 'SPLASH_NEWS',
					12: 'TOP_BUZZ_NEWS',
					20: 'GIF',
					30: 'YOUTUBE_VIDEO',
					31: 'INS_VIDEO',
					32: 'TW_VIDEO',
					33: 'FB_VIDEO',
					40: 'INS_MOMENT',
					41: 'TW_MOMENT',
					42: 'FB_MOMENT'
				},
				contentType: {
					1: 'instant_view',
					2: 'web_view'
				},
				statusType: {
					0: 'offline',
					1: 'online'
				},
				filterParams: {
					status: '',
					job_type: '',
					content_type: '',
					idna: ''
				},
				loading: false,
				tableData: [],
				currentPage: 1,
				totalCount: 0,
				params: {
					page: 1,
					page_size: 10
				},
				dialogTableVisible: false,
				newsListData: [],
				loadingNewsArr: false
			}
		},
		created() {
			this.getCountry()
			this.getDatas(this.params)
		},
		computed: {
			noMore() {
				return this.count >= 20
			},
			disabled() {
				return this.loadingNewsArr || this.noMore
			}
		},
		methods: {
			handleView(id) {
				this.$store.commit('pushTagsCacheList', {
					path: `/newslist/${id}`,
					title: `新闻列表:${id}`,
				})
				this.$router.push({
					path: `/newslist/${id}`
				})
			},
			handleEdit(index, row) {
				console.log(index, row);
			},
			handleDelete(index, row) {
				console.log(index, row);
			},

			onSubmit() {
				console.log(this.filterParams);
				this.params.page = 1
				Object.assign(this.params, this.filterParams);
				this.getDatas(this.params)
			},
			handleSizeChange(val) {
				this.params.page = 1
				this.params.page_size = val
				this.getDatas(this.params)
			},
			handleCurrentChange(val) {
				this.params.page = val
				this.getDatas(this.params)
			},
			getDatas(params) {
				this.loading = true
				dataViewApi(params).then(res => {
					this.loading = false
					if (res && res.code === 0) {
						this.totalCount = res.data.total_count
						this.tableData = res.data.result
					}
				});
			},
			getCountry() {
				countryApi().then(res => {
					if (res && res.code === 0) {
						this.countryArr = res.data
					}
				})
			},
			getNewsList(id) {
				newsListApi(id, {
					page: 1,
					page_size: 10
				}).then(res => {
					if (res && res.code === 0) {
						this.newsListData = res.data.result
					}
				})
			},
			loadMoreNews() {
				this.loadingNewsArr = true
			}
		}
	}
</script>

<style>
	.headerClass>th {
		/* background-color: palegreen; */
	}
</style>
