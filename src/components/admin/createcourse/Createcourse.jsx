import { Box, Button, Container, Grid, Heading, Image, Input, Select, VStack } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { createCourses } from '../../../redux/actions/adminActions'
import { editvalue } from '../../auth/Register'
import Slidebar from '../Slidebar'
import {useNavigate} from "react-router-dom"
import { getmyprofile } from '../../../redux/actions/userAction'
const Createcourse = () => {
  const [title,settitle]=useState("")
  const [description,setdescription]=useState("")
  const [createdby,setcreatedby]=useState("")
  const [category,setcategory]=useState("")
  const [image,setimage]=useState()
  const [imageprev,setimageprev]=useState()
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const {loading,error,message}=useSelector(state=>state.admin)
  let categories = [
    'WEB DEVELOPEMENT',
    'UI/UX',
    'APP DEVELOPEMENT',
    'DATA STRUCTURE',
    'INTERVIEW PREPEARATION',
    'MACHINE LEARNING',
    'BLOCKCHAIN DEVELOPEMENT',
  ];
  function changeavatarhandler(e){
    const file=e.target.files[0]
    const reader=new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend=()=>{
      setimageprev(reader.result)
      setimage(file)
    }
}
 function createCourseHandler(e){
e.preventDefault()
const mydata=new FormData()
mydata.append("title",title)
mydata.append("description",description)
mydata.append("createdby",createdby)
mydata.append("category",category)
mydata.append("file",image)
 dispatch(createCourses(mydata))
 
}
useEffect(()=>{
  if(message){
    toast.success(message)
    dispatch({type:"clearmessage"})
    navigate("/admin/dashboard")
  }
  if(error){
    toast.error(error)
    dispatch({type:"clearerror"})
  }
},[dispatch,error,message,loading])
  return (
    <Grid minH={"100vh"} templateColumns={["1fr","5fr 1fr"]}>

<Container py={"16"}>
  <form onSubmit={createCourseHandler}>
    <Heading children="Create Course" textTransform={"uppercase"}
      my="16" textAlign={"center"}
    />
    <VStack m={"auto"} spacing="8">
    <Input
        required
        value={title}
        onChange={e => settitle(e.target.value)}
        placeholder="ENTER COURSE TITLE"
        type="text"
    />
      <Input
        required
        value={description}
        onChange={e => setdescription(e.target.value)}
        placeholder="Description"
        type="text"
    />
      <Input
        required
        value={createdby}
        onChange={e => setcreatedby(e.target.value)}
        placeholder="CREATED BY"
        type="text"
    />
    <Select focusBorderColor='purple.300' value={category}
    onChange={e=> setcategory(e.target.value)}
    >
  <option value="">
    Categories
  </option>
{
  categories.map((ele,index)=>{
    return (
      <option 
     key={ele} value={ele}>
{ele}
      </option>
    )
  })
}
 </Select>
 <Input
              required
              css={{"&:: file-selector-button": editvalue}}
              
              type="file"
              accept="image/*"
              onChange={changeavatarhandler}
            />
            {
              imageprev && <Image src={imageprev} boxSize="64" objectFit={"contain"} />
            }
            <Button isLoading={loading} colorScheme={"blue"} width="full" type='submit'>
              CREATE
            </Button>
    </VStack>
  </form>

</Container>

<Slidebar />
    </Grid>
  )
}


export default Createcourse