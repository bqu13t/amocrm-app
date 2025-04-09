import { useState } from 'react';
import Modal from './components/Modal';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className='App'>
      <h1>Модалка в React</h1>
      <button onClick={() => setIsModalOpen(true)}>Открыть модалку</button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>Привет, это модалка!</h2>
        <p>Нажмите ESC, кликните вне окна или на крестик, чтобы закрыть.</p>
      </Modal>
    </div>
  );
}

export default App;
