import { Box,  Flex, Heading, Text} from '@chakra-ui/react'
import React from 'react'
import TaskModal from './AddTaskModal';
import TaskCard from './TaskCard';

export function TaskTable  ({ tasks,sprintid })  {
    const bugs = tasks?.filter(task => task.type === "bug");
  const features = tasks?.filter(task => task.type === "feature");
  const stories = tasks?.filter(task => task.type === "story");
    return(
    <Box  >
      <Flex gap="10" justifyContent={"center"}>
      <Heading mb="10" textAlign="center" fontWeight={"hairline"}  fontFamily={"fantasy"} >Tasks</Heading>
      <TaskModal id={sprintid} />
      </Flex>
      <Flex direction={["column","row","row"]} justifyContent={"space-between"} gap="2">
        <Box mb={4} w={["100%","33%"]} borderRight={["tansparent","1px solid rgb(96, 165, 250)"]} p="2">
          <Text fontWeight="bold">Bugs:</Text>
          {bugs?.map((bug) => (
            <Box key={bug._id} p="2">
              <TaskCard {...bug} />
            </Box>
          ))}
        </Box>
        <Box mb={4} w={["100%","33%"]} borderRight={["tansparent","1px solid rgb(96, 165, 250)"]} p="2">
          <Text fontWeight="bold">Features:</Text>
          {features?.map((feature) => (
            <Box key={feature.id} p="2">
              <TaskCard {...feature} />
            </Box>
          ))}
        </Box>
        <Box mb={4} w={["100%","33%"]}  p="2">
          <Text fontWeight="bold">Stories:</Text>
          {stories?.map((story) => (
            <Box key={story.id} p="2">
              <TaskCard {...story} />
            </Box>
          ))}
        </Box>
    </Flex>
        
    </Box>
  )};
