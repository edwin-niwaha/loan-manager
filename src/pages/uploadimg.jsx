import React, { Component } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

class FilesUploadComponent extends Component {
  constructor(props) {
    super(props);

    this.onFileChange = this.onFileChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      profileImg: "",
    };
  }

  onFileChange(e) {
    this.setState({ profileImg: e.target.files[0] });
  }

  onSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("profileImg", this.state.profileImg);
    axios
      .post("http://localhost:5000/profile/user-profile", formData, {})
      // .then(res => {
      //     console.log(res)
      // })
      .then((res) => {
        toast.success("File uploaded successfully 😎");
      })
      .catch((err) => {
        toast.error("File upload failed");
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <form onSubmit={this.onSubmit}>
              <div className="form-group files">
                <h2>Upload Image File in React JS </h2>
                <input
                  type="file"
                  className="form-control"
                  required
                  onChange={this.onFileChange}
                />
              </div>
              <div className="col-md-6 pull-right">
                <button width="100%" className="btn btn-info" typeof="submit">
                  Upload File
                </button>
              </div>
              <ToastContainer limit={1} />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default FilesUploadComponent;
