import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changePasswordAction } from '../../redux/actions/profileAction'
import { getmyprofile } from '../../redux/actions/userAction'
// import {useNavigate} from "react-router-dom"
import toast from 'react-hot-toast'

const Changepassword = () => {
    const [newpassword,setnewpassword]=useState("")
    const [oldpassword,setoldpassword]=useState("")
 const dispatch=useDispatch()
//  const navigate=useNavigate()
    function changepassword(e){
e.preventDefault()
 dispatch(changePasswordAction(oldpassword,newpassword))
dispatch(getmyprofile())
// navigate("/profile")
 }
 const {loading,message,error}=useSelector(state=>state.profilebeta)
  useEffect(()=>{
    if(error){
      toast.error(error)
      dispatch({type:"clearerror"})
    }
    if(message){
      toast.success(message)
      dispatch({type:"clearmessage"})
    }
  },[dispatch,error,message])

  return (
    <Container py={'16'} minH="95vh">
<form onSubmit={changepassword}>
    <Heading children="Change Password" my={"16"} textAlign="center" textTransform={"uppercase"} size="md"/>
    <VStack spacing={"8"}>
    <Input
             required
             id="oldpassword"
             value={oldpassword}
             onChange={e => setoldpassword(e.target.value)}
             placeholder="OLD PASSWORD"
             type={'password'}
           />
 <Input
             required
             id="newpassword"
             value={newpassword}
             onChange={e => setnewpassword(e.target.value)}
             placeholder="NEW PASSWORD"
             type={'password'}
           />
           <Button isLoading={loading} colorScheme={"blue"} width="full" type='submit'>Change Password</Button>
    </VStack>

</form>
    </Container>
  )
}

export default Changepassword