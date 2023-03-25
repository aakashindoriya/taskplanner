import { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Icon,
  IconButton,
  Tooltip,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { createNewTask } from "../redux/actions/sprint.actions";
import Autocomplete from "./Autocomplete";

const TaskModal = ({ id}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [type, setType] = useState("bug");
  const dispatch=useDispatch()
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createNewTask({id,name,description,assignee,type}))
    setIsOpen(false)
  };

  return (
    <>
    <Tooltip label="Add new Task" aria-label=''>
  
        <Button
        colorScheme={"blue"}
        as={IconButton}
        variant="outline"
        onClick={() => setIsOpen(true)}
        icon={<AddIcon /> }
        />
    </Tooltip>
  
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create new task</ModalHeader>
        <ModalBody>
          <FormControl>
            <FormLabel>Name:</FormLabel>
            <Input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Description:</FormLabel>
            <Input
              type="text"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Assignee:</FormLabel>
            <Autocomplete inputValue={assignee} setInputValue={setAssignee}/>
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Type:</FormLabel>
            <Select value={type} onChange={(event) => setType(event.target.value)}>
              <option value="bug">Bug</option>
              <option value="feature">Feature</option>
              <option value="story">Story</option>
            </Select>
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button variant="outline" mr={3} onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button colorScheme="blue" onClick={handleSubmit}>
            Create Task
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
    </>
  );
};

export default TaskModal;
