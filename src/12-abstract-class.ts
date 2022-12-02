// 抽象类

export {}

abstract class Animal { // 使用了abstract，这个类就只能被继承。无法通过new 创建新的实例对象
    eat(foot: string): void {
        console.log(`我喜欢吃的是${foot}`)
    }
    abstract run (distabce: number): void
}

class Dog extends Animal {
    run(distabce: number): void {
        console.log(distabce)
    }

}