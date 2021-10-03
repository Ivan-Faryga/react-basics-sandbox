import React, { Component } from "react";
import shortid from "shortid";

class Form extends Component {
  state = {
    name: "",
    nickName: "",
    experience: "junior",
    license: false,
  };

  nameInputId = shortid.generate();
  nickNameInputId = shortid.generate();

  handleFormChange = (e) => {
    // console.log(e.currentTarget);
    // console.log(e.currentTarget.name);
    // console.log(e.currentTarget.value);

    // destructuring attributes from CurrentTarget

    const { name, value } = e.currentTarget;

    this.setState({
      // [e.currentTarget.name]: e.currentTarget.value,
      [name]: value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);

    this.formReset();
  };

  formReset = () => {
    this.setState({ name: "", nickName: "" });
  };

  handleLicenseChange = (e) => {
    console.log(e.currentTarget.checked);

    this.setState({ license: e.currentTarget.checked });
  };

  render() {
    const { name } = this.state;
    const { nickName } = this.state;
    const { license } = this.state;
    return (
      <form onSubmit={this.handleFormSubmit}>
        <br />
        <label htmlFor={this.nameInputId}>
          Name
          <input
            type="text"
            value={name}
            name="name"
            onChange={this.handleFormChange}
            id={this.nameInputId}
          />
        </label>
        <br />
        <label htmlFor={this.nickNameInputId}>
          Nickname
          <input
            type="text"
            value={nickName}
            name="nickName"
            onChange={this.handleFormChange}
            iid={this.nickNameInputId}
          />
        </label>

        <p>Your level</p>
        <label>
          <input
            type="radio"
            name="experience"
            value="junior"
            checked={this.state.experience === "junior"}
            onChange={this.handleFormChange}
          />
          Junior
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="middle"
            checked={this.state.experience === "middle"}
            onChange={this.handleFormChange}
          />
          Middle
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="senior"
            checked={this.state.experience === "senior"}
            onChange={this.handleFormChange}
          />
          Senior
        </label>
        <br />

        <label>
          <input
            type="checkbox"
            name="license"
            checked={license}
            onChange={this.handleLicenseChange}
          />
          Agree with terms
        </label>

        <br />
        <button type="submit" disabled={!license}>
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
