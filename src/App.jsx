import Navigation from "./components/NavBar/navigation";
import Footer from "./components/footer/footer";
import Mediosdepago from "./components/medioDePago/mediosdepago";
import ProductList from "./components/productos/productos";
import { useState } from "react";



function App() {
  const [allProducts, setAllProducts] = useState([]);
	const [total, setTotal] = useState(0);
	const [countProducts, setCountProducts] = useState(0);

  return (
    <div className="App">
      <Navigation/>
      <>
			<ProductList
				allProducts={allProducts}
				setAllProducts={setAllProducts}
				total={total}
				setTotal={setTotal}
				countProducts={countProducts}
				setCountProducts={setCountProducts}
			/>
		</>

	  <Mediosdepago/>
      <Footer/>
    </div>
  );
}

export default App;
