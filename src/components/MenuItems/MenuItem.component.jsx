import React from 'react';

import './MenuItem.styles.scss';

const MenuItem = (props) => {
    return (
        <div className={`${props.size} menu-item`}>
            <div className="background-image" style={{ backgroundImage: `url(${props.image})` }}/>
            <div className="content">
                <h1 className="title">{props.title.toUpperCase()}</h1>
                <span className="sub-title">Shop Now</span>
            </div>
        </div>
    );
};

export default MenuItem;
