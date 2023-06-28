import {useState, useEffect} from 'react'
import "./Description.css"

import { useNavigate } from 'react-router-dom'
import {useDispatch} from "react-redux"
import {useSelector} from "react-redux"


export default function Description() {
     var navigate=useNavigate();

     var dispatch=useDispatch();

     var isAuth=useSelector((data)=>{
               return  data.reducerauth.isAuth
     })
     console.log("isAUTHHHHHH",isAuth)

    try{
     var x=JSON.parse(localStorage.getItem("elem"))
    }catch{
        navigate("/productshoe")    
    }
   



    const [singalproduct, setSingalproduct]=useState(x)
        // {
        //     "Title": "Air Jordan 1 Retro High OG",
        //     "Image": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/91303bf8-6b3e-451b-94e6-1933d982689d/air-jordan-1-retro-high-og-shoes.png",
        //     "Image1":"https://static.nike.com/a/images/t_prod_sc/w_640,c_limit,f_auto/ce0bfa17-0c80-4ac2-b652-e2f582ff0441/air-jordan-1-white-cement-dz5485-052-release-date.jpg",
        //     "productcard__linkoverlay_URL": "https://www.nike.com/in/launch/r/DZ5485-052",
        //     "productcard__messaging": "Available in SNKRS",
        //     "Gender": "Men",
        //     "productcard__productcount": "2 Colours",
        //     "Price": 16995,
        //     "quantity": 2,
        //     "brand":"Jordan",
        //     "color":"black"
           
        //   }
    
    const [state,setState]=useState({})
    const [data,setData]=useState({})
    function handleColor(e){
      let obj={};
      state[e.target.name]===true?obj[e.target.name]=false:obj[e.target.name]=true;
      setState(obj)
    }
    
    function handleData(e){
      setData({id:e.target.name})
    }

    var cart=JSON.parse(localStorage.getItem("cart")) || [];
    function addTocart(){
      if(!isAuth){
        navigate("/signIn")
      }

        cart.push(x);
        localStorage.setItem("cart",JSON.stringify(cart));
        dispatch({
           type:"add",
           payload:cart.length
        })
    }

    useEffect(()=>{
      var cart1=JSON.parse(localStorage.getItem("cart")) || [];
      dispatch({
        type:"add",
        payload:cart1.length
     })
    })

  return (
    <div className='container'>
      <div className='singal-images'>
            <img src={singalproduct.Image}  />
            <video loop muted autoPlay style={{width:"98%",height:"500px",objectFit: "fill"}}>
        <source  src="https://static.nike.com/a/videos/q_90,vc_vp9/26301126-4642-4dc1-a0d9-05cc4c5d83e3/video.webm" type="video/mp4"/>
      </video> 
            <img src={singalproduct.Image1}  />
            <img src={singalproduct.Image}  />
            <img src={singalproduct.Image}  />
            <img src={singalproduct.Image1}  />
      </div>
      <div className='product_details'>
        <h2 >{singalproduct.Title}</h2>
        <br />
        <p>MRP : ₹ <span>{singalproduct.Price}</span></p>
        <span>incl. of all taxes</span><br />
        <span>(Also includes all applicable duties)</span>
        <br /><br />
        <p>Back and at it again, with attitude. Returning with an all-over 'White Cement' take on the original, this AJ1 ups the brazen charisma and tradition-breaking bravado. Crafted with premium leather—and featuring the elephant print and iconic colourway you know from the AJ3—it delivers plenty of Jordan's eponymous basketball style. Do they hand out penalties for looking this good? Guess you'll find out.</p>
        <br /><br /><br />
        <h3 style={{marginTop:"-50px"}}>Net Quantity: {singalproduct.quantity}</h3>
        <br />
        <table className='size_tabel' style={{marginTop:"5px"}}>
          
          <tr >
            <td><button name="U1" style={state.U1===true?{backgroundColor:"black", color:'white', border:'2px solid black',marginBottom:"4px"}:{backgroundColor:"white",border:'2px solid black',marginBottom:"4px"}}onClick={(e)=>{
              handleColor(e)
              handleData(e)
            }}>UK 6</button></td>&nbsp;
            <td><button name="U2" style={state.U2===true?{backgroundColor:"black", color:'white',border:'2px solid black',marginBottom:"4px"}:{backgroundColor:"white", border:'2px solid black',marginBottom:"4px"}} onClick={(e)=>{
              handleColor(e)
              handleData(e)
            }}>UK 6.5</button></td>
          </tr>
          <tr>
            <td><button name="U3" style={state.U3===true?{backgroundColor:"black", color:'white', border:'2px solid black',marginBottom:"4px"}:{backgroundColor:"white", border:'2px solid black',marginBottom:"4px"}}onClick={(e)=>{
              handleColor(e)
              handleData(e)
            }}>UK 7</button></td>&nbsp;
            <td><button name="U4" style={state.U4===true?{backgroundColor:"black", color:'white', border:'2px solid black',marginBottom:"4px"}:{backgroundColor:"white", border:'2px solid black',marginBottom:"4px"}}onClick={(e)=>{
              handleColor(e)
              handleData(e)
            }}>UK 7.5</button></td>
          </tr>
          <tr>
            <td><button name="U5" style={state.U5===true?{backgroundColor:"black", color:'white', border:'2px solid black',marginBottom:"4px"}:{backgroundColor:"white", border:'2px solid black',marginBottom:"4px"}}onClick={(e)=>{
              handleColor(e)
              handleData(e)
            }}>UK 8</button></td>&nbsp;
            <td><button name="U6" style={state.U6===true?{backgroundColor:"black", color:'white', border:'2px solid black',marginBottom:"4px"}:{backgroundColor:"white", border:'2px solid black',marginBottom:"4px"}}onClick={(e)=>{
              handleColor(e)
              handleData(e)
            }}>UK 8.5</button></td>
          </tr>
          <tr>
            <td><button name="U7" style={state.U7===true?{backgroundColor:"black", color:'white', border:'2px solid black',marginBottom:"4px"}:{backgroundColor:"white", border:'2px solid black',marginBottom:"4px"}}onClick={(e)=>{
              handleColor(e)
              handleData(e)
            }}>UK 9</button></td>&nbsp;
            <td><button name="U8" style={state.U8===true?{backgroundColor:"black", color:'white', border:'2px solid black',marginBottom:"4px"}:{backgroundColor:"white", border:'2px solid black',marginBottom:"4px"}}onClick={(e)=>{
              handleColor(e)
              handleData(e)
            }}>UK 9.5</button></td>
          </tr>
          <tr>
            <td><button name="U9" style={state.U9===true?{backgroundColor:"black", color:'white', border:'2px solid black',marginBottom:"4px"}:{backgroundColor:"white", border:'2px solid black',marginBottom:"4px"}}onClick={(e)=>{
              handleColor(e)
              handleData(e)
            }}>UK 10</button></td>&nbsp;
            <td><button name="U10" style={state.U10===true?{backgroundColor:"black", color:'white', border:'2px solid black',marginBottom:"4px"}:{backgroundColor:"white", border:'2px solid black',marginBottom:"4px"}}onClick={(e)=>{
              handleColor(e)
              handleData(e)
            }}>UK 10.5</button></td>
          </tr>
          <tr>
            <td><button name="U11" style={state.U11===true?{backgroundColor:"black", color:'white', border:'2px solid black',marginBottom:"4px"}:{backgroundColor:"white", border:'2px solid black',marginBottom:"4px"}}onClick={(e)=>{
              handleColor(e)
              handleData(e)
            }}>UK 11</button></td>&nbsp;
            <td><button name="U12" style={state.U12===true?{backgroundColor:"black", color:'white', border:'2px solid black',marginBottom:"4px"}:{backgroundColor:"white", border:'2px solid black',marginBottom:"4px"}}onClick={(e)=>{
              handleColor(e)
              handleData(e)
            }}>UK 11.5</button></td>
          </tr>
          <br /><br />
          
        </table>
          <button className='buy'>Buy</button><br /><br />
         
         
          <button className='buy' style={{marginTop:"-20px"}} onClick={addTocart} >Add to Cart</button>
      </div>
    </div>
  )
}
