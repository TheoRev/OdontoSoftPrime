import React, { Component } from "react";
import HomeLayout from "../components/home-layout";
import ContainerLayout from "../components/container-layout";
import Menu from "../../menu/containers/menu";

class Home extends Component {
  render() {
    return (
      <HomeLayout>
        <Menu />
        <ContainerLayout>
          <h1>Hello world</h1>
        </ContainerLayout>
      </HomeLayout>
    );
  }
}

export default Home;
