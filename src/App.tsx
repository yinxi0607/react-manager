import { FC, memo, MouseEventHandler, useCallback, useMemo, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const total1 = () => {
    console.log("total1...");
    const list = [1, 3, 5, 7, 9];
    return list.reduce((prev, current) => prev + current, 0);
  };
  const total2 = useMemo(() => {
    console.log("total2...");
    const list = [1, 3, 5, 7, 9];
    return list.reduce((prev, current) => prev + current, 0);
  }, []);
  const handleClick = () => {
    setCount(count + 1);
  };
  const handleChildClick = useCallback(() => {
    console.log("子节点按钮被点击了");
  }, []);
  return (
    <>
      <p>欢迎学习React后台课程</p>
      <p>
        <span>Count: {count}</span>
        <button onClick={handleClick}>Add</button>
      </p>
      <p>total1: {total1()}</p>
      <p>total2: {total2}</p>
      <Child onClick={handleChildClick} />
    </>
  );
}

interface ChildProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Child: FC<ChildProps> = memo(({ onClick }) => {
  console.log("Child render...");
  return (
    <div>
      <p>Child</p>
      <button onClick={onClick}>子节点按钮</button>
    </div>
  );
});

export default App;
