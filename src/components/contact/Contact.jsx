import React, { useState } from 'react';
import {
  Container,
  FormLabel,
  Input,
  VStack,
  Heading,
  Box,
 
  Button,
  Textarea,

} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const Contact = () => {
    const [email, setemail] = useState("");
    const [name,setname] = useState("");
    const [message,setmessage]=useState("")
  return (
   <Container h={"92vh"}>
  <VStack h={"full"} justifyContent="center"spacing={"16"} >
 
 <Heading children="Contact Us" />

 <form style={{ width: '100%' }}>
         
     
         <Box my={'4'}>
           <FormLabel htmlFor="email" children="Email Address" />
           <Input
             required
             id="email"
             value={email}
             onChange={e => setemail(e.target.value)}
             placeholder="ENTER EMAIL"
             type={'email'}
           />
         </Box>
         <Box my={'4'}>
           <FormLabel htmlFor="name" children="name" />
           <Input
             required
             id="name"
             value={name}
             onChange={e => setname(e.target.value)}
             placeholder="ENTER NAME"
             type={'text'}
           />
         </Box>
         <Box my={'4'}>
           
           <Textarea
             required
           
             value={message}
             onChange={e => setmessage(e.target.value)}
             placeholder="ENTER YOUR MESSAGE"
             
           />
         </Box>
        

        
         <Button my={'5'} colorScheme="blue" type="submit">
           Send Message
         </Button>

         <Box my={'5'}>
          Want To Request Course ? {" "}
          <NavLink to="/requestcourse">
             <Button colorScheme={'blue'} variant="link">
                Request Course
             </Button>
           </NavLink>
         </Box>
       </form>
  </VStack>
   </Container>
  )
}

export default Contact