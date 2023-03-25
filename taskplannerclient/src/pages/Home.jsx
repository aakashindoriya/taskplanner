import { Box, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import SprintList from "../components/SpritList";
import { TaskTable } from "../components/TaskTable";
import {useDispatch, useSelector} from "react-redux"
import { getSprints } from "../redux/actions/sprint.actions";
import {useNavigate} from "react-router-dom"
const Home = () => {
    const activeSprinitIndex=localStorage.getItem("activeid")||0
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
     setSelectedSprint({...sprint.sprint[activeSprinitIndex]})
    }
  },[sprint.sprint])
  
    return (
      <Flex  direction={["column","row","row"]} p="10" >
        <Box 
        overflowY={"scroll"}
         width={["100","20%"]}
         pos={["static","sticky"]}
         zIndex="5"
         top={["","90px"]} borderRight={"2px solid rgb(96, 165, 250)"} 
         boxShadow={"base"}
         h="80vh"
         sx={{
          "-ms-overflow-style": "none",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none"
          }}}
         >
          <SprintList
            activeid={selectedSprint._id}
            sprints={sprint.sprint}
            onSprintClick={(sprint) => setSelectedSprint(sprint)}
          />
        </Box>
        <Box width={["100%","80%"]}  pl={4}>
          <TaskTable tasks={selectedSprint.tasks} sprintid={selectedSprint._id} />
        </Box>
      </Flex>
    );
  };
  
  export default Home;
  
  
  
  
  
  
  