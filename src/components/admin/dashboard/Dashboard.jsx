import { Box, Grid, Heading, HStack, Progress, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import toast from 'react-hot-toast'
import { RiArrowDownLine, RiArrowUpLine } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { getStats } from '../../../redux/actions/adminActions'
import Loader from '../../layout/header/Loader'
import Slidebar from '../Slidebar'
import {  MyDoughnutchart, MyLinechart } from './Charts'

function Databox({title,qty,qtypercentage,profit}){
return <Box width={["full","20%"]} boxShadow={"-2px 0 10px rgba(107,70,193,0.5)"} padding="4" borderRadius={"lg"}>
<Text children={title}/>
<HStack spacing={"6"}>
<Text children={qty} fontSize={"2xl"} fontWeight="bold"/>
<HStack>
  <Text children={`${qtypercentage} %`}/>
  {
    profit ? <RiArrowUpLine color='green'/> : <RiArrowDownLine color='red'/>
  }
</HStack>
</HStack>
</Box>

}

function Bar({title,value,profit}){
  return <Box py={"3"} px={["0","3"]}>
 <Heading children={title} size="sm"mb={"2"} />
 <HStack w={"full"} alignItems="center" >
  <Text children="0%"/>
<Progress colorScheme={"purple"} w="full" value={profit ? value : 0} />
<Text children={`${value>100 ? value : 100 }%`}/>
 </HStack>
  </Box>
}

const Dashboard = () => {

  const {stats,
    viewscount,subscriptioncount,usercount,
    userpercentage,subscriptionpercentage,viewspercentage,
    userprofit,subscriptionprofit,viewsprofit,error,loading}=useSelector(state=>state.admin)
  const dispatch=useDispatch()
  useEffect(
    ()=>{
      dispatch(getStats())
if(error){
  toast.error(error)
  dispatch({type:"clearerror"})
}

    },[dispatch,error])

  return (
    <Grid minH={"100vh"} templateColumns={["1fr","5fr 1fr"]}>

{
  loading || !stats ? <Loader/> :   <Box boxSizing={"border-box"} py="16" px={["4","0"]} >
  <Text textAlign={"center"} opacity="0.8" fontSize={"larger"}
  children={`Last Change On ${String(new Date()).split("G")[0]}`}
  />
  <Heading children="Dashboard" size={"lg"} ml={["0","16"]} mb="16" textAlign={["center","left"]}/>
    <Stack direction={["column","row"]} minH="24" justifyContent={"space-evenly"}>
      <Databox title="Views" qty={viewscount} qtypercentage={viewspercentage} profit={viewsprofit}/>
    <Databox title={"Users"} qty={usercount} qtypercentage={userpercentage} profit={userprofit}/>
    <Databox title={"Subscription"} qty={subscriptioncount} qtypercentage={subscriptionpercentage} profit={subscriptionprofit}/>
  </Stack>
  <Box m={["0","16"]} borderRadius="lg" padding={["0","6"]} mt={["4","16"]} boxShadow={"-2px 0 10px rgba(107,70,193,0.5)"} >
  <Heading children="Views Graph" size={"md"} textAlign={["center","left"]}
  pt={["4","0"]} ml={["0","16"]}
  />
  
  {/* yaha graph aayega */}
  <MyLinechart views={stats.map(item=>item.views)} />
  </Box>
  
  <Grid templateColumns={["1fr","2fr 1fr"]}>
   <Box p={"3"}>
    <Heading children="PROGRESS BAR" my={"8"} ml={["0","13"]}/>
    <Box>
      <Bar profit={viewsprofit} title="views" value={viewspercentage}/>
      <Bar profit={userprofit} title="users" value={userpercentage}/>
      <Bar profit={subscriptionprofit} title="subscription" value={subscriptionpercentage}/>
    </Box>
   
  
  </Box>
  <Box p={["0","7"]} boxSizing="border-box" py={"4"}>
      <Heading textAlign={"center"} size="md" marginBottom={"4"} children="Users"/>
      <MyDoughnutchart users={[subscriptioncount,usercount-subscriptioncount]} />
     </Box>
  
  
  
  </Grid>
     </Box>

}



<Slidebar />
    </Grid>
  )
}

export default Dashboard