// 泛型
export {}

function craeteString(length:number, value: string): string[] {
    const arr = Array<string>(length).fill(value)
    return arr
} // 函数接收一个number类型的length和string类型的参数，返回一个数组，数组里的元素为string。


function craeteNumber(length:number, value: number): number[] {
    const arr = Array<number>(length).fill(value)
    return arr
} // // 函数接收一个number类型的length和number类型的参数，返回一个数组，数组里的元素为number。


// 上面两个函数功能是一样的，但是传递的参数不同，可以使用泛型

function craeteArray<T>(length:number, value: T): T[] {
    const arr = Array<T>(length).fill(value)
    return arr
}
// 调用的时候传入参数直接定义是什么类型
const res = craeteArray<string>(3,'foo')
const res1 = craeteArray<number>(3, 999)