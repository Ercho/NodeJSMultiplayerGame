function Skybox() {
    var tab = [];
    var wallG = new THREE.CubeGeometry(10000, 10000, 10000, 1, 1, 1);
    tab.push(new THREE.MeshBasicMaterial({
        map: THREE.ImageUtils.loadTexture('./img/sandtrap_rt.png'), side: THREE.DoubleSide
    }));
    tab.push(new THREE.MeshBasicMaterial({
        map: THREE.ImageUtils.loadTexture('./img/sandtrap_lf.png'), side: THREE.DoubleSide
    }));
    tab.push(new THREE.MeshBasicMaterial({
        map: THREE.ImageUtils.loadTexture('./img/sandtrap_up.png'), side: THREE.DoubleSide
    }));
    tab.push(new THREE.MeshBasicMaterial({
        map: THREE.ImageUtils.loadTexture('./img/sandtrap_dn.png'), side: THREE.DoubleSide
    }));
    tab.push(new THREE.MeshBasicMaterial({
        map: THREE.ImageUtils.loadTexture('./img/sandtrap_bk.png'), side: THREE.DoubleSide
    }));
    tab.push(new THREE.MeshBasicMaterial({
        map: THREE.ImageUtils.loadTexture('./img/sandtrap_ft.png'), side: THREE.DoubleSide
    }));
    var mat = new THREE.MeshFaceMaterial(tab);
    var mesh = new THREE.Mesh(wallG, mat);
    var clone = mesh.clone();
    return clone;
}