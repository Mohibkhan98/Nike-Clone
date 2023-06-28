import axios from "axios";
import {useSearchParams} from "react-router-dom"




export function ActionShoes(x,y,z) {
  console.log(x,y)
  var url = `https://nike-api-e0bl.onrender.com/shoes?`;

  if (x) {
    url += `Gender=${x}`;
  }

  if (y) {
    url += `&brand=${y}`;
  }

  if (z) {
    url += `&color=${z}`;
  }


  return(dispatch)=>{
   try{
         axios.get(url).then((res)=>{
           dispatch({
              type:"shoes",
              payload:res.data
           })
         
})
   } catch(error){
     console.log("SOMETHING WENT WRONG!!!")
   }
};

}


export function Actionhide(value){
   return{
     type:"hide",
     payload:value
   }
}


export function ActionFilter(value){
  var url = `https://nike-api-e0bl.onrender.com/shoes?_sort=Price&_order=${value}`;
   
  return(dispatch)=>{
   try{
         axios.get(url).then((res)=>{
           dispatch({
              type:"shoes",
              payload:res.data
           })
         
})
   } catch(error){
     console.log("SOMETHING WENT WRONG!!!")
   }
};

}

