#!/usr/bin/env node
import fs from "node:fs"
import path from "node:path"
import sharp from "sharp"

const ASSETS =
  "/Users/arrobabeto/.cursor/projects/Users-arrobabeto-Projects-el-molino-ruso/assets"
const OUT = "public/images"

const mappings = [
  [
    "6291E48E-C377-4718-8A0B-D7126F024673-a31d9347-7d99-4df4-9004-877efc1902a8.jpg",
    "about-hero.avif",
    1600,
  ],
  [
    "C543AEBA-E803-4380-B491-2A6836F0E924-f2fbef3f-1aa5-4a88-ae82-180afae14f0e.jpg",
    "team.avif",
    1600,
  ],
  [
    "0B22696E-B73B-4D1B-9B17-F786310B48FE-609648e6-32da-4bc0-9854-74501be5f617.jpg",
    "encargos.avif",
    1400,
  ],
  [
    "57D158A5-7DAC-4E21-BF39-BF94393EBFAE-a0d83439-f455-4032-a731-8a9ed07a8893.jpg",
    "vitrina.avif",
    1200,
  ],
  ["1-03239b31-a156-406e-a4d2-ca346f2af62c.jpg", "ingredientes.avif", 1400],
  [
    "96561AC4-7F26-43A4-B9C7-570441D67222-897998de-f83c-4127-9923-2d1aa62f73b5.jpg",
    "mostrador.avif",
    1600,
  ],
  [
    "CD27EBB1-E763-49D8-8EF7-6FEF3815DB2D-dcbe89b0-4343-4699-abe3-81f25c517226.jpg",
    "cafe-interior.avif",
    1600,
  ],
]

const extras = [
  ["public/images/hero-bg.png", "hero-bg.avif", 1920],
  ["public/images/logo.png", "logo.avif", 120],
]

fs.mkdirSync(OUT, { recursive: true })

async function toAvif(input, output, maxWidth) {
  const inSize = fs.statSync(input).size
  await sharp(input)
    .rotate()
    .resize({ width: maxWidth, withoutEnlargement: true })
    .avif({ quality: 62, effort: 4 })
    .toFile(output)
  const outSize = fs.statSync(output).size
  console.log(
    `${path.basename(output).padEnd(22)} ${String(Math.round(inSize / 1024)).padStart(5)}KB → ${String(Math.round(outSize / 1024)).padStart(5)}KB`,
  )
}

for (const [src, dest, width] of mappings) {
  const input = path.join(ASSETS, src)
  if (!fs.existsSync(input)) {
    console.error("missing", input)
    process.exit(1)
  }
  await toAvif(input, path.join(OUT, dest), width)
}

for (const [src, dest, width] of extras) {
  if (fs.existsSync(src)) await toAvif(src, path.join(OUT, dest), width)
}

console.log("ok    avif conversion complete")
