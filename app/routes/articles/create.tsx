import type { FC } from "hono/jsx";
import { createRoute } from "honox/factory";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";
import { drizzle } from "drizzle-orm/d1";
import { articles } from "../../schema/articles";

type Data = {
	title: {
		value: string;
		error: string[] | undefined;
	};
	content: {
		value: string;
		error: string[] | undefined;
	};
};

type Props = {
	data?: Data;
};

const Page: FC<Props> = ({ data }) => {
	return (
		<>
			<h1 class={"mb-4 text-2xl"}>記事を作成する</h1>
			<form method="post" class={"flex flex-col gap-8"}>
				<label>
					<input
						type="text"
						name="title"
						placeholder="タイトル"
						class={"input input-bordered w-full placeholder:text-lg"}
						value={data?.title.value}
					/>
				</label>
				{data?.title.error?.map((error) => (
					<p class={"text-red-500"} key={error}>
						{error}
					</p>
				))}
				<label>
					<textarea
						name="content"
						class={
							"textarea textarea-bordered min-h-40 w-full placeholder:text-lg"
						}
						placeholder="コンテンツ"
					>
						{data?.content.value}
					</textarea>
				</label>
				{data?.content.error?.map((error) => (
					<p class={"text-red-500"} key={error}>
						{error}
					</p>
				))}
				<button
					type="submit"
					class={"btn btn-primary py-1 font-normal text-2xl tracking-widest"}
				>
					作成
				</button>
			</form>
		</>
	);
};

export default createRoute((context) => {
	return context.render(<Page />, {
		title: "記事の投稿",
	});
});

const Article = z.object({
	title: z.string().min(1).max(255),
	content: z.string().min(1),
});

export const POST = createRoute(
	zValidator("form", Article, async (validationResult, context) => {
		if (validationResult.success) {
			// ToDoDBに保存する
			const db = drizzle(context.env.DB);
			await db.insert(articles).values({
				title: validationResult.data.title,
				content: validationResult.data.content,
			});

			return context.redirect("/articles");
		}

		const { title, content } = validationResult.data;
		const data: Data = {
			title: {
				value: title,
				error: validationResult.error.flatten().fieldErrors.title,
			},
			content: {
				value: content,
				error: validationResult.error.flatten().fieldErrors.content,
			},
		};

		return context.render(<Page data={data} />, {
			title: "記事の投稿",
		});
	}),
);
