// Capitalize
// 实现 Capitalize<T> 它将字符串的第一个字母转换为大写，其余字母保持原样。
type capitalized = Capitalize<'hello world'> // expected to be 'Hello world'

type NewCapitalize<T extends string> = T extends `${infer F}${infer S}` ? `${Uppercase<F>}${S}` : T;
type capitalized2 = NewCapitalize<'hello world'> // expected to be 'Hello world'
