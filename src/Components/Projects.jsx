import { Box, SimpleGrid,Image,Text, Heading,Link,Stack,ButtonGroup,} from "@chakra-ui/react";




export default function Projects(){

    const projects = [
        {
            name:"Retax CRM",
            image:"./Images/retaxcrm.png",
            description:"CRM software to streamline processes, enhance user experience, and maximize sales opportunities",
            github:"https://github.com/akashp369/RetaxClone/tree/main/retax-clone",
            live:"https://retaxcrm.netlify.app/",
            techStack : "ReactJS | ChakraUI | REDUX | JAVASCRIPT | CSS"
        },
        {
            name:"Tata1MG.com-Clone",
            image:"./Images/tata1mg.png",
            description:"Tata's leading ecommerce website, where people can explore and buy pharma products.",
            github:"https://github.com/pranshushuklagithub/tata1mg-clone",
            live:"https://tata1mg-clone-project.netlify.app/",
            techStack : "HTML | CSS | JAVASCRIPT "
        },
        {
            name:"Bluefly.com",
            image:"./Images/bluefly.png",
            description:"An e-commerce website for female users where they can explore and buy high-end clothes and accessories.",
            github:"https://github.com/Shreyashnaveenmasai/Team-4-Bluefly",
            live:"https://frabjous-jelly-bb5555.netlify.app/",
            techStack : "HTML | CSS | JAVASCRIPT"
        },
        {
            name:"Portfolio",
            image:"./Images/portfolio.png",
            description:"A website where prospect recruiter can see the details about the person.",
            github:"https://github.com/akashp369/akashp369.github.io",
            live:"https://akashp369.github.io/",
            techStack : "ReactJS | ChakraUI | JAVASCRIPT | CSS "
        }
        
    ]
   

    return <Box id="projects" p="6%" w="100%">
        <Heading id="user-detail-name" fontSize={["xl","2xl","3xl"]} mb="2%" > My Projects</Heading>
        <SimpleGrid  w="100%" textAlign="left" p="4%" gap ="1%" gridTemplateColumns={["repeat(1,1fr)","repeat(1,1fr)","repeat(2,1fr)"]} m="auto" className="project-card" >
        
        {
            projects.map((e)=>{
                return (

        <Box w="90%"  boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px" className="project-card" bg="white" alignItems="center" borderRadius="2%" p="3%" m="auto">
                <Box p="2%" >
                    <Image src={e.image} alt={e.name} borderRadius='lg' className="project-title"/>
                    <Stack mt='3' spacing='1'>
                        <Heading  fontSize={["13px","17px","25px"]} mt="3%" mb="3%" className="project-title">{e.name}</Heading>
                        <Text fontSize={["10px","14px","17px"]} fontWeight="bold" mt="1%"  className="project-description">{e.description}</Text>
                        <Text fontSize={["10px","13px","15px"]} fontWeight="bold" mt="1%"  className="project-tech-stack">{e.techStack}</Text>
                    </Stack>
                </Box>
            
            <Box p="2%">
                <ButtonGroup spacing='3'>
                <Link href={e.github} isExternal><Box  as ="Button"  bg='teal' w ={["40px","60px","80px"]} h={["20px","30px","40px"]} fontSize={["7px","10px","17px"]}  _hover={{bg:"green.300",color:"black"}}  color="white" mr="1%" className="project-github-link" borderRadius="lg">Github </Box></Link>
                <Link href={e.live} isExternal ><Box as ="Button" bg='teal' w ={["40px","60px","80px"]} h={["20px","30px","40px"]} fontSize={["7px","10px","17px"]} className="project-deployed-link"  color="white" _hover={{bg:"green.300",color:"black"}} borderRadius="lg">Live</Box></Link>
                </ButtonGroup>
            </Box>
        </Box>
        )})
        }

        </SimpleGrid>
    </Box>
}
