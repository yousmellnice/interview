export interface User {
    id: number;
    name: string;
    email: string;
    error?: string;
}

// 模拟用户数据
const mockUsers: User[] = [
    { id: 1, name: "张三", email: "zhangsan@example.com" },
    { id: 2, name: "李四", email: "lisi@example.com" },
    { id: 3, name: "王五", email: "wangwu@example.com" }
];

// 模拟获取用户列表的请求
export function fetchUsers(): Promise<User[]> {
    return new Promise((resolve, reject) => {
        // 模拟网络延迟
        setTimeout(() => {
            // 模拟成功率 80%
            if (Math.random() < 1) {
                resolve(mockUsers);
            } else {
                reject(new Error("获取用户列表失败"));
            }
        }, 1000); // 延迟1秒
    });
}

// 模拟根据ID获取单个用户的请求
export function fetchUserById(id: number): Promise<User> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = mockUsers.find(u => u.id === id);
            if (user) {
                resolve(user);
            } else {
                reject(`未找到ID为${id}的用户`);
            }
        }, 500); // 延迟0.5秒
    });
}

// 使用示例
export async function example() {
    try {
        // 获取所有用户
        const users = await fetchUsers();
        console.log("所有用户:", users);

        // 获取单个用户
        const user = await fetchUserById(1);
        console.log("用户详情:", user);

        // 测试错误情况
        // const nonExistentUser = await fetchUserById(2);
    } catch (error) {
        console.error("发生错误:", error);
    }
}

// 运行示例
// example(); 