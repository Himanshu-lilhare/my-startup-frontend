import React, { useState } from 'react';
import {
  Container,
  FormLabel,
  Input,
  VStack,
  Heading,
  Box,
  // Link,
  Button,
  Avatar,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { registeruser } from '../../redux/actions/userAction';
export const editvalue = {
  height: '100%',
  marginLeft: '-5%',
  cursor: 'pointer',
  width: '110%',
  border: 'none',
  color: 'white',
  backgroundColor: '#316090',
};
const edit = {
  '&::file-selector-button ': editvalue,
};
const Register = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [name, setname] = useState("");
  const [imageprev, setimageprev] = useState();
  const [image,setimage]=useState()
  const dispatch=useDispatch()
function registersubmit(e){
 e.preventDefault()
 const formdata=new FormData()
 formdata.append("name",name)
 formdata.append("email",email)
 formdata.append("password",password)
 formdata.append("file",image)

dispatch(registeruser(formdata))
}
  function changeavatarhandler(e){
      const file=e.target.files[0]
      const reader=new FileReader()
      reader.readAsDataURL(file)
      reader.onloadend=()=>{
        setimageprev(reader.result)
        setimage(file)
      }
  }
  return (
    <Container paddingBottom={'20px'}>
      <VStack height={'100%'} justifyContent="center" spacing={'16'}>
        <Heading
        // display={"flex"}
        // justifyContent="center"
        // alignItems={"center"}
        textAlign={"center"}
        marginTop="17px"
          children="WELCOME TO FIT CODER COURSES"
          size={'lg'}
          fontWeight="medium"
        />

        <form onSubmit={registersubmit} style={{ width: '100%' }}>
          <Box display="flex" justifyContent={'center'}>
            <Avatar size={'2xl'} src={imageprev} />
          </Box>

          <Box my={'4'}>
            <FormLabel htmlFor="name" children="Name" />
            <Input
              required
              id="name"
              value={name}
              onChange={e => setname(e.target.value)}
              placeholder="ENTER FULL NAME"
              type={'text'}
            />
          </Box>
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
          <Box my={'4'}>
            <FormLabel htmlFor="chooseAvatar" children="Password" />
            <Input
              required
              css={edit}
              id="avatar"
              type="file"
              accept="image/*"
              onChange={changeavatarhandler}
            />
          </Box>

          <Button color={"white"} my={'4'} backgroundColor="#316090" type="submit">
            Sign In
          </Button>

          <Box>
            Already Have An Account ?{' '}
            <a href="/login">
              <Button colorScheme={'blue'} variant="ghost">
                LOGIN
              </Button>
            </a>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Register;
