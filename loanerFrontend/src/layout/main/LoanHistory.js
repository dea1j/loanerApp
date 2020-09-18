import React, { Fragment, useState } from "react";
import { Modal } from "react-bootstrap";

export default function LoanHistory() {
  const [modalOpen, setModalOpen] = useState(false);
  const [withdrawalModalOpen, setWithdrawalModalOpen] = useState(false);

  const closeRequestLoanModal = () => {
    setModalOpen(false);
  };
  const closeWithdrawalModal = () => {
    setWithdrawalModalOpen(false);
  };

  return (
    <Fragment>
      <Modal show={withdrawalModalOpen} onHide={() => closeWithdrawalModal()}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h5>Withdraw Funds</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <form>
              <div className="form-group">
                <label>Amount</label>
                <input
                  placeholder="Enter Amount"
                  className="form-control"
                  type="number"
                />
              </div>
              <div className="form-group">
                <label>Vetropay UUID</label>
                <input
                  placeholder="Enter Amount"
                  className="form-control"
                  type="number"
                />
              </div>
              <div className="form-group">
                <button className="btn btn-danger btn-block">Withdraw</button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>

      <Modal show={modalOpen} onHide={() => closeRequestLoanModal()}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h5>Request New Loan</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h4 style={{ color: "gray" }} className="text-center">
              Maximum Loan Amount <b>#50,000</b>
            </h4>
            <form>
              <div className="form-group">
                <label>Loan Amount</label>
                <input
                  placeholder="Enter request Amount"
                  className="form-control"
                  type="number"
                />
              </div>
              <div className="form-group">
                <button className="btn btn-danger btn-block">Submit</button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>

      <div className="container">
        <div className="text-center">
          <button
            onClick={() => setModalOpen(true)}
            className="btn btn-danger mr-3"
          >
            Request New Loan
          </button>
          <button
            onClick={() => setWithdrawalModalOpen(true)}
            className="btn btn-primary"
          >
            Withdraw Funds
          </button>
        </div>
        <br />
        Loan History:
        <div className="card card-body shadow mt-3">
          <div className="loan-history-card">
            <div>
              Request Date: Aug 2, 2020 <br />
              Amount: ₦15,000
            </div>
            <div>
              Status: <span className="badge badge-warning">Running</span>{" "}
              <br />
              Interest: 10%
            </div>
          </div>
        </div>
        <div className="card card-body shadow mt-3">
          <div className="loan-history-card">
            <div>
              Request Date: Jult 1, 2020 <br />
              Amount: ₦10,000
            </div>
            <div>
              Status: <span className="badge badge-success">Paid</span> <br />
              Interest: 10%
            </div>
          </div>
        </div>
        <div className="card card-body shadow mt-3">
          <div className="loan-history-card">
            <div>
              Request Date: Jan 10, 2020 <br />
              Amount: ₦35,000
            </div>
            <div>
              Status: <span className="badge badge-success">Paid</span> <br />
              Interest: 10%
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
