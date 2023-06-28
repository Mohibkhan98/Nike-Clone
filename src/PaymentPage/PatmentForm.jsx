import React, { Component }  from "react";
import Card from "react-credit-cards";
import { Input } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";


import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
  formatFormData,
} from "./utils";
import { Button, ButtonGroup } from "@chakra-ui/react";
import "react-credit-cards/es/styles-compiled.css";
import { PinInput, PinInputField, HStack ,Heading} from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { useToast } from '@chakra-ui/react'
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'
import Swal from 'sweetalert2'


export default class App extends React.Component {
  state = {
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    issuer: "",
    focused: "",
    formData: null,
  };

  handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      this.setState({ issuer });
    }
  };

  handleInputFocus = ({ target }) => {
    this.setState({
      focused: target.name,
    });
  };

  handleInputChange = ({ target }) => {
    if (target.name === "number") {
      target.value = formatCreditCardNumber(target.value);
    } else if (target.name === "expiry") {
      target.value = formatExpirationDate(target.value);
    } else if (target.name === "cvc") {
      target.value = formatCVC(target.value);
    }

    this.setState({ [target.name]: target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
   
    const { issuer } = this.state;
    const formData = [...e.target.elements]
      .filter((d) => d.name)
      .reduce((acc, d) => {
        acc[d.name] = d.value;
        return acc;
      }, {});

    this.setState({ formData });
    this.form.reset();
  };
  
  


  


  render() {
    const { name, number, expiry, cvc, focused, issuer, formData } = this.state;
    
    
    return (
      <div key="Payment">
        <div className="App-payment">
          <h1 className="payThree" style={{ marginTop: "20px" }}>
            Enter Credit Card Details:
          </h1>
          <div style={{ marginLeft: "-550px" }}>
            <Card
              number={number}
              name={name}
              expiry={expiry}
              cvc={cvc}
              focused={focused}
              callback={this.handleCallback}
            />
          </div>
          <form ref={(c) => (this.form = c)} onSubmit={this.handleSubmit}>
            <div
              className="form-group"
              style={{
                marginTop: "20px",
                border: "2px soild black",
                marginLeft: "-150px",
              }}
            >
              <Input
                size="lg"
                type="tel"
                w="70%"
                name="number"
                className="form-control"
                placeholder="Card Number"
                id="CardNoTag"
                pattern="[\d| ]{16,22}"
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>
            <div
              className="form-group"
              style={{
                marginTop: "5px",
                border: "2px soild black",
                marginLeft: "-150px",
              }}
            >
              <Input
                size="lg"
                type="text"
                w="70%"
                name="name"
                className="form-control"
                id="NameTag"
                placeholder="Name"
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>
            <div className="row">
              <div
                className="col-6"
                style={{
                  marginTop: "5px",
                  border: "2px soild black",
                  marginLeft: "-690px",
                }}
              >
                <Input
                  size="lg"
                  type="tel"
                  w="10%"
                  name="expiry"
                  className="form-control"
                  id="DateTag"
                  placeholder="Valid Date"
                  pattern="\d\d/\d\d"
                  required
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
              </div>
              <div
                className="col-6"
                style={{
                  marginTop: "5px",
                  border: "2px soild black",
                  marginLeft: "-690px",
                }}
              >
                <Input
                  size="lg"
                  w="10%"
                  type="tel"
                  name="cvc"
                  className="form-control" 
                  placeholder="CVC"
                  id="CvvTag"
                  pattern="\d{3,4}"
                  required
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
              </div>
            </div>
            <input type="hidden" name="issuer" value={issuer} />
            <div className="form-actions">
              <button
                className="PayBtn2"
                style={{
                  marginTop: "20px",
                  border: "2px soild black",
                  marginLeft: "-680px",
                  width: "20%",
                }}

                onClick={()=>{
                    var x=document.getElementById("NameTag").value
                    var x2=document.getElementById("CvvTag").value
                    var x3=document.getElementById("DateTag").value
                    var x4=document.getElementById("CardNoTag").value
                   
                    if(x4===""){
                      alert("Enter Card Number")
                      return
                    }
                    if(x===""){
                      alert("Enter Name")
                      return
                    }
                    if(x3===""){
                      alert("Enter Date")
                      return
                    }
                    if(x2===""){
                      alert("Enter CVV")
                      return
                    }
                    Swal.fire({
                      
                      position: 'top-end',
                      icon: 'success',
                      title: 'Your OTP is : 1236',
                      showConfirmButton: true,
                    
                    })
                }}
              >
                Send OTP
              </button>
              <Heading as='h6' size='xs'  style={{
                marginTop: "10px",
                border: "2px soild black",
                marginLeft: "-30px",
                width: "20%",
              }}>
   Enter Your OTP
  </Heading>
              <HStack mt="10px">
                <PinInput type="alphanumeric" mask >
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                </PinInput>
               
              </HStack>
            
              
              <Link to="/done"> <button className="PayBtn2" style={{
                marginTop: "20px",
                border: "2px soild black",
                marginLeft: "-680px",
                width: "20%",
              }}>
          PAY
        </button></Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
