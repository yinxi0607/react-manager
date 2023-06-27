import {useEffect, useState} from "react";

export function useWindowSize() {
		const [windowSize, setWindowSize] = useState({
			width: document.documentElement.clientWidth,
			height: document.documentElement.clientHeight,
		});
		const handleResize = () => {
				setWindowSize({
						width: document.documentElement.clientWidth,
						height: document.documentElement.clientHeight,
				});
		}
		useEffect(() => {

				window.addEventListener("resize", handleResize);
				return () => window.removeEventListener("resize", handleResize);
		}, []);
		return [windowSize];
}
