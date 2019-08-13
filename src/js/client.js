import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {
  render() {

    return (
        <div>
            <h1>number is {this.get_num(1)} !</h1>
        </div>
    );
  }

  get_num(num){
      return 1 + num;
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);