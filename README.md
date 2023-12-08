# Dom exercise

Este repositorio nos servirá como base para coonocer los diferente tipos de Dom que tenemos en javascript y construir de tal forma un proyecto que podría ser real. También, a parte de la explicación recibida en clase, las coder deberán realizar una refactorización del código que tenga después de la explicación y la realización de los test de cada función.

El proyecto ya esta realizado con la arquitectura adecuada para su funcionamiento.

## Requisitos para el funcionamiento actual

- Visual Studio Code

## Requisitos para realizar el testing

- El testing se deberá de realizar en [vitest](https://vitest.dev/guide/)
- Una vez instalado deberás poner en este **readme** (que deberás modificar), el proceso para que una persona que llegué al repositorio pueda hacer correr los test

## Requisitos del Readme

- DEBERÁ llevar una breve descripción del proyecto
- DEBERÁ lleva las imágenes que muestren el proyecto
- DEBERÁ llevar las tecnologías empleadas
- DEBERÁ llevar como se debe hacer el proceso para instalar todo lo necesario para que se corran los test (instalar nodejs, hacer npm install  o npm i)


## Descripción del proyecto ## 

web para la venta de coches de mercedez Benz de segunda mano

'url("public/img/Tienda de coches.png")';

## Tecnologías ##

HTML / CSS / JavaScrip / Vitets / Nodejs

## Instalacion de nodejs ##

### Cómo Instalar Node.js y npm
Cada sistema operativo tiene un método distinto para instalar Node.js. El archivo de instalación principal difiere para cada sistema operativo. Sin embargo, los creadores de Node.js se han encargado de proporcionarte los archivos necesarios para cada sistema. DESCARGA DESDE LA PAGINA OFICIAL -->https://nodejs.org/en Segun tu sistema operativo sigue las instrucciones y al finalizar comprobamos que este todo bien con el siguiente cimando en tu consola:

Node --version

Y para comprobar la versión de npm, ejecuta este comando:

npm --version

Si las versiones de Node.js y npm son visibles, ambos están correctamente instalados y funcionan bien

### Cómo Instalar vites

una vez creado el proyecto abre la terminal y escribe el siguiente comando:

npm install --save-dev vitest

A continuación, para ejecutar la prueba, agregue la siguiente sección a su package.json:

json
{
  "scripts": {
    "test": "vitest"
  }
}

Finalmente puede correr los test con el siguiente comando:

npm run test o npm t
