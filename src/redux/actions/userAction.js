import axios from 'axios';
import { server } from '../reduxstore';
export const login = (email, password) => {
  return async dispatch => {
    try {
      dispatch({ type: 'loginRequest' });
      console.log(email, password);
      const { data } = await axios.post(
        `${server}/login`,
        { email, password },
        {
          headers: {
            'Content-type': 'application/json',
          },
          withCredentials: true,
        }
      );
      console.log(data);
      dispatch({ type: 'loginSuccess', payload: data });
    } catch (error) {
      console.log(error);
      dispatch({ type: 'loginfail', payload: error.response.data.error });
    }
  };
};

export const registeruser = formdata => {
  return async dispatch => {
    try {
      dispatch({ type: 'registerRequest' });

      const { data } = await axios.post(`${server}/register`, formdata, {
        headers: {
          'Content-type': 'multipart/form-data',
        },
        withCredentials: true,
      });
      console.log(data);
      dispatch({ type: 'registerSuccess', payload: data });
    } catch (error) {
      console.log(error.response.data.error);
      dispatch({ type: 'registerfail', payload: error.response.data.error });
    }
  };
};

export const getmyprofile = () => {
  return async dispatch => {
    try {
      dispatch({ type: 'loaduserRequest' });
      // console.log(email,password)
      const { data } = await axios.get(`${server}/me`, {
        withCredentials: true,
      });
      console.log(data.avatar);
      dispatch({ type: 'loaduserSuccess', payload: data.user });
    } catch (error) {
      
      dispatch({ type: 'loaduserfail', payload: error.response.data.error });
    }
  };
};

export const loogut = () => {
  return async dispatch => {
    try {
      dispatch({ type: 'logoutRequest' });
      // console.log(email,password)
      const { data } = await axios.get(`${server}/logout`, {
        headers:{
          "Content-type" : "application/json"
      },
        withCredentials: true,
      });
      console.log(data);
      dispatch({ type: 'logoutSuccess', payload: data.user });
    } catch (error) {
      console.log(error.response.data.error);
      dispatch({ type: 'logoutfail', payload: error.response.data.error });
    }
  };
};
