import { NavBar } from './components/NavBar/NavBar.js';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.js';

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer textoBienvenida = "Estamos trabajando en agregar nuevos productos a nuestra tienda virtual!" />
    </div>
  );
}

export default App;
