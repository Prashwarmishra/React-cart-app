import React from 'react';

class ListItem extends React.Component {
    render(){
        return (
            <div className = 'cart-item'>
                <div className="left-block">
                    <img style = {styles.image}/>
                </div>
                <div className="right-block">
                    <div style = { {fontSize: 25} }>Phone</div>
                    <div style = { {color: 'grey'} }>Rs: 20000</div>
                    <div style = { {color: 'grey'} }>Qty: 1</div>
                    <div>
                        {/* buttons */}
                    </div>
                </div>
            </div>
        );
    }
}

let styles = {
    image: {
        width: 100,
        height: 100,
        borderRadius: 4,
    }
}

export default ListItem;