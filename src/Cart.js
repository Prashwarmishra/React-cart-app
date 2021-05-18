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
    

    render(){

        let {products} = this.state;

        return (
            <div className='cart'>
                <h1>Cart</h1>
                {products.map((product) => {
                    return <CartItem  product = {product} key = {product.id} />
                })}
            </div>
        )
    }
}

export default Cart;