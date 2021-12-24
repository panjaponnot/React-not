import axios from "axios";

const API_URL = "http://localhost:4001/user/api/";


// const register = (email, password) => {
//     return axios.post(API_URL + "signup", {
//       ,
//       email,
//       password,
//     });
//   };


export const loginform = (email, password) => {
    return axios
      .post(API_URL + "signin", {
        email,
        password,
      })
      .then((res) => {
        if (res.data.access_token) {
          // localStorage.setItem("user", JSON.stringify(res.data));
          // sessionStorage.setItem("user", JSON.stringify(res.data));

        }
  
        return res.data;
      });
  };



// const logout = () => {
//     localStorage.removeItem("user");
//   };


  

// export default {loginform,logout};