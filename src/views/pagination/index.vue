<template>
	<div>
		<h1>Pagination 分页</h1>
		<h3>基础分页</h3>
		<p>基本分页展示用法</p>
		<el-row :gutter="20">
			<el-col :span="11" :xs="24" :sm="24" :lg="12">
				<pagination :page="page1"></pagination>
				<p>基本布局只有左右的箭头以及主体</p>
			</el-col>
			<el-col :span="11" :xs="24" :sm="24" :lg="12">
				<pre>
&lt;template&gt;
  &lt;pagination :page="page1"&gt;&lt;/pagination&gt;
&lt;/template&gt;
import Pagination from '@/components/Pagination'
export default {
  name: 'Pagination',
  components: { Pagination },
  data() {
    return {
      page1: {
        pageIndex: 1,
        pageSize: 20,
        totalPage: 1000
      }
    }
  }
}
				</pre>
			</el-col>
		</el-row>
		<h3>带跳转的分页</h3>
		<p>可跳转至指定页</p>
		<el-row :gutter="20">
			<el-col :span="11" :xs="24" :sm="24" :lg="12">
				<pagination :page="page2"></pagination>
				<p>输入框内输入指定跳转页码，超出分页上限，跳转至最后一页;超出下限，跳转至第一页</p>
			</el-col>
			<el-col :span="11" :xs="24" :sm="24" :lg="12">
				<pre>
&lt;template&gt;
  &lt;pagination :page="page2"&gt;&lt;/pagination&gt;
&lt;/template&gt;
import Pagination from '@/components/Pagination'
export default {
  name: 'Pagination',
  components: { Pagination },
  data() {
    return {
      page2: {
        pageIndex: 3,
        pageSize: 15,
        totalPage: 950,
        layout: 'prev, pager, next, jumper'
      }
    }
  }
}
				</pre>
			</el-col>
		</el-row>
		<h3>带修改每页展示数量分页</h3>
		<p>可选择当前页展示多少数据</p>
		<el-row :gutter="20">
			<el-col :span="11" :xs="24" :sm="24" :lg="12">
				<pagination :page="page3"></pagination>
			</el-col>
			<el-col :span="11" :xs="24" :sm="24" :lg="12">
				<pre>
&lt;template&gt;
  &lt;pagination :page="page3"&gt;&lt;/pagination&gt;
&lt;/template&gt;
import Pagination from '@/components/Pagination'
export default {
  name: 'Pagination',
  components: { Pagination },
  data() {
    return {
      page3: {
        pageIndex: 5,
        pageSize: 15,
        totalPage: 950,
        pageSizes: [10, 15, 30, 50],
        layout: 'sizes, prev, pager, next'
      }
    }
  }
}
				</pre>
			</el-col>
		</el-row>
		<h3>完整功能</h3>
		<p>完整分页演示</p>
		<el-row :gutter="20">
			<el-col :span="11" :xs="24" :sm="24" :lg="12">
				<pagination
				  :page="page4"
          :totalPage="totalPage"
          :pageSizes="[10, 20, 50, 100]"
          :prevText="'上一页'"
          :nextText="'下一页'"
					@currentChange="currentChangeHandle"
				></pagination>
			</el-col>
			<el-col :span="11" :xs="24" :sm="24" :lg="12">
				<pre>
&lt;template&gt;
  &lt;pagination
    :page="page4"
    @currentChangeHandle="currentChangeHandle"
    @sizeChangeHandle="sizeChangeHandle"
  &gt;&lt;/pagination&gt;
&lt;/template&gt;
import Pagination from '@/components/Pagination'
export default {
  name: 'Pagination',
  components: { Pagination },
  data() {
    return {
      page4: {
        pageIndex: 1,
        pageSize: 20,
        totalPage: 774,
        prevText: '上一页',
        nextText: '下一页',
        pageSizes: [10, 20, 50, 100],
        layout: 'sizes, prev, pager, next, jumper'
      }
    }
  },
  methods: {
    currentChangeHandle(){
      this.$message({
        type: 'info',
        message: `当前第${this.page4.pageIndex}页`
      })
    }
  }
}
				</pre>
			</el-col>
		</el-row>
		<h2>详细配置参数如下</h2>
		<h3>参数配置</h3>
		<el-table :data="paginationParams" stripe border>
			<el-table-column label="参数" prop="paramsName"></el-table-column>
			<el-table-column label="说明" prop="paramsCaption"></el-table-column>
			<el-table-column label="参数类型" prop="paramsType"></el-table-column>
			<el-table-column label="是否必填" prop="isMust"></el-table-column>
			<el-table-column label="默认值" prop="default"></el-table-column>
		</el-table>
	</div>
</template>

<script>
import { paginationParams } from './paginationParams.js'
import Pagination from '@/components/Pagination'
export default {
  components: { Pagination },
  data() {
    return {
      page1: {
        pageIndex: 1,
        pageSize: 20,
        totalPage: 1000
      },
      page2: {
        pageIndex: 3,
        pageSize: 15,
        totalPage: 950,
        layout: 'prev, pager, next, jumper'
      },
      page3: {
        pageIndex: 5,
        pageSize: 15,
        totalPage: 1255,
        pageSizes: [10, 15, 30, 50],
        layout: 'sizes, prev, pager, next'
      },
      page4: {
        pageIndex: 1,
        pageSize: 20
      },
      totalPage: null,
      paginationParams
    }
  },
  methods: {
    currentChangeHandle() {
      this.$message({
        type: 'info',
        message: `当前第${this.page4.pageIndex}页`
      })
    }
  },
  created() {
    setTimeout(() => {
      this.totalPage = 4000
    }, 20)
  }
}
</script>

<style scoped>

</style>
