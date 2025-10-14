import { useState } from 'react'
import HeroSection from './components/HeroSection'
import Modal from './components/Modal'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <HeroSection onRequestAccess={() => setIsModalOpen(true)} />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

export default App

