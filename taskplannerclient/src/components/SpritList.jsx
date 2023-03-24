import { Heading, List, ListItem } from "@chakra-ui/react";


export default function SprintList ({ sprints, onSprintClick }) {
    
    return (
    <>
    <Heading textAlign="center" textShadow="dark-lg" >Sprint</Heading>
    <List textAlign={"center"} rowGap="20">
      {sprints.map((sprint, index) => (
        <ListItem
            borderEndRadius={"3xl"}
            borderBottom={"1px solid rgb(96, 165, 250)"}
            p="5%"
          key={sprint.id}
          cursor="pointer"
          onClick={() => onSprintClick(sprint)}
        >
          {sprint.name}
        </ListItem>
      ))}
    </List>
    </>
  )};