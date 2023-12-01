# DELIVORO

Proyecto generado con el Angular CLI V.17.
Aplicacion web desarrollada para el TFG del grado superior DAW en el CIFP Nº1 en Cuenca.

Delivoro es una app web de pedidos de comida online. Esta enfocada tanto en la comodidad que se le brinda a los usuarios
como el escaparate que significa para los locales de comida que sus productos lleguen a mas sitios.

## ESTRUCTURA DE LA WEB

La web estara distribuida segun la vista de 2 tipos de usuarios:
-Los clientes los cuales podran visualizar los productos y realziar un pedido con los mismos.
-Los locales, a los cuales me referire como "colaboradores"; que podran administrar su carta, promociones y gestionar la entrada de pedidos.

## BASE DE DATOS

La base de se diseñara de manera relacional y el lenguaje gestor de base de datos sera "MYSQL" y la apliaccion para administrar esa abse de datos sera PHPMYADMIN
La comunicación de la base de datos y la app sera a traves de una API que diseñare con sus endpoints y funciones GET, POST, PUT, PATCH, etc....

## DEPENDECIAS

    Se realizara un `npm install`.

    TAILWIND CSS: 
    Nos movemos dentro de la carpeta del proyecto y ejecutamos las siguientes lineas de comando
        - npm install -D tailwindcss postcss autoprefixer
        - npx tailwindcss init

    Ahora se configurara el archivo creado por el "init".
        Añadiremos a el "content" lo siguiente:
        - "./src/**/*.{html,ts}",

    Después añadimos al CSS de la aplicación las directivas de Tailwind.
        Vamos a "styles.css" y escribimos los siguiente;
        - @tailwind base;
        - @tailwind components;
        - @tailwind utilities;


    Ya estaria TAILWIND disponible apra usarlo en nuestro proyecto.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## IDEAS SIN IMPLEMENTAR

    - Mapa para mostrar el area de entrega
    - Plugin de capacitor para leer códigos QR o generarlos ( esto aun no lo se del todo )


## ICONOS ANIMADOS
https://www.flaticon.es/icono-animado-gratis