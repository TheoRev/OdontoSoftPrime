import React from "react";
import { Menubar } from "primereact/components/menubar/Menubar";

var items = [
  {
    label: "Pacientes",
    icon: "fa-wheelchair-alt"
  },
  {
    label: "Tratamiento",
    icon: "fa-plus-square"
  }
];

const MenuBar = props => <Menubar model={items} />;

export default MenuBar;
