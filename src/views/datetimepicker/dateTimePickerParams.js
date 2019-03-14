export const dateTimePickerParams = [
  {
    paramsName: 'type',
    paramsCaption: '日期类型',
    paramsType: 'String',
    isMust: '是',
    default: '-'
  },
  {
    paramsName: 'hasShortcuts',
    paramsCaption: '是否有快捷方式',
    paramsType: 'Boolean',
    isMust: '否',
    default: 'false'
  },
  {
    paramsName: 'pickerOptions',
    paramsCaption: '快捷方式',
    paramsType: 'Object',
    isMust: '否',
    default: '默认配置好了一些快捷方式'
  },
  {
    paramsName: 'readonly',
    paramsCaption: '是否只读',
    paramsType: 'Boolean',
    isMust: '否',
    default: 'false'
  },
  {
    paramsName: 'disabled',
    paramsCaption: '是否禁用',
    paramsType: 'Boolean',
    isMust: '否',
    default: 'false'
  },
  {
    paramsName: 'defaultValue',
    paramsCaption: '默认日期',
    paramsType: 'Date',
    isMust: '否',
    default: '-'
  },
  {
    paramsName: 'defaultTime',
    paramsCaption: '默认时间',
    paramsType: 'Date',
    isMust: '否',
    default: '-'
  },
  {
    paramsName: 'handleChangeDate',
    paramsCaption: '日期发生改变触发事件',
    paramsType: 'Function',
    isMust: '否',
    default: '-'
  }
]
