export {}
class Person {
    eat(foot: string): void {
        console.log(`我在吃的是${foot}`)
    }
    run(distance: number) {
        console.log(`行走${distance}`)
    }
}
class Person1 {
    eat(foot: string): void {
        console.log(`我喜欢吃的是${foot}`)
    }
    run(distance: number) {
        console.log(`倒立行走${distance}`)
    }
}
// 上面两个class的方法都是一样的，那么就可以通过interface 抽离出公共的地方

// -------------------------------------------------------------------

interface EatAndRun {
    eat (food: string):void
    run (distance: number):void
}

interface Eat {
    eat (food: string):void
}
interface Run {
    run (distance: number):void
}


class Person2 implements EatAndRun { // 必须有定义中的两个方法
    eat(foot: string): void {
        console.log(`我喜欢吃的是${foot}`)
    }
    run(distance: number) {
        console.log(`倒立行走${distance}`)
    }
}

class Person3 implements Eat,Run { // 也可以将其拆分开，用逗号分开进行定义约束
    eat(foot: string): void {
        console.log(`我喜欢吃的是${foot}`)
    }
    run(distance: number) {
        console.log(`倒立行走${distance}`)
    }
}