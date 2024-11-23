import { createRoute } from "honox/factory";
import Counter from "../islands/counter";
import type { Context } from "hono";

export default createRoute((c: Context) => {
	const name = c.req.query("name") ?? "Hono!";
	return c.render(
		<div>
			<h1 class={"text-blue-500"}>Hello@@, {name}!</h1>
			<Counter />
		</div>,
		{ title: name },
	);
});

/* 

MDXを導入する

 */
