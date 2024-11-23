import {} from "hono";
import type { DrizzleD1Database } from "drizzle-orm/d1";

type Head = {
	title?: string;
};

declare module "hono" {
	interface Env {
		Variables: {
			DB: DrizzleD1Database;
		};
		Bindings: {
			DB: D1Database;
		};
	}

	type ContextRenderer = (
		content: string | Promise<string>,
		head?: Head,
	) => Response | Promise<Response>;
}
