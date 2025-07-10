import Menu from './components/Menu';
import './reset.css';
import './App.css';


function App() {
  return (
    <div>
      <header><img src="/logo.jpg" alt="Logo do Restaurante" style={{ height: '90px' }} /></header>
      <Menu />
    </div>
  );
}

export default App;