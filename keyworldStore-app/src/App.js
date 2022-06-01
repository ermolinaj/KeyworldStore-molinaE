import { NavBar } from './components/NavBar/NavBar.js';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.js';
import { ItemCount } from './components/ItemCount/ItemCount.js';



function App() {
  return (
    <div>

      <NavBar/>
      <ItemListContainer textoBienvenida = "Proximamente nuestros productos estarán disponibles aqui" />
      <ItemCount itemStock = { 5 } />

    </div>
  );
}

export default App;
