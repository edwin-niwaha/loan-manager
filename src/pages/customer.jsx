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
      customerName: "",
      customerGender: "",
      Amount: "",
      LoanTenure: "",
    };
    this.onClickAdd.bind(this);
  }

  onClickAdd = (event) => {
    event.preventDefault();
    const { customerName, customerGender, Amount, LoanTenure } = this.state;
    const formValues = {
      c_name: customerName,
      gender: customerGender,
      amount: Amount,
      loanTenure: LoanTenure,
    };

    console.log(formValues);

    axios
      .post("http://localhost:3081/customers/add", formValues)
      .then((res) =>
        NotificationManager.success("Customer added successfully", "Success")
      );
  };

  handleCustomerNameChange = (e) => {
    this.setState({ customerName: e.target.value });
  };

  handleCustomerGenderChange = (e) => {
    this.setState({ customerGender: e.target.value });
  };
  handleCustomerAmountChange = (e) => {
    this.setState({ Amount: e.target.value });
  };
  handleCustomerLoanTenureChange = (e) => {
    this.setState({ LoanTenure: e.target.value });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form>
              <h1 className="h3 mb-3 font-weight-normal">Register Customer</h1>
              <div className="form-group">
                <label htmlFor="customerName">Customer Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="customerName"
                  placeholder="Enter customer name"
                  value={this.state.customerName}
                  onChange={this.handleCustomerNameChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="customerGender">Email address</label>
                <input
                  type="text"
                  className="form-control"
                  name="customerGender"
                  placeholder="Enter Gender"
                  value={this.state.customerGender}
                  onChange={this.handleCustomerGenderChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Amount">Amount </label>
                <input
                  type="Amount"
                  className="form-control"
                  name="Amount"
                  placeholder="Enter Amount"
                  value={this.state.Amount}
                  onChange={this.handleCustomerAmountChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="LoanTenure">Loan Tenure</label>
                <input
                  type="text"
                  className="form-control"
                  name="LoanTenure"
                  placeholder="Enter the message"
                  value={this.state.LoanTenure}
                  onChange={this.handleCustomerLoanTenureChange}
                />
              </div>
              <br />
              <button
                type="button"
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

export default Customer;
