import { data } from '../../assets/data.js';
import React from 'react';
import "../productos/productos.css"
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";




const ProductList = ({
	allProducts,
	setAllProducts,
	countProducts,
	setCountProducts,
	total,
	setTotal,
}) => {
	const onAddProduct = product => {
		if (allProducts.find(item => item.id === product.id)) {
			const products = allProducts.map(item =>
				item.id === product.id
					? { ...item, quantity: item.quantity + 1 }
					: item
			);
			setTotal(total + product.salePrice * product.quantity);
			setCountProducts(countProducts + product.quantity);
			return setAllProducts([...products]);
		}

		setTotal(total + product.salePrice * product.quantity);
		setCountProducts(countProducts + product.quantity);
		setAllProducts([...allProducts, product]);
	};

	return (
		<div className="container_global">
			<div className='container_select'><h1>Condimentum consectetur </h1>
			<label for="games"></label>
			<select name="game">
  				<option value="">Select a Game</option>
 				<option value="">Call of Duty Modern Warfare</option>
  				<option value="">Battlefield</option>
  				<option value="">Arma 3</option>
  				<option value="">Medal of Honor</option>
			</select>

				<label for="site-search"></label>
					<input type="search" id="site-search" className="search" placeholder='Search' />
					<button className='Btn-Buscar'><CiSearch/></button>
					<select name="">
 							 <option value="">Price</option>
 							 <option value="">Mayor Price</option>
 							 <option value="">Menor Price</option>
					</select>
					<select name="itemType">
  							<option value="">Item</option>
  							<option value="">Sword</option>
  							<option value="">Wings</option>
  							<option value="">Coin</option>
  							<option value="">Shield</option>
					</select>

					</div>




		<div className='container_card'>
			<div className='conteiner_select'>
			<h2 className='Description'>Showing 20 - from 125</h2>
			<label for="select"></label>
				<select  className='seleccCard'  name="games" id="game-select">
  					<option value=""><p>short by</p><span>Featured</span></option>
  							<option value="dog">Dog</option>
  							<option value="cat">Cat</option>
  							<option value="hamster">Hamster</option>
  							<option value="parrot">Parrot</option>
							<option value="spider">Spider</option>
  							<option value="goldfish">Goldfish</option>
				</select>
				</div>
		<div className='container-items'>
			{data.map(product => (
				<div className='item' key={product.id}>
					<div className='pruebaCantidad'>
					<div className="status">{product.ofert}</div>
					<div className="inputNumero"><input type="number" value={1}/></div>
				</div>
					<div className="buttonStock">{product.status}</div>
					<figure>
						<img src={product.img} alt={product.nameProduct} />
					</figure>
					<div className='info-product'>
					<h2>{product.title}</h2>
						<div className='precios'>
							<button className='salePrice'>${product.salePrice}</button>
							<button className='originalPrice'>${product.originalPrice}</button>
						</div>
						<p className='Description'>{product.description}</p>
						
						<div className="buttonCard">
							<button className="detalleProducto">DETAILS</button>
							<button className="agregarCarrito" onClick={() => onAddProduct(product)}>
								ADD<CiShoppingCart />
							</button>
						</div>
						
					</div>
				</div>
			))}
		</div>


				<div className="container_pagination">
 				 <ul className="pagination">
 				   <li>
 				     <a href="#">Prev</a>
 				   </li>
  				  <li>
 				     <a className="active" href="#">1</a>
				    </li>
  				  <li>
				      <a href="#">2</a>
				    </li>
 				   <li>
				 				     <a href="#">3</a>
 				   </li>
  					  <li>
     					 <a href="#">4</a>
  					  </li>
   					 <li>
  					    <a href="#">5</a>
  					  </li>
   					 <li>
  					    <a href="#">Next</a>
 					   </li>
 					 </ul>
</div>

		</div>

		</div>
	);
};

export default ProductList;
