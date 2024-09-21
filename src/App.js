import "./index.css";
import {
  OrbitControls,
  Text,
  PresentationControls,
  MeshTransmissionMaterial,
  useGLTF,
  Environment,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import font from "./fonts/PPPangaia-Bold.otf";
import { useControls } from "leva";
import box from "./untitled.gltf";
import { OrthographicCamera } from "@react-three/drei";
function App(props) {
  const cube = useRef();

  // const { nodes, materials } = useGLTF(box);

  console.log(cube);

  useFrame(() => {
    cube.current.rotation.y += 0.02;
    cube.current.rotation.x += 0.02;
  });

  // const materialProps = useControls({
  //   thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },
  //   roughness: { value: 0, min: 0, max: 1, step: 0.1 },
  //   transmission: { value: 1, min: 0, max: 1, step: 0.1 },
  //   ior: { value: 1.2, min: 0, max: 3, step: 0.1 },
  //   chromaticAbberation: { value: 0.02, min: 0, max: 1 },
  //   backside: { value: true },
  // });

  return (
    <>
      <OrbitControls />
      {/* <directionalLight intensity={3} position={[0, 3, 2]} />
      <Environment preset="city" /> */}
      <mesh ref={cube}>
        <torusGeometry />
        <MeshTransmissionMaterial
          thickness={3}
          backside="true"
          roughness={0.02}
          transmission={1}
          ior={1}
          chromaticAberration={0.05}
        />
      </mesh>

      <Text color="beige" position={[0, 0, 1]} fontSize={1.5} font={font}>
        섬세
      </Text>

      {/* <group {...props} dispose={null}>
        <group scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Ellipse_2.geometry}
            material={nodes.Ellipse_2.material}
            position={[110, -82.031, -92.366]}
            rotation={[-0.157, Math.PI / 2, 0]}
            color="blue"
          >
            <meshBasicMaterial color="blue" />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere_3.geometry}
            material={nodes.Sphere_3.material}
            position={[-1113.393, 383, -41.089]}
            rotation={[0, 0.984, 0]}
          >
            <meshBasicMaterial color="blue" />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere_2.geometry}
            material={nodes.Sphere_2.material}
            position={[-1273.393, 202, 486.911]}
            rotation={[0, 0.984, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere.geometry}
            material={nodes.Sphere.material}
            position={[-1231.393, 7, 517.911]}
            rotation={[0, 0.984, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cone.geometry}
            material={nodes.Cone.material}
            position={[88.737, -9.126, -97.627]}
            rotation={[2.99, 0, Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Ellipse.geometry}
            material={nodes.Ellipse.material}
            position={[176.5, -4, 11]}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rectangle_2.geometry}
            material={nodes.Rectangle_2.material}
            position={[-36, -4, 153.5]}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube.geometry}
            material={nodes.Cube.material}
            position={[-150.884, -53, 91.56]}
            rotation={[0, 0, Math.PI]}
          />
          <directionalLight
            intensity={0.7}
            decay={2}
            rotation={[-1.521, 0.062, 1.568]}
          />
          <OrthographicCamera
            makeDefault={false}
            far={100000}
            near={0}
            position={[729.385, 517.973, 609.73]}
            rotation={[-0.724, 0.975, 0.632]}
          />
          <group
            position={[88.737, -9.126, -97.627]}
            rotation={[2.99, 0, Math.PI]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_4_instance_1.geometry}
              material={nodes.mesh_4_instance_1.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_4_instance_2.geometry}
              material={nodes.mesh_4_instance_2.material}
              position={[164.521, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_4_instance_3.geometry}
              material={nodes.mesh_4_instance_3.material}
              position={[329.042, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_4_instance_4.geometry}
              material={nodes.mesh_4_instance_4.material}
              position={[493.564, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_4_instance_5.geometry}
              material={nodes.mesh_4_instance_5.material}
              position={[658.085, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_4_instance_6.geometry}
              material={nodes.mesh_4_instance_6.material}
              position={[822.606, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_4_instance_7.geometry}
              material={nodes.mesh_4_instance_7.material}
              position={[987.127, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_4_instance_8.geometry}
              material={nodes.mesh_4_instance_8.material}
              position={[1151.649, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_4_instance_9.geometry}
              material={nodes.mesh_4_instance_9.material}
              position={[1316.17, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_4_instance_10.geometry}
              material={nodes.mesh_4_instance_10.material}
              position={[1480.691, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_4_instance_11.geometry}
              material={nodes.mesh_4_instance_11.material}
              position={[1645.212, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_4_instance_12.geometry}
              material={nodes.mesh_4_instance_12.material}
              position={[1809.734, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_4_instance_13.geometry}
              material={nodes.mesh_4_instance_13.material}
              position={[1974.255, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_4_instance_14.geometry}
              material={nodes.mesh_4_instance_14.material}
              position={[2138.776, 0, 0]}
            />
          </group>
        </group>
      </group> */}
    </>
  );
}

export default App;

useGLTF.preload("./cube.gltf");
