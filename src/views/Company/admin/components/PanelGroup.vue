<template>
	<el-row class="panel-group" :gutter="40">
		<el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
			<div class="card-panel">
				<div class="card-panel-icon-wrapper icon-money">
					<svg-icon icon-class="money" class-name="card-panel-icon"></svg-icon>
				</div>
				<div class="card-panel-description">
					<div class="card-panel-text">今日收入</div>
					<count-to class="card-panel-num" :startVal="0" :endVal="endVal" :duration="3000"></count-to>
				</div>
			</div>
		</el-col>
		<el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
			<div class="card-panel">
				<div class="card-panel-icon-wrapper icon-order">
					<svg-icon icon-class="money" class-name="card-panel-icon"></svg-icon>
				</div>
				<div class="card-panel-description">
					<div class="card-panel-text">今日成交订单</div>
					<count-to class="card-panel-num" :startVal="0" :endVal="endVal" :duration="3000"></count-to>
				</div>
			</div>
		</el-col>
		<el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
			<div class="card-panel">
				<div class="card-panel-icon-wrapper icon-line">
					<svg-icon icon-class="money" class-name="card-panel-icon"></svg-icon>
				</div>
				<div class="card-panel-description">
					<div class="card-panel-text">会员线路</div>
					<count-to class="card-panel-num" :startVal="0" :endVal="endVal" :duration="3000"></count-to>
				</div>
			</div>
		</el-col>
		<el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
			<div class="card-panel">
				<div class="card-panel-icon-wrapper icon-users">
					<svg-icon icon-class="money" class-name="card-panel-icon"></svg-icon>
				</div>
				<div class="card-panel-description">
					<div class="card-panel-text">联合体会员数</div>
					<count-to class="card-panel-num" :startVal="0" :endVal="endVal" :duration="3000"></count-to>
				</div>
			</div>
		</el-col>
	</el-row>
</template>

<script>
import CountTo from 'vue-count-to'
export default {
  components: {
    CountTo
  },
  data() {
    return {
      endVal: 4000
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.panel-group {
  margin-top: 18px;
  .card-panel-col{
    margin-bottom: 32px;
  }
  .card-panel {
    height: 108px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    border-color: rgba(0, 0, 0, .05);
    &:hover {
      .card-panel-icon-wrapper {
        color: #fff;
      }
      .icon-money {
         background: #40c9c6;
      }
      .icon-order {
        background: #36a3f7;
      }
      .icon-line {
        background: #f4516c;
      }
      .icon-users {
        background: #34bfa3
      }
    }
    .icon-money {
      color: #40c9c6;
    }
    .icon-order {
      color: #36a3f7;
    }
    .icon-line {
      color: #f4516c;
    }
    .icon-users {
      color: #34bfa3
    }
    .card-panel-icon-wrapper {
      float: left;
      margin: 14px 0 0 14px;
      padding: 16px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }
    .card-panel-icon {
      float: left;
      font-size: 48px;
    }
    .card-panel-description {
      float: right;
      font-weight: bold;
      margin: 26px;
      margin-left: 0px;
      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
        margin-bottom: 12px;
      }
      .card-panel-num {
        font-size: 20px;
      }
    }
  }
}
</style>
