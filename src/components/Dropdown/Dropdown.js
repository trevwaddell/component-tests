import React, { Component } from "react";
import DropdownItem from "./DropdownItem";

class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.selectedItems = React.Children.toArray(props.children).reduce(
      (selected, child, index) => {
        if (child.props.selected) selected.push(index);
        return selected;
      },
      []
    );

    this.updateSelected = this.updateSelected.bind(this);

    this.state = {
      selectedItems: this.selectedItems
    };
  }

  static Item = DropdownItem;

  // multiselect
  updateSelected(index) {
    const selectedItems = [...this.state.selectedItems];
    const indexof = selectedItems.indexOf(index);

    if (selectedItems.includes(index)) {
      selectedItems.splice(indexof, 1);
    } else {
      selectedItems.push(index);
    }

    this.setState({ selectedItems });
  }

  render() {
    const items = React.Children.map(this.props.children, (child, index) => {
      return React.cloneElement(child, {
        handleClick: () => {
          this.updateSelected(index);
        },
        selectedItems: this.state.selectedItems,
        selected: this.state.selectedItems.includes(index)
      });
    });

    return <div>{items}</div>;
  }
}

export default Dropdown;
