/** Starter CMS rows — single source for mock mode and `pnpm run cms:seed`. */

const now = () => new Date().toISOString()

const whatsapp =
  "https://wa.me/524446007007?text=Hola%20El%20Molino%20Ruso%2C%20me%20gustar%C3%ADa%20hacer%20un%20pedido."

function es(text) {
  return { es: text, en: text }
}

export function buildSeedPages() {
  return [
    {
      id: "seed-home",
      slug: "home",
      title: es("Inicio"),
      lead: es("Panadería de especialidad en San Luis Potosí."),
      img: "",
      keywords: ["panadería", "el molino ruso", "san luis potosí"],
      head: {},
      created_at: now(),
      updated_at: now(),
      sections: [
        {
          eyebrow: es("panadería artesanal"),
          title: es("La calidad no es solo un estándar, es nuestra esencia."),
          lead: es("Panadería de especialidad en Lomas, San Luis Potosí."),
          body: es(
            "En El Molino Ruso horneamos con ingredientes naturales, sin aditivos, sin margarina y sin grasas trans. Cada pieza sale de nuestro obrador con la misma receta, la misma técnica y el mismo cuidado — no como estándar, sino porque así entendemos la panadería.",
          ),
          primaryLabel: es("Pedir por WhatsApp"),
          primaryHref: whatsapp,
          secondaryLabel: es("Cómo llegar"),
          secondaryHref: "#ubicacion",
          img: "/images/hero-photo.avif",
          skylineImg: "/images/hero-skyline.png",
          _orbi: { component: "SectionMolinoHero" },
        },
        {
          title: es("Nos avalan quienes ya nos visitaron"),
          badges: [
            { label: es("Uber Eats"), value: es("4.7★ (2,000+ reseñas)") },
            { label: es("Tripadvisor"), value: es("5.0★ Excelente") },
            { label: es("Google Maps"), value: es("4.5★ (162 opiniones)") },
          ],
          _orbi: { component: "SectionMolinoReputation" },
        },
        {
          title: es("Lo que se hornea hoy en El Molino Ruso"),
          lead: es(
            "Una probada de nuestra panadería y pastelería — hecha a mano, todos los días, en nuestro obrador de Lomas.",
          ),
          items: [
            {
              name: es("Concha"),
              price: es("$38.00"),
              description: es(
                "La concha de siempre, esponjosa, con nuestra cubierta artesanal de vainilla o chocolate.",
              ),
              img: "/images/menu-concha.avif",
              ctaLabel: es("Pedir por WhatsApp"),
              ctaHref: whatsapp,
            },
            {
              name: es("Roll de Canela"),
              price: es("$75.00"),
              description: es(
                "Pan brioche horneado con mantequilla, canela y azúcar mascabado, terminado con betún de queso crema.",
              ),
              img: "/images/menu-roll-canela.avif",
              ctaLabel: es("Pedir por WhatsApp"),
              ctaHref: whatsapp,
            },
            {
              name: es("Croissant Frutos Rojos"),
              price: es("$99.00"),
              description: es(
                "Hojaldre laminado a mano, relleno de compota de frutos rojos, queso crema y frutos rojos naturales.",
              ),
              img: "/images/vitrina.avif",
              ctaLabel: es("Pedir por WhatsApp"),
              ctaHref: whatsapp,
            },
            {
              name: es("Nido Cereza"),
              price: es("$75.00"),
              description: es(
                "Nido de masa de croissant con crema pastelera y cereza negra.",
              ),
              img: "/images/menu-nido-cereza.avif",
              ctaLabel: es("Pedir por WhatsApp"),
              ctaHref: whatsapp,
            },
            {
              name: es("Danés Mango Maracuyá"),
              price: es("$72.00"),
              description: es(
                "Masa de croissant con relleno de mango maracuyá y queso crema.",
              ),
              img: "/images/encargos.avif",
              ctaLabel: es("Pedir por WhatsApp"),
              ctaHref: whatsapp,
            },
            {
              name: es("Galletas New York"),
              price: es("$80.00"),
              description: es(
                "Nuestras galletas más queridas — 93% de recomendación entre quienes ya las probaron.",
              ),
              img: "/images/ingredientes.avif",
              ctaLabel: es("Pedir por WhatsApp"),
              ctaHref: whatsapp,
            },
          ],
          disclaimer: es("Precios sujetos a cambio sin previo aviso."),
          ctaLabel: es("Ver más"),
          ctaHref: "#menu",
          _orbi: { component: "SectionMolinoMenu" },
        },
        {
          scheduleTitle: es("Horario"),
          scheduleValue: es("Lun–Dom 7:00 am – 9:00 pm"),
          promoTitle: es("Hora Feliz"),
          promoValue: es(
            "40% de descuento en panadería, de lunes a viernes de 8:00 a 9:00 pm.",
          ),
          _orbi: { component: "SectionMolinoHours" },
        },
        {
          title: es("Lo que dicen quienes ya nos visitaron"),
          lead: es(
            "Reseñas reales de Google, sin editar el fondo de lo que dijeron.",
          ),
          img: "/images/cafe-interior.avif",
          items: [
            {
              author: es("Blanca Silva"),
              rating: es("★★★★★"),
              quote: es(
                "El pan es súper fresco, ingredientes exquisitos, y de mucha calidad... se ha convertido en mi lugar favorito para encontrar pan artesanal.",
              ),
              source: es("Google, hace 4 meses"),
            },
            {
              author: es("Karina Luján"),
              rating: es("★★★★★"),
              quote: es(
                "El café, uf, muy buen café... el personal es muy amable, volvería a ir.",
              ),
              source: es("Google, hace 2 meses"),
            },
            {
              author: es("naomi"),
              rating: es("★★★★☆"),
              quote: es(
                "Tienen panadería variada, tanto dulce como salada... de sabor son bastante buenos, se sienten frescos.",
              ),
              source: es("Google, hace 3 meses"),
            },
            {
              author: es("Ana Martínez"),
              rating: es("★★★★☆"),
              quote: es(
                "La tartaleta está deliciosa... tiene el equilibrio perfecto entre dulzor y acidez. Recomienda: Croissant Frutos Rojos.",
              ),
              source: es("Google, hace 4 meses"),
            },
          ],
          ctaLabel: es("Ver más reseñas en Google"),
          ctaHref: "https://www.google.com/maps",
          _orbi: { component: "SectionMolinoTestimonials" },
        },
        {
          name: es("Olesia Shevchenko"),
          eyebrow: es("Sobre mí"),
          role: es("Chef pastelera y fundadora de El Molino Ruso"),
          paragraphs: [
            es(
              "Toda nuestra línea de repostería se elabora bajo mi supervisión personal. Cada postre que ofrecemos es el resultado del amor por mi oficio, de recetas bien cuidadas y de un sabor impecable.",
            ),
            es(
              "Aquí puedes hacer tu pedido de pasteles, postres y productos artesanales, preparados con el mismo esmero y dedicación con los que cocinamos para nuestros seres queridos.",
            ),
          ],
          signOff: es("Con cariño y atención a cada detalle,"),
          signature: es("Olesia Shevchenko."),
          img: "/images/olesia.avif",
          _orbi: { component: "SectionMolinoChef" },
        },
        {
          blocks: [
            {
              title: es("Nuestra historia"),
              paragraphs: [
                es(
                  "En nuestra panadería artesanal, la calidad no es solo un estándar: es nuestra esencia. Cada pieza de pan, cada pastel y cada croissant refleja años de aprendizaje y técnica.",
                ),
                es(
                  "Creemos que el verdadero sabor viene de la dedicación, la técnica y el respeto por cada receta. Para nosotros, la buena panadería se nota en cada mordida.",
                ),
                es(
                  "Nacimos como una idea y hoy somos, para muchas familias de San Luis Potosí, el lugar al que vuelven por un pan, un café o un dulce hecho con cariño.",
                ),
              ],
            },
          ],
          _orbi: { component: "SectionMolinoStory" },
        },
        {
          title: es("Nuestro equipo"),
          lead: es(
            "Un equipo, un solo objetivo: cada día trabajamos en conjunto para alcanzar los más altos estándares de calidad, desde la selección de ingredientes hasta el mostrador.",
          ),
          img: "/images/team.avif",
          _orbi: { component: "SectionMolinoTeam" },
        },
        {
          title: es("Lo que nos guía"),
          items: [
            {
              title: es("Hecho a mano."),
              text: es("Sin atajos industriales, todos los días."),
            },
            {
              title: es("Ingredientes naturales."),
              text: es("Sin aditivos, sin margarina, sin grasas trans."),
            },
            {
              title: es("Técnica antes que volumen."),
              text: es("Cada receta se respeta como fue pensada."),
            },
            {
              title: es("Los críticos más honestos."),
              text: es(
                "Nuestros hijos y familias son quienes primero prueban cada pieza nueva — si ellos lo aprueban, sabemos que vamos por buen camino.",
              ),
            },
          ],
          _orbi: { component: "SectionMolinoValues" },
        },
        {
          title: es("Por qué somos distintos"),
          paragraphs: [
            es(
              "Ser una panadería de especialidad no es solo una etiqueta: se nota en el equipo que usamos y en el cuidado con el que seleccionamos cada ingrediente.",
            ),
            es(
              "San Luis Potosí tiene una comunidad de panaderos que se conoce entre sí — y varios de ellos se han formado o han trabajado con nosotros.",
            ),
          ],
          ctaLabel: es(
            "¿Celebras algo especial? También hacemos pasteles a la medida. Ver encargos ↓",
          ),
          ctaHref: "#encargos",
          _orbi: { component: "SectionMolinoDifferentiators" },
        },
        {
          title: es("Pasteles y encargos para tu celebración"),
          lead: es(
            "Cumpleaños, aniversarios, un regalo para mamá o cualquier ocasión que valga la pena celebrar con algo hecho a mano.",
          ),
          ctaLabel: es("Solicitar por WhatsApp"),
          ctaHref: whatsapp,
          img: "/images/encargos.avif",
          _orbi: { component: "SectionMolinoEncargosHero" },
        },
        {
          title: es("Cómo pedir tu encargo"),
          lead: es(
            "Escríbenos por WhatsApp contándonos la ocasión, la fecha y lo que tienes en mente — nosotros te ayudamos a definir el resto.",
          ),
          steps: [
            { label: es("Anticipación mínima:"), value: es("48 horas") },
            {
              label: es("Pedido mínimo:"),
              value: es("Consultar por WhatsApp"),
            },
            {
              label: es("Formas de pago:"),
              value: es("Efectivo, transferencia, tarjeta"),
            },
            {
              label: es("Zona de entrega:"),
              value: es("San Luis Potosí y zona metropolitana"),
            },
          ],
          _orbi: { component: "SectionMolinoEncargosSteps" },
        },
        {
          title: es("Algunos de nuestros encargos"),
          items: [
            {
              img: "/images/encargos.avif",
              alt: es("Pasteles de encargo artesanales"),
            },
            { img: "/images/cafe-interior.avif", alt: es("Interior del café") },
            {
              img: "/images/mostrador.avif",
              alt: es("Mostrador de panadería"),
            },
          ],
          _orbi: { component: "SectionMolinoGallery" },
        },
        {
          title: es("Cuéntanos qué estás celebrando."),
          ctaLabel: es("Solicitar por WhatsApp"),
          ctaHref: whatsapp,
          variant: "dark",
          _orbi: { component: "SectionMolinoBandCta" },
        },
        {
          title: es("Visítanos en Lomas, San Luis Potosí"),
          address: es(
            "Estamos en Av. Cordillera de los Himalaya 737, Lomas 4ta Sección, San Luis Potosí — fácil de reconocer por nuestro toldo amarillo.",
          ),
          ctaLabel: es("Cómo llegar"),
          ctaHref: "https://maps.google.com/?q=El+Molino+Ruso+San+Luis+Potosi",
          mapEmbed:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4248.936506672829!2d-101.03652412424944!3d22.14258364859293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842a9918bb39a835%3A0xb84d3e19b05c21b6!2sEL%20MOLINO%20RUSO%20panader%C3%ADa%20artesanal!5e1!3m2!1ses-419!2smx!4v1788327025529!5m2!1ses-419!2smx",
          _orbi: { component: "SectionMolinoLocation" },
        },
        {
          title: es("Contáctanos"),
          phone: es("+52 444 600 7007"),
          email: es("info@elmolinoslp.com"),
          address: es(
            "Av. Cordillera de los Himalaya 737, Lomas 4ta Sección, C.P. 78216, San Luis Potosí, S.L.P.",
          ),
          callLabel: es("Llamar"),
          whatsappLabel: es("Escribir por WhatsApp"),
          socialTitle: es("Síguenos"),
          socialLinks: [
            {
              label: es("Instagram — @elmolino_ruso"),
              href: "https://instagram.com/elmolino_ruso",
            },
            {
              label: es("Facebook — El Molino Ruso"),
              href: "https://facebook.com",
            },
          ],
          followLabel: es("Seguir"),
          _orbi: { component: "SectionMolinoContact" },
        },
        {
          img: "/images/mostrador.avif",
          _orbi: { component: "SectionMolinoFacade" },
        },
        {
          title: es(
            "¿Ya se te antojó? Te esperamos en Lomas o te escribimos por WhatsApp ahora mismo.",
          ),
          ctaLabel: es("Pedir por WhatsApp"),
          ctaHref: whatsapp,
          _orbi: { component: "SectionMolinoFinalCta" },
        },
      ],
    },
  ]
}

export function buildSeedPosts() {
  return [
    {
      id: "seed-post-1",
      title: es("Nuestra historia"),
      lead: es(
        "<p>El Molino Ruso nace de la pasión por el pan artesanal en San Luis Potosí.</p>",
      ),
      img: "",
      status: {
        options: ["draft", "review", "published"],
        value: "published",
      },
      keywords: ["historia", "panadería"],
      created_at: now(),
      updated_at: now(),
      sections: [
        {
          title: es("Tradición y oficio"),
          content: es(
            "<p>Cada pieza que sale de nuestro horno refleja años de aprendizaje y técnicas de fermentación lenta.</p>",
          ),
          _orbi: { component: "SectionProse" },
        },
      ],
    },
  ]
}
