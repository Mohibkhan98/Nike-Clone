import {
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Icon,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { BiMenu } from "react-icons/bi";
import { DrawerCategory } from "./CategoryAndIcon";

export const SideDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Icon w={"28px"} h={"28px"} mr={"10px"} onClick={onOpen} as={BiMenu} />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Nike</DrawerHeader>
          <Divider />
          <DrawerBody>
          <VStack gap={"30px"} mt={"40px"} onClick={onClose}>
              <DrawerCategory
               
                name={"/"}
                text={"Home"}
                link={"/"}
              />
              <DrawerCategory
                
                name={"men"}
                text={"Men"}
                link={"/men"}
              />
              <DrawerCategory
                
                name={"women"}
                text={"Women"}
                link={"women"}
              />
              <DrawerCategory
                
                name={"kids"}
                text={"Kids"}
                link={"/kids"}
              />
              <DrawerCategory
                
                name={"allProducts"}
                text={"All Products"}
                link={"/allProducts"}
              />
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
