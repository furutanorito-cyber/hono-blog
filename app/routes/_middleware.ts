import { drizzle } from "drizzle-orm/d1";
import { createRoute } from "honox/factory";

export default createRoute(async (context, next) => {
	context.set("db", drizzle(context.env.DB));
	await next();
});
