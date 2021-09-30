import { Component } from "react";

import s from "./ColorPicker.module.css";

class ColorPicker extends Component {
  state = {
    activeOptionIdx: 0,
  };
  render() {
    return (
      <div className={s.wrapper}>
        <h2 className={s.title}>Color Picker</h2>
        <div>
          {this.props.options.map((option) => (
            <button
              key={option.label}
              className={s.item}
              style={{ backgroundColor: option.color }}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
