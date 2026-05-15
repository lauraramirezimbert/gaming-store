1. El inicio y la estructura (HTML)
Empecé armando el esqueleto de la página, usé las etiquetas header, nav, section y footer para que el código esté ordenado. En el menú de navegación usé una lista ul con enlaces internos ID para que se pueda viajar por la página sin recargar.
Usé article para los productos y las reseñas.

2. La tipografía.
Usé dos fuentes para diferenciar el texto general de los títulos y el menú.
En la fuente Orbitron le agregué un letter-spacing de 1px para que se entienda mejor porque quedaban muy pegadas.

3.Colores y Nav
Usé la combinación de un fondo casi negro y un verde agua. Usé Flexbox para que el logo se quede a la izquierda y el menú a la derecha con justify-content: space-between.
Agregué un hover en los títulos de las secciones para que cuando acercamos el mouse se ponga blanco.
Agregué una linea de color para separar el menú de la sección de productos.


4. Los productos y las reseñas
Para la parte de los productos, le pedí a Gemini que me genere las imagenes porque quería que se vean más o menos uniformes todos los productos. 
Usé tarjetas con las imágenes y precios. 
A las tarjetas les centré el texto y le redondeé un poco los bordes.

Tuve que buscar información sobre cómo hacer que las fotos se vean enteras y que no se deformen y probé con objet-fit: contain y un background-color negro, es la manera que me resultó porque sino se estiraban mucho las imagenes.

En el de "mouse óptico pro" tenía un problema con el botón de agregar al carrito, no lo podía alinear con el resto y usé display flex para que se ordene y flex direction column para que cada elemento de cada tarjeta se pongan uno abajo del otro.

En el botón de compra le puse un hover para que se oscurezca al mover el mouse.


5. El logo.
Le pedí a Gemini que me genere un logo para la tienda y fui adaptandolo en tamaño en css, me parece que sigue estando muy chico pero si lo dejo mas grande tampoco me convence. También le puse un ID al logo para poder hacerle click.

6. Formulario
Centré el formulario y puse un campo arriba del otro y le agregué un espacio entre cada campo de 15px.
Utilicé formspree para que las consultas lleguen al mail.


7. Reseñas
Para las reseñas de los clientes, usé CSS Grid. Armé dos columnas de igual tamaño, en este caso tuve que buscar información para poder hacerlo porque no me salía con px y la información que encontré fue usar grid-template-columns: 1fr 1fr para que me los divida en dos partes iguales y que se adapte al espacio disponible.
Los textos de las reseñas se los pedí a Gemini.
Le agregué la línea de color en la izquierda a cada reseña con border-left y al texto de las reseñas le puse letra itálica para que se vea como si fuera un comentario.
Y los nombres de los clientes los agregué con span los puse del mismo color verde agua que vengo manejando en la página y en bold para que resalten.


8.Footer
Puse el texto alineado en el centro.
Le puse un margin-top para que no quede tan pegado al formulario con una línea muy finita para separarlo con border-top y agregue las redes con el mismo verde agua de toda la web.

9. Media Queries
Hice que en pantallas chicas el menú y el logo se pongan uno arriba del otro y que los productos midan un 85% del ancho para que haya un margen y no quede tan amontonado.
Usé gap para que los elementos del menú no queden tan pegados al logo al ponerse en columna.