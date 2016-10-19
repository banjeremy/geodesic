'use strict';

(function() {
  const container = document.getElementById('container');
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(500, 500);
  container.appendChild(renderer.domElement);
  const camera = new THREE.PerspectiveCamera(80, 1, 0.1, 10000);
  camera.position.z = 200;
  const scene = new THREE.Scene();
  scene.add(camera);

  const material = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    wireframe: true,
  });

  const geometry = new THREE.Mesh(new THREE.IcosahedronGeometry(125,1), material);
  scene.add(geometry);

  function update() {
    geometry.rotation.y += 0.005;
  }

  function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
    update();
  }

  render();
})();
