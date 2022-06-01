
To do:
- Modularizar todas las funciones internas de cada componente, reutilizar componentes, y modularizar estados! (no hubo tiempo para hacer esto desde un principio debido a deadlines)
- Emprolijar y normalizar codigo

Estructura de ramas ahora: 
- main = rama principal, esta tiene que ser siempre la que tenga una version estable de la app
- develop = rama para desarrollo, a partir de esta se hacen ramas/o se labura directamente en esta y se desarrollan nuevas funcionalidades
- old-html-version = rama vieja para guardar la version html-css de la app, se puede borrar si alguien quiere

Requisitos para correr la app:
- Node instalado en pc (Node viene con NPM, el encargado de manejar paquetes/librerias en node)
- Pararse en /proyecto-linkit (carpeta main) y hacer npm install, al hacer
eso se instalan todas las librerias (react, etc).
- Crear un archivo .env en la carpeta root (/proyecto-linkit) con las variables de ejemplo, pedir las claves
- Despues, hacer npm start y va arrancar el proyecto (tarda un rato)

Organizacion de carpetas:
/proyecto-linkit
- /public
  - favicon.ico // logo de la web 
  - index.html // HTML principal donde se insertan los componentes react
  - manifest.json
  - robots.txt
- /src
  - /componentStyles // Estilos de los componentes
  - /components // Componentes React
  - /constants // Archivos de constantes (ej. selects html, etc.)
  - /functions // Funciones generales para la app
  - /images // Imagenes de la app
  - index.js // Archivo donde se juntan todos los componentes de React
  - serviceWorker.js // Archivo para mejorar el rendimiento durante el desarrollo
- .env.example //Archivo .env de ejemplo, hay que crear un archivo .env en la carpeta root (/proyecto-linkit)
- .gitignore //Archivo MUY importante, se definen todo lo que se ignora para la subida al repo
- package.json //Archivo donde se definen las librerias necesarias de Node
- README.md
