import React from 'react';

function Shop(props) {
    return (
        <div>
            <h1>Shop</h1>
            <h3>Collection</h3>
            <div>
                <button onClick={() => {props.history.push('/')}}>Home Page</button>
            </div>
        </div>
    );
}

export default Shop;