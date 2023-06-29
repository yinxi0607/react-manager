// 元组

const list: [number, string, boolean] = [1, '2', true]

// 交叉类型
type AgeType = { age: number }
type UserType = { name: string, id: number }

const user: AgeType & UserType = {
  age: 30,
  name: 'jack',
  id: 1
}

const userAge: AgeType = {
  age: 30
}

const userInfo: UserType = {
  name: 'jack',
  id: 1
}
export default {}
