import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useEffect } from 'react'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { forgetpassword } from '../../redux/actions/profileAction'
// import {useNavigate} from "react-router-dom"
const Forgetpassword = () => {
    const [email,setemail]=useState()
    const dispatch=useDispatch() 
    // const navigate=useNavigate()
    const {loading,error,message}=useSelector(state=>state.profilebeta)

function forgethandler(e){
   e.preventDefault()
   dispatch(forgetpassword(email))
  
   }
  useEffect(()=>{
if(message){
  toast.success(message)
  dispatch({type:"clearmessage"})
  // navigate("/reset/343")
}
if(error){
  toast.error(error)
  dispatch({type:"clearerror"})
}
  },[dispatch,message,error])

  return (
   <Container py={"16"} h="90vh">
<form onSubmit={forgethandler}>
    <Heading children="Forget Password" my={"16"} textTransform="uppercase"
    textAlign={"center"}  />
    <VStack spacing={"8"}>
        <Input
        value={email}
        placeholder='Enter Your Email' type={"email"} onChange={(e)=>setemail(e.target.value)}/>
        <Button isLoading={loading} type='submit' w={"full"} colorScheme="blue" >Send Reset Link</Button>
        </VStack> 
</form>

   </Container>
  )
}

export default Forgetpassword