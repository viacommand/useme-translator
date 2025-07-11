s// 3D background animation using Three.js
// Make sure to include this script after Three.js is loaded

// Create scene, camera, renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('bg3d'), alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000, 0); // transparent

// Add a 3D object (torus)
const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
const material = new THREE.MeshStandardMaterial({ color: 0x00f7ff, wireframe: true });
const torusKnot = new THREE.Mesh(geometry, material);
scene.add(torusKnot);

// Lighting
const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(20, 20, 20);
scene.add(pointLight);

camera.position.z = 40;

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    torusKnot.rotation.x += 0.01;
    torusKnot.rotation.y += 0.013;
    renderer.render(scene, camera);
}
animate();

// Responsive resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
