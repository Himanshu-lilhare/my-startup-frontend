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

const Request = () => {
    const [email, setemail] = useState("");
    const [name,setname] = useState("");
    const [course,setcourse]=useState("")
  return (
   <Container h={"92vh"}>
  <VStack h={"full"} justifyContent="center"spacing={"16"} >
 
 <Heading children="Request Course " />

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
         <FormLabel htmlFor="course" children="Request course" />
           <Textarea
             required
             id="course"
             value={course}
             onChange={e => setcourse(e.target.value)}
             placeholder="ENTER YOUR MESSAGE"
             
           />
         </Box>
        

        
         <Button my={'5'} colorScheme="blue" type="submit">
           Send Request
         </Button>

         <Box my={'5'}>
          Want To See Available Courses ? {" "}
          <NavLink to="/courses">
             <Button colorScheme={'blue'} variant="link">
               Avalable Courses
             </Button>
           </NavLink>
         </Box>
       </form>
  </VStack>
   </Container>
  )
}

export default Request