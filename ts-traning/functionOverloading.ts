// 函数重载
// 定义两个互斥的接口
interface CustomFormOptions {
    isCustom: true;
    data: any;
    request?: never; // 当 isCustom 为 true 时，request 不应该存在
}

interface RequestFormOptions {
    isCustom?: false;
    data: any;
    request: (data: any) => Promise<any>;
}

// 使用函数重载
function form(options: CustomFormOptions): any;
function form(options: RequestFormOptions): Promise<any>;
// 实现函数
function form(options: CustomFormOptions | RequestFormOptions) {
    if (options.isCustom) {
        return options.data;
    }
    return options.request(options.data);
}

form({
    data: 'custom data',
    request: async (data) => {
        return data;
    }
})

