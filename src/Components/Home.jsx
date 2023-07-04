import { Box, Heading, Text,Image, Flex } from "@chakra-ui/react";
import { downloadResume } from "./Functions/function";

export default function Home() {
    return <Box  id="home"  p="6%" w ="100%" h={["300px","500px","720px"]}>
        <Flex  p="5%" flexWrap="wrap" alignItems="center" mt="6%" m="auto">
        <Box borderRadius="15%" w="20%" m="auto" p="1%" textAlign="left">
            <Image className="home-img" src="./Images/akash_prajapat.png" borderRadius="15%" w="100%"></Image>
        </Box>
        <Box  textAlign="left">
        <Box  w="80%"  id="user-detail-intro" m="auto">
        <Text fontSize={["xl","2xl","4xl"]} >Hi ! This is </Text>
        <Heading fontSize={["2xl","3xl","5xl"]} color="tomato" _hover={{color:"gray"}}>Akash Prajapat</Heading>
        <Text fontSize={["xl","2xl","4xl"]} fontWeight="semibold" id="user-detail-intro" >(I am a Full Stack Web Developer)</Text> 
        </Box>
        <Box w="80%"  id="user-detail-intro" m="auto" overflow="hidden">
        <Text fontSize={["md","lg","xl"]} fontWeight="semibold" id="user-detail-intro" >Here you will find the best of my work that will help you to analyse my productivity as well as capability.
        </Text>
        <a href="#resume" id="resume-link-2"><Box  as="Button" border="2px" mt="2%" className="nav-link resume" w ={["40px","60px","80px"]} h={["20px","30px","40px"]} bg="green.400" color="white" _hover={{bg:"green.300",color:"black"}}fontSize={["5px","8px","15px"]} borderRadius="xl"  id="resume-button-2" onClick={()=>{downloadResume()}}>Resume</Box></a>
        </Box>
        </Box>
    </Flex>
    </Box>
}