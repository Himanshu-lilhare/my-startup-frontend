import axios from "axios"
import { server } from "../reduxstore"
export const updateprofileAction=(email,name) => async dispatch =>{
try {
dispatch({type:"updateProfileRequest"})
const {data}=await axios.put(`${server}/updateprofile`
,{email,name}, {
    headers:{
        "Content-type" : "application/json"
    },
 withCredentials:true
})
console.log(data)
dispatch({type:"updateProfileSuccess",payload:data.succes})
} catch (error) {
 dispatch({type:"updateProfileFail",
 payload:error.response.data.error})
}
}

export const updateProfilePictureAction= (formdata) => async dispatch =>{
    try {
    dispatch({type:"updateProfilePictureRequest"})
    const {data}=await axios.put(`${server}/changeavatar`
    ,formdata, {
        headers:{
            "Content-type" : "multipart/form-data"
        },
     withCredentials:true
    })
    console.log(data)
    dispatch({type:"updateProfilePictureSuccess",payload:data.message})
    } catch (error) {
     dispatch({type:"updateProfilePictureFail",
              payload:error.response.data.error})
    }
    }

export const 
changePasswordAction=(oldpassword,newpassword) => async dispatch =>{
try {
dispatch({type:"changePasswordRequest"})
const {data}=await axios.put(`${server}/changepassword`
,{oldpassword,newpassword}, {
    headers:{
        "Content-type" : "application/json"
    },
 withCredentials:true
})
console.log(data)
dispatch({type:"changePasswordSuccess",payload:data.succes})

} catch (error) {
 dispatch({type:"changePasswordFail",payload:error.response.data.error})
}
}

export const 
forgetpassword=(email) => async dispatch =>{
try {
dispatch({type:"forgetPasswordRequest"})
const {data}=await axios.post(`${server}/forgetpassword`
,{email}, {
    headers:{
        "Content-type" : "application/json"
    },
 withCredentials:true
})
console.log(data)
dispatch({type:"forgetPasswordSuccess",payload:data.succes})

} catch (error) {
 dispatch({type:"forgetPasswordFail",payload:error.response.data.error})
}
}


export const 
resetPasswordAction=(token,password) => async dispatch =>{
try {
dispatch({type:"resetPasswordRequest"})
const {data}=await axios.put(`${server}/resetpassword/${token}`
,{password}, {
    headers:{
        "Content-type" : "application/json"
    },
 withCredentials:true
})
console.log(data)
dispatch({type:"resetPasswordSuccess",payload:data.succes})

} catch (error) {
 dispatch({type:"resetPasswordFail",payload:error.response.data.error})
}
}




export const 
removeFromPlaylist=(id)=> async dispatch =>{
try {
dispatch({type:"deletefromplaylistRequest"})
const {data}=await axios.delete(`${server}/removefromplaylist?id=${id}`, {
    headers:{
        "Content-type" : "application/json"
    },
 withCredentials:true
})
console.log(data)
dispatch({type:"deletefromplaylistSuccess",payload:data.success})

} catch (error) {
 dispatch({type:"deletefromplaylistFail",payload:error.response.data.error})
}
}