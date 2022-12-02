export {}


// const PostStatus = {
//     Draft: 0,
//     UnPubished: 1,
//     Pubished: 2
// }

// 如果不指定值，那么调用的是按0开始累加。如果指定了比如Draft = 6，那么就在这个基础上开始累加
// 也可以是字符串，但是无法累加，所以如果是字符串，需要每个都添加指定的值
enum PostStatus {
    Draft,
    UnPubished = 6,
    Pubished
}

const post = {
    title: "hello ts",
    content: "ts...",
    status: PostStatus.Draft
}

console.log(PostStatus.Draft)
console.log(PostStatus.UnPubished)
console.log(PostStatus.Pubished)