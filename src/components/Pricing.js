import React from "react";
import "./Pricing.css";

const Pricing = () => {
  return (
    <div className="pricing">
      <div className="container">
        <div className="top-content">
          <div>
            <h2>
              Everithing you need for <span>$99 a month</span>
            </h2>
            <p>
              Includes every feature we offer plus unlimited projects and
              unlimited users.
            </p>
          </div>
          <div className="btn-div">
            <button>Get started today</button>
          </div>
        </div>
        <div className="bottom-content">
          <div className="card">
            <p>
              <span>Everything you need</span>
            </p>
            <h3>All-in-one platform</h3>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters.
            </p>
          </div>
          <div className="card">
            <div>
              <p>It is a long established fact that a reader.</p>
            </div>
            <div>
              <p>It is a long established fact that a reader.</p>
            </div>
            <div>
              <p>It is a long established fact that a reader.</p>
            </div>
            <div>
              <p>It is a long established fact that a reader.</p>
            </div>
            <div>
              <p>It is a long established fact that a reader.</p>
            </div>
          </div>
          <div className="card">
            <div>
              <p>It is a long established fact that a reader.</p>
            </div>
            <div>
              <p>It is a long established fact that a reader.</p>
            </div>
            <div>
              <p>It is a long established fact that a reader.</p>
            </div>
            <div>
              <p>It is a long established fact that a reader.</p>
            </div>
            <div>
              <p>It is a long established fact that a reader.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
