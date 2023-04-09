import React, { Component } from "react";
import axios from "axios";
import {NotificationContainer, NotificationManager} from 'react-notifications';

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

    axios.post('http://localhost:5000/customers/add', formValues)
    .then(res =>  
        NotificationManager.success("Customer added successfully", 'Success'));

    // fetch("http://localhost:5000/customers/add", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formValues),
    // });

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
      <div className="wrapper">
      <div className="form-wrapper">
      <form>
        <div className="form-group">
          <h3>+ Customer</h3>
          </div>
          <div className="textboxfrm">
          <label>
            {" "}
            Name
            <input
              name="customerName"
              type="text"
              className="textboxfrm"
              value={this.state.customerName}
              onChange={this.handleCustomerNameChange}
            />
          </label>
        </div>
        <div className="textboxfrm">
          <label>
            {" "}
            Gender{" "}
            <input
              name="customerGender"
              type="text"
              className="textboxfrm"
              value={this.state.customerGender}
              onChange={this.handleCustomerGenderChange}
            />{" "}
          </label>
        </div>
        <div className="textboxfrm">
          <label>
            {" "}
            Amount{" "}
            <input
              name="Amount"
              type="text"
              className="textboxfrm"
              value={this.state.Amount}
              onChange={this.handleCustomerAmountChange}
            />{" "}
          </label>
        </div>
        <div className="textboxfrm">
          <label>
            {" "}
            LoanTenure
            <input
              name="LoanTenure"
              type="text"
              className="textboxfrm"
              value={this.state.LoanTenure}
              onChange={this.handleCustomerLoanTenureChange}
            />{" "}
          </label>
        </div>
        <div className="textboxfrm">
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.onClickAdd}
          >
            Add Customer
          </button>
        </div>
      </form>
      </div>
      </div>
    );
  }
}

export default Customer;
