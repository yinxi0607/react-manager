// 泛型

function identity<T>(arg:T):T{
    return arg;
}

identity<number>(1)

function identity1<T,U>(x:T,y:U):T{
    return x;
}
identity1<string,number>(1,'2')

interface User{
  id:number
  name:string
  age:number
}
type AgeType = Pick<User,'name'|'age'>
let Jack:AgeType = {
  name:'Jack',
  age:18
}
export default {}
