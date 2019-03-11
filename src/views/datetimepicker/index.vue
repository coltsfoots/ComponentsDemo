<template>
	<div>
		<h1>DateTimePicker 日期选择</h1>
		<h3>懒人版日期选择</h3>
		<p>最简单日期选择展示</p>
		<el-row :gutter="20">
			<el-col :span="12" :xs="24" :sm="24" :lg="12">
				<date-time-picker :type="type"></date-time-picker>
				<p>只需要规定 type 的类型，即可使用</p>
			</el-col>
			<el-col :span="12" :xs="24" :sm="24" :lg="12"></el-col>
		</el-row>

	</div>
</template>

<script>
import DateTimePicker from '@/components/DateTimePicker'
export default {
  name: 'Date',
  components: { DateTimePicker },
  data() {
    return {
      type: 'date'
    }
  }
}
</script>

<style scoped>

</style>
