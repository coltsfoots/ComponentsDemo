export const treeTransferParams = [
  {
    paramsName: 'width',
    paramsCaption: '组件宽度',
    paramsType: 'String',
    isMust: '否',
    default: '100%'
  },
  {
    paramsName: 'height',
    paramsCaption: '组件高度',
    paramsType: 'String',
    isMust: '否',
    default: '320px'
  },
  {
    paramsName: 'title',
    paramsCaption: '列表文字',
    paramsType: 'Array',
    isMust: '否',
    default: "['源列表', '目标列表']"
  },
  {
    paramsName: 'buttonText',
    paramsCaption: '按钮文字',
    paramsType: 'Array',
    isMust: '否',
    default: '-'
  },
  {
    paramsName: 'fromData',
    paramsCaption: '左侧列表数据',
    paramsType: 'Array',
    isMust: '否',
    default: '[]'
  },
  {
    paramsName: 'toData',
    paramsCaption: '右侧列表数据',
    paramsType: 'Array',
    isMust: '否',
    default: '[]'
  },
  {
    paramsName: 'filter',
    paramsCaption: '是否开启搜索功能',
    paramsType: 'Boolean',
    isMust: '否',
    default: 'false'
  },
  {
    paramsName: 'openAll',
    paramsCaption: '是否展开所有节点',
    paramsType: 'Boolean',
    isMust: '否',
    default: 'false'
  },
  {
    paramsName: 'transferOpenNode',
    paramsCaption: '穿梭后是否展开节点',
    paramsType: 'Boolean',
    isMust: '否',
    default: 'true'
  },
  {
    paramsName: 'defaultCheckedKeys',
    paramsCaption: '默认被选中节点(数据源)',
    paramsType: 'Array',
    isMust: '否',
    default: '[]'
  },
  {
    paramsName: 'placeholder',
    paramsCaption: '搜索框占位符',
    paramsType: 'String',
    isMust: '否',
    default: '输入关键字查询'
  }
]
