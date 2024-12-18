import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import * as RAPIER from "@dimforge/rapier3d";
import { MousePointer } from "../MousePointer";
import { cn } from "@/lib/utils";
import { ClassNameValue } from "tailwind-merge";

const Interactive3DParticles = ({
    title,
    description,
    particlesCount,
    particleColor,
    RingSize,
    className
}: {
    title?: string,
    description?: string,
    particlesCount?: number,
    particleColor?: string,
    RingSize?: number,
    className?: ClassNameValue
}) => {
    const mountRef = useRef(null);
    const w = window.innerWidth;
    const h = window.innerHeight;

    useEffect(() => {
        const rapier = new RAPIER.World({ x: 0.0, y: 0.0, z: 0.0 });
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
        camera.position.z = 10;

        const renderer = new THREE.WebGLRenderer({ antialias: true, canvas: mountRef.current! });
        renderer.setSize(window.innerWidth, window.innerHeight);

        // Particle Setup
        const numParticles = particlesCount ?? 3400; // Total number of particles
        const radius = RingSize ?? 4; // Circle radius
        const ringWidth = 0.7; // Width of the ring
        const positions = new Float32Array(numParticles * 3); // x, y, z positions
        const opacities = new Float32Array(numParticles); // Opacities
        const angles = new Float32Array(numParticles); // Store angles for each particle
        const radii = new Float32Array(numParticles); // Store radii for each particle
        const rotationSpeeds = new Float32Array(numParticles); // Rotation speed for each particle

        const defaultPositions = new Float32Array(numParticles * 3);
        const velocities = new Float32Array(numParticles * 3);
        const repulsionRadius = 1;
        const repulsionForce = 0.7;
        const returnForce = 0.05;

        // Angular range for particle dispersion (40% of the ring)
        const angularSpread = Math.PI * 0.4; // 40% of 360 degrees
        const angularOffset = -angularSpread / 2; // Center the spread symmetrically

        for (let i = 0; i < numParticles; i++) {
            const trailFactor = i / numParticles; // Normalize particle index (0 to 1)
            radii[i] = radius - Math.random() * ringWidth * trailFactor;

            // Constrain angle to 40% of the ring
            angles[i] = Math.random() * angularSpread + angularOffset;

            const x = Math.cos(angles[i]) * radii[i];
            const y = Math.sin(angles[i]) * radii[i];
            const z = 0;

            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;

            defaultPositions[i * 3] = x;
            defaultPositions[i * 3 + 1] = y;
            defaultPositions[i * 3 + 2] = z;

            velocities[i * 3] = 0;
            velocities[i * 3 + 1] = 0;
            velocities[i * 3 + 2] = 0;

            opacities[i] = Math.random(); // Assign random opacity between 0 and 1
            rotationSpeeds[i] = (Math.random() - 0.5) * 0.02; // Assign random rotation speed
        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute("opacity", new THREE.BufferAttribute(opacities, 1));

        const material = new THREE.PointsMaterial({
            color: particleColor ?? "#00ccff",
            size: 0.05,
            transparent: true,
            opacity: 0.8,
            depthWrite: false,
            blending: THREE.AdditiveBlending,
        });

        const particles = new THREE.Points(geometry, material);
        scene.add(particles);

        const mousePos = new THREE.Vector2();
        const MouseBall = MousePointer(rapier);
        scene.add(MouseBall.Mouse);
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // White ambient light at 50% intensity
        scene.add(ambientLight);
        const hemiLight = new THREE.HemisphereLight("#ffffff", "#404040", 5);
        scene.add(hemiLight);

        window.addEventListener("mousemove", (evt) => {
            mousePos.x = (evt.clientX / w) * 2 - 1;
            mousePos.y = -(evt.clientY / h) * 2 + 1;
        });

        // Animation
        let rotationAngle = 0;
        const animate = () => {
            requestAnimationFrame(animate);
            const time = Date.now() * 0.001; // Elapsed time in seconds
            const positionsArray = geometry.attributes.position.array;
            const opacitiesArray = geometry.attributes.opacity.array;
            const pointerPosition = MouseBall.Mouse.position;

            rotationAngle += 0.01; // Adjust rotation speed

            for (let i = 0; i < numParticles; i++) {
                const idx = i * 3;

                // Update Angle with Random Rotation Speed
                angles[i] += rotationSpeeds[i];
                const currentX = Math.cos(angles[i]) * radii[i];
                const currentY = Math.sin(angles[i]) * radii[i];

                // Apply new position
                positionsArray[idx] = currentX;
                positionsArray[idx + 1] = currentY;

                // Random opacity fade effect
                opacitiesArray[i] = 0.5 + 0.5 * Math.sin(time + i); // Oscillate opacity over time

                const particlePos = new THREE.Vector3(
                    positionsArray[idx],
                    positionsArray[idx + 1],
                    positionsArray[idx + 2]
                );

                const distanceToPointer = particlePos.distanceTo(pointerPosition);

                if (distanceToPointer < repulsionRadius) {
                    // Apply Repulsion Force
                    const repulsionDir = particlePos.clone().sub(pointerPosition).normalize();
                    const repulsionAmount = (repulsionRadius - distanceToPointer) * repulsionForce;

                    velocities[idx] += repulsionDir.x * repulsionAmount;
                    velocities[idx + 1] += repulsionDir.y * repulsionAmount;
                } else {
                    // Return to Default Position
                    const returnDir = new THREE.Vector3(
                        defaultPositions[idx] - particlePos.x,
                        defaultPositions[idx + 1] - particlePos.y,
                        defaultPositions[idx + 2] - particlePos.z
                    );

                    if (returnDir.length() > 0.01) {
                        returnDir.normalize();
                        velocities[idx] += returnDir.x * returnForce;
                        velocities[idx + 1] += returnDir.y * returnForce;
                    }
                }

                positionsArray[idx] += velocities[idx];
                positionsArray[idx + 1] += velocities[idx + 1];

                velocities[idx] *= 0.85; // Dampen velocity
                velocities[idx + 1] *= 0.85;
            }

            MouseBall.updateMousePosition(mousePos);
            geometry.attributes.position.needsUpdate = true;
            geometry.attributes.opacity.needsUpdate = true;
            rapier.step();
            renderer.render(scene, camera);
        };

        animate();

        // Cleanup on unmount
        return () => {
            renderer.dispose();
        };
    }, []);

    return <div style={{ position: "relative", userSelect: "none", overflowX: "hidden" }}>
        <canvas ref={mountRef} style={{ height: "100vh", width: "100vw" }} ></canvas>;
        <div className={cn(className, "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white text-2xl font-bold")}>
            {title}
            <div style={{ fontSize: "1rem", color: "white", fontWeight: 100 }} >
                {description}
            </div>
        </div>
    </div>
};

export default Interactive3DParticles;
