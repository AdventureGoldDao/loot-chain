import { useEffect, useState } from "react";

type WindowSize = [width: number, height: number];

export const getWindowSize = (): WindowSize =>
	typeof window !== "undefined" ? [window.innerWidth, window.innerHeight] : [0, 0];

/**
 * returns reactive window size reference
 */
export const useWindowSize = (): WindowSize => {
	const [windowSize, setWindowSize] = useState<WindowSize>([0, 0]);

	useEffect(() => {
		if (window) {
			const onresize = () => setWindowSize(getWindowSize);
			window.addEventListener("resize", onresize);
			onresize();
			return () => window.removeEventListener("resize", onresize);
		}

		return () => null;
	}, []);
	if (typeof window !== "undefined") {
		const r = document.documentElement;
		const a = r.getBoundingClientRect().width;
		let rem = 16;
		if (a < 768) {
			rem = (a / 375) * 10;
		} else {
			rem = (a * 4) / 320;
		}
		r.style.fontSize = rem + "px";
	}
	return windowSize;
};
