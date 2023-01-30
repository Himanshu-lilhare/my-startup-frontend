import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useEffect } from 'react'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {useNavigate} from "react-router-dom"
import { resetPasswordAction } from '../../redux/actions/profileAction'
const Resetpassword = () => {
    const [password,setpassword]=useState("")
    const params=useParams()
  
    const dispatch=useDispatch() 
    const navigate=useNavigate()
    const {loading,error,message}=useSelector(state=>state.profilebeta)

 function resethandler(e){
   e.preventDefault()
 dispatch(resetPasswordAction(params.token,password))
 
   }

  useEffect(()=>{
if(message){
  toast.success(message)
  navigate("/login")
  dispatch({type:"clearmessage"})
  
}
if(error){
  toast.error(error)
  navigate("/forgetpassword")
  dispatch({type:"clearerror"})
 
}},[dispatch,message,error,navigate])

  return (
    <Container py={"16"} h="90vh">
    <form onSubmit={resethandler}>
        <Heading children="Create New Password" my={"16"} textTransform="uppercase"
        textAlign={"center"}  />
        <VStack spacing={"8"}>
            <Input
            value={password}
            placeholder='Enter New Password' type={"password"} onChange={(e)=>setpassword(e.target.value)}/>
            <Button isLoading={loading} type='submit' w={"full"} colorScheme="blue" >Set New Password</Button>
            </VStack> 
    </form>
    
       </Container>
  )
}

export default Resetpassword