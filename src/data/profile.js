const profile = {
  // Años de experiencia en proyectos personales (solo lo que has desarrollado por tu cuenta)
  // Edita este valor si quieres que muestre un número diferente
  yearsSolo: 2,

  // Información de contacto
  email: 'naranjoverdugo08@gmail.com',
  // WhatsApp: formato internacional sin + ni espacios (ej: 573001234567 para Colombia)
  whatsapp: '573103478617', // ⚠️ EDITA ESTO con tu número real

  // Idiomas preferidos (se usan si no hay otra fuente en el componente)
  languages: [
    { name: 'Español', level: 'Nativo', flag: '🇨🇴' },
    { name: 'Inglés', level: 'B1', flag: '🇬🇧' }
  ],

  // Nombre(s) de archivo para las imágenes de certificaciones.
  // Copia/pega tus imágenes en: public/assets/certs/ y usa estos nombres
  // (recomiendo renombrarlas a cert1.png, cert2.png, etc.).
  certImages: [
    'cert1.png',
    'cert2.png',
    'cert3.png',
    'cert4.png',
    'cert5.png',
    'cert6.png'
  ],

  // Foto profesional: copiar a public/assets/photos/ con este nombre (puede ser jpg/png)
  photo: 'photo-professional.jpg'
}

export default profile
