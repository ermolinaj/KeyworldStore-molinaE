// import './styles.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.js';
import { NavBar } from './components/NavBar/NavBar.js';

function App() {
  return (
    <div>

      <NavBar/>
      <ItemListContainer textoBienvenida = "Proximamente nuestros productos estarán disponibles aqui" />

    </div>
  );
}

export default App;
