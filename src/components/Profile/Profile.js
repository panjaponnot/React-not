import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
// import { useHistory } from 'react-router'
import { Redirect } from 'react-router-dom';
// import jwt_decode from "jwt-decode";
import Axios from "axios";
import { 
    // useState, 
    useEffect 
} from "react";



function Profile(props) {


    // let history = useHistory();
   const access_token = sessionStorage.getItem("access_token");
//    console.log("access_token",access_token);


  const getdata = async () => {
    try {
        // console.log("fffff")

        let config = {
            headers: {
              'Authorization': 'Bearer ' + access_token
            }
          }
      await Axios.get("http://localhost:4001/user/api/getone", config)
      .then((res) => {
          console.log("res",res);
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // setTimeout(function () {
      getdata();
    // }, 500);
  },);
    
    if (!sessionStorage.getItem("access_token")) {
        // history.push("/profile");
        // window.location.reload("/profile");
        return <Redirect to="/" />

    }
    // else {
    //     history.push("/");
    //     window.location.reload("/");

    // }
    return (

            <Container >
        {props.userdata ?  
            <Container >
                <br></br>

                <Row>
                    <Col>
                    <h3 Style="text-align:center;">{props.userdata ? 'ยินดีต้อนรับเข้าสู่ระบบ ' + props.userdata : ''}</h3>
                    </Col>

                </Row>
                <br></br>
                <Row>
                <Col>
                    {/* <h3 Style="text-align:center;">{props.userdata ? 'ยินดีต้อนรับเข้าสู่ระบบ ' + props.userdata : ''}</h3> */}
                    <h2 Style="text-align:center;margin:0 auto"> Profile </h2>

                    </Col>
                </Row> 
            </Container>

                : 
                ""}      
            </Container>


    )
}

export default Profile
