import React from 'react';
import './App.css';

class CartItem extends React.Component {

    constructor(){
        super();
        this.state = {
            price: '20,000',
            title: 'Mobile Phone',
            qty: 1,
        }
        // this.increaseQuantity = this.increaseQuantity.bind(this);
        // this.testing();
    }

    // testing(){
    //     let promise = new Promise((resolve, reject) => {
    //         setTimeout(()=> {
    //             resolve('done');
    //         }, 5000);
    //     });

    //     promise.then(() => {
    //         this.setState({
    //             qty: this.state.qty + 10,
    //         });
    //         // this.setState({
    //         //     qty: this.state.qty + 10,
    //         // });
    //         // this.setState({
    //         //     qty: this.state.qty + 20,
    //         // });

    //         console.log(this.state);
    //     });
    // }

    increaseQuantity = () => {
        // console.log(this.state.qty += 1);

        // this.setState({
        //     qty: this.state.qty+1,
        // });

        this.setState((prevQty) => {
            return {
                qty: prevQty.qty+1,
            }
        }, () => {
            console.log(this.state);
        });

        
    }

    decreaseQuantity = () => {
        const {qty} = this.state;
        if(qty <= 0){
            return;
        }
        this.setState((prevState) => {
            return {
                qty: prevState.qty-1,
            }
        });
    }


    render(){
        // console.log('render');
        const {price, title, qty} = this.state;

        return (
            <div className = 'cart-item'>
                <div className="left-block">
                    <img style = {styles.image} />
                </div>
                <div className="right-block">
                    <div style = { {fontSize: 25} }>{title}</div>
                    <div style = { {color: '#777'} }>Rs: {price}</div>
                    <div style = { {color: '#777'} }>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        <img 
                            alt="increase" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/svg/992/992651.svg"
                            // onClick = {this.increaseQuantity.bind(this)}
                            onClick = {this.increaseQuantity} 
                        />
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/svg/1665/1665612.svg" 
                            onClick = {this.decreaseQuantity}
                        />
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/svg/1214/1214428.svg" 
                        />
                    </div>
                </div>
            </div>
        );
    }
}

let styles = {
    image: {
        height: 125,
        width: 125,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;