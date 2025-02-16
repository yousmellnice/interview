export {}
interface Config {
    end: (context: string, results: string[]) => Promise<string[]> | string[]
}

function isPromise(obj: any): obj is Promise<any> {
    return obj instanceof Promise
}
export async function gen(config: Config) {
    const { end } = config
    const context = 'context'
    const results = ['res']
    // return Promise.resolve(end?.(context, results))
    const endResult = end?.(context, results);
    return Promise.resolve(endResult)
}

const res = gen({
    end: async (context, results) => {
        const res = await results
        return res
    }
})
res.then((res) => {
    console.log(res);
})
console.log('res:', isPromise(res));
