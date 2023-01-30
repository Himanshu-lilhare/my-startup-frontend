import React, { useState } from 'react';
import {
  Container,
  FormLabel,
  Input,
  VStack,
  Heading,
  Box,
 
  Button,

} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../../redux/actions/userAction';
// import axios from 'axios';
const Login = () => {

   const dispatch=useDispatch()
  const [email, setemail] = useState();
  const [password, setpassword] = useState();

const submitHandler= async(e)=>{
e.preventDefault()

try {
  dispatch(login(email,password))
  // let {data}= await axios.post("http://localhost:4000/login",{email,password},
  // {
  //     headers:{
  //         "Content-type" : "application/json"
  //     },
  //  withCredential:true
  // }
  // )
  // console.log(data)
} catch (error) {
  console.log(error)
}

}
  return (
    <>
    
    <Container height={'95vh'}>
      <VStack height={'100%'} justifyContent="center" spacing={'16'}>
        <Heading
          children="WELCOME TO FIT CODER COURSES"
          size={'lg'}
          fontWeight="medium"
        />
         <form style={{ width: '100%' }} onSubmit={submitHandler}>
         
     
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
           <FormLabel htmlFor="password" children="Password" />
           <Input
             required
             id="password"
             value={password}
             onChange={e => setpassword(e.target.value)}
             placeholder="ENTER PASSWORD"
             type={'password'}
           />
         </Box>
        

         <Box>
           <NavLink to='/forgetpassword'>
            
             <Button fontSize={'sm'} variant="link">
               Forget Password
             </Button>
           </NavLink>
         </Box>
         <Button my={'5'} colorScheme="blue" type="submit">
           Log In
         </Button>

         <Box my={'5'}>
           New User ? 
          <NavLink to="/signup">
             <Button colorScheme={'blue'} variant="link">
                Sign up
             </Button>
           </NavLink>
         </Box>
       </form>

       
      </VStack>
    </Container>
    </>
  );
};

export default Login;
