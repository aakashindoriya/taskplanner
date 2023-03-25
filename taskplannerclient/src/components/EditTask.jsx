import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  IconButton,
} from "@chakra-ui/react";
import {useDispatch} from "react-redux"
import { EditIcon } from "@chakra-ui/icons";
import Autocomplete from "./Autocomplete";
import { updateTask } from "../redux/actions/sprint.actions";

const ChangeTaskModal = ({ assignee, status ,_id}) => {
  const [isOpen, setIsOpen] = useState(false);
  const[inputValue,setInputValue]=useState(assignee)
  const dispatch=useDispatch()
  const [newStatus, setNewStatus] = useState(status);
  const handleStatusChange = (event) => {
    setNewStatus(event.target.value);
  };

  const handleSubmit = () => {
    dispatch(updateTask({status:newStatus,assignee:inputValue,id:_id}))
    setIsOpen(false);
  };

  return (
    <>
      <IconButton
        aria-label="Edit task"
        icon={<EditIcon />}
        size="sm"
        onClick={() => setIsOpen(true)}
        mr={2}
      />
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Change Task</ModalHeader>
          <ModalBody>
            <FormControl mb={4}>
              <FormLabel>Assignee</FormLabel>
              <Autocomplete inputValue={inputValue} setInputValue={setInputValue}/>
            </FormControl>
            <FormControl>
              <FormLabel>Status</FormLabel>
              <Select placeholder="Select status" value={newStatus} onChange={handleStatusChange}>
                <option value="in-progress">In Progress</option>
                <option value="complete">Complete</option>
              </Select>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              Save
            </Button>
            <Button onClick={() => setIsOpen(false)}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ChangeTaskModal;
