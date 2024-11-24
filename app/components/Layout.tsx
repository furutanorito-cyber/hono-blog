import type { FC } from "hono/jsx";
import { useRequestContext } from "hono/jsx-renderer";

const links = [
	{ href: "/articles", text: "Articles" },
	{ href: "/articles/create", text: "Create" },
];

export const Layout: FC = ({ children }) => {
	const context = useRequestContext();
	const current = context.req.path;

	return (
		<>
			<header class={"navbar mx-auto mb-8 max-w-screen-lg"}>
				<h1 class={"flex-1 font-bold text-3xl"}>
					<a href="/">HonoX Blog 🔥</a>
				</h1>
				<nav class={"flex-none"}>
					<ul class={"menu menu-horizontal"}>
						{links.map((link) => (
							<li key={link.text}>
								<a
									href={link.href}
									class={current === link.href ? "active text-lg" : "text-lg"}
								>
									{link.text}
								</a>
							</li>
						))}
					</ul>
				</nav>
			</header>
			<main class={"m-auto max-w-screen-md"}>{children}</main>
		</>
	);
};
