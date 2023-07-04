import { Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton,Button,Box,UnorderedList,ListItem, Text} from '@chakra-ui/react'


export default function Qualifications({isOpen,onClose}) {
    
    return (
      <Box>
  
        <Modal isOpen={isOpen} onClose={onClose} >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader color="teal">Qualification Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <UnorderedList>
                <Text fontSize={["md","lg","xl"]} mt="2%" color="teal" fontWeight="semibold"> Masai School </Text>
                <ListItem>Full Stack Web Developement Training From Masai School(2022-2023)</ListItem>
                <Text fontSize={["md","lg","xl"]} mt="2%" color="teal" fontWeight="semibold">Graduation</Text>
                <ListItem>B.Sc. (Computer Science) (2014-2017) Vikram University Ujjain </ListItem>
                <Text fontSize={["md","lg","xl"]} mt="2%" color="teal" fontWeight="semibold"> Higher Secondry & High School</Text>
                <ListItem>Passed 12th M.P. Board with 69% marks from Vinay Adarsh Hr. Sec. School Rewa(M.P.)</ListItem>
                <ListItem>Passed 10th M.P. Board with 72% marks from Vinay Adarsh Hr. Sec. School Rewa(M.P.)</ListItem>
                
            </UnorderedList>
              
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='teal' mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    )
  }