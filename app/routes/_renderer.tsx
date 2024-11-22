import { Style } from "hono/css";
import { jsxRenderer } from "hono/jsx-renderer";
import { Link, Script } from "honox/server";
import { Layout } from "../components/Layout";

export default jsxRenderer(({ children, title }) => {
	return (
		<html lang="ja" data-theme="night">
			<head>
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>{title}</title>
				<link rel="icon" href="/favicon.ico" />
				<Link href="/app/tailwind.css" rel="stylesheet" />
				<Script src="/app/client.ts" async />
				<Style />
			</head>
			<body>
				<Layout>{children}</Layout>
			</body>
		</html>
	);
});
