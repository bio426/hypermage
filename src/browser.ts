import { chromium } from "playwright"

async function getNavigator() {
	const browser = await chromium.launch()
	// const page = await browser.newPage()
	// // await page.goto("https://example.org/")
	// await page.goto("https://www.gnu.org/home.es.html")
	// const div = page.locator("#header")
	// if (div) {
	// 	const toStr = await div.innerHTML()
	// 	console.log(toStr)
	// 	await div.screenshot({ path: `example.png` })
	// }
	// await browser.close()
	return browser
}

export default { getNavigator }
