# La Velada del Año - Un Proyecto de Ibai Llanos

Bienvenido al proyecto "La Velada del Año", un sitio web diseñado para el evento anual organizado por Ibai Llanos. Este README te guiará a través de la estructura del proyecto, cómo configurarlo y ejecutarlo localmente.

## Tabla de Contenidos

1. [Descripción](#descripción)
2. [Requisitos Previos](#requisitos-previos)
3. [Instalación](#instalación)
4. [Ejecución](#ejecución)
5. [Estructura del Proyecto](#estructura-del-proyecto)
6. [Contribuir](#contribuir)
7. [Licencia](#licencia)

## Descripción

Este proyecto es una página web para "La Velada del Año", un evento de boxeo organizado por Ibai Llanos. La página incluye información sobre los participantes, enlaces a la transmisión en Twitch y opciones para comprar entradas.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente en tu máquina:

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [NPM](https://www.npmjs.com/) (viene incluido con Node.js)

## Instalación

Sigue estos pasos para instalar el proyecto en tu máquina local:

1. Clona el repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd <NOMBRE_DEL_DIRECTORIO>
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```

## Ejecución

Para ejecutar el proyecto localmente, utiliza el siguiente comando:

```bash
npm start
```

Esto iniciará un servidor local y podrás ver la página web en `http://localhost:3000`.

## Estructura del Proyecto

La estructura del proyecto es la siguiente:

```
la-velada-del-año/
├── public/
│   ├── boxes/
│   │   ├── coscu.webp
│   │   ├── mayichi.webp
│   │   ├── viruzz.webp
│   │   ├── fernanfloo.webp
│   │   ├── la-rivers.webp
│   │   ├── papigavi.webp
│   │   ├── german.webp
│   │   ├── amouranth.webp
│   │   ├── shelao.webp
│   │   ├── luzu.webp
│   │   ├── rivers.webp
│   │   └── ampeter.webp
│   ├── fonts/
│   │   ├── boxing.otf
│   │   └── boxing-striped.woff2
│   └── favicon.svg
├── src/
│   ├── pages/
│   │   └── clip-customs.css
│   ├── JS/
│   │   └── index.js
│   └── styles/
│       └── main.css
├── index.html
└── README.md
```

- **public/**: Contiene imágenes, fuentes y el favicon.
- **src/**: Contiene los archivos CSS y JavaScript.
- **index.html**: Archivo principal HTML del proyecto.
- **README.md**: Este archivo README.

## Contribuir

Si deseas contribuir a este proyecto, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza los cambios necesarios y haz commits (`git commit -m 'Añadir nueva funcionalidad'`).
4. Haz push a la rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## Licencia

Este proyecto está licenciado bajo la [Licencia MIT](LICENSE).
Este es un proyecto de ejemplo, no es la landing real.
---

¡Gracias por visitar "La Velada del Año"! Esperamos que disfrutes del evento. Para más información, visita [twitch.tv/ibai](https://twitch.tv/ibai).

---

Para cualquier pregunta o comentario, por favor contacta a [Ibai Llanos](https://twitter.com/ibaillanos).
