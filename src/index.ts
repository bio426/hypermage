import Fastify, { FastifyRequest } from "fastify"

import browser from "./browser"
import generate from "./generateHtml"

const baseTemplate = `<h1 style="color:<%= it.color %>">Hi <%= it.name %>!</h1>`

async function runServer() {
	const b = await browser.getNavigator()
	const server = Fastify({ logger: true })
	server.get(
		"/",
		async (
			request: FastifyRequest<{
				Querystring: { name?: string; color?: string }
			}>,
			reply
		) => {
			const params = request.query
			const markup = generate.genHtml(baseTemplate, {
				name: params.name || "default",
				color: params.color || "black",
			})
			const page = await b.newPage()
			await page.setContent(markup)
			const target = page.locator("h1")
			if (!target) return { error: "No target found" }
			await target.screenshot({ path: "example.png" })
			await page.close()
			return { message: "Image saved" }
		}
	)

	await server.listen({ port: 3000 })
	console.log("started")
	// await b.close()
}

runServer()
