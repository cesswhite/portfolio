import { chromium } from 'playwright'

const url = process.env.TEST_URL || 'http://localhost:3010/'

const browser = await chromium.launch()
const page = await browser.newPage()
const errors = []
page.on('pageerror', (error) => errors.push(error.message))

await page.goto(url, { waitUntil: 'networkidle' })

const readState = () => page.evaluate(() => ({
  htmlClass: document.documentElement.className,
  colorScheme: document.documentElement.style.colorScheme,
  storage: localStorage.getItem('theme'),
  hasToggleFn: typeof window.__toggleTheme === 'function',
  ariaLabel: document.querySelector('[data-theme-toggle]')?.getAttribute('aria-label'),
  bg: getComputedStyle(document.querySelector('.min-h-dvh') || document.body).backgroundColor,
}))

const before = await readState()

await page.click('[data-theme-toggle]')
await page.waitForTimeout(500)
const afterFirst = await readState()

await page.click('[data-theme-toggle]')
await page.waitForTimeout(500)
const afterSecond = await readState()

const passed = before.hasToggleFn
  && afterFirst.htmlClass.includes('dark')
  && afterFirst.storage === 'dark'
  && afterFirst.colorScheme === 'dark'
  && afterSecond.htmlClass.includes('light')
  && afterSecond.storage === 'light'

console.log(JSON.stringify({ url, before, afterFirst, afterSecond, errors, passed }, null, 2))
await browser.close()
process.exit(passed ? 0 : 1)
