import { useState } from 'react';
import './App.css';
import CartList from './components/CartList';
import ProductList from './components/ProductList';

function App() {

  const [products, setProducts] = useState([{ product: 'computer', price: 5000 }, { product: 'paper', price: 10 }, { product: 'pen', price: 100 }]);
  const [cart, setCart] = useState([]);

  const addProductToCart = (index) => {
    setCart([...cart, products[index]])
  }

  const deletePost = (i) => {
    let newArr = cart.filter((val, index) => (i != index));
    setCart([...newArr]);
  }

  const [showPage, setShowPage] = useState(false);

  const show = () => {
    if (showPage) {
      return <CartList cart={cart} setShowPage={setShowPage} deletePost={deletePost}/>
    }
    else {
      return <ProductList products={products} addProductToCart={addProductToCart} setShowPage={setShowPage}/>
    }
  }

  return (
    <div className="App">
      {show()}
    </div>
  );
}

export default App;
