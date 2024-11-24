import { createRoute } from "honox/factory";
import { articles } from "../../schema/articles";
import { eq } from "drizzle-orm";

export default createRoute(async (context) => {
	const { id } = context.req.param();
	const result = await context.var.db
		.select()
		.from(articles)
		.where(eq(articles.id, id));

	if (!result) {
		return context.notFound();
	}

	return context.render(
		<>
			<h1 class={"mb-4 text-2xl"}>{result[0].title}</h1>
			<article>
				<p>{result[0].content}</p>
			</article>
		</>,
	);
});
