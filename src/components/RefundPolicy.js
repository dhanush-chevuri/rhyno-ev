import React from 'react';
import "C:/Users/DELL/rhyno-ev/src/styles/RefundPolicy.css";

const RefundPolicy = () => {
  return (
    <div className="policy-content">
      <h1 className="policy-title">Refund Policy</h1>
      <p className="policy-text">
        At Rhyno Electric Vehicle, we strive to ensure customer satisfaction with every purchase. If you are not satisfied with your purchase, you may request a refund or exchange under the following conditions:
      </p>
      
      <h2 className="policy-subtitle">Eligibility</h2>
      <p className="policy-text">
        To be eligible for a refund, your item must be unused and in the same condition that you received it. It must also be in the original packaging.
      </p>
      
      <h2 className="policy-subtitle">Timeframe</h2>
      <p className="policy-text">
        Our refund policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately, we cannot offer you a refund or exchange.
      </p>
      
      <h2 className="policy-subtitle">Process</h2>
      <p className="policy-text">
        To request a refund, please contact our customer service team with your order details. Once your return is received and inspected, we will send you an email to notify you of the approval or rejection of your refund.
      </p>
      
      <h2 className="policy-subtitle">Refunds</h2>
      <p className="policy-text">
        If approved, your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment within a certain amount of days.
      </p>
    </div>
  );
};

export default RefundPolicy;
