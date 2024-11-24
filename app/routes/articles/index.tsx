import { createRoute } from "honox/factory";
import { articles } from "../../schema/articles";

export default createRoute(async (context) => {
	const results = await context.var.db.select().from(articles);

	return context.render(
		<>
			<h1 class={"mb-4 text-2xl"}>記事一覧</h1>
			<ul class={"grid grid-cols-2 gap-4"}>
				{results.map((article) => (
					<li key={article.id} class={"card bg-primary"}>
						<div class={"card-body"}>
							<a href={`/articles/${article.id}`} class={"card-title"}>
								{article.title}
							</a>
						</div>
					</li>
				))}
			</ul>
		</>,
	);
});
