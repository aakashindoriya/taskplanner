import { Box, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import SprintList from "../components/SpritList";
import { TaskTable } from "../components/TaskTable";
import {useDispatch} from "react-redux"
import { getSprints } from "../redux/actions/sprint.actions";
const sprints = [
    {
      id: 1,
      name: "Sprint 1",
      tasks: [
        { id: 1, type: "bug", description: "Fix login bug" },
        { id: 2, type: "feature", description: "Add payment feature" },
        { id: 2, type: "feature", description: "Add payment feature" },
        { id: 2, type: "feature", description: "Add payment feature" },
        { id: 2, type: "feature", description: "Add payment feature" },
        { id: 2, type: "feature", description: "Add payment feature" },
        { id: 2, type: "feature", description: "Add payment feature" },
        { id: 2, type: "feature", description: "Add payment feature" },
        { id: 2, type: "feature", description: "Add payment feature" },
        { id: 2, type: "feature", description: "Add payment feature" },
      ],
    },
    {
      id: 2,
      name: "Sprint 2",
      tasks: [
        { id: 3, type: "story", description: "Create homepage layout" },
        { id: 4, type: "bug", description: "Fix search bug" },
      ],
    },
  ];
  const Home = () => {
    let dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getSprints())
  })
    const [selectedSprint, setSelectedSprint] = useState(sprints[0]);
  
    return (
      <Flex  p="10" h="90vh" overflowY={"scroll"}>
        <Box width="20%" borderRight={"2px solid rgb(96, 165, 250)"} boxShadow={"base"}>
          <SprintList
            sprints={sprints}
            onSprintClick={(sprint) => setSelectedSprint(sprint)}
          />
        </Box>
        <Box width="80%" pl={4}>
          <TaskTable tasks={selectedSprint.tasks} />
        </Box>
      </Flex>
    );
  };
  
  export default Home;
  
  
  
  
  
  
  