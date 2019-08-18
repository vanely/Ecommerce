import React from 'react';

import MenuItem from '../../components/MenuItems/MenuItem.component';
import {homePageDirs} from "../../Data/HomePageDirectories.data";

import './Directory.styles.scss';

export default class Directory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: homePageDirs,
    };
  }

  render() {
    const {sections} = this.state;
    return (
      <div className="directory-menu">
        {
          // destructor within arrow function param within map.
          // id, title, imageUrl, size, linkUrl, history, match
          sections.map(({id, ...otherSectionProps}) => {
            return (
              <MenuItem
                key={id}
                {...otherSectionProps}
              />
            );
          })
        }
      </div>
    );
  }
}