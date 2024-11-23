import { sql } from "drizzle-orm";
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const articles = sqliteTable("articles", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	title: text("title"),
	content: text("content"),
});
