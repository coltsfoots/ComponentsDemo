<template>
	<div :chartData="chartData" :class="className" :style="{width, height}"></div>
</template>

<script>
import ECharts from 'echarts'
import { debounce } from '@/utils'
export default {
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '350px'
    },
    autoResize: {
      type: Boolean,
      default: true
    },
    chartData: {
      type: Object
    }
  },
  data() {
    return {
      chart: null,
      value: ''
    }
  },
  mounted() {
    this.initChart()
    if (this.autoResize) {
      this.resizeHandle = debounce(() => {
        if (this.chart) {
          this.chart.resize()
        }
      }, 100)
      window.addEventListener('resize', this.resizeHandle)
    }

    const sidebarElem = document.getElementsByClassName('sidebar-container')[0]
    sidebarElem.addEventListener('transitionend', this.resizeHandle)
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    if (this.autoResize) {
      window.removeEventListener('resize', this.resizeHandle)
    }

    const sidebarElem = document.getElementsByClassName('sidebar-container')[0]
    sidebarElem.removeEventListener('transitionend', this.resizeHandle)
  },
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.setOptions(val)
      }
    }
  },
  methods: {
    setOptions({ incomeData, orderData, xData = [] } = {}) {
      this.chart.setOption({
        xAxis: {
          data: this.$store.getters.chart,
          boundaryGap: false,
          axisTick: {
            show: false
          }
        },
        grid: {
          left: 10,
          right: 20,
          bottom: 40,
          top: 30,
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          },
          padding: [5, 10]
        },
        yAxis: {
          axisTick: {
            show: false
          }
        },
        dataZoom: [{
          show: true,
          height: 30,
          xAxisIndex: [0],
          bottom: 0,
          start: 10,
          end: 70
        }, {
          type: 'inside',
          show: true,
          height: 15,
          start: 1,
          end: 35
        }],
        legend: {
          data: ['收入', '订单']
        },
        series: [{
          name: '收入',
          itemStyle: {
            normal: {
              color: '#ff005a',
              lineStyle: {
                color: '#ff005a',
                width: 2
              }
            }
          },
          smooth: true,
          type: 'line',
          data: incomeData,
          animationDuration: 2500,
          animationEasing: 'cubicInout'
        }, {
          name: '订单',
          itemStyle: {
            normal: {
              color: '#3888fa',
              lineStyle: {
                color: '#3888fa',
                width: 2
              },
              areaStyle: {
                color: '#f3f8ff'
              }
            }
          },
          smooth: true,
          type: 'line',
          data: orderData,
          animationDuration: 2500,
          animationEasing: 'quadraticOut'
        }]
      })
    },
    initChart() {
      this.chart = ECharts.init(this.$el)
      this.setOptions(this.chartData)
    }
  }
}
</script>

<style scoped>

</style>
