import { Button, Container, Heading, VStack } from '@chakra-ui/react'
import React from 'react'
import { RiErrorWarningFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
const Notfound = () => {
  return (
 <Container h={"100vh"}>
<VStack justifyContent={"center"} h="full" spacing={"4"}>
  <RiErrorWarningFill size={"5rem"}/>
  <Heading my={"8"} textAlign="center" >
   PAGE NOT FOUND
  </Heading>
  <Link to="/"><Button textTransform={"capitalize"} variant={"ghost"} colorScheme="blue">go to home</Button></Link>
</VStack>
 </Container>
  )
}

export default Notfound