import { Box,  Flex, Heading, Text} from '@chakra-ui/react'
import React from 'react'
import TaskModal from './AddTaskModal';
import TaskCard from './TaskCard';

export function TaskTable  ({ tasks,sprintid })  {
    const bugs = tasks?.filter(task => task.type === "bug");
  const features = tasks?.filter(task => task.type === "feature");
  const stories = tasks?.filter(task => task.type === "story");
    return(
    <Box w="100%" >
      <TaskModal id={sprintid} />
      <Heading mb="10" textAlign="center" textShadow="dark-lg">Tasks</Heading>
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
            <Box key={feature.id}>
              <TaskCard {...feature} />
            </Box>
          ))}
        </Box>
        <Box mb={4} w={["100%","33%"]}  p="2">
          <Text fontWeight="bold">Stories:</Text>
          {stories?.map((story) => (
            <Box key={story.id}>
              <TaskCard {...story} />
            </Box>
          ))}
        </Box>
    </Flex>
        
    </Box>
  )};
