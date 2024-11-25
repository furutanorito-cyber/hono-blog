import { createRoute } from "honox/factory";
import { articles } from "../../schema/articles";
import DeleteButton from "../../islands/deleteButton";

export default createRoute(async (context) => {
	const results = await context.var.db.select().from(articles);

	return context.render(
		<>
			<h1 class={"mb-4 text-2xl"}>記事一覧</h1>
			<ul class={"grid grid-cols-2 gap-4"}>
				{results.map((article) => (
					<li key={article.id} class={"card bg-base-content"}>
						<div class={"card-body"}>
							<a
								href={`/articles/${article.id}`}
								class={"card-title text-neutral"}
							>
								{article.title}
							</a>
							<DeleteButton articleId={article.id} />
						</div>
					</li>
				))}
			</ul>
		</>,
	);
});
