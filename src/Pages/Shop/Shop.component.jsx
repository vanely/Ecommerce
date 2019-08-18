import React from 'react';

import CollectionsPreview from "../../components/PreviewCollections/CollectionsPreview.component";
import {shopcollectionsData} from "../../Data/Shopcollections.data";

import './Shop.styles.scss';

export default class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: shopcollectionsData,
    };
  }

  render() {
    const {collections} = this.state;
    return (
      <div>
        <h1>Shop</h1>
        {
          collections.map(({id, ...otherCollectionProps}) => {
            return (
              <CollectionsPreview
                key={id}
                {...otherCollectionProps}
              />
            )
          })
        }
      </div>
    );
  }
}
