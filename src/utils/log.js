const __isDebug__ = true
window.log = {
  /** 输出红色日志 */
  e() {
    if (__isDebug__ && arguments.length > 0) {
      const arr = Array.prototype.slice.call(arguments)
      this.__log('E', 'red', arr)
    }
  },
  /** 输出黄色日志 */
  w() {
    if (__isDebug__ && arguments.length > 0) {
      const arr = Array.prototype.slice.call(arguments)
      this.__log('W', '#FFA500', arr)
    }
  },
  /** 输出绿色日志 */
  i() {
    if (__isDebug__ && arguments.length > 0) {
      const arr = Array.prototype.slice.call(arguments)
      this.__log('I', '#00FF00', arr)
    }
  },
  /** 输出黑色正常日志 */
  d() {
    if (__isDebug__ && arguments.length > 0) {
      const arr = Array.prototype.slice.call(arguments)
      this.__log('D', '#000000', arr)
    }
  },
  /**
   * @param tagStr 没有标签时默认显示的
   * @param color 日志颜色
   * @param arr 日志参数
   */
  __log(tagStr, color, arr) {
    const tag = arr[0]
    if (typeof (tag) === 'string' || tag === null || tag === undefined) {
      arr[0] = `%c ${arr[0]}`
      arr.splice(1, 0, `color:${color}`)
    } else {
      arr.splice(0, 0, `%c ${tagStr} : `)
      arr.splice(1, 0, `color:${color}`)
    }
    console.log.apply(console, arr)
  }
}
