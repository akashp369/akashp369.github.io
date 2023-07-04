import { Box,Text,Heading,Image, Flex, useDisclosure,Link } from "@chakra-ui/react";
import Qualifications from "./Qualifications";



export default function About() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return <Box p="6%" textAlign="center" id="about" className="about section" w="100%">
        <Heading id="user-detail-name" fontSize={["xl","2xl","3xl"]} mb="2%"> About me</Heading>
        <Flex w="100%" m="auto" mb="2%" id="about" className="about section"  alignItems="center" justify="space-between" gap ="2%" flexWrap={["wrap","wrap","nowrap"]} p="2%">
        <Box w="40%" m="auto">
            <Image src="./Images/aboutcover.png" w="100%" borderRadius="2xl" m="auto"></Image>
        </Box>
        <Box w="60%" textAlign="left" m="auto">
        <Box  w="100%"   m="auto">
            
        <Text fontSize={["lg","xl","3xl"]}>I am  </Text>
        <Heading id="user-detail-name" fontSize={["md","lg","3xl"]}> A Software Developer</Heading>
        
        </Box>
        <Box  w = "100%" fontSize={["sm","md","lg"]} m="auto" mt="2%"  id="user-detail-intro">
            <Text>A passionate Full Stack Web developer with considerable technical skills who possess self-discipline and the ability to work with minimum supervision. Skilled in ReactJS, NodeJS, Express.Js, MongoDB, HTML, CSS, JavaScript, problem- solving and execution of software tasks. Looking forward to join a progressive organization with opportunities to work on significant projects & technologies.</Text>
        </Box>
        <Box as="Button" m="auto" borderRadius="lg" overflow="-moz-initial" onClick={onOpen} ml="25%" mt="5%" w ={["85px","105px","125px"]} h={["20px","30px","40px"]} fontSize={["5px","7px","12px"]}  _hover={{bg:"green.300",color:"black"}} bg="teal" color="white">See My Qualifications</Box>
        {isOpen?<Qualifications onOpen={onOpen} onClose={onClose} isOpen={isOpen}/>:false}
        </Box>
    </Flex>
    <Flex w="40%" justify="center" gap="5%" m="auto" id="about_contact">
                
    <Link href="https://github.com/akashp369" isExternal><Box as="Button" borderRadius="lg" w ={["40px","60px","80px"]} h={["20px","30px","40px"]} fontSize={["7px","10px","17px"]}  _hover={{bg:"green.300",color:"black"}} bg="teal" color="white" id="contact-github">Github </Box></Link>
    <Link href="https://www.linkedin.com/in/akash-prajapat-09213824b/" isExternal><Box as="Button" borderRadius="lg" w ={["40px","60px","80px"]} h={["20px","30px","40px"]} fontSize={["7px","10px","17px"]}  _hover={{bg:"green.300",color:"black"}} bg="teal" color="white" id="contact-linkedin">Linkedin</Box></Link>
                
    </Flex>
    
    </Box>
}