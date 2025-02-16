// Replace
// 实现 Replace<S, From, To> 将字符串 S 中的第一个子字符串 From 替换为 To 。
export default 0
type Replace<T extends string, From extends string, To extends string> = 
    From extends '' ? T
    : T extends `${infer L}${From}${infer R}` ? `${L}${To}${R}`
        : T

type replaced = Replace<'types are fun', 'fun', 'awesome'> // 期望是 'types are awesome!'