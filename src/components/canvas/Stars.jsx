import {useState, useRef, Suspense, useMemo} from "react";
import {Canvas, useFrame} from "@react-three/fiber";
import {Preload} from "@react-three/drei";
import * as THREE from "three";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
    const ref = useRef();

    const [sphere] = useState(() => {
        const positions = random.inSphere(new Float32Array(5000), {radius: 1.2});

        const nanIndices = [];
        for (let i = 0; i < positions.length; i++) {
            if (isNaN(positions[i]) || !isFinite(positions[i])) {
                nanIndices.push(i);
            }
        }

        if (nanIndices.length > 0) {
            nanIndices.forEach(index => {
                positions[index] = 0;
            });
        }

        return positions;
    });

    // Create the geometry manually with error handling
    const pointsGeometry = useMemo(() => {
        const geometry = new THREE.BufferGeometry();

        try {
            geometry.setAttribute('position', new THREE.BufferAttribute(sphere, 3));

            // Manually set a safe bounding sphere
            geometry.boundingSphere = new THREE.Sphere(new THREE.Vector3(0, 0, 0), 1.5);

            return geometry;
        } catch (error) {
            // Return a fallback empty geometry
            return new THREE.BufferGeometry();
        }
    }, [sphere]);

    // Create the material
    const pointsMaterial = useMemo(() => {
        return new THREE.PointsMaterial({
            color: "#E6F3FF",
            size: 0.002,
            sizeAttenuation: true,
            transparent: true,
            depthWrite: false
        });
    }, []);

    useFrame((state, delta) => {
        if (ref.current && isFinite(delta)) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <points ref={ref} geometry={pointsGeometry} material={pointsMaterial} {...props} />
        </group>
    );
};

const StarsCanvas = () => {
    return (
        <div className="w-full h-auto absolute inset-0 z-[-1]">
            <Canvas camera={{position: [0, 0, 1]}}>
                <Suspense fallback={null}>
                    <Stars/>
                </Suspense>
                <Preload all/>
            </Canvas>
        </div>
    );
};

export default StarsCanvas;