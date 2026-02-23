import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function Mascot(props) {
    const group = useRef()
    // Load the GLTF model
    const { scene, animations } = useGLTF('/anime-rig/source/rigged.glb')
    const { actions } = useAnimations(animations, group)

    const headBoneRef = useRef(null)

    useEffect(() => {
        console.log("Mascot: Scene loaded", scene);
        // Traverse the scene to find the head bone
        // We look for a bone with "Head" in its name
        scene.traverse((child) => {
            if (child.isBone) {
                // console.log("Found bone:", child.name);
                if (child.name.toLowerCase().includes('head')) {
                    // If we haven't found a head yet, or if this one seems more specific (e.g. 'Head' vs 'HeadTop_End')
                    if (!headBoneRef.current) {
                        console.log("Mascot: Found Head bone", child.name);
                        headBoneRef.current = child
                    }
                }
            }
        })

        // If no head bone found, try Neck
        if (!headBoneRef.current) {
            scene.traverse((child) => {
                if (child.isBone && child.name.toLowerCase().includes('neck')) {
                    if (!headBoneRef.current) {
                        console.log("Mascot: Found Neck bone (fallback)", child.name);
                        headBoneRef.current = child
                    }
                }
            })
        }

        if (!headBoneRef.current) {
            console.warn("Mascot: Could not find Head or Neck bone!");
        }

        // Play animations if available (e.g. Idle)
        if (actions) {
            const actionNames = Object.keys(actions)
            if (actionNames.length > 0) {
                console.log("Mascot: Playing animation", actionNames[0]);
                // Play the first animation found
                actions[actionNames[0]].reset().fadeIn(0.5).play()
            }
        }
    }, [scene, actions])

    useFrame((state) => {
        if (headBoneRef.current) {
            // Mapping mouse position to rotation
            // state.mouse.x is -1 to 1 (left to right)
            // state.mouse.y is -1 to 1 (bottom to top)

            // Rotation Targets
            // Y-axis rotation (Yaw): Look left/right. 
            // X-axis rotation (Pitch): Look up/down.
            // We clamp/limit the rotation to avoid unnatural twisting (e.g. 30 degrees = ~0.5 rad)

            const targetY = state.mouse.x * 0.5
            const targetX = -state.mouse.y * 0.5

            // Smooth interpolation (Lerp)
            headBoneRef.current.rotation.y = THREE.MathUtils.lerp(headBoneRef.current.rotation.y, targetY, 0.1)
            headBoneRef.current.rotation.x = THREE.MathUtils.lerp(headBoneRef.current.rotation.x, targetX, 0.1)
        }
    })

    return (
        <group ref={group} {...props} dispose={null}>
            <primitive object={scene} />
        </group>
    )
}

useGLTF.preload('/anime-rig/source/rigged.glb')
