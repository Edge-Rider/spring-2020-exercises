import React, { Component } from 'react'
import { capitalizeFirstLetter } from 'utils/strings'
import './OptionsDropDown.scss'

import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

export default class OptionsDropDown extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false
        };
    }

    toggle = () => {
      this.setState(prevState => ({
        dropdownOpen: !prevState.dropdownOpen
      }));
    }

    handleDropDownClick = (e) => {
      console.log(e.target.name)
      console.log(e.target.id)
      this.props.setSearchLocation(e.target.name, e.target.id)
    }

    render() {
      const { items, position, currentSelection } = this.props;

      const dropDownItems = Object.keys(items).map(key => {
          return (
              <DropdownItem
                key={`${position}-${items[key]}`}
                name={key}
                id={position}
                onClick={this.handleDropDownClick}
              >
                {items[key]}
              </DropdownItem>
          )
      })
      return (
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret className='options-dropdown'>
              {currentSelection ? items[currentSelection] : capitalizeFirstLetter(position)}
            </DropdownToggle>
            <DropdownMenu>
              {dropDownItems}
            </DropdownMenu>
        </Dropdown>
      )
    }
}