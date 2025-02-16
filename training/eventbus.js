// eventbus 是同步执行
// 一般有4个方法 
// on 监听一个方法 
// emit 触发一个方法
// off 取消监听
//  once 只监听一次 后面再触发都不回复了

class EventEmitter {
  constructor(length) {
    // 关键点 存储用的数据结构 
    this.events = {}
    this.maxListener = length || Infinity
  }
  // 触发
  emit(event, ...args) {
    const cbs = this.events[event]

    // 如果不存在
    if (!cbs) {
      console.warn(`${cbs} event is not regester`)
      return this
    }
    // apply 的原因是不用改变this指向
    cbs.forEach(cb => { cb.apply(this, args) })
    return this
  }

  // 添加
  on(event, cb) {
    if (!this.events[event]) {
      // 如果不存在 先初始化成一个数组
      this.events[event] = []
    }
    // 添加限制
    if (this.maxListener !== Infinity && this.events[event].length >= this.maxListener) {
      console.warn('超出限制')
      return
    }
    // 把回调函数push进去
    this.events[event].push(cb)
    // 如果需要链式调用
    return this
  }

  once(event, cb) {
    // 定义一个function
    const func = (...args) => {
      // 清掉该事件
      this.off(event)
      // 执行一次
      cb.apply(this, args)
    }
    this.on(event, func)
    return this
  }

  off(event, cb) {
    if (!cb) {
      this.events[event] = null
    }else {
      this.events[event] = this.events[event].filter(item => item !== cb)
    }

    return this
  }
}

const log = (value) => {
  console.log(value)
}

const add = (a, b) => {
  console.log(a + b);
}

const m = new EventEmitter()
m.on('add', add)
m.emit('add', 4, 5)
m.on('log', log)
m.emit('log', '222')