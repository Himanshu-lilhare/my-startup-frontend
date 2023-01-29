import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'



import { useDispatch, useSelector } from 'react-redux'
import { updateprofileAction } from '../../redux/actions/profileAction'
import { getmyprofile } from '../../redux/actions/userAction'
import {useNavigate} from "react-router-dom"

const Updatepassword= ({user}) => {
    const [name,setname]=useState(user.name)
    const [email,setemail]=useState(user.email)
    const dispatch=useDispatch()
   
   const navigate=useNavigate()
const updateprofile= async(e)=>{
  e.preventDefault()
  await dispatch(updateprofileAction(email,name))
  dispatch(getmyprofile())
   navigate("/profile")

    }
    const {loading}=useSelector(state=>state.profilebeta)

 
  return (
    <Container py={'16'} minH="95vh">
<form onSubmit={updateprofile}>
    <Heading children="Change Password" my={"16"} textAlign="center" textTransform={"uppercase"} size="md"/>
    <VStack spacing={"8"}>
    <Input
             required
             id="name"
             value={name}
             onChange={e => setname(e.target.value)}
             placeholder="NEW NAME"
             type={'text'}
           />
 <Input
             required
             id="email"
             value={email}
             onChange={e => setemail(e.target.value)}
             placeholder="NEW EMAIL"
             type={'text'}
           />
           <Button isLoading={loading} colorScheme={"blue"} width="full" type='submit'>Change Password</Button>
    </VStack>

</form>
    </Container>
  )
}

export default Updatepassword