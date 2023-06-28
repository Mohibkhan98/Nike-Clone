import {
  Box,
  Center,
  Flex,
  Image,
  Spacer,
  Text,
  useColorMode,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  useMediaQuery,
} from "@chakra-ui/react";
import { RiHeartLine, RiShoppingBagLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import { Link } from '@chakra-ui/react'
import { nikeLogo } from "./constants/images";
import { useNavigate } from "react-router-dom";
import {  useSelector } from 'react-redux'
import { Category, NavIcon,SearchBox } from "./navbar/CategoryAndIcon";
import { SideDrawer } from "./navbar/SideDrawer";
import { useState,useEffect } from "react";
import store from "../../redux/store";




export const Navbar = () => {


// const [auth, setAuth]=useState(true)
const [details, setDe]=useState(true)

const navigate = useNavigate();
const dispatch=useDispatch();
const handlePath = () => {
  navigate("/productshoe");
};


var auth=useSelector((data)=>{
     return  data.reducerauth.isAuth
})

var text=useSelector((data)=>{
  return  data.CartNumberreducer.text
})

console.log("autttttttt",auth)


const handleLogin=()=>{
  navigate("/signIn")
}
const handleLogout=()=>{
  dispatch({ type: 'auth',payload:false })
  navigate("/signIn")
}
  const [isLargerThanSm] = useMediaQuery("(min-width: 640px)");


  // let [text,setText]=useState(0);




 
  return (
    <>
      {isLargerThanSm && (
      <Box h={"36px"} bg={"#f5f5f5"}>
        <Center
          h={"36px"}
          justifyContent={"right"}
          mr={"40px"}
          fontSize={"16px"}
          cursor={"pointer"}
        > 
        {console.log("details",details)}
          <Menu >
          <MenuButton  px={2} size='sm' bg={'transparent'}  _hover={{ bg: 'gray.400' }} onClick={handlePath}>
                Find a Store |
              </MenuButton>
          <MenuButton  px={2} size='sm' bg={'transparent'}  _hover={{ bg: 'gray.400' }}>
                Help |
              </MenuButton>
              {auth?<MenuButton  size='sm' bg={'transparent'}  _hover={{ bg: 'gray.400' }}>
                {details.fname} 
              </MenuButton>:""}

              {!auth?<MenuButton onClick={handleLogin} size='sm' bg={'transparent'}  _hover={{ bg: 'gray.400' }}>
                Sign In
              </MenuButton>:<MenuButton onClick={handleLogout} size='sm' bg={'transparent'}  _hover={{ bg: 'gray.400' }}>
                Logout
              </MenuButton>}
          
              
        </Menu> 
        </Center>
      </Box>
     )}
     

      <Flex h={"60px"} flexDirection={"row"} px={"20px"}>
        <Box w={"80px"}>
          <Link to={"/"}>
            <Image w={"80px"} h={"60px"}  src={nikeLogo} />
          </Link>
        </Box>

        <Spacer />

        <Box display={["none", "none", "flex", "flex", "flex"]}>
          <Category
            name={"/"}
            text={"New & Featured"}
            link={"/"}
          />
          <Category
            
            name={"allProducts"}
            text={"All Products"}
            link={"/productshoe"}
          />
          <Category
            
            name={"men"}
            text={"Shoes"}
            link={"/productshoe"}
          />
          <Category
            
            name={"women"}
            text={"Clothing"}
            link={"/productshoe"}
          />
          <Category
            
            name={"kids"}
            text={"Kids"}
            link={"/productshoe"}
          />
        </Box>

        <Spacer />

        <Center position={"relative"} mr={"10px"}>
          <SearchBox/>
        </Center>

        <Center position={"relative"} mr={"10px"}>
          <Link to={"/favourite"}>
            <NavIcon iconName={RiHeartLine} />
          </Link>
        </Center>

        <Center position={"relative"} mr={"10px"}>
          <Link to={"/cart"}>
            <NavIcon iconName={RiShoppingBagLine} />
            <Box
              position={"absolute"}
              top={0.5}
              right={-0.4}
              borderRadius={"50%"}
              width={"25px"}
              height={"25px"}
              textAlign={"center"}
              zIndex={-1}
              bg='#c00'
              display={"flex"}
              flexDirection="column"
              alignContent={"center"}
              justifyContent={"center"}
              color={"white"}
              opacity={0.89}
            >
              <Text>{text}</Text>
            </Box>
          </Link>
        </Center>

        <Box display={["flex", "flex", "none", "none", "none"]}>
          <Center mr={"10px"}>
            <SideDrawer  />
          </Center>
        </Box>
      </Flex>

      <Box h={["10px", "10px", "10px", "10px", "10px"]}></Box>
    </>
  );
};

export default Navbar;
