import { useEffect, useState } from "react";
import { Box, Button, IconButton, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@chakra-ui/react";
import { MdTask } from "react-icons/md";
import { useSelector } from "react-redux";
import axios from "axios"
import TaskCard from "./TaskCard";
export default function MyTasks() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks,setTasks]=useState([])
  const auth=useSelector((s)=>s.auth)
 async function HandleFetch(name){
   try {
    let res=await  axios.get(`https://taskplanner-production.up.railway.app/task/${name}`,{
        headers:{
            Authorization:JSON.parse(localStorage.getItem("auth")).token
        }
     })
     setTasks([...res.data])
   } catch (error) {
    console.log(error)
   }
     
  }
console.log(tasks)
  useEffect(()=>{
    HandleFetch(auth.username)
  },[])
  const handleIconClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
        <Button 
         as={IconButton}
         variant="outline"
         icon={<MdTask  />}
         onClick={handleIconClick}
          colorScheme="blue"
        ></Button>
      
      <Modal isOpen={isModalOpen}>
      <ModalContent>
        <ModalHeader>My Tasks</ModalHeader>
        <ModalBody>
        {tasks?.map((task)=><TaskCard {...task} />)}
        </ModalBody>
        <ModalFooter>
          <Button variant="outline" mr={3} onClick={() => setIsModalOpen(false)}>
            Close
          </Button>
        </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}





