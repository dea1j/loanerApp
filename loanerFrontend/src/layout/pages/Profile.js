import React, { Fragment, useState } from "react";
import { Modal } from "react-bootstrap";
import Header from "../common/Header";
import { FaEdit } from "react-icons/fa";
import pic from "../../img/pp.jpg";

function Profile() {
  const [editModalOpen, setEditModalOpen] = useState(false);

  const closeEditModal = () => {
    setEditModalOpen(false);
  };

  return (
    <Fragment>
      <Modal show={editModalOpen} onHide={() => closeEditModal()}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h5>Edit Profile Information</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <form>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>
                    <b>First Name</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter First Name"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label>
                    <b>Last Name</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Last Name"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>
                    <b>Email</b>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Email"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label>
                    <b>BVN</b>
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter BVN"
                  />
                </div>
              </div>
              <div className="form-group">
                <label for="inputAddress">
                  <b>Address</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Address"
                />
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="inputCity">
                    <b>Bank Statement</b>
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group col-md-6">
                  <label for="inputState">
                    <b>Employment Status</b>
                  </label>
                  <select id="inputState" className="form-control">
                    <option selected>Choose...</option>
                    <option>Employed</option>
                    <option>Unemployed</option>
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="inputCity">
                    <b>Link Card(PayStack)</b>
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group col-md-6">
                  <label for="inputState">
                    <b>Reset Password</b>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Reset Password"
                  />
                </div>
                <div className="form-group">
                  <input type="file" />
                </div>
              </div>
              <div className="form-group">
                <button className="btn btn-danger btn-block">Submit</button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>

      <Header />
      <div className="container">
        <div className="text-right">
          <button
            className="btn btn-danger mt-4 col-2"
            onClick={() => setEditModalOpen(true)}
          >
            Edit
            <span className="ml-2">
              <FaEdit />
            </span>
          </button>
        </div>
        <div className="mt-5 row">
          <div className="col-md-4">
            <img src={pic} alt="profile-pic" class="img-thumbnail" />
          </div>
          <div className="col-md-6 ml-5">
            <div>
              <h4>Contact Information</h4>
              <hr />
              <p>
                <b>First Name: </b> Uche
              </p>
              <p>
                <b>Last Name: </b> Eliot
              </p>
              <p>
                <b>Email: </b> ucheeliot@gmail.com
              </p>
              <p>
                <b>Address: </b> 123, Washington Street, Lagos Nigeria.
              </p>
              <p>
                <b>Employment Status: </b> Employed
              </p>
            </div>

            <div className="mt-5">
              <h4>Bank Details</h4>
              <hr />
              <p>
                <b>BVN: </b> 223456789
              </p>
              <p>
                <b>Bank Statement: </b> Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Profile;
