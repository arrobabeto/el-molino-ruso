export const phrases = {
  address: { es: "Dirección", en: "Address" },
  all_rights_reserved: {
    es: "Todos los derechos reservados",
    en: "All rights reserved",
  },
  company: { es: "Empresa", en: "Company" },
  download: { es: "Descargar", en: "Download" },
  email: { es: "Correo electrónico", en: "Email" },
  first_name: { es: "Nombre", en: "First name" },
  homepage: { es: "Inicio", en: "Homepage" },
  last_name: { es: "Apellido", en: "Last name" },
  learn_more: { es: "Saber más", en: "Learn more" },
  load_more: { es: "Cargar más", en: "Load more" },
  menu: { es: "Menú", en: "Menu" },
  message: { es: "Mensaje", en: "Message" },
  page_not_found: { es: "Página no encontrada", en: "Page not found" },
  save: { es: "Guardar", en: "Save" },
  search: { es: "Buscar", en: "Search" },
  send: { es: "Enviar", en: "Send" },
  sent_successfully: {
    es: "Enviado correctamente",
    en: "Sent successfully",
  },
  share_content: { es: "Compartir contenido", en: "Share content" },
  subscribe: { es: "Suscribirse", en: "Subscribe" },
  subscribed_successfully: {
    es: "Suscripción exitosa",
    en: "Subscribed successfully",
  },
  posts: { es: "Publicaciones", en: "Posts" },
  read_more: { es: "Leer más", en: "Read more" },
  topic: { es: "Tema", en: "Topic" },
  phone: { es: "Teléfono", en: "Phone" },
} as const

export type PhraseKey = keyof typeof phrases
