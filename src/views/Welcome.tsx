import request from "@/utils/request.ts";
import {Button, Spin} from "antd";
import storage from "@/utils/storage.ts";

export default function Welcome() {
  const handleClick = () => {
    request.post('/users/login', {})
  }
  const handleStorage = (type: number) => {
    if (type === 1) {
      storage.set("age", 20)
      storage.set("user", {name: 'jack', gender: '1'})
    }
    if (type === 2) {
      console.log(storage.get("age"))
      console.log(storage.get("user"))
    }
    if (type === 3) {
      storage.remove("age")
      storage.remove("user")
    }
    if (type === 4) {
      storage.clear()
    }
  }
  return (
    <div className='welcome'>

      <Spin tip='加载中...'>
        <p>Welcome</p>
      </Spin>

      <p>
        <Button onClick={handleClick}>点击事件</Button>
        <Button onClick={() => handleStorage(1)}>写入值</Button>
        <Button onClick={() => handleStorage(2)}>读取值</Button>
        <Button onClick={() => handleStorage(3)}>删除值</Button>
        <Button onClick={() => handleStorage(4)}>清空值</Button>
      </p>
    </div>
  )
}
