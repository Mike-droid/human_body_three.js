# 🏋️‍♂️ Atlas de Anatomía 3D para Culturismo (MVP)

Una aplicación web interactiva diseñada para entusiastas del fitness, gimnasio y culturismo. El objetivo principal de este proyecto es ofrecer una herramienta educativa visual donde los usuarios puedan explorar de manera interactiva los **12 grupos musculares principales y superficiales** del cuerpo humano, comprender su función y conocer los mejores ejercicios para estimular su hipertrofia.

---

## 🚀 Características Clave

- **Modelo Humano en 3D:** Visualización interactiva de la anatomía muscular adaptada al enfoque fitness.
- **Interactividad Dinámica:** El cursor cambia a tipo *pointer* y los músculos se iluminan en color verde al pasar el ratón (`hover`) únicamente en las zonas interactivas.
- **Cámara Fluida:** Soporte para rotar, encuadrar y hacer zoom mediante controles de órbita, con cambio dinámico de cursor a tipo *move* (cuatro flechas) durante el arrastre.
- **Panel Informativo Lateral:** Al hacer clic en un grupo muscular, se despliega instantáneamente su nombre técnico, descripción de sus funciones biomecánicas y una lista de ejercicios clave para el gimnasio.
- **Estructura Escalable:** Separación limpia entre la lógica del lienzo 3D, los datos informativos de los músculos y los estilos CSS.

---

## 🛠️ Tecnologías Utilizadas

Este proyecto fue construido utilizando el ecosistema moderno de desarrollo 3D para la web:

- **[Vite](https://vite.dev/)** - Entorno de desarrollo ultra rápido para el frontend.
- **[React](https://react.dev/)** - Librería para la construcción de la interfaz de usuario basada en componentes.
- **[Three.js](https://threejs.org/)** - El motor gráfico nativo de WebGL para renderizar escenas en 3D.
- **[React Three Fiber (R3F)](https://github.com/pmndrs/react-three-fiber)** - Un *wrapper* declarativo de Three.js para React.
- **[@react-three/drei](https://github.com/pmndrs/drei)** - Colección de ayudantes y componentes útiles para R3F (utilizado para `Stage`, `OrbitControls` y `useGLTF`).
- **[gltfjsx](https://github.com/pmndrs/gltfjsx)** - Herramienta para convertir de forma óptima el modelo gráfico `.glb` a un componente reutilizable de React.

---

## 🎨 Créditos del Modelo 3D

El modelo anatómico utilizado en este proyecto ha sido optimizado para la web, manteniendo una segmentación impecable de los grupos musculares. 

- **Autor:** Diego Luján García
- **Perfil de Sketchfab:** [@diegoluga](https://sketchfab.com/diegoluga)
- **Licencia:** Atribución Creative Commons (CC-BY).

---

## 💻 Instalación y Configuración Local

Sigue estos pasos para ejecutar el atlas de anatomía en tu computadora:

1. **Clona este repositorio:**
   ```bash
   git clone https://github.com/Mike-droid/human_body_three.js
   cd human_body
   ```

2. **Instala las dependencias del proyecto:**
   ```bash
   npm install
   ```

3. **Verifica la ubicación del archivo 3D:**
   Asegúrate de que el archivo comprimido `male_full_body-transformed.glb` se encuentre dentro de la carpeta `/public` en la raíz de tu proyecto para que el cargador `useGLTF` pueda leerlo sin problemas.

4. **Inicia el servidor de desarrollo local:**
   ```bash
   npm run dev
   ```

5. **Abre tu navegador:**
   Introduce la dirección local provista por Vite (usualmente http://localhost:5173) y empieza a interactuar con el modelo.
