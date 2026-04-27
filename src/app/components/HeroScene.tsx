"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * SlimeSwipe hero — a wobbling iridescent slime blob.
 * A high-subdivision sphere with a custom vertex shader that adds
 * 3D simplex-style noise displacement, cycling through the brand
 * palette. Surrounded by drifting gel droplets, a pulsing inner core,
 * and three colored point lights in rhythm.
 */
export default function HeroScene() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      42,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 7);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // ——————————————————————————————————————
    // Lights
    // ——————————————————————————————————————
    scene.add(new THREE.AmbientLight(0x101020, 0.6));

    const keyLight = new THREE.PointLight(0x4f7bff, 9, 40);
    keyLight.position.set(4, 3, 4);
    scene.add(keyLight);

    const fillLight = new THREE.PointLight(0x9b7ede, 7, 40);
    fillLight.position.set(-4, -1, 3);
    scene.add(fillLight);

    const rimLight = new THREE.PointLight(0xb8c7ff, 5, 40);
    rimLight.position.set(0, 5, -3);
    scene.add(rimLight);

    const underLight = new THREE.PointLight(0x6b3fa0, 4.5, 30);
    underLight.position.set(0, -5, 2);
    scene.add(underLight);

    // ——————————————————————————————————————
    // Slime blob — a sphere with per-frame noise-driven vertex displacement
    // ——————————————————————————————————————
    const blobGeom = new THREE.SphereGeometry(1.5, 160, 160);
    const basePositions = new Float32Array(blobGeom.attributes.position.array);

    const blobMat = new THREE.MeshPhysicalMaterial({
      color: 0x9b7ede,
      metalness: 0.3,
      roughness: 0.08,
      clearcoat: 1,
      clearcoatRoughness: 0.05,
      sheen: 1,
      sheenColor: new THREE.Color(0x4f7bff),
      sheenRoughness: 0.15,
      emissive: 0x3b1e6e,
      emissiveIntensity: 0.8,
      iridescence: 1,
      iridescenceIOR: 1.5,
      iridescenceThicknessRange: [100, 800],
      transmission: 0.25,
      thickness: 1,
      ior: 1.45,
      envMapIntensity: 1.6,
      transparent: true,
      opacity: 0.98,
    });

    const blob = new THREE.Mesh(blobGeom, blobMat);
    scene.add(blob);

    // Inner glowing core — simulates "lit from within"
    const core = new THREE.Mesh(
      new THREE.SphereGeometry(0.6, 48, 48),
      new THREE.MeshBasicMaterial({
        color: 0xb8c7ff,
        transparent: true,
        opacity: 0.55,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
    );
    scene.add(core);

    // ——————————————————————————————————————
    // Gel droplets — small spheres orbiting the blob
    // ——————————————————————————————————————
    const dropletCount = 16;
    const droplets: { mesh: THREE.Mesh; radius: number; speed: number; phase: number; height: number }[] =
      [];
    const dropletMat = new THREE.MeshPhysicalMaterial({
      color: 0x9b7ede,
      metalness: 0.2,
      roughness: 0.1,
      clearcoat: 1,
      transmission: 0.3,
      emissive: 0x4f7bff,
      emissiveIntensity: 0.4,
      transparent: true,
      opacity: 0.85,
      iridescence: 0.6,
    });
    for (let i = 0; i < dropletCount; i++) {
      const size = 0.05 + Math.random() * 0.12;
      const d = new THREE.Mesh(
        new THREE.SphereGeometry(size, 24, 24),
        dropletMat.clone()
      );
      scene.add(d);
      droplets.push({
        mesh: d,
        radius: 2.2 + Math.random() * 1.5,
        speed: 0.3 + Math.random() * 0.5,
        phase: Math.random() * Math.PI * 2,
        height: (Math.random() - 0.5) * 2.4,
      });
    }

    // ——————————————————————————————————————
    // Ambient particle mist
    // ——————————————————————————————————————
    const particleCount = 900;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const violet = new THREE.Color(0x9b7ede);
    const electric = new THREE.Color(0x4f7bff);
    const ice = new THREE.Color(0xb8c7ff);

    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const r = 2 + Math.random() * 5;
      const y = (Math.random() - 0.5) * 7;
      positions[i * 3] = Math.cos(theta) * r;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = Math.sin(theta) * r - 0.5;

      const pick = Math.random();
      const c = pick < 0.55 ? violet : pick < 0.88 ? electric : ice;
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    const particleGeom = new THREE.BufferGeometry();
    particleGeom.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    particleGeom.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });
    const particles = new THREE.Points(particleGeom, particleMat);
    scene.add(particles);

    // Soft glow sprite behind the blob (fake bloom)
    const makeGlowSprite = (color: number, size: number, opacity: number) => {
      const canvas = document.createElement("canvas");
      canvas.width = canvas.height = 256;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const grad = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
        const hex = color.toString(16).padStart(6, "0");
        grad.addColorStop(0, `#${hex}cc`);
        grad.addColorStop(0.4, `#${hex}55`);
        grad.addColorStop(1, `#${hex}00`);
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 256, 256);
      }
      const tex = new THREE.CanvasTexture(canvas);
      const mat = new THREE.SpriteMaterial({
        map: tex,
        transparent: true,
        opacity,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      const sprite = new THREE.Sprite(mat);
      sprite.scale.set(size, size, size);
      return sprite;
    };
    const glowA = makeGlowSprite(0x6b3fa0, 7, 0.7);
    scene.add(glowA);
    const glowB = makeGlowSprite(0x4f7bff, 5.5, 0.5);
    glowB.position.x = 0.8;
    scene.add(glowB);

    // ——————————————————————————————————————
    // 3D noise — a simple pseudo-Perlin via sin products (cheap + good enough)
    // ——————————————————————————————————————
    const noise3 = (x: number, y: number, z: number, t: number) => {
      return (
        Math.sin(x * 2.3 + t * 1.1) *
          Math.cos(y * 2.1 - t * 0.9) *
          Math.sin(z * 2.5 + t * 1.3) +
        Math.sin(x * 4.7 - t * 0.7) *
          Math.cos(y * 4.3 + t * 1.2) *
          Math.sin(z * 4.1 - t * 0.8) *
          0.5
      );
    };

    // ——————————————————————————————————————
    // Motion
    // ——————————————————————————————————————
    let pointerX = 0;
    let pointerY = 0;
    const onPointer = (e: PointerEvent) => {
      pointerX = (e.clientX / window.innerWidth - 0.5) * 2;
      pointerY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("pointermove", onPointer);

    const onResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", onResize);

    const posAttr = blobGeom.attributes.position;
    const positionsArr = posAttr.array as Float32Array;
    let rafId = 0;
    const start = performance.now();

    const animate = () => {
      const t = (performance.now() - start) * 0.0008;

      // ——— Slime wobble: offset each vertex along its outward normal by a
      // time-varying 3D noise value. Much more organic than a simple scale.
      for (let i = 0; i < positionsArr.length; i += 3) {
        const ox = basePositions[i];
        const oy = basePositions[i + 1];
        const oz = basePositions[i + 2];
        const len = Math.sqrt(ox * ox + oy * oy + oz * oz);
        if (len === 0) continue;
        const n = noise3(ox, oy, oz, t * 0.9);
        const disp = 1 + n * 0.12; // up to ±12% displacement
        positionsArr[i] = ox * disp;
        positionsArr[i + 1] = oy * disp;
        positionsArr[i + 2] = oz * disp;
      }
      posAttr.needsUpdate = true;
      blobGeom.computeVertexNormals();

      // Blob rotation + float
      blob.rotation.y = t * 0.45;
      blob.rotation.x = Math.sin(t * 0.3) * 0.3;
      blob.position.y = Math.sin(t * 0.8) * 0.22;

      // Color cycle through brand palette
      const hue = 0.73 + Math.sin(t * 0.25) * 0.07; // 0.66–0.80 royal→violet
      blobMat.color.setHSL(hue, 0.55, 0.55);
      blobMat.emissive.setHSL(hue, 0.85, 0.22);
      blobMat.emissiveIntensity = 0.55 + Math.sin(t * 1.8) * 0.25;

      // Core pulses and follows the blob
      core.position.copy(blob.position);
      const coreS = 0.9 + Math.sin(t * 1.4) * 0.25;
      core.scale.set(coreS, coreS, coreS);
      (core.material as THREE.MeshBasicMaterial).opacity =
        0.45 + Math.sin(t * 1.4) * 0.18;

      // Droplets orbit
      droplets.forEach((d, i) => {
        const a = d.phase + t * d.speed;
        d.mesh.position.x = Math.cos(a) * d.radius;
        d.mesh.position.z = Math.sin(a) * d.radius;
        d.mesh.position.y = d.height + Math.sin(t * 1.2 + i) * 0.25;
        const s = 0.9 + Math.sin(t * 2 + i) * 0.2;
        d.mesh.scale.set(s, s, s);
      });

      // Particle mist gently drifts
      particles.rotation.y = t * 0.08;

      // Glow sprites track the blob
      glowA.position.copy(blob.position);
      glowA.scale.setScalar(7 + Math.sin(t * 1.1) * 0.7);
      glowB.position.copy(blob.position);
      glowB.position.x += 0.8;
      glowB.scale.setScalar(5.5 + Math.cos(t * 0.9) * 0.6);

      // Light pulses
      keyLight.intensity = 7 + Math.sin(t * 1.6) * 2.5;
      fillLight.intensity = 5 + Math.cos(t * 1.2) * 1.8;
      rimLight.intensity = 4 + Math.sin(t * 0.8) * 1.2;

      // Camera parallax
      camera.position.x += (pointerX * 0.6 - camera.position.x) * 0.04;
      camera.position.y += (-pointerY * 0.4 - camera.position.y) * 0.04;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      rafId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      blobGeom.dispose();
      blobMat.dispose();
      (core.geometry as THREE.BufferGeometry).dispose();
      (core.material as THREE.Material).dispose();
      droplets.forEach((d) => {
        (d.mesh.geometry as THREE.BufferGeometry).dispose();
        (d.mesh.material as THREE.Material).dispose();
      });
      dropletMat.dispose();
      particleGeom.dispose();
      particleMat.dispose();
      (glowA.material as THREE.Material).dispose();
      (glowB.material as THREE.Material).dispose();
      if (mount && renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden
      className="pointer-events-none absolute inset-0"
    />
  );
}
