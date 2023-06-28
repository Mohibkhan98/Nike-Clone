import { Center, Icon, Text, useColorMode, Box,Input } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AiOutlineSearch} from 'react-icons/ai';
import { useState } from 'react';


export const Category = ({ text, link, handlePath, name, }) => {

    const { colorMode } = useColorMode();
    return (

        <Center
            h={'60px'}
            cursor={'pointer'}
            paddingX={'15px'}
            marginX={'10px'}
            _hover={{ borderBottom: `2px solid ${colorMode === 'light' ? 'black' : 'white'}` }}
        >
            <Link
                onClick={handlePath}
                to={link}
                name={name}
            >
            {text}
            </Link>
        </Center>
    );
};


export const DropdownMenu = ({ text, links }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <Box
        position="relative"
        onMouseEnter={toggleMenu}
        onMouseLeave={toggleMenu}
        cursor="pointer"
      >
        <Text
          fontSize="20px"
          fontWeight={500}
        >
          {text}
        </Text>
        {isOpen &&
          <Box
            position="absolute"
            top="60px"
            left="0"
            zIndex="1"
            bg="white"
            boxShadow="0px 8px 16px rgba(0, 0, 0, 0.1)"
          >
            {links.map((link, index) => (
              <Category
                key={index}
                name={link.name}
                text={link.text}
                link={link.link}
              />
            ))}
          </Box>
        }
      </Box>
    );
  };


export const DrawerCategory = ({ text, link, handlePath, name }) => {
    return (
        <Text fontSize={'20px'} fontWeight={500}>
            <Link
                onClick={handlePath}
                to={link}
                name={name}
            >
                {text}
            </Link>
        </Text>
    );
};


export const NavIcon = ({ iconName }) => {
    return (
        <Icon
            as={iconName}
            w={'28px'}
            h={'28px'}
            mr={'10px'}
        />
    );
};



export const SearchBox = () => {
    return (
        <Center>
            <Box
                borderRadius={50}
                w={'140px'}
                color={'#ced2d6'}
                bg={'#f5f5f5'}
                textAlign={'left'}
                p={'4x,10px,3px,9px'}
                _hover={{ bg: '#ececec', color: 'black' }}
                cursor={'text'}
            >
                <Center justifyContent={'left'} >
                    <NavIcon iconName={AiOutlineSearch} />
                    <Input  placeholder='Search'
                        style={{
                            border: 'none',
                            outline: 'none',
                            boxShadow: 'none',
                        }}
                        _focus={{
                            border: '1px solid gray',
                        }} />
                </Center>
            </Box>
        </Center>
    );
};

