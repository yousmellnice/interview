function logging<T>(value: T[]): T[] {
    console.log(value.length);
    return value
}

type PromiseValue = Promise<number>

function p(): PromiseValue {
    return new Promise(resolve => {
        resolve(1)
    })
}
p().then(res => {
    console.log(res);
})

type K = {
    name: string,
    age: number
}

type A = keyof K