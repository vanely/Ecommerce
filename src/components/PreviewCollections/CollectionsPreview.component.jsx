import React from 'react';

import './CollectionsPreview.styles.scss';

const CollectionsPreview = ({title, items}) => {
    return (
        <div className="collection-preview">
            <h1 className="title">{ title.toUpperCase() }</h1>
            <div className="preview">
                {
                    items.filter((item, index) => index < 4)
                    .map(( item ) => {
                        return (
                            <div key={ item.id }>
                                { item.name }
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default CollectionsPreview;