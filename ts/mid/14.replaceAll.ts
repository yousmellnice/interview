// ReplaceAll
// 实现 ReplaceAll<S, From, To> 将一个字符串 S 中的所有子字符串 From 替换为 To。
type ReplaceAll<T extends string, From extends string, To extends string> = 
    From extends '' ? T
    : T extends `${infer L}${From}${infer R}` ? 
    ReplaceAll<`${L}${To}${R}`, From, To>
    : T
    
type replaced = ReplaceAll<'t y p e s', ' ', ''> // 期望是 'types'