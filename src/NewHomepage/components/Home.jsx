import {
  AspectRatio,
  Box,
  Button,
  Heading,
  HStack,
  Text,
  Image,
  Grid, Link 
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import vid from "../assets/Nike-video.mp4";
import { ClothSection,} from "./home/ClothSection";
import { getClothData, getShoeData } from "../../redux/home/actions";
// import { Error } from "./loading/Error";
// import { Loading } from "./loading/Loading";


function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error, clothData, } = useSelector(
    (state) => state.homeReducer
  );
  const handleSection = () => {
    navigate("/productshoe");
  };

  const handlePath = () => {
    navigate("/productshoe");
  };

  useEffect(() => {
    dispatch(getClothData());
    dispatch(getShoeData());
  }, []);

//   return 
// loading ? (
//     // <Loading />
//     null
//   ) : error ? (
//     // <Error />
//     null
//   ) : 
// (
  return( <Box width={"100%"}>
      {/* <Box width={"89%"} m="auto" objectFit={"cover"}>
  <Image 
    src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1077,c_limit/0ee6e720-f5e4-4ef4-a8fe-9997e16879c5/nike-just-do-it.jpg"
    alt="image" style={{ marginBottom: '20px', marginTop:'0px'}}
  />
  
</Box> */}
<Box
        width={"89%"}
        m={"auto"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={["left", "left", "left", "center"]}
        justifyContent={"center"}
        mt={6}
        mb={9}
        textAlign={["left", "left", "left", "center"]}
      >
        <Box>
          <Text mb={-3}>Nike Invincible</Text>
          <Heading
            letterSpacing={"-3px"}
            fontSize={"72px"}
            fontFamily={"heading"}
          >
            FEEL IT TO BELIEVE IT
          </Heading>
          <Text>
            Introducing Lightweight ZoomX cushioning through every--run in the
            Nike Incincible 3.
          </Text>
        </Box>
        <HStack mt={5}>
          <Button
            bgColor={"black"}
            color={"white"}
            p={"6px 20px"}
            borderRadius={30}
            alignItems={"center"}
            fontWeight={0}
            _hover={{
              bgColor: "black",
            }}
            onClick={handlePath}
          >
            Shop
          </Button>
          <Button
            bgColor={"black"}
            color={"white"}
            p={"6px 20px"}
            borderRadius={30}
            alignItems={"center"}
            fontWeight={0}
            _hover={{
              bgColor: "black",
            }}
          >
            Watch
          </Button>
        </HStack>
      </Box>
      

      <Box width={"89%"} m="auto" objectFit={"cover"}>
        <AspectRatio ratio={1.92 / 1}>
          <video
            autostart="autostart"
            autoPlay="autoPlay"
            preload="auto"
            role="application"
            tabIndex="-1"
            loop={"active"}
            playsInline={"playInline"}
          >
            <source src={vid} type="video/mp4"></source>
          </video>
        </AspectRatio>
      </Box>
      <Box
        width={"89%"}
        m={"auto"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={["left", "left", "left", "center"]}
        justifyContent={"center"}
        mt={6}
        mb={9}
        textAlign={["left", "left", "left", "center"]}
      >
        <Box>
          <Text mb={-3}>Phantom GX 'Link'</Text>
          <Heading
            letterSpacing={"-2px"}
            fontSize={"68px"}
            fontFamily={"heading"}
            fontWeight={"bold"}
          >
           MORE COLOR.
          </Heading>
          <Heading
            letterSpacing={"-2px"}
            fontSize={"68px"}
            fontFamily={"heading"}
            fontWeight={"bold"}
          >
           MORE PRECISION.
          </Heading>
          <Text>
           Phontom GX's precision, powered by Gripknit.
          </Text>
        </Box>
        <HStack mt={5}>
          <Button
            bgColor={"black"}
            color={"white"}
            p={"6px 20px"}
            borderRadius={30}
            alignItems={"center"}
            fontWeight={0}
            _hover={{
              bgColor: "black",
            }}
            onClick={handlePath}
          >
            Shop
          </Button>
        </HStack>
      </Box>
      <Text
        m={"auto"}
        width={"89%"}
        fontSize={"24px"}
        textAlign={"left"}
        fontWeight={"600"}
        mb={[-5, 0, -5, "-87px", 15]}
      >
        Featuerd
      </Text>
      <Box
        display={"flex"}
        flexDirection={["column", "column", "row", "row"]}
        alignItems={"flex-start"}
        justifyContent={"space-between"}
        width={"90%"}
        m={"auto"}
        maxHeight={"max-content"}
      >
        <Box
          background={
            "url(https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_540,c_limit/d94bfa7e-9357-406a-a124-1940712dfa0b/nike-just-do-it.png) center/contain no-repeat"
          }
          width={["100%", "100%", "50%", "50%"]}
          height={["280px", "380px", "400px", "650px"]}
          minHeight={"300px"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box
            color={"white"}
            wordWrap={"break-word"}
            width={["100%", "80%", "90%", "90%"]}
            height={["80%", "70%", "50%", "64%", "85%"]}
            textAlign="left"
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"flex-end"}
          >
            <Text>Valentine's Day Looks</Text>
            <Text fontSize={"24px"}>Partner Up and Reach those Goals</Text>
            <HStack mt={5}>
              <Button
                fontWeight={0}
                bgColor={"white"}
                p={"6px 20px"}
                borderRadius={20}
                color={"black"}
                alignItems={"center"}
                onClick={handlePath}
              >
                Explore
              </Button>
              <Button
                fontWeight={0}
                bgColor={"white"}
                p={"6px 20px"}
                borderRadius={20}
                color={"black"}
                alignItems={"center"}
                onClick={handlePath}
              >
                Top 10 Gifts
              </Button>
            </HStack>
          </Box>
        </Box>
        <Box
          background={
            "url(https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_706,c_limit/020f557e-d8f2-40f3-8043-1e559b13d808/nike-just-do-it.jpg) center/contain no-repeat"
          }
          width={["100%", "100%", "50%", "50%"]}
          height={["280px", "380px", "400px", "650px"]}
          minHeight={"300px"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box
            color={"white"}
            wordWrap={"break-word"}
            width={["100%", "80%", "90%", "90%"]}
            height={["80%", "70%", "50%", "64%", "85%"]}
            textAlign="left"
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"flex-end"}
          >
            <Text>Nike App Early Access</Text>
            <Text fontSize={"24px"}>Nike Air Dunk Jumbo</Text>
            <HStack mt={5}>
              <Button
                fontWeight={0}
                bgColor={"white"}
                p={"6px 20px"}
                borderRadius={20}
                color={"black"}
                alignItems={"center"}
                onClick={handlePath}
              >
                Get It First
              </Button>
            </HStack>
          </Box>
        </Box>
      </Box>

      <Text
        m={"auto"}
        width={"89%"}
        fontSize={"24px"}
        textAlign={"left"}
        fontWeight={"600"}
        mb={[-5, 0, -5, "-87px", 15]}
      >
        Don't Miss It
      </Text>

      <Box
        display={"flex"}
        flexDirection={[ "row", "row"]}
        alignItems={"flex-start"}
        
        width={"90%"}
        m={"auto"}
        objectFit={"cover"}
        maxHeight={"max-content"}
      >
         <Box
          background={
            "url(https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1423,c_limit/da8d5c07-8ee5-4c12-a715-eff2a71a2c69/nike-just-do-it.png) center/contain no-repeat"
          }
          width={["100%"]}
          height={["280px", "380px", "400px", "700px"]}
          minHeight={"300px"}
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          objectFit={"cover"}
        >
          <Box
            color={"white"}
            wordWrap={"break-word"}
            width={["100%", "80%", "90%", "90%"]}
            height={["80%", "70%", "50%", "64%", "85%"]}
            textAlign="left"
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"flex-end"}
          >
            <Text>Nike Air Deldon 'Hodies'</Text>
            <Text fontSize={"100px"} fontWeight={'1000'}>IT'S ON  </Text>
            <HStack mt={2}>
              <Button
                fontWeight={0}
                bgColor={"white"}
                p={"6px 20px"}
                borderRadius={20}
                color={"black"}
                alignItems={"center"}
                onClick={handlePath}
              >
                Explore
              </Button>
            </HStack>
          </Box>
        </Box>

        </Box>
         
        <Text
        m={"auto"}
        width={"89%"}
        fontSize={"24px"}
        textAlign={"left"}
        fontWeight={"600"}
        mb={[-5, 10, -5, "-87px", 11]}
      >
        Kid's Shop
      </Text>

      <Box
        display={"flex"}
        flexDirection={[ "row", "row"]}
        alignItems={"flex-start"}
        
        width={"90%"}
        m={"auto"}
        objectFit={"cover"}
        maxHeight={"max-content"}
      >
         <Box
          background={
            "url(https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1423,c_limit/50fb7814-ca5a-4ffc-940f-c9c18c911ff6/nike-just-do-it.jpg) center/contain no-repeat"
          }
          width={["100%"]}
          height={["280px", "380px", "400px", "700px"]}
          minHeight={"300px"}
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          objectFit={"cover"}
        >
          <Box
            color={"white"}
            wordWrap={"break-word"}
            width={["100%", "80%", "90%", "90%"]}
            height={["80%", "70%", "50%", "64%", "85%"]}
            textAlign="left"
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"flex-end"}
          >
            <HStack mt={0}>
              <Button
                fontWeight={0}
                bgColor={"white"}
                p={"6px 20px"}
                borderRadius={20}
                color={"black"}
                alignItems={"center"}
                onClick={handlePath}
              >
                Shop Now
              </Button>
            </HStack>
          </Box>
        </Box>

        </Box>


      <Box>
        {clothData.map((data, index) => (
          <ClothSection handleSection={handleSection} key={index} {...data} />
        ))}
      </Box>
      <Box width={"70%"} m="auto" objectFit={"cover"}>
      <Grid
  templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }}
  gap={4}
  m='auto'
>
  <Heading size="md">Icon</Heading>
  <Heading size="md">Shoes</Heading>
  <Heading size="md">Clothing</Heading>
  <Heading size="md">Kids</Heading>
  <Link onClick={handlePath} >Air Force 1</Link>
  <Link onClick={handlePath} >All Shoes</Link>
  <Link onClick={handlePath} >All Clothing</Link>
  <Link onClick={handlePath} >Infant & Toddler Shoes</Link>
  <Link onClick={handlePath} >Huarache</Link>
  <Link onClick={handlePath} >Custom Shoes</Link>
  <Link onClick={handlePath} >Modest Wear</Link>
  <Link onClick={handlePath} >Kid's Shoes</Link>
  <Link onClick={handlePath} >Air Max 90</Link>
  <Link onClick={handlePath} >Jordhan Shoes</Link>
  <Link onClick={handlePath} >Hoddies & Pullover</Link>
  <Link onClick={handlePath} >Kid's Jordhan Shoes</Link>
  <Link onClick={handlePath} >Air Max 95</Link>
  <Link onClick={handlePath} >Running Shoes</Link>
  <Link onClick={handlePath} >Shirts & Tops</Link>
  <Link onClick={handlePath} >Kid's BasketBall Shoes</Link>
  
</Grid>

      </Box>
    </Box>
  );
  
}
export default Home;
