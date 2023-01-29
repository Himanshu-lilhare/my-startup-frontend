import { createReducer } from "@reduxjs/toolkit";

export const subscriberReducer=createReducer({},{

    getSubscriptionRequest:(state)=>{
        state.loading=true
       },
       getSubscriptionSuccess:(state,action)=>{
        state.loading=false
        state.subscriptionid=action.payload
       },
       getSubscriptionFail:(state,action)=>{
        state.loading=false
        state.error=action.payload
       },
       cancleSubscriptionRequest:(state)=>{
        state.loading=true
       },
       cancleSubscriptionSuccess:(state,action)=>{
        state.loading=false
        state.message=action.payload
       },
       cancleSubscriptionFail:(state,action)=>{
        state.loading=false
        state.error=action.payload
       },
       clearerror:(state)=>{
        state.error=null
    },clearmessage:(state)=>{
        state.message=null
    }
})