import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { Model } from "./Male_full_body";
import { infoMuscles } from "./infoMuscles";
import "./App.css";

function App() {
  const [muscleInfo, setMuscleInfo] = useState(null);

  return (
    <div className="app-container">
      {/* Contenedor del Lienzo 3D */}
      <div className="canvas-container">
        <Canvas camera={{ position: [0, 0, 15], fov: 80 }}>
          <Stage intensity={0.5} environment="city" adjustCamera={false}>
            <Model onSelectMuscle={(id) => setMuscleInfo(infoMuscles[id])} />
          </Stage>

          <OrbitControls
            enablePan={true}
            enableZoom={true}
            minDistance={50}
            maxDistance={200}
            onStart={() => {
              document.body.style.cursor = "move";
            }}
            onEnd={() => {
              document.body.style.cursor = "auto";
            }}
          />
        </Canvas>
      </div>

      {/* Panel Informativo Lateral */}
      <div className="info-panel">
        {muscleInfo ? (
          <div>
            <h2 className="muscle-title">{muscleInfo.name}</h2>
            <p className="muscle-description">{muscleInfo.description}</p>

            <h3 className="section-title">Ejercicios Clave:</h3>
            <ul className="exercise-list">
              {muscleInfo.exercises &&
                muscleInfo.exercises.map((exercise, index) => (
                  <li className="exercise-item" key={index}>
                    💪 {exercise}
                  </li>
                ))}
            </ul>
          </div>
        ) : (
          <div className="placeholder-container">
            <p className="placeholder-text">
              Haz clic en cualquier músculo del modelo 3D para ver los detalles
              y ejercicios. Haz click sobre el lienzo y arrastra el mouse para
              mover la cámara. Haz zoom con la rueda del mouse para ajustar la
              perspectiva.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
