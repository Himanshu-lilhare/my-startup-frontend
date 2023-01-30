import axios from "axios"
export const getStats=()=> async dispatch =>{
    try {
        dispatch({type:"getStatsRequest"})
    const {data}=await axios.get(`/getstats`,{
        
      withCredentials:true
      
    })
 console.log(data)
    dispatch({type:"getStatsSuccess",payload:data})  
    } catch (error) {
        dispatch({type:"getStatsFail",payload:error.response.data.error})
    }
}

export const getAllUsers=()=> async dispatch =>{
    try {
        dispatch({type:"getAllUsersRequest"})
    const {data}=await axios.get(`/users`,{
       
        withCredentials:true
      
    })
 console.log(data)
    dispatch({type:"getAllUsersSuccess",payload:data.users})  
    } catch (error) {
        dispatch({type:"getAllUsersFail",payload:error.response.data.error})
    }
}

export const deleteUsers=(id)=> async dispatch =>{
    try {
        dispatch({type:"deleteUsersRequest"})
    const {data}=await axios.delete(`/admin/user/${id}`,{
        headers:{
            "Content-type":"application/json"
        },
      withCredentials:true
      
    })
 console.log(data)
    dispatch({type:"deleteUsersSuccess",payload:data.success})  
    } catch (error) {
        dispatch({type:"deleteUsersFail",payload:error.response.data.error})
    }
}
export const updateUsers=(id)=> async dispatch =>{
    try {
        dispatch({type:"updateUsersRequest"})
    const {data}=await axios.put(`/admin/user/${id}`,{},{
       
      withCredentials:true
      
    })
 console.log(data) 
    dispatch({type:"updateUsersSuccess",payload:data.success})  
    } catch (error) {
        dispatch({type:"updateUsersFail",payload:error.response.data.error})
    }
}
  

export const createCourses=(formdata)=> async dispatch =>{
    try {
        dispatch({type:"createCourseRequest"})
    const {data}=await axios.post(`/createcourse`,formdata,{
        headers:{
            "Content-type":"multipart/form-data"
        },
        withCredentials:true
      
    })
 console.log(data)
    dispatch({type:"createCourseSuccess",payload:data.success})  
    } catch (error) {
        dispatch({type:"createCourseFail",payload:error.response.data.error})
    }
  
} 
export const deleteCourses=(id)=> async dispatch =>{
    try {
        dispatch({type:"deleteCourseRequest"})
    const {data}=await axios.delete(`/course/${id}`
      ,{
        withCredentials:true
      })
 console.log(data)
    dispatch({type:"deleteCourseSuccess",payload:data.success})  
    } catch (error) {
        dispatch({type:"deleteCourseFail",payload:error.response.data.error})
    }
  
} 

export const createCourseLecture=(id,formdata)=> async dispatch =>{
    try {
        dispatch({type:"createLectureRequest"})
        // console.log(id)
    const {data}=await axios.post(`/course/${id}`,formdata,{
        headers:{
            "Content-type":"multipart/form-data"
        },
        withCredentials:true
      
    })
 console.log(data)
    dispatch({type:"createLectureSuccess",payload:data.success})  
    } catch (error) {
        dispatch({type:"createLectureFail",payload:error.response.data.error})
    }
  
} 

export const deleteCourseLecture=(courseid,lectureid)=> async dispatch =>{
    try {
        dispatch({type:"deleteLectureRequest"})
        // console.log(id)
    const {data}=await axios.delete(`/lecture?courseid=${courseid}&lectureid=${lectureid}`,{
       
        withCredentials:true
      
    })
 console.log(data)
    dispatch({type:"deleteLectureSuccess",payload:data.success})  
    } catch (error) {
        dispatch({type:"deleteLectureFail",payload:error.response.data.error})
    }
  
} 