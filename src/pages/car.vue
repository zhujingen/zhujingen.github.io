<template>
    <div>
      <canvas ref="canvasRef"></canvas>
    </div>
  </template>
  
  <script setup>
  import * as THREE from "three";
  import { onMounted, ref } from "vue";
//   import earth from "../assets/Earth.png";
  // import chan1 from '../../public/chan1.gltf';
  // import chan1 from '../assets/chan1.gltf';
  // 相机控件
  import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
  import { GUI } from "three/examples/jsm/libs/lil-gui.module.min.js";
  import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
  const canvasRef = ref(null);
  onMounted(() => {
    const canvas = canvasRef.value;
  
    const width = window.innerWidth;
    const height = window.innerHeight;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 1, 3000);
    camera.position.set(-270, 237, 281);
    // 渲染器
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: false
    });
    const gui = new GUI();
    gui.domElement.style.right = '0px';
    gui.domElement.style.width = '300px'
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    // renderer.outputEncoding = THREE.sRGBEncoding;
    const controls = new OrbitControls(camera, canvas);
    //辅助观察坐标
    const axesHelper = new THREE.AxesHelper(100);
    // scene.add(axesHelper);
  
    const textureCube = new THREE.CubeTextureLoader().setPath('../../public/环境贴图/环境贴图1/').load(['px.jpg','nx.jpg','py.jpg','ny.jpg','pz.jpg','nz.jpg'])

    const model = new THREE.Group();
    const loader = new GLTFLoader();
    let gltfScene = "";
    loader.load("../../public/carpbr.glb", function (gltf) {
      gltfScene = gltf.scene;
        const meshMat = gltfScene.getObjectByName('外壳01');
        const meshMat1 = gltfScene.getObjectByName('玻璃01');
        meshMat.material.envMap=textureCube
        meshMat1.material.envMap=textureCube
    const materialFloder = gui.addFolder('车身材质')
    materialFloder.addColor(meshMat.material,'color').name('颜色').onChange((va)=>{
        meshMat.material.color.set(va)
    })
    materialFloder.add(meshMat.material, 'metalness').min(0).max(1).step(0.01).name('金属度')
    materialFloder.add(meshMat.material, 'roughness').min(0).max(1).step(0.01).name('粗糙度')
    materialFloder.add(meshMat.material, 'envMapIntensity').min(0).max(10).step(0.01).name('环境贴图光')
    materialFloder.add(meshMat.material, 'envMapIntensity').min(0).max(1).step(0.01).name('车漆')
    materialFloder.add(meshMat.material, 'clearcoatRoughness').min(0).max(1).step(0.01).name('车漆粗糙度')
    const materialFloder1 = gui.addFolder('玻璃')
    // materialFloder1.add(meshMat1.material, 'metalness').min(0).max(1).step(0.01).name('金属度')
    // materialFloder1.add(meshMat1.material, 'roughness').min(0).max(1).step(0.01).name('粗糙度')
    // materialFloder1.add(meshMat1.material, 'transmission').min(0).max(1).step(0.01).name('透光率')
    // materialFloder1.add(meshMat1.material, 'ior').min(0).max(2.333).step(0.01).name('折射率')
    materialFloder1.add(meshMat1.material, 'envMapIntensity').min(0).max(10).step(0.01).name('环境贴图光')

      model.add(gltfScene);
    });
  
    scene.add(model);
  
    const ambientLight = new THREE.AmbientLight(0xffffff, 3); // 创建环境光
    scene.add(ambientLight); // 将环境光添加到场景
    
    const ambientLightFloder = gui.addFolder('环境光')
    ambientLightFloder.add(ambientLight, 'intensity').min(0).max(10).step(0.01).name('强度');
    ambientLightFloder.addColor(ambientLight,'color').name('颜色').onChange((va)=>{
        ambientLight.color.set(va)
    })

    const dirLight = new THREE.DirectionalLight(0xffffff,3); // 创建平行光
    scene.add(dirLight);
    const dirLightFloder = gui.addFolder('平行光')
    dirLightFloder.add(dirLight, 'intensity').min(0).max(10).step(0.01).name('强度');
    dirLightFloder.addColor(dirLight,'color').name('颜色').onChange((va)=>{
        dirLight.color.set(va)
    })


    //   renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setSize(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio);

    const animate = function () {
      model.rotateY(0.001)
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
 
    };
    animate();
  });
  </script>
  
  <style lang="scss" >
  body{
    margin:0;
    overflow:hidden;
  }
canvas{
    width:100vw;
    height:100vh;
    overflow:hidden;
}
</style>
  