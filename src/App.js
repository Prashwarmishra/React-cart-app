import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from 'firebase';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      products: [],
      loading: true,
    }
  }

  componentDidMount(){
    firebase
      .firestore()
      .collection('products')
      .onSnapshot((snapshot) => {
        const items = snapshot.docs.map((doc) => {
          let data = doc.data();
          data['id'] = doc.id;
          return data;
        });

        this.setState({
          products: items,
          loading: false
        })
      });
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
    const {products, loading} = this.state;
    return (
      <div className = 'App'>
        <Navbar count = {this.getCartCount()}/>
        <Cart 
          products = {products}
          onQuantityIncrease = {this.handleIncreasedQuantity}
          onQuantityDecrease = {this.handleDecreasedQuantity}
          onItemDelete = {this.handleDeletedItem}
        />

        <div> 
          {
            loading ? <h1>Loading...</h1> : 
            <h2 style = {{padding: '0 2rem'}}>
              Total: Rs {this.getTotal()}
            </h2>
          }
        </div>
      </div>   
    );
  }
  
}

export default App;
