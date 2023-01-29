import { Box, Button, Grid, Heading, HStack, Image, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import toast from 'react-hot-toast'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { createCourseLecture, deleteCourseLecture, deleteCourses } from '../../../redux/actions/adminActions'
import { getCourses, getCoursesLectures } from '../../../redux/actions/courseAction'
import Slidebar from '../Slidebar'
import Coursemodal from './Coursemodal'

const Admincourse = () => {
  const {isOpen,onClose,onOpen}=useDisclosure()
  const dispatch=useDispatch()
  const {lectures,courses:course}=useSelector(state=>state.courses)
  const {loading,message,error}=useSelector(state=>state.admin)

  const [courseid,setcourseid]=useState("")
   const [coursetitle,setcoursetitle]=useState("")

//   const course=[{
//     _id:"hdufudfuytruygfhgifg",
//     title:"react course",
//    poster:{
//     url:"gfg",
//   },
//     category:"web dev",
//     createdby:"raj lilahre",
//  views:23,
// lectures:12

   
//   }]
function courseviewhandler(id,title,isOpen){
  dispatch(getCoursesLectures(id))
 
  setcourseid(id)
  console.log(courseid)
  setcoursetitle(title)
 isOpen()
 
}
function deletecoursehandler(id){
   dispatch(deleteCourses(id))
}

async function deletehandler(lectureid,courseid){
  console.log(lectureid)
  console.log(courseid)
await  dispatch(deleteCourseLecture(courseid,lectureid))
dispatch(getCoursesLectures(courseid))
}
async function addlecturehandler(e,title,description,id,video){
  
e.preventDefault()
console.log(id)
console.log(title)
const myform=new FormData()
myform.append("title",title)
myform.append("description",description)
myform.append("file",video)
await dispatch(createCourseLecture(id,myform))
  dispatch(getCoursesLectures(id))
}
 
useEffect(
  ()=>{
dispatch(getCourses())

if(error){
toast.error(error)
dispatch({type:"clearerror"})
}
if(message){
  toast.success(message)
  dispatch({type:"clearmessage"})
}
}  ,[dispatch,error,message])


  function Row({ele,updatehandler,deletecoursehandler,loading}){
       return (
        <Tr>
          <Td>{ele._id}</Td>
          <Td>{ele.title}</Td>
          <Td>
            <Image src={ele.poster.url}/>
          </Td>
          <Td>
       {ele.category}
          </Td>
          <Td>
            {ele.createdby}
          </Td>
          <Td isNumeric>{ele.views}</Td>
          <Td isNumeric>
            {ele.lectures}
          </Td>
          
          <Td isNumeric>
            <HStack justifyContent={"flex-end"}>
<Button variant={"outline"} colorScheme="purple.500" onClick={()=>courseviewhandler(ele._id,ele.title,onOpen)}>
  View lecture
</Button>
<Button isLoading={loading} onClick={()=> deletecoursehandler(ele._id)}>
<RiDeleteBin7Fill/>
</Button>
            </HStack>
          </Td>
        </Tr>
       )
  }
  return (
    <Grid minH={"100vh"} templateColumns={["1fr","5fr 1fr"]}>
   <Box p={["0","16"]} overflowX="auto"
   pt={["8","16"]}
   >
    <Heading children="ALl USERS" mb={"10px"}/>
    <TableContainer w={["100vw","full"]}>
<Table variant={"simple"} size="lg">
<TableCaption>
  All available Courses in the database
</TableCaption>
<Thead>
  <Tr>
    <Th>
      Id
    </Th>
    <Th>
     Title
    </Th>
    <Th>
     Poster
    </Th>
    <Th>
      Category
    </Th>
    <Th>
     Creator
    </Th>
    <Th isNumeric>
      views
    </Th>
    <Th isNumeric>
      Lectures
    </Th>
    <Th isNumeric>
      Action
    </Th>
  </Tr>
</Thead>
<Tbody>
  {
    course.map((ele,index)=>{
      return <Row ele={ele} courseviewhandler={courseviewhandler} deletecoursehandler={deletecoursehandler}/>
      
    })
  }
</Tbody>
</Table>
    </TableContainer>
    <Coursemodal 
    isOpen={isOpen} onClose={onClose} id={courseid} coursetitle={coursetitle}
    deletelecturehandler={deletehandler} addlecturehandler={addlecturehandler} lectures={lectures}
    loading={loading}
    />
   </Box>

<Slidebar />
    </Grid>
  )
}


export default Admincourse