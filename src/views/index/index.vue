<template>
	<div style="padding:30px;">
		<el-button plain @click="open3">
			成功
		</el-button>
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
		<el-table :data="tableData" border stripe style="width: 100%">
			<el-table-column type="index" label="行号" width="90" :index="indexMethod">
			</el-table-column>
			<el-table-column sortable prop="date" label="日期" width="180">
			</el-table-column>
			<el-table-column prop="name" label="姓名" width="180">
			</el-table-column>
			<el-table-column prop="address" label="地址">
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
		 :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper"
		 :total="400">
		</el-pagination>

	</div>
</template>
<script>
	export default {
		data() {
			return {
				tableData: [{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄'
				}],
				formInline: {
					user: '',
					region: ''
				},
				currentPage4: 4,
			}
		},
		methods: {
			handleEdit(index, row) {
				console.log(index, row);
			},
			handleDelete(index, row) {
				console.log(index, row);
			},
			indexMethod(index) {
				return index + 1;
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
		}
	}
</script>
