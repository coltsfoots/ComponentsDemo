<template>
	<div class="index-wrapper clearfix">
    <panel-group></panel-group>
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :lg="8" style="margin-bottom: 15px;">
        <box-card></box-card>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="16" style="padding: 0 15px 0 0;">
        <el-select v-model="value" class="fr" @change="handleChangeDate">
          <el-option label="最近7天" value="7">最近7天</el-option>
          <el-option label="最近30天" value="30">最近30天</el-option>
        </el-select>
        <line-charts :chartData="chartData"></line-charts>
      </el-col>
    </el-row>
	</div>
</template>

<script>
import PanelGroup from './components/PanelGroup'
import BoxCard from './components/BoxCard'
import LineCharts from './components/LineCharts'
export default {
  name: 'Index',
  components: {
    PanelGroup,
    BoxCard,
    LineCharts
  },
  data() {
    const chartData = {
      incomeData: [],
      orderData: [],
      xData: []
    }
    const currYear = new Date().getFullYear()
    const currMonth = new Date().getMonth() + 1
    const monthLen = new Date(currYear, currMonth, 0).getDate()
    for (let i = 0; i < monthLen; i++) {
      chartData.incomeData.push(Math.random() * 100 + 100 / 7 * Math.random() * 100 * i)
      chartData.orderData.push(Math.random() * 100 * Math.random() + 1000 * i)
    }
    return {
      chartData,
      value: '30'
    }
  },
  methods: {
    handleChangeDate() {
      this.$store.dispatch('changeDate', this.value)
        .then((res) => {
          this.chartData.xData = res
          console.log(this.$store)
        })
    }
  }
}
</script>

<style scoped lang="less">
.index-wrapper{
  background: #f0f2f5;
  .el-select{
    width: 100px;
    z-index: 1000;
  }
}
</style>
