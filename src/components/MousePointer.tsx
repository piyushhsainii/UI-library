import '@babel/polyfill';
import * as THREE from "three"
import * as RAPIER from "@dimforge/rapier3d"



const MousePointer = (rapier: RAPIER.World) => {
    const size = 0.40
    const geo = new THREE.IcosahedronGeometry(size, 12)
    const mat = new THREE.MeshStandardMaterial({
        color: '#ffffff',
        transparent: true,
        opacity: 0
    })
    const light = new THREE.PointLight('#ffffff', 2)
    const Mouse = new THREE.Mesh(geo, mat)
    Mouse.add(light)

    // RAPIER RIGID BODY
    let bodyDesc = RAPIER.RigidBodyDesc.kinematicPositionBased().setTranslation(0, 0, 0)
    let mousePointer = rapier.createRigidBody(bodyDesc)

    // Add Collider and define its type - 
    let colliderType = RAPIER.ColliderDesc.ball(size)
    let collider = rapier.createCollider(colliderType, mousePointer)

    const updateMousePosition = (mousePos: any) => {
        const scaledX = mousePos.x * 12 // Scale factor for X
        const scaledY = mousePos.y * 8; // Scale factor for Y

        // ALIGNS Position of both shapes - 
        collider.setTranslation({ x: scaledX, y: scaledY, z: 0.2 })
        const CoOrdinates = collider.translation()
        Mouse.position.set(CoOrdinates.x, CoOrdinates.y, 0.2)
    }

    return { Mouse, updateMousePosition }
}


export { MousePointer } 