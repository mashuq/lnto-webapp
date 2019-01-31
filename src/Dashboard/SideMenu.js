import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Menu, Label } from 'semantic-ui-react';

class SideMenu extends React.Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  
    render() {
        const { activeItem } = this.state
        return (  
            <Menu vertical>
            <Menu.Item name='inbox' active={activeItem === 'inbox'} onClick={this.handleItemClick}>
              <Label color='teal'>1</Label>
              Inbox
            </Menu.Item>
    
            <Menu.Item name='spam' active={activeItem === 'spam'} onClick={this.handleItemClick}>
              <Label>51</Label>
              Spam
            </Menu.Item>
    
            <Menu.Item name='updates' active={activeItem === 'updates'} onClick={this.handleItemClick}>
              <Label>1</Label>
              Updates
            </Menu.Item>
          </Menu>   
      );
    }
  }
  
  
  
export default SideMenu;