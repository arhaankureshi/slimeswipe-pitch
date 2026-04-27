"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Ambient three.js backdrop: a subtle, slow-moving particle field + soft
 * drifting orbs. Tuned deliberately low-contrast so it sits behind content
 * rather than competing with it.
 */
export default function OrbField() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      60,
      mount.clientWidth / mount.clientHeight,
      0.1,
      2000
    );
    camera.position.z = 60;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // Lower particle count + lower opacity so text/cards on top stay readable
    const particleCount = 500;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    const violet = new THREE.Color(0x6b3fa0);
    const electric = new THREE.Color(0x4f7bff);
    const ice = new THREE.Color(0x9b7ede);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 200;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 140;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 140;

      const pick = Math.random();
      const c = pick < 0.4 ? violet : pick < 0.8 ? electric : ice;
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;

      sizes[i] = Math.random() * 1.0 + 0.2;
    }

    const particleGeom = new THREE.BufferGeometry();
    particleGeom.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    particleGeom.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    particleGeom.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

    const particleMat = new THREE.PointsMaterial({
      size: 0.55,
      vertexColors: true,
      transparent: true,
      opacity: 0.45,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });

    const particles = new THREE.Points(particleGeom, particleMat);
    scene.add(particles);

    // Soft drifting orbs — darker and smaller so they read as ambience, not content
    const orbMaterial = (color: number, opacity: number) =>
      new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });

    const orb1 = new THREE.Mesh(
      new THREE.SphereGeometry(18, 32, 32),
      orbMaterial(0x3b1e6e, 0.09)
    );
    orb1.position.set(-42, 22, -30);
    scene.add(orb1);

    const orb2 = new THREE.Mesh(
      new THREE.SphereGeometry(24, 32, 32),
      orbMaterial(0x1e3bc8, 0.07)
    );
    orb2.position.set(48, -18, -35);
    scene.add(orb2);

    const orb3 = new THREE.Mesh(
      new THREE.SphereGeometry(14, 32, 32),
      orbMaterial(0x6b3fa0, 0.11)
    );
    orb3.position.set(10, 12, -20);
    scene.add(orb3);

    let scrollY = 0;
    const onScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const onResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", onResize);

    let pointerX = 0;
    let pointerY = 0;
    const onPointer = (e: PointerEvent) => {
      pointerX = (e.clientX / window.innerWidth - 0.5) * 2;
      pointerY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("pointermove", onPointer);

    let rafId = 0;
    const start = performance.now();
    const animate = () => {
      const t = (performance.now() - start) * 0.0004;

      particles.rotation.y = t * 0.12;
      particles.rotation.x = Math.sin(t * 0.2) * 0.06;

      orb1.position.x = -42 + Math.sin(t * 0.35) * 5;
      orb1.position.y = 22 + Math.cos(t * 0.45) * 3;

      orb2.position.x = 48 + Math.cos(t * 0.28) * 6;
      orb2.position.y = -18 + Math.sin(t * 0.35) * 5;

      orb3.position.x = 10 + Math.sin(t * 0.5) * 8;
      orb3.position.y = 12 + Math.cos(t * 0.55) * 5;

      // Parallax — subtle
      const scrollInfluence = Math.min(scrollY * 0.008, 30);
      scene.position.y = scrollInfluence * 0.12;

      camera.position.x += (pointerX * 2 - camera.position.x) * 0.03;
      camera.position.y += (-pointerY * 1.5 - camera.position.y) * 0.03;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      rafId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointer);
      renderer.dispose();
      particleGeom.dispose();
      particleMat.dispose();
      orb1.geometry.dispose();
      (orb1.material as THREE.Material).dispose();
      orb2.geometry.dispose();
      (orb2.material as THREE.Material).dispose();
      orb3.geometry.dispose();
      (orb3.material as THREE.Material).dispose();
      if (mount && renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 h-screen w-screen"
      style={{ opacity: 0.65 }}
    />
  );
}
