import React, { Fragment } from "react";
import Header from "../common/Header";

export default function LandingPage() {
  return (
    <Fragment>
      <Header />
      <div className="container">
        <div
          className="hero"
          style={{ display: "flex", flexDirection: "row", minHeight: "100vh" }}
        >
          <div>Get Instant Presonal Loan</div>
          <div>Get Instant Presonal Loan</div>
        </div>
      </div>
    </Fragment>
  );
}
