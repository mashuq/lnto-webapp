import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Menu } from 'semantic-ui-react';

class TopMenu extends React.Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  
    render() {
        const { activeItem } = this.state
        return (  
            <Menu>
                <Menu.Item name='editorials'
                    active={activeItem === 'editorials'}
                    onClick={this.handleItemClick}
                    >
                    Editorials
                </Menu.Item>

                <Menu.Item name='reviews' active={activeItem === 'reviews'} onClick={this.handleItemClick}>
                    Reviews
                </Menu.Item>

                <Menu.Item
                    name='upcomingEvents'
                    active={activeItem === 'upcomingEvents'}
                    onClick={this.handleItemClick}
                    >
                    Upcoming Events
                </Menu.Item>
            </Menu>        
      );
    }
  }
  
  
  
export default TopMenu;