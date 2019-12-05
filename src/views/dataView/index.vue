<template>
	<div style="padding:30px;">
		<el-form :inline="true" :model="formInline" class="demo-form-inline">
			<el-form-item label="审批人">
				<el-input v-model="formInline.user" placeholder="审批人"></el-input>
			</el-form-item>
			<el-form-item label="活动区域">
				<el-select v-model="formInline.region" placeholder="活动区域">
					<el-option label="区域一" value="shanghai"></el-option>
					<el-option label="区域二" value="beijing"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="onSubmit">查询</el-button>
			</el-form-item>
		</el-form>
		<el-table :data="tableData" border stripe style="width: 100%" header-row-class-name="headerClass">
			<el-table-column prop="source" label="媒体名称">
			</el-table-column>
			<el-table-column prop="job_type|" label="媒体类型">
				<template scope="scope">
					{{ scope.row.job_type | jobTypeFormat }}
				</template>
			</el-table-column>
			<el-table-column prop="content_type" label="源展示格式">
			</el-table-column>
			<el-table-column prop="idna" label="国家">
			</el-table-column>
			<el-table-column prop="status" label="状态">
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
		 :current-page="currentPage4" :page-sizes="[10, 20, 30, 40]" :page-size="10" layout="total, sizes, prev, pager, next, jumper"
		 :total="400">
		</el-pagination>
	</div>

</template>

<script>
	import {
		dataViewApi
	} from '~/api/api.js'

	var jobType = {
		10: 'NEWS',
		11: 'SPLASH_NEWS'
	}

	export default {
		data() {
			return {
				tableData: [],
				formInline: {
					user: '',
					region: ''
				},
				currentPage4: 1,
			}
		},
		filters: {
			jobTypeFormat: function(value) {
				return jobType[value]
			}
		},
		methods: {
			handleEdit(index, row) {
				console.log(index, row);
			},
			handleDelete(index, row) {
				console.log(index, row);
			},

			onSubmit() {
				console.log('submit!');
			},
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
			},
			open3() {
				this.$notify({
					title: this.$t('el.datepicker.now'),
					message: '这是一条成功的提示消息',
					type: 'success'
				});
			}
		},
		mounted: function() {
			const params = {
				page: 1,
				page_size: 10,
				language: 'en'
			}
			dataViewApi(params).then(res => {
				console.log(res)
				if (res === undefined) {
					this.$message.error('服务器连接超时');
					return
				}
				if (res.code === 0) {
					this.tableData = res.data.result
				} else {
					this.$message.error(res.desc);
				}

			});
		}
	}
</script>

<style>
	.headerClass>th {
		/* background-color: palegreen; */
	}
</style>
