import React from "react";
import "./Payment.css";
import {
  PhoneIcon,
  AddIcon,
  WarningIcon,
  Icon,
  DeleteIcon,
  ViewIcon,
  LockIcon,
} from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { Input, Textarea,InputGroup,InputLeftElement } from "@chakra-ui/react";
import PaymentForm from "./PatmentForm";


export default function Payment() {
  var navigate = useNavigate();
  var x=localStorage.getItem("Total")

  return (
    <div className="Container1">
      <div>
        <h1 className="CartOne">How would you like to get your order?</h1>
        <p className="payTwo">
          Customs regulation for India require a copy of the recipient's KYC.
          The address on the KYC needs to match the shipping address. Our
          courier will contact you via SMS/email to obtain a copy of your KYC.
          The KYC will be stored securely and used solely for the purpose of
          clearing customs (including sharing it with customs officials) for all
          orders and returns. If your KYC does not match your shipping address,
          please click the link for more information. Learn More...
        </p>
        
          <h1 className="payThree">Enter your Details:</h1>
          <Input placeholder="First Name" size="lg" mb="5px" w="80%" className="payFour"/>
          <Input placeholder="Last Name" size="lg"  w="80%" className="payFour" />
          <Textarea placeholder="Address"  w="80%" className="payFive"  size='lg' />
          <InputGroup  w="80%" size='lg' className="paySix">
            <InputLeftElement
              pointerEvents="none"
              children={<PhoneIcon color="gray.300" />}
            />
            <Input type="tel" placeholder="Phone number" />
          </InputGroup>
          

         

           



        <PaymentForm/>















      </div>

      <div>
        <h1 className="CartLast">Order</h1>
        <div className="TotalBox1">
          <h1>
            Subtotal{" "}
            <Icon as={LockIcon} w={3} h={3} color="black.500" mt="-4px" />
          </h1>
          <h1>MRP : ₹ {x}.00</h1>
        </div>
        <div className="TotalBox2">
          <h1>Estimated Delivery & Handling</h1>
          <h1>Free</h1>
        </div>
        <hr></hr>

        <div className="TotalBox3">
          <h1>Total</h1>
          <h1>MRP : ₹ {x}.00</h1>
        </div>

        <hr></hr>
        <p>
          (The total reflects the price of your order, including all duties and
          taxes)
        </p>
        <button className="PayBtn2" onClick={() => navigate("/payment")}>
          PAY
        </button>
      </div>
    </div>
  );
}
