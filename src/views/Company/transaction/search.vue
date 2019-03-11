<template>
	<div>
		<form-table-pagination
      :config="config"
      @commitSelectionChange="commitSelectionChange"
      @currentChange="currentChange"
		>
      <template slot="handle-column">
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="text">编辑</el-button>
          </template>
        </el-table-column>
      </template>
    </form-table-pagination>
	</div>
</template>

<script>
import FormTablePagination from '@/components/FormTablePagination'
import { getSingleDetails } from '@/api/transport/singleDetail'
export default {
  name: 'Search',
  components: {
    FormTablePagination
  },
  data() {
    const validateOrderId = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入订单编号'))
      } else {
        callback()
      }
    }
    const validateGoodsCode = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入托运单号'))
      } else if (value.length > 10) {
        callback(new Error('托运单号最多10位数'))
      } else {
        callback()
      }
    }
    return {
      config: {
        formOptions: {
          formName: 'searchForm',
          inline: true,
          showResetBtn: true,
          handleSubmit: this.getOrderList,
          rules: {
            orderId: [{ trigger: 'blur', validator: validateOrderId }],
            goodsCode: [{ trigger: 'blur', validator: validateGoodsCode }]
          },
          forms: [{
            itemType: 'date',
            prop: 'sendDate'
          }, {
            itemType: 'daterange',
            prop: 'sendDate2',
            pickerOptions: {
              shortcuts: [{
                text: '最近一周',
                onClick(picker) {
                  const end = new Date()
                  const start = new Date()
                  start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
                  picker.$emit('pick', [start, end])
                }
              }]
            }
          }, {
            prop: 'orderId',
            label: '聚合订单编号',
            itemWidth: 100
          }, {
            prop: 'goodsCode',
            label: '托运单号'
          }, {
            itemType: 'select',
            prop: 'payType',
            label: '支付方式',
            options: [{
              value: 0,
              label: '全部'
            }, {
              value: 1,
              label: '到付'
            }, {
              value: 2,
              label: '现付'
            }, {
              value: 3,
              label: '回单付'
            }, {
              value: 4,
              label: '月结'
            }]
          }]
        },
        tableOptions: {
          dataSource: [],
          hasSelection: true,
          commitSelectionChange: this.commitSelectionChange,
          hasIndex: true,
          columns: [{
            label: '日期',
            prop: 'sendDate'
          }, {
            label: '聚合订单编号',
            prop: 'orderId',
            fixed: true
          }, {
            label: '托运单号',
            prop: 'goodsCode'
          }, {
            label: '支付方式',
            prop: 'payType',
            formatter: this.formatPayType
          }]
        },
        page: {
          totalPage: 0,
          pageSize: 20,
          pageIndex: 1,
          currentChange: this.currentChange
        }
      }
    }
  },
  methods: {
    getOrderList(params) {
      console.log(params)
    },
    getSingleDetail() {
      getSingleDetails().then(response => {
        this.config.tableOptions.dataSource = response.data.result
        this.config.page.totalPage = response.data.total
      })
    },
    commitSelectionChange(val) {
      console.log('父组件', val)
    },
    currentChange() {
      this.getSingleDetail()
    },
    formatPayType(row, column, cellValue, index) {
      return row.payType === 1 ? '到付' : row.payType === 2 ? '现付' : row.payType === 3 ? '回单付' : '月结'
    }
  },
  created() {
    this.getSingleDetail()
  }
}
</script>

<style scoped>

</style>
