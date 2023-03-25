import { Box, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import SprintList from "../components/SpritList";
import { TaskTable } from "../components/TaskTable";
import {useDispatch, useSelector} from "react-redux"
import { getSprints } from "../redux/actions/sprint.actions";
import {useNavigate} from "react-router-dom"
  const Home = () => {
    const [selectedSprint, setSelectedSprint] = useState({});
    const navigate=useNavigate()
    const auth=useSelector(s=>s.auth)
    const sprint=useSelector(s=>s.sprint)
    let dispatch=useDispatch()

  useEffect(()=>{
    if(auth.isAuth){
      dispatch(getSprints())
    }else{
      navigate("/login")
    }
  },[auth.isAuth])
  useEffect(()=>{
    if(sprint.sprint.length>=1){
     setSelectedSprint({...sprint.sprint[0]})
    }
  },[sprint.sprint])
  
    return (
      <Flex direction={["column","row","row"]} p="10" h="90vh" overflowY={"scroll"}>
        <Box width={["100","20%"]} pos={["static","sticky"]} top="0%" borderRight={"2px solid rgb(96, 165, 250)"} boxShadow={"base"}>
          <SprintList
            activeid={selectedSprint._id}
            sprints={sprint.sprint}
            onSprintClick={(sprint) => setSelectedSprint(sprint)}
          />
        </Box>
        <Box width={["100%","80%"]} pl={4}>
          <TaskTable tasks={selectedSprint.tasks} sprintid={selectedSprint._id} />
        </Box>
      </Flex>
    );
  };
  
  export default Home;
  
  
  
  
  
  
  