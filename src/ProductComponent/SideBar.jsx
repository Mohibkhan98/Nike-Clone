import React,{useState,useEffect} from "react";
import { Checkbox, CheckboxGroup, Stack,h2 } from "@chakra-ui/react";
import { Select } from '@chakra-ui/react'
import './styleprod.css';
import "./Sidebar.css";
import { Icon } from '@chakra-ui/react'
import { PhoneIcon, AddIcon, WarningIcon,ChevronUpIcon,ChevronDownIcon} from '@chakra-ui/icons'
import { ActionShoes } from "../redux/ProductComponentRedux/ProductComponentAction";
import store from "../redux/store";
import {useSearchParams} from "react-router-dom"
import { ActionFilter } from "../redux/ProductComponentRedux/ProductComponentAction";
import axios from "axios";

// The default icon size is 1em (16px)


export default function SideBar() {

  const [state,setState]=useState({
      Gender:"",
      brand:"",
      color:""
      
  })

 
    useEffect(()=>{
    store.dispatch(ActionShoes(state.Gender,state.brand,state.color))
    },[state])
  
  

  var styled={
   
    marginLeft:"10px",
   
    height:"3000px"
  }
  const CircleIcon = (props) => (
    <Icon viewBox='0 0 200 200' {...props}>
      <path
        fill='currentColor'
        d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
      />
    </Icon>
  )

  function handleChangeGender(value){
        
         store.dispatch(ActionShoes(value))
  }

  function handleChangeBrand(value){
    
    store.dispatch(ActionShoes(value))
}





 let [toggle,setToggle]=useState(true)
 let [toggle2,setToggle2]=useState(true)
 let [toggle3,setToggle3]=useState(true)
 let [toggle4,setToggle4]=useState(true)



 
  return (
    <div style={styled}>
    <h2 className="h2Shoes">Shoes</h2>
   
    <div onClick={()=>setToggle(!toggle)} style={{display:"flex",justifyContent:"space-around",backgroundColor:"#F8F8F8",color:"black",width:"92%",marginLeft:"10px",marginBottom:"10px",cursor: "pointer"}}>
    <h3 className="TagClass"  >Gender</h3> {toggle? <Icon w={8} h={8} as={ChevronUpIcon}  /> : <Icon w={8} h={8} as={ChevronDownIcon}/>}
    </div>{
     toggle? <Stack  direction='column' pl={10} mb="10px">
      <Checkbox  size='md' colorScheme='cyan'  onChange={()=>setState({...state,Gender:"Men"})}  >
        Men
      </Checkbox>
      <Checkbox size='md' colorScheme='cyan'   onChange={()=>setState({...state,Gender:"Women"})}  >
        Women
      </Checkbox>
      <Checkbox  size='md' colorScheme='cyan' >
        Unisex
      </Checkbox>
    </Stack> : null

    }
    


    <div onClick={()=>setToggle2(!toggle2)} style={{display:"flex",justifyContent:"space-around",backgroundColor:"#F8F8F8",color:"black",width:"92%",marginLeft:"10px",marginBottom:"10px",cursor: "pointer"}}>
    <h3 className="TagClass"  >Brand</h3> {toggle2? <Icon w={8} h={8} as={ChevronUpIcon}  /> : <Icon w={8} h={8} as={ChevronDownIcon}/>}
    </div>
    {
      toggle2?  <Stack  direction='column' pl={10} mb="10px">
      <Checkbox  size='md' colorScheme='cyan' onChange={()=>setState({...state,brand:"Jordan"})} >
        Jordan
      </Checkbox>
      <Checkbox size='md' colorScheme='cyan' onChange={()=>setState({...state,brand:"Air"})} >
       Nike Air
      </Checkbox>
      <Checkbox  size='md' colorScheme='cyan'  >
        Nike Lab
      </Checkbox>
      <Checkbox  size='md' colorScheme='cyan'  >
      Nike By You
    </Checkbox>
    </Stack>:null
    }
  



<div onClick={()=>setToggle3(!toggle3)} style={{display:"flex",justifyContent:"space-around",backgroundColor:"#F8F8F8",color:"black",width:"92%",marginLeft:"10px",marginBottom:"10px",cursor: "pointer"}}>
<h3 className="TagClass"  >Color</h3> {toggle3? <Icon w={8} h={8} as={ChevronUpIcon}  /> : <Icon w={8} h={8} as={ChevronDownIcon}/>}
</div>
{
  toggle3?<div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",marginLeft:"20px",marginRight:"20px",marginBottom:"10px"}}>
  <div>
 <CircleIcon boxSize={10} className="firstCircle" color='black' onClick={()=>setState({...state,color:"black"})} />
 <p>Black</p>
 </div>
 <div>
 <CircleIcon boxSize={10} className="firstCircle" color='#DC7633' onClick={()=>setState({...state,color:"brown"})} />
 <p>Brown</p>
 </div>
 <div>
 <CircleIcon boxSize={10} className="firstCircle" color='#ECF0F1  '  onClick={()=>setState({...state,color:"white"})} />
 <p>White</p>
 </div>
 <div>
 <CircleIcon boxSize={10} className="firstCircle" color='red' onClick={()=>setState({...state,color:"red"})} />
 <p>Red</p>
 </div>
 <div>
 <CircleIcon boxSize={10} className="firstCircle" color='blue.400' onClick={()=>setState({...state,color:"blue"})} />
 <p>Blue</p>
 </div>
 <div>
 <CircleIcon boxSize={10} className="firstCircle" color='purple.500' onClick={()=>setState({...state,color:"purple"})} />
 <p>Purple</p>
 </div>
 <div>
 <CircleIcon boxSize={10} className="firstCircle" color='#FF7F50' onClick={()=>setState({...state,color:"orange"})} />
 <p>Orange</p>
 </div>
 <div>
 <CircleIcon boxSize={10} className="firstCircle" color='green.300' onClick={()=>setState({...state,color:"green"})} />
 <p>Green</p>
 </div>
 <div>
 <CircleIcon boxSize={10} className="firstCircle" color='yellow.300' onClick={()=>setState({...state,color:"yellow"})} />
 <p>Yellow</p>
 </div>
</div>:null
}



<div onClick={()=>setToggle4(!toggle4)} style={{display:"flex",justifyContent:"space-around",backgroundColor:"#F8F8F8",color:"black",width:"92%",marginLeft:"10px",marginBottom:"10px",cursor: "pointer"}}>
<h3 className="TagClass"  >By Price</h3> {toggle4? <Icon w={8} h={8} as={ChevronUpIcon}  /> : <Icon w={8} h={8} as={ChevronDownIcon}/>}
</div>
{
  toggle4? <Stack  direction='column' pl={10} mb="10px">
  <Checkbox  size='md' colorScheme='cyan'  >
    Under Rs.10,000
  </Checkbox>
  <Checkbox size='md' colorScheme='cyan' >
  Rs.10,000 - Rs.15,000
  </Checkbox>
  <Checkbox  size='md' colorScheme='cyan'  >
   Over Rs.15,000
  </Checkbox>
</Stack>:null
}
  


    
    </div>
  );
}
