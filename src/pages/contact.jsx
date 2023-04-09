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
    // alert("An essay was submitted: " + this.state.value);
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
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form>
              <h1 className="h3 mb-3 font-weight-normal">Contact Us</h1>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="c_name"
                  placeholder="Enter your name"
                  value={this.state.C_name}
                  onChange={this.handleC_nameChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter your emal"
                  value={this.state.Email}
                  onChange={this.handleEmailChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Mobile Number </label>
                <input
                  type="mobileNumber"
                  className="form-control"
                  name="mobileNumber"
                  placeholder="Enter mobile number"
                  value={this.state.MobileNumber}
                  onChange={this.handleMobileNumberChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <input
                  type="text"
                  className="form-control"
                  name="message"
                  placeholder="Enter the message"
                  value={this.state.Message}
                  onChange={this.handleMessageChange}
                />
              </div>
              <br />
              <button
                type="button"
                className="btn btn-lg btn-primary btn-block"
                onClick={this.onClickAdd}
              >
                Submit!
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Customer;
