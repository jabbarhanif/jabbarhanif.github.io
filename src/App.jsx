import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function SpinningBox(props) {
  return (
    <mesh {...props} rotation={[0.5, 0.8, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial />
    </mesh>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <header className="max-w-5xl mx-auto px-6 py-8">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
          Hanif Jabbar Ilmi Sumitra— <span className="text-indigo-400">Creative Software Developer</span>
        </h1>
        <p className="mt-3 text-gray-300">
          I build web, mobile, and interactive experiences.
        </p>
      </header>

      <main className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-xl font-semibold mb-2">About</h2>
            <p className="text-gray-300">
              Fokus di web, mobile, game, dan 3D interaction. Suka eksperimen UI modern & realtime.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden ring-1 ring-white/10">
            <Canvas style={{ height: 360 }}>
              <ambientLight intensity={0.6} />
              <directionalLight position={[3, 3, 3]} intensity={1} />
              <SpinningBox position={[0, 0, 0]} />
              <OrbitControls />
            </Canvas>
          </div>
        </div>
      </main>

      <footer className="max-w-5xl mx-auto px-6 py-16 text-sm text-gray-400">
        © {new Date().getFullYear()} Hanif Jabbar Ilmi
      </footer>
    </div>
  )
}
