import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
  render() {
    /* return (
      <div>
        <Header />
        <Header />
        <Header />
        <Footer />
      </div>
    ); */

      // 配列を利用しての記述も可能。
    let components = [<Header key='header'/> , <Footer key='footer'/>];
    return (
      <div>{components}</div>
    );

  }
}