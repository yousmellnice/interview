// 字符串字面量类型用来约束取值只能是某几个字符串中的一个。 如果有其他的则报错

type EventNames = 'click' | 'scroll' | 'mousemove';
let eName: EventNames = 'click';