import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      products: [
        {
            price: 20000,
            title: 'Mobile Phone',
            qty: 1,
            img: 'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
            id: 1,
        },
        {
            price: 4000,
            title: 'Watch',
            img: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=759&q=80',
            qty: 1,
            id: 2,
        },
        {
            price: 50000,
            title: 'Laptop',
            img: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=707&q=80',
            qty: 1,
            id: 3,
        }
      ]
    }
  }

  handleIncreasedQuantity = (product) => {
    const {products} = this.state;
    const productIndex = products.indexOf(product);

    products[productIndex].qty += 1;

    this.setState({
        products
    })
  }

  handleDecreasedQuantity = (product) => {
      
    const {products} = this.state;
    const productIndex = products.indexOf(product);
    
    if(products[productIndex].qty === 0){
        return;
    }else{
        products[productIndex].qty -= 1;
        this.setState({
            products
        })
    }
  }

  handleDeletedItem = (id) => {
    const {products} = this.state;
    const items = products.filter((product) => product.id !== id);

    this.setState({
        products: items,
    })
  }

  getCartCount = () => {
    let count = 0;
    const {products} = this.state;

    products.forEach((product) => {
      count += product.qty;
    });

    return count;
  }

  getTotal = () => {
    const {products} = this.state;
    let total = 0;

    products.forEach((product) => {
      total += (product.qty) * (product.price);
    });

    return total;
  }

  render(){
    
    return (
      <div className = 'App'>
        <Navbar count = {this.getCartCount()}/>
        <Cart 
          products = {this.state.products}
          onQuantityIncrease = {this.handleIncreasedQuantity}
          onQuantityDecrease = {this.handleDecreasedQuantity}
          onItemDelete = {this.handleDeletedItem}
        />

        <div > 
          <h2 style = {{padding: '0 2rem'}}>
            Total: Rs {this.getTotal()}
          </h2>
        </div>
      </div>   
    );
  }
  
}

export default App;
