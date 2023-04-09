import React, { Component } from "react";
import axios from "axios";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

class Customer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      C_name: "",
      Email: "",
      MobileNumber: "",
      Message: "",
    };
    this.onClickAdd.bind(this);
  }

  onClickAdd = (event) => {
    event.preventDefault();
    const { C_name, Email, MobileNumber, Message } = this.state;
    const formValues = {
      c_name: C_name,
      email: Email,
      mobileNumber: MobileNumber,
      message: Message,
    };

    console.log(formValues);

    axios
      .post("http://localhost:3081/contact/add", formValues)
      .then((res) =>
        NotificationManager.success("User added successfully", "Success")
      );
  };

  handleC_nameChange = (e) => {
    this.setState({ C_name: e.target.value });
  };

  handleEmailChange = (e) => {
    this.setState({ Email: e.target.value });
  };
  handleMobileNumberChange = (e) => {
    this.setState({ MobileNumber: e.target.value });
  };
  handleMessageChange = (e) => {
    this.setState({ Message: e.target.value });
  };

  render() {
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <form>
            <div className="textboxfrm">
              <label>
                {" "}
                Name
                <input
                  name="c_name"
                  type="text"
                  className="textboxfrm"
                  value={this.state.C_name}
                  onChange={this.handleC_nameChange}
                />
              </label>
            </div>
            <div className="textboxfrm">
              <label>
                {" "}
                Email{" "}
                <input
                  name="email"
                  type="text"
                  className="textboxfrm"
                  value={this.state.Email}
                  onChange={this.handleEmailChange}
                />{" "}
              </label>
            </div>
            <div className="textboxfrm">
              <label>
                {" "}
                Mobile Number{" "}
                <input
                  name="mobileNumber"
                  type="text"
                  className="textboxfrm"
                  value={this.state.MobileNumber}
                  onChange={this.handleMobileNumberChange}
                />{" "}
              </label>
            </div>
            <div className="textboxfrm">
              <label>
                {" "}
                Message
                <input
                  name="message"
                  type="text"
                  className="textboxfrm"
                  value={this.state.Message}
                  onChange={this.handleMessageChange}
                />{" "}
              </label>
            </div>
            <div className="textboxfrm">
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.onClickAdd}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Customer;
