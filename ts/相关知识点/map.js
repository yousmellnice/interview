let map = new Map()
map.set('IP', (name) => {
  console.log(name);
})
let map2 = new Map([
  ['host', () => {}],
  ['ip', (name) => name]
])
console.log(map);
console.log(map2.get('xx').call(null, 'ysn'));