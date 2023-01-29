import { Box, Container, Heading, VStack,Text, Button } from '@chakra-ui/react'
import React from 'react'
import { RiCheckboxCircleFill } from 'react-icons/ri'
import { NavLink } from 'react-router-dom'

const Successpayment = () => {
  return (
   <Container height={"100vh"} padding="4" >
<Heading my={"5"} textAlign="center" children="You Have   Pro Pack"/>
<VStack boxShadow={"lg"} pb="6" alignItems={"center"} borderRadius="lg">
<Box w={"full"} backgroundColor={"#3b5998"} p="4" color="white"
css={{borderRadius:"8px 8px 0 0"}}>
<Heading size={"sm"} fontWeight="medium"
children="Payment Success"/>
</Box>
<Box p={"2"}>
<VStack textAlign={"center"} px="2" mt={"4"} spacing="8" >
<Text children="Contratulation you are pro member, you have access pf premium content "/>
<Heading size={"4xl"}>
  <RiCheckboxCircleFill/>
</Heading>
</VStack>
</Box>
<NavLink to="/profile">
  <Button variant={"ghost"} colorScheme="blue">Go To Profile</Button>
</NavLink>
<Heading size={"md"}>
  Reference : {"dfhudfhu"}
</Heading>
</VStack>
   </Container>
  )
}

export default Successpayment