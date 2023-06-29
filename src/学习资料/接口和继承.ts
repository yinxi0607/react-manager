// 接口类型定义

interface Person{
  name: string,
  age: number
}

interface Person1{
  readonly name: string,
  age?: number
}

const user3: Person = {
  name: 'jack',
  age: 30
}

const user1: Person1= {
  name: 'jack',
}

interface Person2{
  name: string
  age: number
  [k:string]:string|number
}

const user2:Person2 = {
  name: 'jack',
  age: 30,
  id: 1,
  gender:'male',
  edu:'本科'
}

interface Sum{
  (x:number,y:number):number
}
type Sum1 = (x:number,y:number)=>number
const add:Sum = (x,y) =>{
  return x + y
}

interface U{
  id: number
  name: string
}
interface Person4 extends U{
  age: number
}
const tim:Person4 = {
  id: 1,
  name: 'tim',
  age: 30
}
export default {}
