export {}

class Person {
    name: string
    private age: number // private 代表私有属性.无法在外部进行更改
    protected gender: boolean
    constructor (name: string, age: number) {
        this.name = name;
        this.age = age;
        this.gender = true
    }

    sayHi(msg: string): void {
        console.log(`I am ${this.name}, ${msg}`)
    }
}

const tom = new Person('xiez', 18)
console.log(tom.name)
// console.log(tom.age) // 属性“age”为私有属性，只能在类“Person”中访问
// console.log(tom.gender) // 属性“gender”受保护，只能在类“Person”及其子类中访问
