import type { NotFoundHandler } from "hono";

const handler: NotFoundHandler = (c) => {
	c.status(404);
	return c.render(
		<h1 class={"mb-4 text-2xl"}>すみません、ページが見つかりません...。</h1>,
	);
};

export default handler;
