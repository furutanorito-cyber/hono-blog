import build from "@hono/vite-build/cloudflare-pages";
import adapter from "@hono/vite-dev-server/cloudflare";
import honox from "honox/vite";
import { defineConfig } from "vite";
import client from "honox/vite/client";

export default defineConfig(({ mode }) => {
	if (mode === "client") {
		return {
			plugins: [client()],
			build: {
				rollupOptions: {
					input: ["/app/tailwind.css"],
				},
			},
		};
	}

	return {
		plugins: [honox({ devServer: { adapter } }), build()],
	};
});
