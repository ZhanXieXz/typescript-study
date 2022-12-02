// 类型声明

import { camelCase } from 'lodash'

// declare function camelCase (input: string): string

const res = camelCase('hello ts')

// 当使用一些js模块时，他们并未声明函数参数的类型，可以安装该js的声明模块，@types/lodash.
// 如果也没有该声明模块，就可以通过declare进行声明