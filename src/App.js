import React, { useEffect } from 'react';
import Home from './components/home/Home';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Header from './components/layout/header/Header';
import Courses from './components/courses/Courses';
import Footer from './components/layout/footer/Footer';
import Login from './components/auth/login/Login';
import Register from './components/auth/Register';
import Forgetpassword from './components/auth/Forgetpassword';
import Resetpassword from './components/auth/Resetpassword';
import Contact from './components/contact/Contact';
import  Request  from './components/contact/Request';
import About from './components/about/About';
import Subscribe from './components/payments/Subscribe';
import Successpayment from './components/payments/Successpayment';
import Failedpayment from './components/payments/Failedpayment';
import Notfound from './components/layout/Notfound';
import Lectures from './components/courses/Lectures';
import './app.css'
import Profile from './components/profile/Profile';
import Changepassword from './components/profile/Changepassword';
import Updatepassword from './components/profile/Updatepassword';
import Dashboard from './components/admin/dashboard/Dashboard';
import Createcourse from './components/admin/createcourse/Createcourse';
import Admincourse from './components/admin/admincourse/Admincourse';
import Users from './components/admin/users/Users';
import { useDispatch, useSelector } from 'react-redux';
import toast,{Toaster} from "react-hot-toast"
import { getmyprofile } from './redux/actions/userAction';
import {ProtectedRoute} from "protected-route-react"
import Loader from './components/layout/header/Loader';
// window.addEventListener("contextmenu",(e)=>{
//   e.preventDefault()
// })
function App() {
const {isauthenticate,user,error,message,loading}=useSelector(state=>state.user)
  const dispatch=useDispatch()
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

useEffect(()=>{
  dispatch(getmyprofile())
},[dispatch])

  return (
    <Router>
       
       {
 loading ? <Loader/> : (

  <>
 <Header isauthenticate={isauthenticate} user={user}/>
   <Routes>

    <Route path='/' element={<Home/>}></Route>
    <Route path='/profile' element={<ProtectedRoute isAuthenticated={isauthenticate}>
      <Profile user={user}/>
    </ProtectedRoute> }></Route>
    <Route path='/courses' element={<Courses/>}></Route>
    <Route path='/course/:id' element={<ProtectedRoute isAuthenticated={isauthenticate}><Lectures user={user}/></ProtectedRoute>}/>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/requestcourse' element={<Request/>}></Route>
    <Route path='/about' element={<About/>}/>


    {/* inside this protectedRoute , isAuthenticated
    means if isauthenticte = false then redirect to / route
    if we didnt give redirect then default redirect is /login
    */}
    <Route path='/login' element={<ProtectedRoute isAuthenticated={!isauthenticate} redirect="/"><Login/></ProtectedRoute> }></Route>
    <Route path='/signup' element={<ProtectedRoute isAuthenticated={!isauthenticate} redirect="/"><Register/></ProtectedRoute> }></Route>
    <Route path='/forgetpassword' element={<ProtectedRoute isAuthenticated={!isauthenticate} redirect="/"><Forgetpassword/></ProtectedRoute>}></Route>
    <Route path='/reset/:token' element={<ProtectedRoute isAuthenticated={!isauthenticate} redirect="/"><Resetpassword/></ProtectedRoute>}></Route>
    <Route path='/subscribe' element={<ProtectedRoute isAuthenticated={isauthenticate}><Subscribe user={user}/></ProtectedRoute>}/>
    <Route path='/paymentsuccess' element={<Successpayment/>}/>
    <Route path='/failpay' element={<Failedpayment/>}/>
    <Route path='/*' element={<Notfound/>}/>

    {/* 
    this portected routes means if isauthenticate = true
    then you can access this routes
    basically if you are log in then...
 */}
    <Route path='/changepassword' element={<ProtectedRoute isAuthenticated={isauthenticate}><Changepassword/></ProtectedRoute>}/>
    <Route path='/updateprofile' element={<ProtectedRoute isAuthenticated={isauthenticate}><Updatepassword user={user}/></ProtectedRoute>}/>

    {/* ADMIN ROUTES */}

    <Route path='/admin/dashboard' element={<ProtectedRoute isAuthenticated={isauthenticate} adminRoute={true} isAdmin={user && user.role==="admin"}><Dashboard/></ProtectedRoute>}/>
    <Route path='/admin/createcourse' element={<ProtectedRoute isAuthenticated={isauthenticate} adminRoute={true} isAdmin={user && user.role==="admin"}><Createcourse/></ProtectedRoute>}/>
    <Route path='/admin/admincourses' element={<ProtectedRoute isAuthenticated={isauthenticate} adminRoute={true} isAdmin={user && user.role==="admin"}><Admincourse/></ProtectedRoute>}/>
    <Route path='/admin/users' element={<ProtectedRoute isAuthenticated={isauthenticate} adminRoute={true} isAdmin={user && user.role==="admin"}><Users/></ProtectedRoute>}/>
   </Routes>
   <Footer/>
   <Toaster/>
  </>
 )
       }
      
   </Router>
  );
}

export default App;
