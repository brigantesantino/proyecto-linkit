Requisitos para correr la app:
- Node instalado en pc (Node viene con NPM, el encargado de manejar paquetes/librerias en node)
- Pararse en /proyecto-linkit (carpeta main) y hacer npm install, al hacer
eso se instalan todas las librerias (react, dotenv, etc).
- Crear un archivo .env en la carpeta root (/proyecto-linkit) con las variables de ejemplo, pedir las claves
- Despues, hacer npm start y va arrancar el proyecto (tarda un rato)

Organizacion de carpetas:
/proyecto-linkit
- /public
  - favicon.ico // logo de la web 
  - in dex.html // HTML principal donde se insertan los componentes react
  - manifest.json
  - robots.txt
- /src
  - /components //Componentes React
  - /componentStyles //Estilos de los componentes
  - index.js //Archivo donde se juntan todos los componentes de React
- Archivo .env de ejemplo, hay que crear un archivo .env en la carpeta root (/proyecto-linkit)
- .gitignore //Archivo MUY importante, se definen todo lo que se ignora para la subida al repo
- package.json //Archivo donde se definen las librerias necesarias de Node
- README.md
