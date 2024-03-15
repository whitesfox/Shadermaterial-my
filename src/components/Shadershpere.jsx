import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const SphereShaderMaterial = {
  uniforms: {
    u_time: { type: "f", value: 0 },
  },
  vertexShader: `
    precision mediump float;
    varying vec2 vUv;
    void main() {
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.);
        gl_Position = projectionMatrix * mvPosition;
        vUv = uv;
    }
  `,
  fragmentShader: `
    varying vec2 vUv;
    uniform float u_time;

    void main() {
      vec2 uv = vUv;
      float cb = floor((uv.x + u_time)*20.) + floor((uv.y + u_time)*20.);
      gl_FragColor = vec4(1.,0.,0.,mod(cb, 2.0));
    }
  `,
};

export const ShaderSphere = (props) => {
  const sphereRef = useRef();

  useFrame(({ clock }) => {
    sphereRef.current.material.uniforms.u_time.value = clock.oldTime * 0.00005;
  });

  return (
    <mesh ref={sphereRef} {...props}>
      <sphereGeometry args={[2, 24, 24]} />
      <shaderMaterial attach="material" args={[SphereShaderMaterial]} />
    </mesh>
  );
};
