<template>
	<div>
		<h1>树状穿梭框</h1>
    <p>封装自由度不够高，不过使用的业务场景也很少，目前封装的应该够用了</p>
    <p>基本用法</p>
    <el-row :gutter="20">
      <el-col :span="12" :xs="24" :sm="24" :lg="12">
        <tree-transfer :fromData="fromData" :toData="toData"></tree-transfer>
      </el-col>
      <el-col :span="12" :xs="24" :sm="24" :lg="12">
        <pre>
&lt;template&gt;
  &lt;tree-transfer :fromData="fromData" :toData="toData"&gt;&lt;/tree-transfer&gt;
&lt;/template&gt;
import TreeTransfer from '@/components/TreeTransfer'
export default {
  components: { TreeTransfer },
  data() {
    return {
      fromData: [{
        id: 1,
        pid: 0,
        label: 'test-left-1',
        children: [{
          id: 2,
          pid: 1,
          label: 'test-left-1-1'
        }, {
          id: 3,
          pid: 1,
          label: 'test-left-1-2',
          children: [{
            id: 4,
            pid: 3,
            label: 'test-left-1-2-1'
          }, {
            id: 5,
            pid: 3,
            label: 'test-left-1-2-2'
          }, {
            id: 6,
            pid: 3,
            label: 'test-left-1-2-3'
          }]
        }]
      }, {
        id: 7,
        pid: 0,
        label: 'test-left-2',
        children: [{
          id: 8,
          pid: 7,
          label: 'test-left-2-1'
        }, {
          id: 9,
          pid: 7,
          label: 'test-left-2-2',
          children: [{
            id: 10,
            pid: 9,
            label: 'test-left-2-2-1'
          }]
        }]
      }],
      toData: []
    }
  }
}
        </pre>
      </el-col>
    </el-row>
    <h3>自定义 title 按钮文字</h3>
    <p>设置 title 属性可设置列表文字，接收一个数组，数组第一个元素是左边列表的名字</p>
    <p>设置 buttonText 属性可设置按钮文字，同上</p>
    <el-row :gutter="20">
      <el-col :span="12" :xs="24" :sm="24" :lg="12">
        <tree-transfer :fromData="fromData" :toData="toData" :title="title" :buttonText="buttonText"></tree-transfer>
      </el-col>
      <el-col :span="12" :xs="24" :sm="24" :lg="12">
        <pre>
&lt;template&gt;
  &lt;tree-transfer :fromData="fromData" :toData="toData"&gt;&lt;/tree-transfer&gt;
&lt;/template&gt;
import TreeTransfer from '@/components/TreeTransfer'
export default {
  components: { TreeTransfer },
  data() {
    return {
      fromData: fromData,
      toData: toData,
      title: ['左边列表', '右边列表'],
      buttonText: ['到右边', '到左边']
    }
  }
}
        </pre>
      </el-col>
    </el-row>
    <h3>带搜索功能穿梭框</h3>
    <p>通过设置 filter 开启搜索功能</p>
    <el-row :gutter="20">
      <el-col :span="12" :xs="24" :sm="24" :lg="12">
        <tree-transfer :fromData="fromData" :toData="toData" :filter="filter"></tree-transfer>
      </el-col>
      <el-col :span="12" :xs="24" :sm="24" :lg="12">
        <pre>
&lt;template&gt;
  &lt;tree-transfer :fromData="fromData" :toData="toData"&gt;&lt;/tree-transfer&gt;
&lt;/template&gt;
import TreeTransfer from '@/components/TreeTransfer'
export default {
  components: { TreeTransfer },
  data() {
    return {
      fromData: fromData,
      toData: toData,
      filter: true
    }
  }
}
        </pre>
      </el-col>
    </el-row>
    <h3>更多参数配置参考一下表格</h3>
    <p>参数配置</p>
    <el-table :data="treeTransferParams" stripe border>
			<el-table-column label="参数" prop="paramsName"></el-table-column>
			<el-table-column label="说明" prop="paramsCaption"></el-table-column>
			<el-table-column label="参数类型" prop="paramsType"></el-table-column>
			<el-table-column label="是否必填" prop="isMust"></el-table-column>
			<el-table-column label="默认值" prop="default"></el-table-column>
		</el-table>
	</div>
</template>

<script>
import TreeTransfer from '@/components/TreeTransfer'
import { treeTransferParams } from './treeTransferParams.js'
export default {
  components: { TreeTransfer },
  data() {
    return {
      treeTransferParams,
      fromData: [{
        id: 1,
        pid: 0,
        label: 'test-left-1',
        children: [{
          id: 2,
          pid: 1,
          label: 'test-left-1-1'
        }, {
          id: 3,
          pid: 1,
          label: 'test-left-1-2',
          children: [{
            id: 4,
            pid: 3,
            label: 'test-left-1-2-1'
          }, {
            id: 5,
            pid: 3,
            label: 'test-left-1-2-2'
          }, {
            id: 6,
            pid: 3,
            label: 'test-left-1-2-3'
          }]
        }]
      }, {
        id: 7,
        pid: 0,
        label: 'test-left-2',
        children: [{
          id: 8,
          pid: 7,
          label: 'test-left-2-1'
        }, {
          id: 9,
          pid: 7,
          label: 'test-left-2-2',
          children: [{
            id: 10,
            pid: 9,
            label: 'test-left-2-2-1'
          }]
        }]
      }],
      toData: [],
      title: ['左边列表', '右边列表'],
      buttonText: ['到右边', '到左边'],
      filter: true
    }
  }
}
</script>

<style scoped>

</style>
