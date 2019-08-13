import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {

  constructor(){
      super();
      this.name = "yoshi";
  }

  render() {

    return (
        <div>
            <h1>number is {this.getNum(1)} !</h1>
            <h2>My name is {this.name}</h2>
        </div>
    );
  }

  getNum(num){
      return 1 + num;
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);