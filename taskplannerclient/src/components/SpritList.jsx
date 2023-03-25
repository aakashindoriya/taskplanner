import { Box, Flex, Heading, List, ListItem } from "@chakra-ui/react";
import {MdOutlineDateRange} from "react-icons/md"

export default function SprintList ({ sprints, onSprintClick ,activeid}) {
    
    return (
    <Box  h="80vh" >
    <Heading mb="3" textAlign="center" fontWeight={"hairline"}  fontFamily={"fantasy"} >Sprint</Heading>
    <List textAlign={"center"} rowGap="20">
      {sprints?.map((sprint, index) => (
        <ListItem
            bg={activeid===sprint._id&&"blue.50"}
            borderEndRadius={"3xl"}
            borderBottom={"1px solid rgb(96, 165, 250)"}
            p="5%"
          key={sprint._id}
          cursor="pointer"
          onClick={() => {
            onSprintClick(sprint)
            localStorage.setItem("activeid",index)
          }}
        >
          {sprint.name}
          <Flex fontSize="x-small" justify={"space-between"}>
            <label ><MdOutlineDateRange/>{sprint.startDate.substring(0, 10)}</label>
            <label ><MdOutlineDateRange/>{sprint.endDate?.substring(0, 10)||"-"}</label>
          </Flex>

        </ListItem>
      ))}
    </List>
    </Box>
  )};