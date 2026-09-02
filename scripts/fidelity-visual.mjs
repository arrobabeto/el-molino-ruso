#!/usr/bin/env node
/**
 * Fidelity check #2 — visual tokens: CSS tokens and assets match Figma spec.
 */
import fs from "node:fs"

const css = fs.readFileSync("src/styles/global.css", "utf8")

const FIGMA_TOKENS = {
  "--color-molino-ink": "#211d1a",
  "--color-molino-brown": "#4a2c22",
  "--color-molino-olive": "#5c6142",
  "--color-molino-gold": "#a9764f",
  "--color-molino-orange": "#e8862e",
  "--color-molino-cream": "#f7f2e9",
}

let failures = 0
for (const [token, hex] of Object.entries(FIGMA_TOKENS)) {
  if (!css.includes(`${token}: ${hex}`)) {
    console.error(`FAIL  token mismatch: ${token} expected ${hex}`)
    failures++
  }
}

if (!css.includes('"Lora"') || !css.includes('"Work Sans"')) {
  console.error("FAIL  fonts Lora / Work Sans not in global.css")
  failures++
}

const assets = [
  "logo.avif",
  "hero-skyline.png",
  "hero-photo.avif",
  "vitrina.avif",
  "encargos.avif",
  "about-hero.avif",
  "team.avif",
  "mostrador.avif",
]
for (const asset of assets) {
  const path = `public/images/${asset}`
  if (!fs.existsSync(path)) {
    console.error(`FAIL  missing asset ${path}`)
    failures++
  }
}

const ref = "public/images/figma/el-molino-ruso-desktop-reference.png"
if (!fs.existsSync(ref)) {
  console.error("FAIL  missing Figma reference screenshot")
  failures++
}

if (failures) process.exit(1)

console.log(
  "ok    visual fidelity: design tokens, fonts, and key assets match Figma",
)
console.log(
  `      verified ${Object.keys(FIGMA_TOKENS).length} color tokens, ${assets.length} assets`,
)
