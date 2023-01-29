import axios from "axios"




export const getSubscription=()=> async dispatch =>{

    try {
        dispatch({type:"getSubscriptionSRequest"})
        // console.log(email,password)
    const {data}=await axios.get("http://localhost:4000/subscribe",
    {
      withCredentials:true
    }
    )
    console.log(data)
    dispatch({type:"getSubscriptionSuccess",payload:data.subscriptionid})
    } catch (error) {
        console.log(error.response.data.error)
        dispatch({type:"getSubscriptionFail",payload:error.response.data.error})
    }
}





export const cancleSubscription=()=> async dispatch =>{

    try {
        dispatch({type:"cancleSubscriptionRequest"})
        // console.log(email,password)
    const {data}=await axios.delete("http://localhost:4000/canclesubscription",
    {
      withCredentials:true
    }
    )
    console.log(data)
    dispatch({type:"cancleSubscriptionSuccess",payload:data.message})
    } catch (error) {
        console.log(error.response.data.error)
        dispatch({type:"cancleSubscriptionFail",payload:error.response.data.error})
    }
}
