<template>
	<div class="pagination-container">
		<el-pagination
			background
      :small="isSmall"
      :current-page.sync="page.pageIndex || 1"
			:page-size='page.pageSize || 20'
			:total='totalPage'
			:page-sizes='pageSizes'
      :prev-text='prevText'
      :next-text='nextText'
			:layout='layout'
      @current-change="currentChangeHandle"
      @size-change="sizeChangeHandle"
		>
		</el-pagination>
	</div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    page: Object,
    isSmall: {
      type: Boolean,
      default: false
    },
    totalPage: {
      type: Number | String,
      default: 0
    },
    pageSizes: {
      type: Array,
      default: () => [20, 50, 100, 150, 200]
    },
    prevText: {
      type: String,
      default: ''
    },
    nextText: {
      type: String,
      default: ''
    },
    layout: {
      type: String,
      default: 'prev, pager, next'
    }
  },
  watch: {
    totalPage(val) {
      if (val) {
        this.totalPage = val
      }
    }
  },
  methods: {
    currentChangeHandle(curr) {
      this.page.pageIndex = curr
      this.$emit('currentChange')
    },
    sizeChangeHandle(size) {
      this.page.pageSize = size
      this.$emit('currentChange')
    }
  }
}
</script>

<style lang="less" scoped>
.pagination-container{
  display: block;
  margin: 20px 0 0;
  .el-pagination{
    text-align: center;
  }
}
</style>
