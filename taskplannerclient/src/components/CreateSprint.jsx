import React from 'react'
import { useState } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useDispatch } from 'react-redux';
import { createNewSprint } from '../redux/actions/sprint.actions';
let obj={
  name:"",
  startDate:"",
  endDate:""
}
export default function CreateSprint() {
    const [data,setData]=useState(obj)
    const dispatch=useDispatch()
    function handleInputChange(e){
      setData({...data,[e.target.name]:e.target.value})
    }
    function handleSubmit(){
      dispatch(createNewSprint({...data}))
      setData({...obj})
    }
    const [isOpen, setIsOpen] = useState(false);
  
const toggleModal = () => {
  setIsOpen(!isOpen);
};
  return (
    <>
        <Button
        colorScheme="blue"
        variant="outline"
        onClick={toggleModal}>Create Sprint</Button>
        <Modal isOpen={isOpen} onClose={toggleModal}>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>Create A new Sprint</ModalHeader>
    <ModalBody>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input placeholder="Enter name" name="name" value={data.name} onChange={handleInputChange} />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Start date</FormLabel>
        <Input type="date" name="startDate" value={data.startDate} onChange={handleInputChange} />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>End date</FormLabel>
        <Input type="date" name="endDate" value={data.endDate} onChange={handleInputChange} />
      </FormControl>
    </ModalBody>
    <ModalFooter>
      <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
        Create
      </Button>
      <Button onClick={toggleModal}>Cancel</Button>
    </ModalFooter>
  </ModalContent>
</Modal>
    </>
  )
}
