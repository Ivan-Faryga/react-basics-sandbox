import React from "react";

import Controls from "./Controls";
import Value from "./Value";

class Counter extends React.Component {
  state = {
    value: 0,
  };

  handleIncrement = () => {
    this.setState((prevState) => {
      return {
        value: prevState.value + 1,
      };
    });
  };

  handleDecrement = () => {
    this.setState((prevState) => {
      return {
        value: prevState.value - 1,
      };
    });
  };
  render() {
    const { value } = this.state;
    return (
      <div className="Counter">
        <Value value={value} />
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default Counter;
