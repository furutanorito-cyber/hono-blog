import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";

dotenv.config();

export default process.env.LOCAL_DB_PATH
	? ({
			schema: "./app/schema/*",
			dialect: "sqlite",
			dbCredentials: {
				url: process.env.LOCAL_DB_PATH,
			},
		} satisfies Config)
	: ({
			schema: "./app/schema/*",
			out: "./migrations",
			dialect: "sqlite",
			driver: "d1-http",
			dbCredentials: {
				accountId: process.env.CLOUDFLARE_ACCOUNT_ID,
				databaseId: process.env.CLOUDFLARE_DATABASE_ID,
				token: process.env.CLOUDFLARE_WORKERS_TOKEN,
			},
		} satisfies Config);
