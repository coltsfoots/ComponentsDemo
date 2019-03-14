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
			<el-col :span="12" :xs="24" :sm="24" :lg="12">
				<pre>
&lt;template&gt;
  &lt;date-time-picker :type="type"&gt;&lt;/date-time-picker&gt;
&lt;/template&gt;
import DateTimePicker from '@/components/DateTimePicker'
export default {
  name: 'Date',
  components: { DateTimePicker },
  data() {
    return {
      // 可选值有 'date, datetime, datetrange, datetimerange, year, month'
      type: 'date'
    }
  }
}
				</pre>
			</el-col>
		</el-row>
		<h3>带快捷方式的日期选择</h3>
		<p>设置 hasShortcuts 即可激活快捷方式，组件默认自带了一些快捷方式，不符合业务需求可以自己重新定义</p>
		<el-row :gutter="20">
			<el-col :span="12" :xs="24" :sm="24" :lg="12">
				<date-time-picker :hasShortcuts="hasShortcuts" :type="type"></date-time-picker>
			</el-col>
			<el-col :span="12" :xs="24" :sm="24" :lg="12">
				<pre>
&lt;template&gt;
  &lt;date-time-picker :hasShortcuts="hasShortcuts" :type="type"&gt;&lt;/date-time-picker&gt;
&lt;/template&gt;
import DateTimePicker from '@/components/DateTimePicker'
export default {
  name: 'Date',
  components: { DateTimePicker },
  data() {
    return {
      type: 'date',
      hasShortcuts: true
    }
  }
}
				</pre>
			</el-col>
		</el-row>
		<h3>自定义快捷方式</h3>
		<p>快捷方式选项自定义</p>
		<p>自定义快捷方式需要设置 pickerOptions 属性</p>
		<el-row :gutter="20">
			<el-col :span="12" :xs="24" :sm="24" :lg="12">
				<date-time-picker :type="type" :hasShortcuts="hasShortcuts" :pickerOptions="pickerOptions"></date-time-picker>
			</el-col>
			<el-col :span="12" :xs="24" :sm="24" :lg="12">
				<pre>
&lt;template&gt;
  &lt;date-time-picker :hasShortcuts="hasShortcuts" :type="type" :pickerOptions="pickerOptions"&gt;&lt;/date-time-picker&gt;
&lt;/template&gt;
import DateTimePicker from '@/components/DateTimePicker'
export default {
  name: 'Date',
  components: { DateTimePicker },
  data() {
    return {
      type: 'date',
      hasShortcuts: true,
      pickerOptions: {
        shortcuts: [
          {
            text: '三天前',
            onClick(vm) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 3)
              vm.$emit('pick', date)
            }
          }
        ]
      }
    }
  }
}
				</pre>
			</el-col>
		</el-row>
		<h3>更多参数配置参考详细参数表</h3>
		<p>参数配置</p>
		<el-table :data="dateTimePickerParams" stripe border>
			<el-table-column label="参数" prop="paramsName"></el-table-column>
			<el-table-column label="说明" prop="paramsCaption"></el-table-column>
			<el-table-column label="参数类型" prop="paramsType"></el-table-column>
			<el-table-column label="是否必填" prop="isMust"></el-table-column>
			<el-table-column label="默认值" prop="default"></el-table-column>
		</el-table>
	</div>
</template>

<script>
import DateTimePicker from '@/components/DateTimePicker'
import { dateTimePickerParams } from './dateTimePickerParams.js'
export default {
  name: 'Date',
  components: { DateTimePicker },
  data() {
    return {
      dateTimePickerParams,
      type: 'date',
      hasShortcuts: true,
      pickerOptions: {
        shortcuts: [
          {
            text: '三天前',
            onClick(vm) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 3)
              vm.$emit('pick', date)
            }
          }
        ]
      }
    }
  }
}
</script>

<style scoped>

</style>
