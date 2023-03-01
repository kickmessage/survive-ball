import * as THREE from "three"

export function shallowCopy(group) {
    let shallowCopyGroup = new THREE.Group();
    shallowCopyGroup.copy(group)
    return shallowCopyGroup;
}

