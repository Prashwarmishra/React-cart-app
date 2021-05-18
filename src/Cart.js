import React from 'react';
import CartItem from './CartItem';

const Cart = (props) => {
    const {products} = props;

    return (
        <div className='cart'>
            
            {products.map((product) => {
                return <CartItem  
                    product = {product} 
                    key = {product.id} 
                    onQuantityIncrease = {props.onQuantityIncrease}
                    onQuantityDecrease = {props.onQuantityDecrease}
                    onItemDelete = {props.onItemDelete}
                />
            })}
        </div>
    )
}

export default Cart;