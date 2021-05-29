import Nav from './components/Nav'
import Tarjeta from './components/Tarjeta'

import './App.css';
import productsInfo from './productsinfo'

function App() {

  // const url = "https://placeimg.com/300/100";
  // const nombre = "Nombre 1111";
  // const precio = "9,000";

  return (
    <div>
      <Nav/>
      <main className="container">
        {/* <Tarjeta url={url} nombre={nombre} precio={precio} />
        <Tarjeta url={url} nombre={nombre} precio={precio}> </Tarjeta> */}
        {productsInfo.map((product,index) => (
          <Tarjeta 
          // para el warning=> key unico
            key={product.nombre + index}
            img={product.img}
            nombre={product.nombre}
            descripcion={product.descripcion}
            precio={product.precio}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
