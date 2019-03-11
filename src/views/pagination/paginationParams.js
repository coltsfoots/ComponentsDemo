export const paginationParams = [{
  paramsName: 'isSmall',
  paramsCaption: '分页尺寸',
  paramsType: 'Boolean',
  isMust: '否',
  default: 'false'
}, {
  paramsName: 'pageIndex',
  paramsCaption: '当前页',
  paramsType: 'String, Number',
  isMust: '是',
  default: '1'
}, {
  paramsName: 'pageSize',
  paramsCaption: '每页展示数量',
  paramsType: 'String, Number',
  isMust: '是',
  default: '20'
}, {
  paramsName: 'totalPage',
  paramsCaption: '数据总数量',
  paramsType: 'String, Number',
  isMust: '是',
  default: '-'
}, {
  paramsName: 'pageSizes',
  paramsCaption: '每页展示数量选项',
  paramsType: 'Array',
  isMust: '否',
  default: '[20, 50, 100, 150, 200]'
}, {
  paramsName: 'prevText',
  paramsCaption: '上一页按钮文字',
  paramsType: 'String',
  isMust: '否',
  default: '-'
}, {
  paramsName: 'nextText',
  paramsCaption: '下一页按钮文字',
  paramsType: 'String',
  isMust: '否',
  default: '-'
}, {
  paramsName: 'layout',
  paramsCaption: '分页布局',
  paramsType: 'String',
  isMust: '否',
  default: 'prev, pager, next'
}, {
  paramsName: 'currentChange',
  paramsCaption: '当前页发生改变触发函数',
  paramsType: 'Function',
  isMust: '否',
  default: '-'
}]
