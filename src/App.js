import './App.css';
import Titulo from './componentes/titulo';
import AparatosElectricos from './componentes/aparatos-electricos';
import Iluminacion from './componentes/iluminacion';
import Herramientas from './componentes/herramientas-manuales';
import Herramientaselectricas from './componentes/herramientas-electricas';
import Alambre from './componentes/alambre';




function App() {
  return (
    <div className="App">
      <Titulo />
      <div className='contenedor'>
    <AparatosElectricos />
    <Iluminacion />
    <Herramientas />
    <Herramientaselectricas />
    <Alambre />
    </div>
</div>
  );
}

export default App;
