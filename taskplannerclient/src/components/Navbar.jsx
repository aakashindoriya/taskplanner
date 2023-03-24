import { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Spacer,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  HStack,
} from "@chakra-ui/react";
import { CgProfile } from 'react-icons/cg';
import { useNavigate } from "react-router-dom";
import CreateSprint from "./CreateSprint";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
const navigate=useNavigate()
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Box bg="white" px="4" py="2" pos="sticky" top="0px" >
      <Flex alignItems="center">
        <Text 
        onClick={()=>navigate("/")}
        _hover={{cursor:"pointer"}}
        fontWeight="bold" fontSize="lg" color="blue.500">
          Task Manager
        </Text>
        <Spacer />
        <HStack spacing="4">
            <Menu>
                <MenuButton
                as={IconButton}
                variant="outline"
                icon={<CgProfile/>}
                onClick={toggleMenu}
                 colorScheme="blue"/>
                <MenuList>
                <MenuItem onClick={()=>navigate("/signup")}>Sign-Up</MenuItem>
                <MenuItem onClick={()=>navigate("/login")}>Log-In</MenuItem>
                </MenuList>
            </Menu>
          <CreateSprint />
        </HStack>
      </Flex>
    </Box>
  );
}

export default Navbar;
