/**
 * Generate PNG/ICO assets from SVG sources (requires Playwright chromium).
 */
import { chromium } from '@playwright/test'
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const imgDir = join(root, 'public', 'assets', 'img')

async function svgToPng(page, svgPath, width, height, outPath) {
  const svg = readFileSync(svgPath, 'utf8')
  const html = `<!DOCTYPE html><html><body style="margin:0;background:transparent"><div id="wrap">${svg}</div></body></html>`
  await page.setViewportSize({ width, height })
  await page.setContent(html, { waitUntil: 'load' })
  const el = page.locator('#wrap svg').first()
  await el.screenshot({ path: outPath, omitBackground: false })
  console.log('Wrote', outPath)
}

function pngToIco(png32Path, icoPath) {
  const png = readFileSync(png32Path)
  const header = Buffer.alloc(6)
  header.writeUInt16LE(0, 0)
  header.writeUInt16LE(1, 2)
  header.writeUInt16LE(1, 4)

  const entry = Buffer.alloc(16)
  entry[0] = 32
  entry[1] = 32
  entry[2] = 0
  entry[3] = 0
  entry.writeUInt16LE(1, 4)
  entry.writeUInt16LE(32, 6)
  entry.writeUInt32LE(png.length, 8)
  entry.writeUInt32LE(22, 12)

  writeFileSync(icoPath, Buffer.concat([header, entry, png]))
  console.log('Wrote', icoPath)
}

const browser = await chromium.launch()
const page = await browser.newPage()

await svgToPng(page, join(imgDir, 'og-image.svg'), 1200, 630, join(imgDir, 'og-image.png'))
await svgToPng(page, join(imgDir, 'favicon.svg'), 32, 32, join(imgDir, 'favicon-32.png'))
await svgToPng(page, join(imgDir, 'favicon.svg'), 16, 16, join(imgDir, 'favicon-16.png'))
pngToIco(join(imgDir, 'favicon-32.png'), join(root, 'public', 'favicon.ico'))

await browser.close()
