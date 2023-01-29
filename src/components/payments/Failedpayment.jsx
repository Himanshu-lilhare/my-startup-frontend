import { Button, Container, Heading, VStack } from '@chakra-ui/react'
import React from 'react'
import { RiErrorWarningFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
const Failedpayment = () => {
  return (
 <Container h={"100vh"}>
<VStack justifyContent={"center"} h="full" spacing={"4"}>
  <RiErrorWarningFill size={"5rem"}/>
  <Heading my={"8"} textAlign="center" >
    Payment Failed
  </Heading>
  <Link to="/subscribe"><Button variant={"ghost"} colorScheme="blue">TRY AGAIN</Button></Link>
</VStack>
 </Container>
  )
}

export default Failedpayment