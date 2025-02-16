class plugin {
  constructor(option) {
    console.log(option)
  }
  apply(compiler) {
    console.log(compiler)
  }
}

const p = new plugin({ name: 'ysn' })
p.apply('hey')