import { useState } from "react";
import { Box, Input, InputGroup, InputLeftElement, List, ListItem } from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";
import axios from "axios";

export default function Autocomplete({inputValue,setInputValue}) {
  const [suggestions, setSuggestions] = useState([]);
  const fetchSuggestions = async (value) => {
    try {
      const response = await axios.get(`https://taskplanner-production.up.railway.app/user/${value}`);
      setSuggestions([...response.data.users]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    // Fetch suggestions from backend API based on current input value
    fetchSuggestions(value);
  };

  return (
    <InputGroup zIndex={1} >
      <InputLeftElement pointerEvents="none" children={<FaUser />} />
      <Input
        type="text"
        placeholder="Change Assignee"
        value={inputValue}
        onChange={handleInputChange}
      />
      {suggestions.length > 0 && (
        <Box bg="white" opacity={"100%"} pos="absolute" top="70%" left="30%" zIndex={2}>
          <List>
            {suggestions.map((user) => (
              <ListItem key={user._id}>
                <Box
                  px="2"
                  py="1"
                  onClick={() => {
                    setInputValue(user.username);
                    setSuggestions([]);
                  }}
                  _hover={{ bg: "gray.100", cursor: "pointer" }}
                >
                  {user.username}
                </Box>
              </ListItem>
            ))}
          </List>
        </Box>
      )}
    </InputGroup>
  );
}
