import React, { Component } from "react";
import axios from "axios";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Fname: "",
      Lname: "",
      Email: "",
      Passcode: "",
    };
    this.onClickAdd.bind(this);
  }

  onClickAdd = (event) => {
    event.preventDefault();
    const { Fname, Lname, Email, Passcode } = this.state;
    const newUser = {
      first_name: Fname,
      last_name: Lname,
      email: Email,
      password: Passcode,
    };

    console.log(newUser);

    axios
      .post("http://localhost:3081/register/add", newUser)
      .then((res) =>
        NotificationManager.success("User added successfully", "Success")
      );
  };

  handleFname = (e) => {
    this.setState({ Fname: e.target.value });
  };

  handleLname = (e) => {
    this.setState({ Lname: e.target.value });
  };
  handleEmail = (e) => {
    this.setState({ Email: e.target.value });
  };
  handlePasscode = (e) => {
    this.setState({ Passcode: e.target.value });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form>
              <h1 className="h3 mb-3 font-weight-normal">Register</h1>
              <div className="form-group">
                <label htmlFor="name">First name</label>
                <input
                  type="text"
                  className="form-control"
                  name="first_name"
                  placeholder="Enter your first name"
                  value={this.state.Fname}
                  onChange={this.handleFname}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Last name</label>
                <input
                  type="text"
                  className="form-control"
                  name="last_name"
                  placeholder="Enter your lastname name"
                  value={this.state.Lname}
                  onChange={this.handleLname}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  value={this.state.Email}
                  onChange={this.handleEmail}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={this.state.Passcode}
                  onChange={this.handlePasscode}
                />
              </div>
              <br />
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
                onClick={this.onClickAdd}
              >
                Register!
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
