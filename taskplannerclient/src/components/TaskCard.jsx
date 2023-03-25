import { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { EditIcon, TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import ChangeTaskModal from "./EditTask";

const TaskCard = ({ name, assignee, description, status ,_id}) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const textBgColor = useColorModeValue("gray.100", "gray.700");

  return (
    <Box
      bg={status==="todo"?"red.100":status==="in-progress"?"orange.100":"green.100"}
      borderWidth="1px"
      borderRadius="lg"
      fontSize={"small"}
      w="100%"
      p={4}
      boxShadow="md"
      _hover={{ boxShadow: "lg" }}
    >
      <Flex justifyContent="space-between" alignItems="center" mb={2}>
        <Heading as="h3" size="md">
          {name}
        </Heading>
       <ChangeTaskModal assignee={assignee} status={status} _id={_id}/>
      </Flex>
      <Flex mb={0.5}>
        <Text fontWeight="bold" mr={2}>
          Assignee:
        </Text>
        <Text>{assignee}</Text>
      </Flex>
      <Flex mb={0.5}>
        <Text fontWeight="bold" mr={2}>
          Status:
        </Text>
        <Text>{status}</Text>
      </Flex>
      <flex bg={textBgColor} p={2} mb={0.5}>
        <Text>
          {showDetails ? description : `${description.split("\n")[0]}...`}
        </Text>
        <IconButton
          aria-label={showDetails ? "Hide details" : "Show details"}
          icon={showDetails ? <TriangleUpIcon /> : <TriangleDownIcon />}
          variant="ghost"
          size="sm"
          onClick={handleToggleDetails}
          mt={0.5}
        />
      </flex>
    </Box>
  );
};

export default TaskCard;
