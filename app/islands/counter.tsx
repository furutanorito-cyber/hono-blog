import { useState } from "hono/jsx";

export default function Counter() {
	const [count, setCount] = useState(0);
	return (
		<div>
			<p>{count}</p>
			<button
				onClick={() => setCount(count + 1)}
				class={"btn btn-lg"}
				type="button"
			>
				Increment
			</button>
		</div>
	);
}
