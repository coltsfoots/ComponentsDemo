<template>
	<div>
		<h1>表单-表格-分页</h1>
		<p>三个组件结合到一起展示</p>
		<el-row :gutter="20">
			<el-col :span="11" :xs="24" :sm="24" :lg="12">
				<form-table-pagination :config="config"></form-table-pagination>
				<p>此组件结合 表单-表格-分页 三个组件为一体封装成新组件，并不影响其他三个组件单独使用</p>
			</el-col>
			<el-col :span="11" :xs="24" :sm="24" :lg="12">
				<pre>
&lt;template&gt;
  &lt;form-table-pagination :config="config"&gt;&lt;/form-table-pagination&gt;
&lt;/template&gt;
import FormTabelPagination from '@/components/FormTablePagination'
export default {
  name: 'FormTable',
  components: { FormTablePagination },
  data() {
    return {
      config: {
        formOptions: {
          formName: 'formtable',
          inline: true,
          forms: [
            {
              itemType: 'select',
              prop: 'sex',
              label: '性别',
              options: [
                {
                  label: '男',
                  value: 0
                },
                {
                  label: '女',
                  value: 1
                }
              ]
            }
          ]
        },
        tableOptions: {
          dataSource: [{
            name: '张三',
            sex: '男',
            age: '19',
            visible: false
          }, {
            name: '李四',
            sex: '男',
            age: '39',
            visible: false
          }, {
            name: '王五',
            sex: '女',
            age: '29',
            visible: false
          }],
          columns: [{
            label: '姓名',
            prop: 'name'
          }, {
            label: '性别',
            prop: 'sex'
          }, {
            label: '年龄',
            prop: 'age'
          }]
        },
        page: {
          pageIndex: 1,
          pageSize: 20,
          totalPage: 233
        }
      }
    }
  }
				</pre>
			</el-col>
		</el-row>
		<h2>详细配置参数如下</h2>
		<p>参数配置</p>
		<el-table :data="formTablePaginationParams" stripe border>
			<el-table-column label="参数" prop="paramsName"></el-table-column>
			<el-table-column label="说明" prop="paramsCaption">
				<template slot-scope="scope">
					<div v-if="scope.row.paramsCaption === 'form'">
						表单配置，详情请参考(
						<router-link to="/form">表单</router-link>
						)
					</div>
					<div v-else-if="scope.row.paramsCaption === 'table'">
						表格配置，详情请参考(
						<router-link to="/table">表格</router-link>
						)
					</div>
					<div v-else>
						分页配置，详情请参考(
						<router-link to="/pagination">分页</router-link>
						)
					</div>
				</template>
			</el-table-column>
			<el-table-column label="参数类型" prop="paramsType"></el-table-column>
			<el-table-column label="是否必填" prop="isMust"></el-table-column>
			<el-table-column label="默认值" prop="default"></el-table-column>
		</el-table>
	</div>
</template>

<script>
import { formTablePaginationParams } from './formTablePaginationParams.js'
import FormTablePagination from '@/components/FormTablePagination'
const localData = [{
  name: '张三',
  sex: '男',
  age: '19',
  visible: false
}, {
  name: '李四',
  sex: '男',
  age: '39',
  visible: false
}, {
  name: '王五',
  sex: '女',
  age: '29',
  visible: false
}]
const localColumns = [{
  label: '姓名',
  prop: 'name'
}, {
  label: '性别',
  prop: 'sex'
}, {
  label: '年龄',
  prop: 'age'
}]
export default {
  name: 'FormTable',
  components: { FormTablePagination },
  data() {
    return {
      formTablePaginationParams,
      config: {
        formOptions: {
          formName: 'formtable',
          inline: true,
          forms: [
            {
              itemType: 'select',
              prop: 'sex',
              label: '性别',
              options: [
                {
                  label: '男',
                  value: 0
                },
                {
                  label: '女',
                  value: 1
                }
              ]
            }
          ]
        },
        tableOptions: {
          dataSource: localData,
          columns: localColumns
        },
        page: {
          pageIndex: 1,
          pageSize: 20,
          totalPage: 233
        }
      }
    }
  },
  created() {
    // console.log(this)
  }
}
</script>

<style scoped>
a {
	color: #409EFF
}
</style>
