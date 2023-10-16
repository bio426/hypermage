import { Eta } from "eta"

const engine = new Eta()
const baseTemplate = `<h1>Hi <%= it.foo %>!</h1>`

function genHtml(base: string, payload: object) {
	const html = engine.renderString(base, payload)
	return html
}

export default { genHtml }
