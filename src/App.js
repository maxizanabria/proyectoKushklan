import './App.css';
import { Barra } from './components/Barra';
import { Usuario, } from './components/Usuario';
function App() {


  return (
    <div className='App'>
      <Barra/>
      <hr></hr>
      <Usuario />
      <hr></hr>      
      <Usuario />
      <hr></hr>
      <Usuario />
    </div>
  );
}


export default App;
