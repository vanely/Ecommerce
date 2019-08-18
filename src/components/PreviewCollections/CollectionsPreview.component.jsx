import React from 'react';

import CollectionItem from "../CollectionItem/CollectionItem.component";

import './CollectionsPreview.styles.scss';

const CollectionsPreview = ({title, items}) => {
  return (
    <div className="collection-preview">
      <h3 className="title">{title.toUpperCase()}</h3>
      <div className="preview">
        {
          items.filter((item, index) => index < 4)
            .map(({id, ...otherItemProps}) => {
              return (
                <div className="preview-item">
                  <CollectionItem
                    key={id}
                    {...otherItemProps}
                  />
                </div>
              );
            })
        }
      </div>
    </div>
  );
};

export default CollectionsPreview;