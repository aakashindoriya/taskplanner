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
export default function CreateSprint() {
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
        <Input placeholder="Enter name" />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Start date</FormLabel>
        <Input type="date" />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>End date</FormLabel>
        <Input type="date" />
      </FormControl>
    </ModalBody>
    <ModalFooter>
      <Button colorScheme="blue" mr={3}>
        Create
      </Button>
      <Button onClick={toggleModal}>Cancel</Button>
    </ModalFooter>
  </ModalContent>
</Modal>
    </>
  )
}
