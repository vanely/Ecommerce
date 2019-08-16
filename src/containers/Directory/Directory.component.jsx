import React from 'react';

import MenuItem from '../../components/MenuItems/MenuItem.component';

import './Directory.styles.scss';

export default class Directory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sections: [
                {
                    id: 1,
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    linkUrl: 'hats'
                },
                {
                    id: 2,
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    linkUrl: ''
                },
                {
                    id: 3,
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    linkUrl: ''
                },
                {
                    id: 4,
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    linkUrl: ''
                },
                {
                    id: 5,
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    linkUrl: ''
                }
            ],
        };
    }

    render() {
        const { sections } = this.state;
        return (
            <div className="directory-menu">
                {
                    // destructor within arrow function param within map.
                    sections.map(({id,  ...otherSectionProps}) => {
                        return (
                            <MenuItem
                                key={ id }
                                { ...otherSectionProps }
                            />
                        );                     
                    })
                }
            </div>
        );
    }
}