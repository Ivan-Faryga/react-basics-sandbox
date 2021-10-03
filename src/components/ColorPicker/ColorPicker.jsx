import { Component } from "react";
import classNames from "classnames";

import s from "./ColorPicker.module.css";

class ColorPicker extends Component {
  state = {
    activeOptionIdx: 0,
  };

  setActiveIdx = (index) => {
    this.setState({ activeOptionIdx: index });
  };

  makeOptionClassName = (index) => {
    // classNames("{s.item}", {
    //   [s.item__active]: index === this.state.activeOptionIdx,
    // });
    const optionClasses = [s.item];

    if (index === this.state.activeOptionIdx) {
      optionClasses.push(s.item__active);
    }

    return optionClasses.join(" ");
  };
  render() {
    const { activeOptionIdx } = this.state;
    const { label } = this.props.options[activeOptionIdx];
    return (
      <div className={s.wrapper}>
        <h2 className={s.title}>Color Picker</h2>
        <p>Выбран цвет: {label}</p>
        <div>
          {this.props.options.map((option, index) => {
            return (
              <button
                key={option.label}
                className={this.makeOptionClassName(index)}
                style={{ backgroundColor: option.color }}
                onClick={() => this.setActiveIdx(index)}
              ></button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
