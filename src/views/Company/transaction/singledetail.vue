<template>
	<div>
    <custom-form :formOptions='formOptions'></custom-form>
		<custom-table
			@commitSelectionChange="commitSelectionChange"
      :tableOptions="tableOptions"
		>
      <template slot="handle-column">
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button>Click</el-button>
          </template>
        </el-table-column>
      </template>
		</custom-table>
		<pagination
      :page="page"
      @currentChange="getSingleDetails"
    ></pagination>
	</div>
</template>

<script>
import CustomForm from '@/components/CustomForm'
import CustomTable from '@/components/CustomTable'
import Pagination from '@/components/Pagination'
import { getSingleDetails } from '@/api/transport/singleDetail'
export default {
  components: {
    CustomForm,
    CustomTable,
    Pagination
  },
  data() {
    return {
      tableOptions: {
        hasSelection: true,
        hasIndex: true,
        dataSource: [],
        columns: [{
          prop: 'sendDate',
          label: '下单日期'
        }, {
          prop: 'orderId',
          label: '聚合订单编号'
        }, {
          prop: 'goodsCode',
          label: '托运单号'
        }, {
          hidden: true,
          prop: 'goodsWeight',
          label: '重量'
        }]
      },
      page: {
        pageIndex: 1,
        pageSize: 20,
        totalPage: 0
      },
      formOptions: {
        inline: true,
        showResetBtn: true,
        formName: 'singleForm',
        handleSubmit: (params) => {
          console.log('111', params)
        },
        forms: [
          { prop: 'orderId', label: '聚合订单编号' },
          { prop: 'goodsCode', label: '托运单号' },
          { prop: 'sendDate', label: '选择日期', itemType: 'daterange' },
          { prop: 'payType',
            label: '付款方式',
            itemType: 'select',
            options: [{
              value: '',
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
          }
        ]
      }
    }
  },
  methods: {
    commitSelectionChange(selectionArr) {
      console.log(selectionArr)
    },
    getSingleDetails() {
      getSingleDetails(this.page).then(response => {
        console.log(response)
        this.tableOptions.dataSource = response.data.result
        this.page.totalPage = response.data.total
      })
    }
  },
  created() {
    this.getSingleDetails()
    console.log('table', this)
  }
}
</script>

<style scoped>

</style>
