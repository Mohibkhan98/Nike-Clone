import React from 'react';
import { Link } from 'react-router-dom';

const PaymentSuccess = () => {
   var x=localStorage.getItem("Total")

  return (
    <div className="payment-success" style={{color:"black",marginTop:"100px",marginBottom:"200px"}}>
      <div className="circle">
        <svg width="80" height="80" viewBox="0 0 80 80">
          <path fill="none" stroke="#27ae60" strokeWidth="3" d="M40,2 A38,38 0 0,1 78,40 A38,38 0 0,1 40,78 A38,38 0 0,1 2,40 A38,38 0 0,1 40,2z"/>
          <path fill="#27ae60" d="M28 53.5L17.5 43L14 46.5L28 62.5L61 29.5L56.5 25L28 53.5Z"/>
        </svg>
      </div>
      <p>Thank you for your payment!</p>
      <p>Your payment of MRP : ₹ {x}.00 has been received and processed.</p>
     <Link to="/"> <button className="lastBtn2" style={{borderRadius:"10px",width:"120%",marginTop:"30px"}}>Back To Shopping</button></Link>
    </div>
  );
}

const styles = `
  .payment-success {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: bold;
    color: #27ae60;
  }

  .circle {
    animation: circle 0.8s ease-in-out;
  }

  .payment-success svg {
    transform-origin: 50% 50%;
    animation: tick 0.8s ease-in-out;
  }

  .payment-success p {
    margin-top: 20px;
    animation: fadein 0.5s;
  }

  @keyframes circle {
    0% {
      stroke-dasharray: 240;
      stroke-dashoffset: 240;
    }
    100% {
      stroke-dasharray: 240;
      stroke-dashoffset: 0;
    }
  }

  @keyframes tick {
    0% {
      stroke-dasharray: 70;
      stroke-dashoffset: 70;
      transform: scale(0.1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      stroke-dasharray: 70;
      stroke-dashoffset: 0;
      transform: scale(1);
    }
  }

  @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
`;

const PaymentSuccessPage = () => {
  return (
    <div>
      <style>{styles}</style>
      <PaymentSuccess />
    </div>
  );
}

export default PaymentSuccessPage;
