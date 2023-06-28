import React, { useState, useEffect } from "react";
import "./Cart.css";
import {
  PhoneIcon,
  AddIcon,
  WarningIcon,
  Icon,
  DeleteIcon,ViewIcon,LockIcon
} from "@chakra-ui/icons";
import { RiHeartLine, RiShoppingBagLine } from "react-icons/ri";
import { NavIcon } from "../NewHomepage/components/navbar/CategoryAndIcon";
import { Select } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux"

export default function Cart() {
  let [data, setData] = useState([]);
  let [total, setTotal] = useState(0);

  let [new2,setnew]=useState(0)

  var x = JSON.parse(localStorage.getItem("cart")) || [];
  let navigate=useNavigate();
  var dispatch=useDispatch();

  useEffect(() => {
    setData(x);
    console.log("TotalSum", x);
    var sum = x.reduce((a, b) => {
      return a + (b.Price*b.quantity);
    }, 0);

    setTotal(sum);
    localStorage.setItem("Total",sum)

    var x1 = JSON.parse(localStorage.getItem("cart")) || [];

    dispatch({
      type:"add",
      payload:x1.length
   })
  }, [new2,data]);

  function handleDelete(x1) {
    x.splice(x1, 1);
    localStorage.setItem("cart", JSON.stringify(x));
    setData(x);
    var sum = x.reduce((a, b) => {
      return a + (b.Price*b.quantity);
    }, 0);
    setTotal(sum);
    localStorage.setItem("Total",sum)
    var x2 = JSON.parse(localStorage.getItem("cart")) || [];
    dispatch({
      type:"add",
      payload:x2.length
   })
  }

function setQuantity(index,value){
     var x3 = JSON.parse(localStorage.getItem("cart")) || [];
   
     
       var Value= x3.map((elem,i)=>{
             if(i===index){
               return {...elem,quantity:value}
             }else{
               return {...elem}
             }
               
       })

       localStorage.setItem("cart", JSON.stringify(Value));

      setnew(prev=>prev+1)
   
}

  return (
    <div className="Container">
      <div >
        <h1 className="CartOne">Bag</h1>
        {data.length>0 ? data.map((elem, index) => {
          return (
            <div
              key={index}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                marginBottom: "20px",
                // border: "2px solid red",
                gridColumnGap: "20px",
              }}
            >
              <div>
                <img src={elem.Image} width="250px" />
              </div>
              <div >
                <h1 className="secondColone">{elem.Title}</h1>
                {elem.Gender === "Men" ? (
                  <h3 className="secondColtwo">Men's Shoes</h3>
                ) : (
                  <h3 className="secondColtwo">Women's Shoes</h3>
                )}
                {elem.productcard__messaging === "" ? (
                  <h3 className="secondColthree">Bestseller</h3>
                ) : (
                  <h3 className="secondColthree">
                    {elem.productcard__messaging}
                  </h3>
                )}
                <div style={{ display: "flex" }}>
                  <Icon
                    onClick={() => handleDelete(index)}
                    className="BtnColTwo"
                    as={DeleteIcon}
                    w={6}
                    h={6}
                    color="black.500" mr="10px"
                  />
                  <NavIcon iconName={RiHeartLine}  className="favourite" />
                  <Select placeholder="Quantity" size='sm' variant='filled' w="110px" className="dropDown" onChange={(e)=>{
                     setQuantity(index,e.target.value)
                  }}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </Select>
                </div>
              </div>

              <h3 className="priceTag">MRP : ₹ {elem.Price}.00</h3>
            </div>
          );
        }): <h1 className="empty">No Products In The Bag</h1>}
      </div>

      <div >
        <h1 className="CartLast">SUMMARY</h1>
        <div  className="TotalBox1">
        <h1 >Subtotal  <Icon as={LockIcon} w={3} h={3} color='black.500' mt="-4px"/></h1>
        <h1>MRP : ₹ {total}.00</h1>
        </div>
        <div  className="TotalBox2">
        <h1 >Estimated Delivery & Handling</h1>
        <h1>Free</h1>
        </div>
        <hr></hr>
       
        <div className="TotalBox3">
        <h1 >Total</h1>
        <h1>MRP : ₹ {total}.00</h1>
        </div>
       
        <hr></hr>
         <button className="lastBtn1" onClick={()=> navigate("/payment")}>Guest Checkout</button><br></br>
         <button className="lastBtn2" onClick={()=> navigate("/payment")}>Member Checkout</button>
      </div>
    </div>
  );
}
