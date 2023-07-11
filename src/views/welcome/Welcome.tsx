import request from "@/utils/request.ts";
import {Button, Spin} from "antd";
import storage from "@/utils/storage.ts";
import {formateDate, formatMoney, toLocalDate} from "@/utils";
import {useState} from "react";
import styles from "./index.module.less"

export default function Welcome() {
  const [data, setData] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    console.log(formatMoney("2324321314"))
    console.log(toLocalDate(new Date()))
    console.log(formateDate(new Date()))
    request.post('/user/login', {})
  }
  const handleGetStorm = () => {
    setIsLoading(true);
    const fetchData = async () => {
      const response = await fetch('http://localhost:8000/stream');
      const reader = response.body?.getReader();

      if (reader) {
        const textDecoder = new TextDecoder();
        reader.read().then(async function processText({ done, value }): Promise<void> {
          if (done) {
            setIsLoading(false);
            return;
          }
          const decodedText = textDecoder.decode(value);
          const valueToDisplay = decodedText.slice(6, decodedText.length - 2); // Remove "data: " and "\n\n"
          setData((prevData) => [...prevData, valueToDisplay]);
          return reader.read().then(processText);
        });
      }
    };
    fetchData()
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
      <div>
        <h1>Streaming Data</h1>
        <ul className={styles.streamDataContainer}>
          {data.map((item, index) => (
            <div className={styles.streamDataItem} key={index}>
              {item}
            </div>
          ))}
          {isLoading && <li className={styles.cursor} />}
        </ul>
      </div>


      <p>
        <Button onClick={handleClick}>点击事件</Button>
        <Button onClick={() => handleStorage(4)}>清空值</Button>
        <Button onClick={() => handleGetStorm()}>获取流式数据</Button>
      </p>
    </div>
  )
}
