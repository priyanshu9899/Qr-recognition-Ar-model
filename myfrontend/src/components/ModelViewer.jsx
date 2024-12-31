import React, { useEffect, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { AnimationMixer } from 'three';

const ModelGLTFViewer = ({ modelURL }) => {
  const [gltf, setGltf] = useState(null);
  const [mixer, setMixer] = useState(null);

  useEffect(() => {
    if (modelURL) {
      const loader = new GLTFLoader();
      loader.load(
        modelURL,
        (loadedGltf) => {
          console.log('Model loaded:', loadedGltf);
          setGltf(loadedGltf);

          if (loadedGltf.animations.length > 0) {
            const animationMixer = new AnimationMixer(loadedGltf.scene);
            loadedGltf.animations.forEach((clip) => {
              animationMixer.clipAction(clip).play();
            });
            setMixer(animationMixer);
          }
        },
        undefined,
        (error) => {
          console.error('Error loading GLTF model:', error);
        }
      );
    }
  }, [modelURL]);

  useFrame((state, delta) => {
    if (mixer) {
      mixer.update(delta); 
    }
  });

  if (!gltf) return null;

  return (
    <primitive
      object={gltf.scene}
      scale={1} 
    />
  );
};

const ARButton = ({ modelURL }) => {
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  if (!isMobile) return null;

  const handleARClick = () => {
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      window.location.href = modelURL; 
    } else if (/Android/i.test(navigator.userAgent)) {
      window.location.href = `${modelURL}#model-viewer-ar`; 
    }
  };

  return (
    <button
      onClick={handleARClick}
      className="fixed bottom-4 right-4 bg-blue-500 text-white py-2 px-4 rounded shadow-lg "
    >
      View in AR
    </button>
  );
};

const ModelViewer = () => {
  const [modelURL, setModelURL] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchModelData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/model/1/');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        const baseURL = 'http://127.0.0.1:8000';
        setModelURL(`${baseURL}${data.gltf_file}`);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchModelData();
  }, []);

  if (error) {
    return <p>Error fetching model data: {error}</p>;
  }

  return (
    <div className="h-[100vh] w-[100%] bg-zinc-800 relative">
      <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Suspense fallback={<LoadingScreen />}>
          {modelURL ? <ModelGLTFViewer modelURL={modelURL} /> : null}
        </Suspense>
        <OrbitControls />
      </Canvas>
      {modelURL && <ARButton modelURL={modelURL} />}
    </div>
  );
};

const LoadingScreen = () => {
  return (
    <mesh>
      <textGeometry args={['Loading...', { size: 1, height: 0.2 }]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

export default ModelViewer;
