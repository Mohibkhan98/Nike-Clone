import React, { useState } from "react";
import "./SignIn.css";
import { Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import {useNavigate} from "react-router-dom"
import store from "../redux/store";
import { useDispatch } from 'react-redux'

export default function SignIn() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

   var navigate=useNavigate();
   const dispatch = useDispatch()


  let [auth, setAuth] = useState({
    email: "",
    password: "",
  });

  const toast = useToast();

  function handleSubmit() {
    if (auth.email == "") {
      toast({
        title: `Please Enter Email Address`,
        status: `error`,
        isClosable: true,
      });
      return;
    }

    if (auth.password == "") {
      toast({
        title: `Please Enter Password`,
        status: `error`,
        isClosable: true,
      });
      return;
    }

    axios
      .post("https://reqres.in/api/login", auth)
      .then((res) => {
        toast({
          title: `Login Successful`,
          status: `success`,
          isClosable: true,
        });
        dispatch({ type: 'auth',payload:true })
        navigate("/")
      })
      .catch((error) => {
        toast({
          title: `Please Enter Correct Credentials`,
          status: `error`,
          isClosable: true,
        });
        return error;
      });
  }

  return (
    <div
      style={{
        border: "2px solid white",
        width: "23%",
        margin: "auto",
        textAlign: "center",
        marginTop: "50px",
      }}
    >
      <img
        src="https://s3.nikecdn.com/unite/app/953/images/swoosh_black_2x.png"
        className="NikeLogo"
      />
      <h1 className="stagOne">
        YOUR ACCOUNT FOR <br />
        EVERYTHING NIKE
      </h1>

      <FormControl mt="5px" mb="8px">
        <Input
          className="nameField"
          type="email"
          placeholder="Email address"
          onChange={(e) => {
            setAuth({ ...auth, email: e.target.value });
          }}
        />
      </FormControl>

      <InputGroup size="md">
        <Input
          className="passField"
          pr="4.5rem"
          type={show ? "text" : "password"}
          placeholder="Password"
          onChange={(e) => {
            setAuth({ ...auth, password: e.target.value });
          }}
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            {show ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>
      <div className="checkTag">
        <Checkbox size="sm" colorScheme="cyan">
          <span style={{ fontSize: "13px" }}> Keep me signed in</span>
        </Checkbox>
        <h3>Forgotten your password?</h3>
      </div>

      <h1 className="checkTag2">
        By logging in, you agree to Nike's Privacy Policy and Terms of Use.
      </h1>

      <button className="checkTag3" onClick={handleSubmit}>
        SIGN IN
      </button>
      <h1 className="checkTag4">
        Not a Member?{" "}
        <span style={{ color: "black", textDecoration: "underline" }}>
          Join Us.
        </span>
      </h1>
    </div>
  );
}
