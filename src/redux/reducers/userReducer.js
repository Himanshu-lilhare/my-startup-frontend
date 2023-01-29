import { createReducer } from "@reduxjs/toolkit";

// const state={
//     loading:false,
//     user:{},
//     message:"",
//     isauthencate:false,
    

// }
export const userreducer = createReducer({},{

    loginRequest:(state)=>{
        state.loading=true
    },loginSuccess:(state,action)=>{
         state.loading=false
         state.isauthenticate=true
         state.user=action.payload.user
         state.message=action.payload.message
    },loginfail:(state,action)=>{
        state.loading=false
        state.isauthenticate=false
        state.error=action.payload
    },
    registerRequest:(state)=>{
        state.loading=true
    },registerSuccess:(state,action)=>{
         state.loading=false
         state.isauthenticate=true
         state.user=action.payload.user
         state.message=action.payload.message
    },registerfail:(state,action)=>{
        state.loading=false
        state.isauthenticate=false
        state.error=action.payload
    },
    loaduserRequest:(state)=>{
        state.loading=true
    },loaduserSuccess:(state,action)=>{
         state.loading=false
         state.isauthenticate=true
         state.user=action.payload
      
    },loaduserfail:(state,action)=>{
        state.loading=false
        state.isauthenticate=false
        state.error=action.payload
    },
    logoutRequest:(state)=>{
        state.loading=true
    },logoutSuccess:(state,action)=>{
         state.loading=false
         state.isauthenticate=false
         state.user=null
      
    },logoutfail:(state,action)=>{
        state.loading=false
        state.isauthenticate=true
        state.error=action.payload
    },
    clearerror:(state)=>{
        state.error=null
    },clearmessage:(state)=>{
        state.message=null
    }
})