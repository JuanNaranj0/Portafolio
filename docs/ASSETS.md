# Assets: cómo añadir tus fotos y certificados

Para que la página muestre correctamente tu foto profesional y las imágenes de las certificaciones que mencionaste, sigue estos pasos:

1. Crea las carpetas públicas dentro del proyecto (si no existen):

   - `public/assets/photos/`  -> para la foto profesional
   - `public/assets/certs/`   -> para las imágenes de las certificaciones

2. Copia las imágenes desde tus rutas locales (por ejemplo `C:\Users\naran\OneDrive\Imágenes\Capturas de pantalla\...`) hacia las carpetas anteriores.

   Recomendación de nombres de archivo (para evitar problemas con espacios):

   - `photo-professional.jpg` (tu foto profesional)
   - `cert1.png`
   - `cert2.png`
   - `cert3.png`
   - `cert4.png`
   - `cert5.png`
   - `cert6.png`

   Si prefieres conservar los nombres originales con espacios, asegúrate de que el navegador pueda resolverlos (no recomendado). Lo más sencillo es renombrar los archivos.

3. Verifica la configuración en `src/data/profile.js`:

   - `photo` debe coincidir con el nombre del archivo en `public/assets/photos/`.
   - `certImages` es un array de nombres de archivo que se buscan en `public/assets/certs/`.

4. Reinicia el servidor de desarrollo (si está en ejecución):

```powershell
npm run dev
```

5. Problemas comunes:

- Si la imagen no aparece, abre la consola de red del navegador y verifica la ruta. Debe ser `/assets/photos/photo-professional.jpg` o `/assets/certs/cert1.png`.
- Asegúrate de que los permisos de archivo permitan lectura.

Si quieres, puedo ayudarte a renombrar y colocar las imágenes si me confirmas que quieres que las incluya en el repositorio y me das permiso para crear los archivos (o subirlos aquí). Actualmente, por seguridad, no muevo archivos desde tus rutas locales.
