
1. Estructura del sitio (HTML)

En la primera versión tenía una sola página con enlaces internos. En esta entrega separé el proyecto en cuatro páginas distintas: Inicio, Productos, Contacto y Carrito. De esta manera el menú navega entre archivos HTML y la estructura quedó más ordenada.

En todas las páginas mantuve el mismo header y el mismo footer para que el diseño sea uniforme.

2. El inicio

El inicio había quedado muy vacío porque solamente tenía las reseñas, así que agregué una sección de bienvenida con un texto de presentación y un botón para ir directamente a Productos.

También agregué una sección con tres beneficios de la tienda (productos premium, envíos rápidos y pago seguro) para que la página principal tenga más contenido.

3. Tipografía

Usé dos fuentes para diferenciar el texto general de los títulos y el menú.

En la fuente Orbitron le agregué un letter-spacing de 1px porque me parecía que las letras quedaban muy juntas y así se leen mejor.

4. Colores y navegación

Mantuve la combinación de un fondo oscuro con detalles en verde agua para darle una estética gamer.

Usé Flexbox para que el logo quede a la izquierda y el menú a la derecha utilizando justify-content: space-between.

En todas las páginas mantuve el mismo menú para que el usuario pueda navegar fácilmente entre Inicio, Productos, Contacto y Carrito.

5. Productos

Para las imágenes de los productos le pedí a Gemini que genere imágenes similares para que todas mantengan el mismo estilo.

Utilicé tarjetas con imagen, nombre, precio y un botón para agregar al carrito.

Las imágenes me daban problemas porque algunas se deformaban. Después de buscar información utilicé object-fit: contain con un fondo negro y fue la opción que mejor resultado me dio.

En las tarjetas usé Flexbox para acomodar los elementos uno debajo del otro y lograr que todos los botones queden alineados.

También agregué un pequeño efecto al pasar el mouse sobre los productos para que el sitio tenga un poco más de interacción.

6. Carrito (JavaScript)

En esta entrega incorporé JavaScript para agregar un carrito de compras.

Cada vez que el usuario hace clic en "Agregar al carrito", el producto se guarda utilizando localStorage, por lo que si se cambia de página o se actualiza el navegador el carrito sigue conservando los productos.

En la página del carrito se muestran todos los productos agregados, el total de la compra y un botón para vaciar el carrito.

También agregué un mensaje que aparece durante unos segundos cuando se agrega un producto al carrito para darle una mejor experiencia al usuario.

7. Formulario

Centré el formulario y acomodé todos los campos uno debajo del otro utilizando Flexbox.

Utilicé Formspree para que las consultas enviadas desde el formulario lleguen directamente a mi correo electrónico.

8. Reseñas

Para las reseñas utilicé CSS Grid.

Después de buscar información encontré que utilizando grid-template-columns: 1fr 1fr podía dividir el espacio en dos columnas iguales y adaptarlo al tamaño de la pantalla.

Los textos de las reseñas fueron generados con ayuda de Gemini.

A cada reseña le agregué una línea verde a la izquierda utilizando border-left y los nombres de los clientes los destaqué con un color verde agua y negrita.

9. Logo

El logo también fue generado con ayuda de Gemini.

Después fui ajustando su tamaño mediante CSS hasta encontrar una medida que se integrara bien con el menú de navegación.

10. Footer

El footer se mantuvo igual en todas las páginas.

Alineé el contenido al centro, agregué una línea superior para separarlo del contenido principal y mantuve los colores de la identidad visual de la página.

11. Responsive

Utilicé Media Queries para adaptar la página a pantallas más pequeñas.

En celulares el menú pasa a mostrarse en columna, las tarjetas de productos ocupan un mayor porcentaje del ancho disponible y las reseñas pasan de dos columnas a una sola para facilitar la lectura.

También adapté la nueva sección de bienvenida y la de beneficios para que se acomoden correctamente en dispositivos móviles.