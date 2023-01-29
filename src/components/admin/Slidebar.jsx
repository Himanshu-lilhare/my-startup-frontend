import { Button, VStack } from '@chakra-ui/react'
import React from 'react'
import { RiAddCircleFill, RiDashboardFill, RiEyeFill, RiUserFill } from 'react-icons/ri'
import { NavLink, useLocation } from 'react-router-dom'

function Linkbutton({url,text,icon,active}){
return (
    <NavLink to={`/admin/${url}`}>
    <Button fontSize={"larger"}colorScheme={ active ? "blue" : "gray" } >
     {icon} {   `...${text}`}
    </Button>
    </NavLink>
)
}
const Slidebar = () => {

    const location = useLocation()
  return (
   <VStack boxShadow={"-2px 0 10px rgba(107,70,193,0.5)"} spacing={"8"} padding="16">
 <Linkbutton url="dashboard" text="dashboard" icon={<RiDashboardFill/>} active={location.pathname==="/admin/dashboard"} />
 <Linkbutton url="createcourse" text="Create Course" icon={<RiAddCircleFill/>} active={location.pathname==="/admin/createcourse"} />
 <Linkbutton url="admincourses" text="Courses" icon={<RiEyeFill/>} active={location.pathname==="/admin/admincourses"} />
 <Linkbutton url="users" text="Users" icon={<RiUserFill/>} active={location.pathname==="/admin/users"} />
   </VStack>
  )
}

export default Slidebar