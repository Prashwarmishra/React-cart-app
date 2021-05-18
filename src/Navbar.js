import React from 'react';

let Navbar = (props) => {
    return (
        <div style = {styles.nav}>
            <div style = {styles.cartIconContainer}>
                <img src="https://image.flaticon.com/icons/svg/2121/2121815.svg" alt="cart-icon" style = {styles.cartIcon} />
                <span style = {styles.cartCount}>{props.count}</span>
            </div>
        </div>
    )    
}

const styles = {
    cartIcon: {
      height: 25,
      marginRight: 38
    },
    nav: {
      height: 50,
      background: '#4267b2',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    cartIconContainer: {
      position: 'relative'
    },
    cartCount: {
      background: 'yellow',
      borderRadius: '50%',
      padding: '1px 6px',
      position: 'absolute',
      right: 20,
      top: -6
    }
  };

export default Navbar;