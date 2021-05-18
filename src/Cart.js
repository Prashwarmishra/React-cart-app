import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component{

    constructor(){
        super();

        this.state = {
            products: [
                {
                    price: '20,000',
                    title: 'Mobile Phone',
                    qty: 1,
                    id: 1,
                },
                {
                    price: '2565',
                    title: 'Watch',
                    qty: 2,
                    id: 2,
                },
                {
                    price: '50,000',
                    title: 'Laptop',
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
    
    render(){

        let {products} = this.state;

        return (
            <div className='cart'>
                <h1>Cart</h1>
                {products.map((product) => {
                    return <CartItem  
                        product = {product} 
                        key = {product.id} 
                        onQuantityIncrease = {this.handleIncreasedQuantity}
                        onQuantityDecrease = {this.handleDecreasedQuantity}
                        onItemDelete = {this.handleDeletedItem}
                    />
                })}
            </div>
        )
    }
}

export default Cart;