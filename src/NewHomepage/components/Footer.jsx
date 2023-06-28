import { Box, Center, Flex, Grid, Icon, Link, Text } from "@chakra-ui/react";
import { FaWhatsappSquare, FaYoutube,FaFacebook } from "react-icons/fa";
// import {} from ''
import { MdOutlinePersonPin } from "react-icons/md";
import { FcLike } from "react-icons/fc";
import { IconLink } from "./footer/IconLink";

const Footer = () => {
  return (
    <Box h={"300px"} bg={"black"} color={"white"} mt={"40px"}>
      <Grid
        h={"220px"}
        p={"10px"}
        templateColumns={["100%", "48% 2% 50%", "48% 2% 50%", "25% 25% 50%"]}
      >
        <Center>
          <Flex
            fontSize={["11px", "13px", "14px", "14px", "14px"]}
            gap={"10px"}
            fontWeight={600}
            flexDirection={"column"}
          >
            <Text>FIND A NEARBY STORE</Text>
            <Text>BECOME A MEMBER</Text>
            <Text>ALREADY A MEMBER</Text>
            <Text>SIGNUP FOR EMAIL</Text>
            <Text>SEND US FEEDBACK</Text>
          </Flex>
        </Center>

        <Center>
          <Flex
            display={["none", "none", "none", "flex", "flex"]}
            fontSize={"14px"}
            gap={"10px"}
            flexDirection={"column"}
            color={"gray"}
          >
            <Text color={"white"} fontWeight={600}>
              GET HELP
            </Text>
            <Text>Order Status</Text>
            <Text>Delivery</Text>
            <Text>Returns</Text>
            <Text>Payment Options</Text>
          </Flex>
        </Center>

        <Flex
          mt={"20px"}
          gap={"15px"}
          flexDirection={"row-reverse"}
          justifyContent={["center", "right", "right", "right", "right"]}
          color={"gray"}
          mr={["0px", "30px", "80px", "80px", "80px"]}
        >
          <IconLink
            icon={FaYoutube}
            link={""}
            
          />
          <IconLink
            icon={FaWhatsappSquare}
            link={""}
          />
          <IconLink
            icon={FaFacebook}
            link={""}
          />
        </Flex>
      </Grid>
      <Center h={"40px"}>
        <h4>© 2023 Nike, Inc. All Rights Reserved</h4>
        </Center>
  
    </Box>
  );
};

export default Footer;
