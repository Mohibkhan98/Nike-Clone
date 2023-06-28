import React from 'react'
import Product from './Product'
import SideBar from './SideBar'
import { useSelector } from "react-redux";

export default function MainPage() {
  let x=useSelector((storeData)=>{
    return storeData.reducerhide.tod
})

  if(x){
    return (
      <div style={{display:"grid",gridTemplateColumns:"17% 80%",gap:"20px"}}>
       <SideBar/>
       <Product/>
      </div>
    )

  }else{
    return (
      <div style={{display:"grid",gridTemplateColumns:"100%",marginRight:"2%",marginLeft:"2%"}}>
       <Product/>
      </div>
    )

  }
 
}
