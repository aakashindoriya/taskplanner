import { Box, Flex, Heading, Text} from '@chakra-ui/react'
import React from 'react'

export function TaskTable  ({ tasks })  {
    const bugs = tasks.filter(task => task.type === "bug");
  const features = tasks.filter(task => task.type === "feature");
  const stories = tasks.filter(task => task.type === "story");
    return(
    <Box>
      <Heading textAlign="center" textShadow="dark-lg">Tasks</Heading>
      <Flex justifyContent={"space-between"}>
        <Box mb={4}>
          <Text fontWeight="bold">Bugs:</Text>
          {bugs.map((bug) => (
            <Box key={bug.id}>
              <Text>{bug.description}</Text>
            </Box>
          ))}
        </Box>
        <Box mb={4}>
          <Text fontWeight="bold">Features:</Text>
          {features.map((feature) => (
            <Box key={feature.id}>
              <Text>{feature.description}</Text>
            </Box>
          ))}
        </Box>
        <Box mb={4}>
          <Text fontWeight="bold">Stories:</Text>
          {stories.map((story) => (
            <Box key={story.id}>
              <Text>{story.description}</Text>
            </Box>
          ))}
        </Box>
    </Flex>
        
    </Box>
  )};
