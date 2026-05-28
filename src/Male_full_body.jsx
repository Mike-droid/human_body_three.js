import { useGLTF } from "@react-three/drei";
import { useState } from "react";

export function Model(props) {
  const { nodes, materials } = useGLTF("/male_full_body-transformed.glb");

  // Estado para saber qué objeto tiene el mouse encima
  const [hoveredObject, setHoveredObject] = useState(null);

  // Función auxiliar para no repetir código en cada mesh
  const renderMesh = (nodeName, materialName) => {
    const isHovered = hoveredObject === nodeName;

    return (
      <mesh
        geometry={nodes[nodeName].geometry}
        // Si el mouse está encima, se pinta rojo; si no, usa su material original
        material={
          isHovered ? materials[materialName].clone() : materials[materialName]
        }
        material-color={isHovered ? "#00ff00" : undefined}
        rotation={[-Math.PI / 2, 0, 0]}
        // Eventos de interacción
        onPointerOver={(e) => {
          e.stopPropagation(); // Evita que se seleccionen objetos que están atrás
          setHoveredObject(nodeName);
          console.log(`👉 Estás tocando el objeto: ${nodeName}`);
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          setHoveredObject(null);
        }}
      />
    );
  };

  return (
    <group {...props} dispose={null}>
      {renderMesh("Object_3", "defaultMat_12")} // glutes
      {renderMesh("Object_5", "defaultMat_11")} // shoulders
      {renderMesh("Object_7", "defaultMat_10")} // calves
      {renderMesh("Object_9", "defaultMat_9")} // hamstrings
      {renderMesh("Object_11", "material_1")} // skeleton
      {renderMesh("Object_13", "defaultMat_8")} // lats and traps
      {renderMesh("Object_15", "defaultMat_7")} // face
      {renderMesh("Object_17", "defaultMat_6")} // quads
      {renderMesh("Object_19", "defaultMat_5")} // neck
      {renderMesh("Object_21", "defaultMat_4")} // forearms tendons
      {renderMesh("Object_23", "defaultMat_3")} // chest and abs
      {renderMesh("Object_25", "defaultMat_2")} // tibialis
      {renderMesh("Object_27", "defaultMat_1")} // groin or abductors
      {renderMesh("Object_29", "material_0")} // skeleton
      {renderMesh("Object_31", "defaultMat_0")} // forearms muscles
      {renderMesh("Object_33", "defaultMat")} // biceps and triceps
    </group>
  );
}

useGLTF.preload("/male_full_body-transformed.glb");
