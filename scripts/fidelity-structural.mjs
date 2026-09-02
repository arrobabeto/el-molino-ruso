#!/usr/bin/env node
/**
 * Fidelity check #1 — structural: compare Figma copy vs rendered HTML.
 */
import fs from "node:fs"

const FIGMA_TEXTS = [
  "panadería artesanal",
  "La calidad no es solo un estándar",
  "Nos avalan quienes ya nos visitaron",
  "Lo que se hornea hoy en El Molino Ruso",
  "Lo que dicen quienes ya nos visitaron",
  "Nuestra historia",
  "Nuestro equipo",
  "Lo que nos guía",
  "Por qué somos distintos",
  "Pasteles y encargos para tu celebración",
  "Cómo pedir tu encargo",
  "Algunos de nuestros encargos",
  "Visítanos en Lomas, San Luis Potosí",
  "Horario",
  "Hora Feliz",
  "Contáctanos",
  "Síguenos",
  "Pedir por WhatsApp",
  "Concha",
  "Croissant Frutos Rojos",
]

const SECTION_COMPONENTS = [
  "SectionMolinoHero",
  "SectionMolinoReputation",
  "SectionMolinoMenu",
  "SectionMolinoTestimonials",
  "SectionMolinoChef",
  "SectionMolinoStory",
  "SectionMolinoTeam",
  "SectionMolinoValues",
  "SectionMolinoDifferentiators",
  "SectionMolinoEncargosHero",
  "SectionMolinoEncargosSteps",
  "SectionMolinoGallery",
  "SectionMolinoBandCta",
  "SectionMolinoLocation",
  "SectionMolinoHours",
  "SectionMolinoContact",
  "SectionMolinoFacade",
  "SectionMolinoFinalCta",
]

const seed = fs.readFileSync("src/lib/orbitype/seed-data.mjs", "utf8")
const missingInSeed = SECTION_COMPONENTS.filter((c) => !seed.includes(c))
if (missingInSeed.length) {
  console.error("FAIL  seed missing components:", missingInSeed.join(", "))
  process.exit(1)
}

const url = process.env.FIDELITY_URL ?? "http://localhost:4321/"
const response = await fetch(url)
if (!response.ok) {
  console.error("FAIL  could not fetch", url, response.status)
  process.exit(1)
}
const html = await response.text()

const missing = FIGMA_TEXTS.filter((text) => !html.includes(text))
if (missing.length) {
  console.error("FAIL  missing Figma copy in HTML:")
  missing.forEach((text) => console.error("  -", text))
  process.exit(1)
}

const testIds = ["molino-hero", "molino-menu", "molino-testimonials"]
const missingTestIds = testIds.filter(
  (id) => !html.includes(`data-testid="${id}"`),
)
if (missingTestIds.length) {
  console.error("FAIL  missing test ids:", missingTestIds.join(", "))
  process.exit(1)
}

console.log("ok    structural fidelity: all Figma headings/copy present")
console.log(
  `      checked ${FIGMA_TEXTS.length} strings, ${SECTION_COMPONENTS.length} sections`,
)
