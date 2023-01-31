import { configureStore } from "@reduxjs/toolkit";
import { adminReducer } from "./reducers/adminReducer";
import { courseReducer } from "./reducers/courseReducer";
import { profilereducer } from "./reducers/profilereducer";
import { subscriberReducer } from "./reducers/subscribeReducer.js";
import { userreducer } from "./reducers/userReducer";

export const server= "https://my-course-backend-third.vercel.app"

export const reduxstore=configureStore({
    reducer:{
    user: userreducer,
    profilebeta : profilereducer,
    courses:courseReducer,
    admin:adminReducer,
    subscribe:subscriberReducer
    
    }
})