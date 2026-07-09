import { chromium } from 'playwright'

const url = process.env.TEST_URL || 'http://localhost:3010/'

const browser = await chromium.launch()
const page = await browser.newPage()

await page.goto(url, { waitUntil: 'networkidle' })

const readState = () => page.evaluate(() => ({
  htmlClass: document.documentElement.className,
  storage: localStorage.getItem('theme'),
  ariaLabel: document.querySelector('button[aria-label*="mode"]')?.getAttribute('aria-label'),
  bg: getComputedStyle(document.querySelector('.min-h-dvh') || document.body).backgroundColor,
}))

const before = await readState()
await page.click('button[aria-label*="mode"]')
await page.waitForTimeout(500)
const afterFirst = await readState()
await page.click('button[aria-label*="mode"]')
await page.waitForTimeout(500)
const afterSecond = await readState()

const passed = before.htmlClass.includes('light')
  && afterFirst.htmlClass.includes('dark')
  && afterFirst.ariaLabel === 'Switch to light mode'
  && afterFirst.storage === 'dark'
  && afterSecond.htmlClass.includes('light')
  && afterSecond.ariaLabel === 'Switch to dark mode'
  && afterSecond.storage === 'light'

console.log(JSON.stringify({ url, before, afterFirst, afterSecond, passed }, null, 2))
await browser.close()
process.exit(passed ? 0 : 1)
