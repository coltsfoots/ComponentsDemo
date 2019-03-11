<template>
    <div class="app-container">
      <tree-transfer :width="'600px'" :title="title" :fromData="fromData" :toData="toData"></tree-transfer>
    </div>
</template>

<script>
import TreeTransfer from '@/components/TreeTransfer'
export default {
  components: {
    TreeTransfer
  },
  data() {
    return {
      title: ['左边', '右边'],
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
</script>

<style lang="less">

</style>
