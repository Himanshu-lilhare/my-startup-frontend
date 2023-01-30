import { Box, Container, Heading, VStack,Text, Button } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { getSubscription } from '../../redux/actions/subscribeAction'
import { server } from '../../redux/reduxstore'

const Subscribe = ({user}) => {
const dispatch=useDispatch()
const [key,setkey]=useState()
const {loading,message,error,subscriptionid}=useSelector(state=>state.subscribe)
const {error:courseError}=useSelector(state=>state.courses)
  async function subscriptionHandler(){
    const {data}=await  axios.get(`${server}/getkey`)
  setkey(data.key)
  dispatch(getSubscription())
  }
useEffect(() => {
 if(error){
  toast.error(error)
  dispatch({type:"clearerror"})
 }
 if(message){
  toast.success(message)
  dispatch({type:'clearmessage'})
 }
 if(courseError){
  toast.error(courseError)
  dispatch({type:"clearerror"})
 }

 if(subscriptionid){
  function popup(){
    const options={
      key,
      name: "FIT CODING CAMP",
    description: "GET ACCESS TO PREMIUM VIDEOS",
    image:"paymentlogo.png",
    "subscription_id":subscriptionid, 
   callback_url:`${server}/paymentverification`,
    prefill: {
        name:user.name,
        email: user.email,
        contact: "9145638987"
    },
    notes: {
        address: "RAJLILHARE at Instagram"
    },
    theme: {
        "color": "#3399cc"
    }
    }
    console.log(options.key)

    const razor= new window.Razorpay(options)
    razor.open()
  }
  popup()
 }
}, [dispatch,message,error,user.name,user.email,key,subscriptionid,courseError])


  return (
    <Container h={"100vh"} padding={["6","16"]}>
<Heading  children="Welcome" size={"lg"} 
textAlign="center"
/>
<VStack boxShadow={"lg"}
alignItems="stretch"
borderRadius={"lg"}>
<Box backgroundColor={"#3b5998"} padding="4"
css={{borderRadius:"8px 8px 0 0 "}}
>
<Text color="white" children="FIT CODE PACK " fontSize={"lg"}/>
</Box>
<Box p={"4"}>
<VStack textAlign={"center"} px="4" mt={"4"} spacing="8">
<Text children="Join Pro Pack And Get Access To All Content"/>
<Heading size={"md"} children="149₹ Only" />
</VStack>
<Button onClick={subscriptionHandler} isLoading={loading} my={"8"} color="white" backgroundColor={"#3b5998"} width={"full"} >
BUY NOW
</Button>
</Box>
<Box backgroundColor={"#3b5998"} p="4" css={{borderRadius:"0 0 8px 8px"}}>
<Heading size={"sm"} children="100% Refund At Cancellation " color={"white"} textTransform="uppercase"/>
<Text fontFamily={"xs"} color="white" children="*terms and condition apply"/>
</Box>
</VStack>
    </Container>
  )
}

export default Subscribe