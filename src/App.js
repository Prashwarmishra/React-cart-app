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
    this.db = firebase.firestore();
  }

  componentDidMount(){
    this.db
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

  addProduct = () => {
    this.db
      .collection('products')
      .add({
        qty: 1,
        img: 'https://images.unsplash.com/photo-1526045431048-f857369baa09?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        title: 'watch',
        price: 6000
      })
      .then((dataRef) => {
        console.log(dataRef);
      });
  }

  render(){
    const {products, loading} = this.state;
    return (
      <div className = 'App'>
        <Navbar count = {this.getCartCount()}/>
        <button onClick = {this.addProduct}>Add Product</button>
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
