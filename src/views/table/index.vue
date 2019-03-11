<template>
	<div>
		<h1>Table 表格</h1>
		<h3>基础表格</h3>
		<p>基础表格用法</p>
		<el-row :gutter="20">
			<el-col :span="12" :xs="24" :sm="24" :lg="12">
				<custom-table :tableOptions="tableOptions1"></custom-table>
			</el-col>
			<el-col :span="12" :xs="24" :sm="24" :lg="12">
<pre>
&lt;template&gt;
  &lt;custom-table :tableOptions="tableOptions1"&gt;&lt;/custom-table&gt;
&lt;/template&gt;
import CustomTable from '@/components/CustomTable'
export default {
  name: 'Table',
  components: {
    CustomTable
  },
  data() {
    return {
      tableOptions1: {
        columns: [{
          label: '姓名',
          prop: 'name'
        }, {
          label: '性别',
          prop: 'sex'
        }, {
          label: '年龄',
          prop: 'age'
        }],
        dataSource: [{
          name: '张三',
          sex: '男',
          age: '19'
        }, {
          name: '李四',
          sex: '男',
          age: '39'
        }, {
          name: '王五',
          sex: '女',
          age: '29'
        }]
      }
    }
  }
}
</pre>
			</el-col>
		</el-row>
		<h3>带有选择框、序号的表格</h3>
		<p>选择框、序号</p>
		<el-row :gutter="20">
			<el-col :span="12" :xs="24" :sm="24" :lg="12">
				<custom-table :tableOptions="tableOptions2"></custom-table>
			</el-col>
			<el-col :span="12" :xs="24" :sm="24" :lg="12">
<pre>
&lt;template&gt;
  &lt;custom-table :tableOptions="tableOptions2"&gt;&lt;/custom-table&gt;
&lt;/template&gt;
import CustomTable from '@/components/CustomTable'
export default {
  name: 'Table',
  components: {
    CustomTable
  },
  data() {
    return {
      tableOptions2: {
        hasSelection: true,
        hasIndex: true,
        columns: [{
          label: '姓名',
          prop: 'name'
        }, {
          label: '性别',
          prop: 'sex'
        }, {
          label: '年龄',
          prop: 'age'
        }],
        dataSource: [{
          name: '张三',
          sex: '男',
          age: '19'
        }, {
          name: '李四',
          sex: '男',
          age: '39'
        }, {
          name: '王五',
          sex: '女',
          age: '29'
        }]
      }
    }
  }
}
</pre>
			</el-col>
		</el-row>
		<h3>带有操作栏的表格</h3>
		<p>操作栏</p>
		<el-row :gutter="20">
			<el-col :span="12" :xs="24" :sm="24" :lg="12">
				<custom-table :tableOptions="tableOptions3">
					<template slot="handle-column">
						<el-table-column label="操作">
							<template slot-scope="scope">
								<el-popover
									placement="right"
									width="160"
									v-model="scope.row.visible"
								>
									<p>确定删除吗?</p>
									<div style="text-align: right; maring: 0;">
										<el-button size="mini" type="text" @click="scope.row.visible = false">取消</el-button>
										<el-button size="mini" type="danger" @click="handleDelete">确定</el-button>
									</div>
									<el-button slot="reference" @click="handleClick(scope.row)" type="danger">删除</el-button>
								</el-popover>
							</template>
						</el-table-column>
					</template>
				</custom-table>
			</el-col>
			<el-col :span="12" :xs="24" :sm="24" :lg="12">
<pre>
&lt;template&gt;
  &lt;custom-table :tableOptions="tableOptions2"&gt;
    &lt;template slot="handle-column"&gt;
      &lt;el-table-column label="操作"&gt;
        &lt;template slot-scope="scope"&gt;
          &lt;el-button @click="handleClick(scope.row)" type="danger"&gt;删除&lt;/el-button&gt;
        &lt;/template&gt;
      &lt;/el-table-column&gt;
    &lt;/template&gt;
  &lt;/custom-table&gt;
&lt;/template&gt;
import CustomTable from '@/components/CustomTable'
export default {
  name: 'Table',
  components: {
    CustomTable
  },
  data() {
    return {
      tableOptions2: {
        hasSelection: true,
        hasIndex: true,
        columns: [{
          label: '姓名',
          prop: 'name'
        }, {
          label: '性别',
          prop: 'sex'
        }, {
          label: '年龄',
          prop: 'age'
        }],
        dataSource: [{
          name: '张三',
          sex: '男',
          age: '19'
        }, {
          name: '李四',
          sex: '男',
          age: '39'
        }, {
          name: '王五',
          sex: '女',
          age: '29'
        }]
      }
    }
  }
}
</pre>
			</el-col>
		</el-row>
		<h3>固定侧边栏表格</h3>
		<p>固定侧边栏</p>
		<el-row :gutter="20">
			<el-col :span="12" :xs="24" :sm="24" :lg="12">
				<custom-table :tableOptions="tableOptions4"></custom-table>
			</el-col>
			<el-col :span="12" :xs="24" :sm="24" :lg="12">
<pre>
&lt;template&gt;
  &lt;custom-table :tableOptions="tableOptions4"&gt;&lt;/custom-table&gt;
&lt;/template&gt;
import CustomTable from '@/components/CustomTable'
export default {
  name: 'Table',
  components: {
    CustomTable
  },
  data() {
    return {
      tableOptions4: {
        hasSelection: true,
        hasIndex: true,
        columns: [{
          label: '姓名',
          prop: 'name',
          fixed: true
        }, {
          label: '性别',
          prop: 'sex'
        }, {
          label: '年龄',
          prop: 'age'
        }],
        dataSource: [{
          name: '张三',
          sex: '男',
          age: '19'
        }, {
          name: '李四',
          sex: '男',
          age: '39'
        }, {
          name: '王五',
          sex: '女',
          age: '29'
        }]
      }
    }
  }
}
</pre>
			</el-col>
		</el-row>
		<h3>格式化数据表格</h3>
		<p>手动格式化数据</p>
		<el-row :gutter="20">
			<el-col :span="12" :xs="24" :sm="24" :lg="12">
				<custom-table :tableOptions="tableOptions5"></custom-table>
			</el-col>
			<el-col :span="12" :xs="24" :sm="24" :lg="12">
<pre>
&lt;template&gt;
  &lt;custom-table :tableOptions="tableOptions4"&gt;&lt;/custom-table&gt;
&lt;/template&gt;
import CustomTable from '@/components/CustomTable'
export default {
  name: 'Table',
  components: {
    CustomTable
  },
  data() {
    return {
      tableOptions4: {
        hasSelection: true,
        hasIndex: true,
        columns: [{
          label: '姓名',
          prop: 'name'
        }, {
          label: '性别',
          prop: 'sex',
          formatter: (row) => {
            return row.sex === 0 ? '男' : row.sex === 1 ? '女' : '未知'
          }
        }, {
          label: '年龄',
          prop: 'age'
        }],
        dataSource: [{
          name: '张三',
          sex: 0,
          age: '19'
        }, {
          name: '李四',
          sex: 0,
          age: '39'
        }, {
          name: '王五',
          sex: 0,
          age: '29'
        }, {
          name: '赵六',
          sex: 3,
          age: '59',
         visible: false
        }]
      }
    }
  }
}
</pre>
			</el-col>
		</el-row>
		<h2>更多配置参考以下参数配置</h2>
		<h3>参数配置</h3>
		<el-table :data="tableParams" stripe border>
			<el-table-column label="参数" prop="paramsName"></el-table-column>
			<el-table-column label="说明" prop="paramsCaption"></el-table-column>
			<el-table-column label="参数类型" prop="paramsType"></el-table-column>
			<el-table-column label="是否必填" prop="isMust"></el-table-column>
			<el-table-column label="默认值" prop="default"></el-table-column>
		</el-table>
		<h3>columns参数配置</h3>
		<el-table :data="columnsParams" stripe border>
			<el-table-column label="参数" prop="paramsName"></el-table-column>
			<el-table-column label="说明" prop="paramsCaption"></el-table-column>
			<el-table-column label="参数类型" prop="paramsType"></el-table-column>
			<el-table-column label="是否必填" prop="isMust"></el-table-column>
			<el-table-column label="默认值" prop="default"></el-table-column>
		</el-table>
	</div>
</template>

<script>
import CustomTable from '@/components/CustomTable'
import { tableParams, columnsParams } from './tableParams.js'
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
const localColumns2 = [{
  label: '姓名',
  prop: 'name',
  fixed: true
}, {
  label: '性别',
  prop: 'sex'
}, {
  label: '年龄',
  prop: 'age'
}, {
  label: '性别',
  prop: 'sex'
}, {
  label: '年龄',
  prop: 'age'
}, {
  label: '性别',
  prop: 'sex'
}, {
  label: '年龄',
  prop: 'age'
}, {
  label: '性别',
  prop: 'sex'
}, {
  label: '年龄',
  prop: 'age'
}, {
  label: '性别',
  prop: 'sex'
}, {
  label: '年龄',
  prop: 'age'
}, {
  label: '性别',
  prop: 'sex'
}, {
  label: '年龄',
  prop: 'age'
}, {
  label: '性别',
  prop: 'sex'
}, {
  label: '年龄',
  prop: 'age'
}, {
  label: '性别',
  prop: 'sex'
}, {
  label: '年龄',
  prop: 'age'
}, {
  label: '性别',
  prop: 'sex'
}, {
  label: '年龄',
  prop: 'age'
}, {
  label: '性别',
  prop: 'sex'
}, {
  label: '年龄',
  prop: 'age'
}, {
  label: '性别',
  prop: 'sex'
}, {
  label: '年龄',
  prop: 'age'
}, {
  label: '性别',
  prop: 'sex'
}, {
  label: '年龄',
  prop: 'age'
}, {
  label: '性别',
  prop: 'sex'
}, {
  label: '年龄',
  prop: 'age'
}, {
  label: '性别',
  prop: 'sex'
}, {
  label: '年龄',
  prop: 'age'
}]
const localData3 = [{
  name: '张三',
  sex: 0,
  age: '19',
  visible: false
}, {
  name: '李四',
  sex: 0,
  age: '39',
  visible: false
}, {
  name: '王五',
  sex: 1,
  age: '29',
  visible: false
}, {
  name: '赵六',
  sex: 3,
  age: '59',
  visible: false
}]
const localColumns3 = [{
  label: '姓名',
  prop: 'name'
}, {
  label: '性别',
  prop: 'sex',
  formatter: (row) => {
    return row.sex === 0 ? '男' : row.sex === 1 ? '女' : '未知'
  }
}, {
  label: '年龄',
  prop: 'age'
}]
export default {
  name: 'Table',
  components: {
    CustomTable
  },
  data() {
    return {
      tableParams,
      columnsParams,
      selectRow: null,
      tableOptions1: {
        columns: localColumns,
        dataSource: localData
      },
      tableOptions2: {
        hasSelection: true,
        hasIndex: true,
        columns: localColumns,
        dataSource: localData
      },
      tableOptions3: {
        columns: localColumns,
        dataSource: localData
      },
      tableOptions4: {
        hasSelection: true,
        hasIndex: true,
        columns: localColumns2,
        dataSource: localData
      },
      tableOptions5: {
        columns: localColumns3,
        dataSource: localData3
      }
    }
  },
  methods: {
    handleClick(row) {
      row.visible = true
      this.selectRow = row
      console.log(row)
    },
    handleDelete() {
      localData.filter((item, i) => {
        if (item.name === this.selectRow.name) {
          localData.splice(i, 1)
        }
      })
      this.$message({
        message: '删除成功',
        type: 'success'
      })
      this.selectRow.visible = false
      this.selectRow = null
    }
  }
}
</script>

<style scoped>

</style>
