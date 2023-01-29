import { createReducer } from "@reduxjs/toolkit";


export const profilereducer= createReducer({},{

   updateProfileRequest:(state)=>{
    state.loading=true
   },
   updateProfileSuccess:(state,action)=>{
    state.loading=false
    state.message=action.payload
   },
   updateProfileFail:(state,action)=>{
    state.loading=false
    state.error=action.payload
   },
   updateProfilePictureRequest:(state)=>{ 
    state.loading=true
},
   updateProfilePictureSuccess:(state,action)=>{
    state.loading=false
    state.message=action.payload
   },
   updateProfilePictureFail:(state,action)=>{
    state.loading=false
    state.error=action.payload
   },
   changePasswordRequest:(state)=>{
    state.loading=true
   },
   changePasswordSuccess:(state,action)=>{
    state.loading=false
    state.message=action.payload
   },
   changePasswordFail:(state,action)=>{
    state.loading=false
    state.error=action.payload
   },
   forgetPasswordRequest:(state)=>{
    state.loading=true
   },
   forgetPasswordSuccess:(state,action)=>{
    state.loading=false
    state.message=action.payload
   },
   forgetPasswordFail:(state,action)=>{
    state.loading=false
    state.error=action.payload
   },
   resetPasswordRequest:(state)=>{
    state.loading=true
   },
   resetPasswordSuccess:(state,action)=>{
    state.loading=false
    state.message=action.payload
   },
   resetPasswordFail:(state,action)=>{
    state.loading=false
    state.error=action.payload
   },
   deletefromplaylistRequest:(state)=>{
    state.loading=true
   },
   deletefromplaylistSuccess:(state,action)=>{
    state.loading=false
    state.message=action.payload
   },
   deletefromplaylistFail:(state,action)=>{
    state.loading=false
    state.error=action.payload
   },

   
  
    clearerror:(state)=>{
        state.error=null
    },clearmessage:(state)=>{
        state.message=null
    }
})

