import { sql } from "drizzle-orm";
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const todos = sqliteTable("todos", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	todo: text("todo").notNull(),
	description: text("description"),
	date: text("date").default(sql`(CURRENT_DATE)`),
	priority: text("priority"),
});
