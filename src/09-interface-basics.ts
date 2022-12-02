export {}

interface Post {
    title: string
    content: string
    subTitle?: string // 添加问号为可选成员，其实就是将subTitle的类型标记为string或者undefined
    readonly summary: string // 只读成员
}

function printPost(post: Post) {
    console.log(post.title)
    console.log(post.content)
}
printPost({title: 'hellp', content: 'ts', summary: 'summary'})

// -----------------------------------------



interface Cache {
    [prop: string]: string // 动态成员，prop是可以任意值，可以是key也可以是props等待。
}

const cache:Cache = {}
cache.foo = 'foo'
cache.bar = 'bar'