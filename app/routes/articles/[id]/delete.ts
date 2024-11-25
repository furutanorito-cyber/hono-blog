import { createRoute } from "honox/factory";
import { articles } from "../../../schema/articles";
import { eq } from "drizzle-orm";

export const POST = createRoute(async (context) => {
	const { id } = context.req.param();
	await context.var.db.delete(articles).where(eq(articles.id, id));

	return context.redirect("/articles");
});
