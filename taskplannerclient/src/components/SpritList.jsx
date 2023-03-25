import { Flex, Heading, List, ListItem } from "@chakra-ui/react";
import {MdOutlineDateRange} from "react-icons/md"

export default function SprintList ({ sprints, onSprintClick }) {
    
    return (
    <>
    <Heading textAlign="center" textShadow="dark-lg" >Sprint</Heading>
    <List textAlign={"center"} rowGap="20">
      {sprints?.map((sprint, index) => (
        <ListItem
            borderEndRadius={"3xl"}
            borderBottom={"1px solid rgb(96, 165, 250)"}
            p="5%"
          key={sprint._id}
          cursor="pointer"
          onClick={() => onSprintClick(sprint)}
        >
          {sprint.name}
          <Flex fontSize="x-small" justify={"space-between"}>
            <label ><MdOutlineDateRange/>{sprint.startDate.substring(0, 10)}</label>
            <label ><MdOutlineDateRange/>{sprint.endDate?.substring(0, 10)||"-"}</label>
          </Flex>

        </ListItem>
      ))}
    </List>
    </>
  )};