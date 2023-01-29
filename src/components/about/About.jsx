import {
  Avatar,
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { RiSecurePaymentFill } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import "./about.css"


const TandC =({termsandcondition})=>{
  return <>
    <Box>
        <Heading my={"4"} size={"md"} children="Terms And Condition" textAlign={"center"}
         />
        <Box height={"sm"}  overflowY="scroll">
        <Text textAlign={"center"} letterSpacing="1px">
          {termsandcondition}
        </Text>
        </Box>
       <Heading my={"4"} size="xs" children="REFUND ONLY APPLICABLE WITH IN 7 DAYS"/>
    </Box>
  </>
}
const About = () => {
  return (
    <Container className='aboutcontainer' maxW={'container.lg'} 
    paddingTop="6"
    paddingBottom={"16"}
    px="16" boxShadow={'lg'}>
      <Heading children="About Us" textAlign={'center'} marginBottom="9" />

      <Stack spacing={["4","8"]}>
        <VStack>
          <Avatar boxSize={['40', '48']} />
          <Text children="Founder" fontWeight={'semibold'} />
        </VStack>

        <VStack justifyContent={'center'} alignItems={['center', 'center']}>
          <Heading children="RAJ LILHARE" size={['sm', 'md']} />
          <Text children="MERN STACK DEVELOPER" textAlign={'center'} />
        </VStack>
      </Stack>

      <Stack   alignItems={'center'}>
        <Text display={"flex"}
        flexDirection="column"
        fontFamily={'cursive'} m="8" textAlign={'center'}>
          This platform is created for a quiality content at super affordable
          price
          <NavLink to="/subscribe">
          <Button variant={'ghost'} colorScheme="blue">
            CHECK OUR PLANS
          </Button>
        </NavLink>
        </Text>
       
      </Stack>
<Box  width={"100%"}>
<video src='/intro.mp4' />
</Box>

<TandC termsandcondition={"termsandcondition"}/>
<HStack my={"4"} padding="2">
<RiSecurePaymentFill/>
<Heading children="Payment Secured By Razer Pay" size={"xs"} />

</HStack>
    </Container>
  );
};

export default About;
