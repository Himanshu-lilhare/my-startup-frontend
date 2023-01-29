import { Box, Button, Grid, Heading, HStack, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUsers, getAllUsers, updateUsers } from '../../../redux/actions/adminActions'
import Slidebar from '../Slidebar'
import Loader from '../../layout/header/Loader'
import toast from 'react-hot-toast'
const Users = () => {
  const dispatch=useDispatch()
  const {users,loading,message,error}=useSelector(state=>state.admin)


async function updatehandler(id){
  await dispatch(updateUsers(id))
  dispatch(getAllUsers())
}
async function deletehandler(id){
  await dispatch(deleteUsers(id))
  dispatch(getAllUsers())

}

useEffect(() => {
dispatch(getAllUsers())
 if(message){
  toast.success(message)
  dispatch({type:"clearmessage"})
 }
 if(error){
  toast.error(error)
  dispatch({type:"clearerror"})
 }
},[dispatch,message,error])


  function Row({ele,updatehandler,deletehandler,loading}){
       return (
        <Tr>
          <Td>{ele._id}</Td>
          <Td>{ele.name}</Td>
          <Td>{ele.email}</Td>
          <Td>{ele.role}</Td>
          <Td>{
   ele.subscription && ele.subscription.status==="active" ? "Active" :"Not active"}</Td>
          <Td isNumeric>
            <HStack justifyContent={"flex-end"}>
<Button variant={"outline"} colorScheme="purple.500" onClick={()=>updatehandler(ele._id)}>
  Update
</Button>
<Button isLoading={loading} onClick={()=> deletehandler(ele._id)}>
<RiDeleteBin7Fill/>
</Button>
            </HStack>
          </Td>
        </Tr>
       )
  }
  return (
loading ? <Loader /> :

    <Grid minH={"100vh"} templateColumns={["1fr","5fr 1fr"]}>
   <Box p={["0","16"]} overflowX="auto"
   pt={["8","16"]}
   >
    <Heading children="ALl USERS" mb={"10px"}/>
    <TableContainer w={["100vw","full"]}>
<Table variant={"simple"} size="lg">
<TableCaption>
  All available users in the database
</TableCaption>
<Thead>
  <Tr>
    <Th>
      Id
    </Th>
    <Th>
     Name
    </Th>
    <Th>
     Email
    </Th>
    <Th>
     Role
    </Th>
    <Th>
      Subscription
    </Th>
    <Th isNumeric>
      Action
    </Th>
  </Tr>
</Thead>
<Tbody>
  {
    users.map((ele,index)=>{
      return <Row loading={loading} ele={ele} updatehandler={updatehandler} deletehandler={deletehandler}/>
      
    })
  }
</Tbody>
</Table>
    </TableContainer>
   </Box>

<Slidebar />
    </Grid>
  )
}


export default Users