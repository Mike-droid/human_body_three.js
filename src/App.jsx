import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { Model } from "./Male_full_body";

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh", backgroundColor: "#111" }}>
      <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
        {/* Iluminación y entorno automático para que no se vea negro */}
        <Stage intensity={0.5} environment="city" adjustCamera={false}>
          <Model />
        </Stage>

        {/* Permite rotar y hacer zoom con el mouse */}
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          minDistance={50}
          maxDistance={200}
        />
      </Canvas>
    </div>
  );
}

export default App;
