import React from 'react';
//allows us to use the location
import {withRouter} from 'react-router-dom';

import './MenuItem.styles.scss';

const MenuItem = ({title, imageUrl, size, linkUrl, history, match}) => {
  return (
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.path}${linkUrl}`)}>
      <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}}/>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="sub-title">Shop Now</span>
      </div>
    </div>
  );
};

// allows us to pass match, location, and history props
// to the component wrapped in withRouter whenever it renders.
export default withRouter(MenuItem);
