<template>
	<div class="app-navbar-right-search hidden-xs-only">
		<el-dropdown trigger="click" @command="handleCommand">
			<span class="el-dropdown-link">
				{{language}}<i class="el-icon-arrow-down el-icon--right"></i>
			</span>
			<el-dropdown-menu slot="dropdown">
				<el-dropdown-item command="en">english</el-dropdown-item>
				<el-dropdown-item command="cn">中文</el-dropdown-item>
			</el-dropdown-menu>
		</el-dropdown>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				language: 'english'
			}
		},
		methods: {
			handleCommand(command) {
				switch (command) {
					case 'en':
						this.language = 'english'
						this.$store.commit('changeLanguage', command)
						break
					default:
						this.$store.commit('changeLanguage', command)
						this.language = '中文'
				}
			}
		}
	}
</script>

<style scoped>
	.app-navbar-right-search {
		display: inline-block;
		padding-right: 15px;
	}

	.el-dropdown-link {
		cursor: pointer;
		color: #409EFF;
	}

	.el-icon-arrow-down {
		font-size: 12px;
	}
</style>
