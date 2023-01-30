import { Box, Grid, Heading,HStack,Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useParams } from 'react-router-dom'
import { getCoursesLectures } from '../../redux/actions/courseAction'
import Loader from '../layout/header/Loader'

const Lectures = ({user}) => {
  

    const dispatch=useDispatch()
    const {lectures,loading}=useSelector(state=>state.courses)
    const params=useParams()
  const [lecturenumber,setlecturenumber]=useState(0)
    
      useEffect(
        ()=>{
            dispatch(getCoursesLectures(params.id))
        }
        ,[dispatch,params.id])

      
if(user.role!=="admin" && ( !user.subscription || user.subscription.status!=="active"))
{  
    console.log("navigate")
  return <Navigate to ={"/subscribe"}/>
}
else{
    return (
        loading ? <Loader/> :
      
        <Grid minH={"100vh"} templateColumns={["1fr","3fr 1fr"]}>
              {lectures && lectures.length >0 ? <>
                <Box >
      <video src={lectures[lecturenumber].video.url} controls autoPlay
      width={"100%"}
            controlsList='nodownload '
            disablePictureInPicture / >
    <HStack>
    <Heading  m={"4"} children={`#${lecturenumber+1} ${lectures[lecturenumber].title}`}/>
                <Text display={"flex"} alignItems="center" children={lectures[lecturenumber].description} m={"4"}/>
    </HStack>
    
    </Box>
    <VStack >
    {
        lectures.map((ele,index)=> {
            return (
                <button onClick={() => setlecturenumber(index)}
                key={ele._id} style={{width:"100%",padding:"1rem",margin:"0",textAlign:"center",borderBottom:"1px solid rgba(0,0,0,0.2)"}}>
                  <Text noOfLines={"1"}>
                #{index+1} {ele.title}
                  </Text>
                </button>
            )
        }
    
        
    
        )
    }
    </VStack> 
    
        </> : <Heading height={"100%"} display="flex" width="100%" fontSize={"lg"} justifyContent={"center"} alignItems={"center"} children="No Lectures Available Now....."/> }
    
        </Grid>
    ) 


    
}

}

 


export default Lectures