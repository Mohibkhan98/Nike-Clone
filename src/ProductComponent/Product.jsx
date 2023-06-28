import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Select } from "@chakra-ui/react";
import store from "../redux/store";
import { ActionShoes } from "../redux/ProductComponentRedux/ProductComponentAction";
import { useSelector } from "react-redux";
import "./Prod.js";
import "./styleprod.css";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Actionhide } from "../redux/ProductComponentRedux/ProductComponentAction";
import { ActionFilter } from "../redux/ProductComponentRedux/ProductComponentAction";
import {
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Product() {
  let [data, setData] = useState([]);

  let navigate=useNavigate();

  let x = useSelector((storeData) => {
    return storeData.reducerShoes.dataShoes;
  });

  useEffect(() => {
    store.dispatch(ActionShoes());
  }, []);

  function handleChange(x) {
    store.dispatch(ActionFilter(x));
  }

  // function handleChange(x) {
  //   var url = `http://localhost:3000/shoes?`;

  //   if (x) {
  //     url += `_sort=Price&_order=${x}`;
  //   }

  //  if(x){
  //   url+=`Gender=${x}`
  //  }

  // axios.get(url).then((res) => {
  //   // console.log("sort", res.data);
  //   setData(res.data);
  // });

  var x2 = useSelector((storeData) => {
    return storeData.reducerhide.tod;
  });

  function handleHide() {
    store.dispatch(Actionhide(!x2));
  }

  function sendDetails(elem){
    localStorage.setItem("elem",JSON.stringify(elem))
     navigate("/description")
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
        {x2 ? (
          <Button
            className="hideBtn"
            bg="#F8F8F8"
            size="md"
            onClick={handleHide}
          >
            Hide Filter
          </Button>
        ) : (
          <Button
            className="hideBtn"
            bg="#F8F8F8"
            size="md"
            onClick={handleHide}
          >
            Show Filter
          </Button>
        )}

        <Select
          className="rightDropdown"
          placeholder="Sort By"
          w="15%"
          mb="20px"
          onChange={(e) => {
            console.log(e.target.value);
            handleChange(e.target.value);
          }}
        >
          <option value="desc">Price: High-Low</option>
          <option value="asc">Price: Low-High</option>
        </Select>
      </div>

      {x.length > 0 ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "18px",
           
          }}
        >
          {x.map((elem, index) => {
            return (
              <div key={index} onClick={()=>sendDetails(elem)} style={{cursor:"pointer"}} className="zoom">
                <img src={elem.Image} width="100%" style={{height:"70%"}} />
                <h3 className="firstTag">Just In</h3>
                <h3 className="secondTag">{elem.Title}</h3>
                {
                  elem.Gender==="Men" ? <h3 className="thirdTag">Men's Shoes</h3> : <h3  className="thirdTag">Women's Shoes</h3>
                }
                {
                  elem.productcard__messaging==="" ?  <h3 className="fourTag">Bestseller</h3> :  <h3 className="fourTag">{elem.productcard__messaging}</h3>
                }
                <h3 className="fiveTag">MRP : Rs.{elem.Price}.00</h3>
              </div>
            );
          })}
        </div>
      ) : (
        <div>
        <Stack  style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "18px",
          
        }} >
        <Skeleton height='450px' width="99%" mt="10px"/>
        <Skeleton height='450px' width="99%" />
        <Skeleton height='450px' width="99%" />
      </Stack>
      <hr style={{color:"black",marginTop:"10px"}}></hr>
      <h1 className="sixTag"> Sorry, No Product Found !!!</h1>
      <hr></hr>
       </div>
      )}
    </div>
  );
}

//  <Select
//   placeholder="Sort By"
//   w="20%"
//   mb="20px"
//   onChange={(e) => {
//     console.log(e.target.value);
//     handleChange(e.target.value);
//   }}
// >
//   <option value="desc">Price: High-Low</option>
//   <option value="asc">Price: Low-High</option>
// </Select>
