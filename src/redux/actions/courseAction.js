import axios from "axios"
import {server} from "../reduxstore"


export const getCourses=(category="", keyword="")=> async dispatch =>{
    try {
        dispatch({type:"getCoursesRequest"})
    const {data}=await axios.get(`/courses?category=${category}&keyword=${keyword}`)
 console.log(data)
    dispatch({type:"getCoursesSuccess",payload:data})  
    } catch (error) {
        dispatch({type:"getCoursesFail",payload:error.response.data.error})
    }
  
} 

export const getCoursesLectures=(id)=> async dispatch =>{
    try {
        dispatch({type:"getLecturesRequest"})
    const {data}=await axios.get(`/course/${id}`,{
        withCredentials:true
    })
 console.log(data)
    dispatch({type:"getLecturesSuccess",payload:data.lectures})  
    } catch (error) {
        dispatch({type:"getLecturesFail",payload:error.response.data.error})
    }
  
} 





export const addToplaylist=(id)=> async dispatch =>{
    try {
        dispatch({type:"addtocartRequest"})
    const {data}=await axios.post(`/addtoplaylist`,{id},{
        headers:{
            "Content-type":"application/json"
        },
        withCredentials:true
    })
 console.log(data)
    dispatch({type:"addtocartSuccess",payload:data.success})  
    } catch (error) {
        dispatch({type:"addtocartFail",payload:error.response.data.error})
    }
  
} 