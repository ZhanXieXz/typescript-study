export {}

// 返回值写在括号后面
function func(a: number, b:number):string {
    return 'func1'
}

const func2:(a: number, b: number) => string = function(a: number, b: number):string {
    return 'func2'
}