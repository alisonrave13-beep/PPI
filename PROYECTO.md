# Proyecto Cryptonguard - Documentacion del Sistema

## Descripcion General
Cryptonguard es una aplicacion web desarrollada con React, Vite y Supabase, diseñada como proyecto estudiantil para ayudar a la comunidad crypto a verificar vendedores, leer y publicar reseñas anonimas, consultar noticias actualizadas del mercado y revisar precios en tiempo real.

---

## Estructura del Proyecto

- `src/pages/Home.jsx`: Pagina principal de bienvenida con estadisticas y pasos de uso.
- `src/pages/Noticias.jsx`: Seccion de noticias del mundo crypto con carga automatica.
- `src/pages/Cryptos.jsx`: Listado y cotizacion de criptomonedas.
- `src/pages/Reseñas.jsx`: Listado de vendedores y comentarios de la comunidad.
- `src/pages/RegistroVendedor.jsx`: Formulario para que nuevos vendedores puedan registrarse en la plataforma.
- `src/pages/Contacto.jsx`: Formulario interactivo de contacto y denuncias.
- `src/pages/About.jsx`: Informacion sobre el equipo de estudiantes creadores.
- `src/components/Nav.jsx`: Menu de navegacion principal con enlaces y boton de vendedores.
- `src/components/Footer.jsx`: Pie de pagina utilizable con enlaces y redes sociales.
- `src/utils/supabase.ts`: Conexion directa con la base de datos de Supabase.

---

## Base de Datos (Supabase)

La aplicacion interactua con dos tablas principales en Supabase:

1. **`vendedor`**:
   - `id`: Identificador unico del vendedor.
   - `nombre`: Nombre o alias comercial del vendedor.
   - `moneda`: Tipo de cambio u operacion (ej. USDT / COP).
   - `descripcion`: Informacion y condiciones del servicio.

2. **`comentario`**:
   - `id`: Identificador unico del comentario.
   - `idVendedor`: Relacion con la tabla `vendedor`.
   - `nombre`: Nombre del comprador u anonimo.
   - `comentario`: Texto de la reseña.
   - `calificacion`: Puntaje de 1 a 5 estrellas.

---

## Tecnologias Utilizadas
- **React 19**
- **React Router 7**
- **React Icons**
- **Vite**
- **Supabase JavaScript Client**
- **CSS Vanilla**

