import './App.css'
import {useEffect, useState} from "react";
import {useWindowSize} from "./useWindowSize.ts";

function App() {
	const [size] = useWindowSize()
	const [count, setCount] = useState(0)
	const [total,setTotal] = useState(0)
	useEffect(() => {
		document.title = "React后台课程"
	})
	useEffect(() => {
		setCount(count => count + 1)
	}, [])

	useEffect(() => {
		setTotal(count * 5)
	},[count])

	useEffect(() => {
		// 使用定时器，一定要有手动关闭
		const timer = setInterval(() => {
			setCount(count => count + 1)
		}, 1000)
		return () => {
			clearInterval(timer)
		}
	})



	return (
		<div>
			<p>欢迎学习React后台课程</p>
			<p>Count: {count}, Total:{total}</p>
			<p>
				window width: {size.width} px, height: {size.height} px
			</p>
		</div>
	)
}

export default App
