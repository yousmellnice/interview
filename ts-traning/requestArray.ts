import { fetchUserById, User } from "./mockRequest";


// 按顺序执行请求的方法
export async function executeRequestsInSequence<T>(requests: (() => Promise<T>)[]): Promise<T[]> {
    const results: T[] = [];
    
    for (const request of requests) {
        try {
            const result = await request();
            results.push(result);
        } catch (error) {
            results.push(error as T);
            console.error('Request failed:', error);
            // throw error; // 如果需要中断整个序列，保留这行
            // 如果希望继续执行后续请求，可以注释掉上面的 throw
        }
    }
    return results;
}

// reduce
// export async function executeRequestsInSequence<T>(requests: (() => Promise<T>)[]): Promise<T[]> {
//     return requests.reduce(async (promiseAcc, request) => {
//         const results = await promiseAcc;
//         try {
//             const result = await request();
//             return [...results, result];
//         } catch (error) {
//             console.error('Request failed:', error);
//             return [...results, error as T];
//         }
//     }, Promise.resolve([] as T[]));
// }


// 使用示例
async function sequenceExample() {
    // 创建一组请求
    const requests = [
        () => fetchUserById(1),
        () => fetchUserById(2),
        () => fetchUserById(100)
    ];

    const results = await executeRequestsInSequence<User>(requests);
    console.log('所有请求结果:', results);
}

// 运行示例
sequenceExample();

async function test() {
    const res = await 1;
    console.log(res);
}

test();