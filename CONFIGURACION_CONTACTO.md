# 📱 Configuración de Contacto

## Configurar tu número de WhatsApp

Para que los botones de WhatsApp funcionen correctamente, necesitas editar tu número en el archivo de configuración:

### Pasos:

1. Abre el archivo: `src/data/profile.js`

2. Busca la línea que dice:
   ```javascript
   whatsapp: '573001234567', // ⚠️ EDITA ESTO con tu número real
   ```

3. Reemplaza `573001234567` con tu número de WhatsApp en formato internacional:
   - **Sin** el símbolo `+`
   - **Sin** espacios ni guiones
   - **Con** el código de país

### Ejemplos de formato:

- 🇨🇴 Colombia: `573001234567` (57 + número de 10 dígitos)
- 🇲🇽 México: `521234567890` (52 + 1 + número de 10 dígitos)
- 🇪🇸 España: `34612345678` (34 + número de 9 dígitos)
- 🇦🇷 Argentina: `5491123456789` (54 + 9 + código de área + número)
- 🇺🇸 USA: `11234567890` (1 + número de 10 dígitos)

### Ejemplo completo:

```javascript
const profile = {
  yearsSolo: 2,
  email: 'tucorreo@gmail.com',
  whatsapp: '573123456789', // ✅ Tu número aquí
  languages: [
    { name: 'Español', level: 'Nativo', flag: '🇨🇴' },
    { name: 'Inglés', level: 'B1', flag: '🇬🇧' }
  ],
  // ... resto de la configuración
}
```

## 📧 Configurar tu Email

También puedes cambiar tu email en la misma línea:

```javascript
email: 'tucorreo@gmail.com', // Cambia esto por tu email
```

## 🎨 Botones de Contacto

Los botones de contacto aparecen en:

1. **Página Home (/)**: 
   - Sección Hero (arriba)
   - Sección CTA (abajo)

2. **Página About (/about)**:
   - Debajo de la información personal
   - Sección CTA (abajo)

3. **Página Projects (/projects)**:
   - Sección CTA (abajo)

### Funcionalidad:

- **Botón WhatsApp**: Abre WhatsApp Web o la app con un mensaje predefinido
- **Botón Email**: Abre el cliente de correo con asunto predefinido

### Mensajes predefinidos por sección:

- **Home Hero**: "Hola! Me gustaría contactarte sobre tu portafolio."
- **Home CTA**: "Hola! Me gustaría hablar sobre un proyecto."
- **About**: "Hola! Me gustaría trabajar contigo."
- **Projects**: "Hola! Tengo un proyecto en mente."

Puedes personalizar estos mensajes editando los archivos en `src/pages/`.

## ✅ Verificar que funciona

1. Guarda los cambios en `src/data/profile.js`
2. Recarga tu navegador
3. Haz clic en cualquier botón de WhatsApp
4. Debería abrir WhatsApp con tu número

---

**Nota**: Si el botón de WhatsApp no funciona, verifica que:
- El número esté en formato internacional correcto
- No tenga espacios, guiones ni el símbolo +
- Tengas WhatsApp instalado o uses WhatsApp Web
