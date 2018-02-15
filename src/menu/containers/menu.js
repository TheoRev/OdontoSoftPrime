import React, { Component } from "react";
import MenuLayout from "../components/menu-layout";
import MenuBar from "../components/menu-bar";

class Menu extends Component {
  render() {
    return (
      <MenuLayout>
        <MenuBar />
      </MenuLayout>
    );
  }
}

export default Menu;
