import React from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import {
  useState,
  // useEffect
} from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
// import { Redirect } from 'react-router-dom';
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import {
  // Button,
  // Container,
  // Form,
  // Row,
  // Nav,
  // Col,
  InputGroup,
  // Alert
} from "react-bootstrap";

export default function Registerpage() {
  const [email, setEmail] = useState("");
  const [first_name, setFirstname] = useState("");
  const [last_name, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_password] = useState("");
  // const [errors, setErrors] = useState({})
  const [IsError, setIsError] = useState("");
  const [errorMatchmail, setIsErrorMatchmail] = useState("");
  const [showpassword, setShowpassword] = useState(false);
  const [showpasswordcon, setShowpasswordcon] = useState(false);

  let history = useHistory();

  const lengthpassword = (event) => {
    const password = event.target.value;
    setPassword(password);
    if (password.length < 6) {
      setIsError("Password must be more the six characters");
    } else {
      setIsError("");
    }
  };

  // const checkEmail = (event) =>{
  //     const email = event.target.value
  //     setEmail(email)
  //     if(!email){
  //         setIsError("Email is Required");
  //     } if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(setEmail(email))){
  //         setIsError("Email is Valid");
  //         return email
  //     }
  //     // else {
  //     //     setIsError("");

  //     // }
  // }

  const checkValidatepassword = (event) => {
    const confirm_password = event.target.value;
    setConfirm_password(confirm_password);
    if (password !== confirm_password) {
      setIsError("Password not match");
    } else {
      setIsError("");
    }
  };

  const RegisterForm = (e) => {
    // if(password !== confirm_password){
    //     // errors() = "Passwords don't match.";
    //     return alert("Password not match")
    // }
    e.preventDefault();
    axios
      .post("http://localhost:4001/user/api/signup", {
        first_name: first_name,
        last_name: last_name,
        email: email,
        phone: phone,
        password: password,
        confirm_password: confirm_password,
      })
      .then((res) => {
        // console.log(res.data);
        console.log(res);
        // console.log(res.status);
        if (res.data.status === false) {
          // res.data.matchemail
          // console.log(errorlogin);
          setIsErrorMatchmail(res.data.message);
        } else if (res.data.status === true) {
          history.push("/");
          window.location.reload("/");
          // return <Redirect to="/" />
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // useEffect(() => {

  // }, [])
  return (
    // <Container Style="margin:0 auto">
    <Container Style="padding-top:30px">
      <Row>
        <Col xl={2} lg={2} md={"auto"} sm={"auto"}></Col>
        <Col
          Col
          Style="border: 3px solid navy;margin:0 auto;border-radius: 50px;padding-right:30px;padding-left:30px;background-color:#212529"
        >
          <h1 Style="text-align: center;color:rgba(255,255,255,.55)">
            Sign up
          </h1>
          <Form Style="width:100%; " onSubmit={RegisterForm}>
            <Row className="mb-1">
              <Form.Group className="mb-3" as={Col}>
                {/* <Form.Group className="mb-3" controlId="formBasicFirstname" as={Col}> */}
                <Form.Label
                  Style="color:rgba(255,255,255,.55)"
                  htmlFor="firstname"
                >
                  First name <label Style="color:red!important">*</label>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="firstname"
                  placeholder="Enter Firstname"
                  onChange={(event) => {
                    setFirstname(event.target.value);
                  }}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" as={Col}>
                {/* <Form.Group className="mb-3" controlId="formBasicLastname" as={Col}> */}
                <Form.Label
                  Style="color:rgba(255,255,255,.55)"
                  htmlFor="lastname"
                >
                  Last name<label Style="color:red!important">*</label>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="lastname"
                  placeholder="Enter Lastname"
                  onChange={(event) => {
                    setLastname(event.target.value);
                  }}
                  required
                />
              </Form.Group>
            </Row>

            <Row className="mb-1">
              <Form.Group className="mb-3" as={Col}>
                {/* <Form.Group className="mb-3" controlId="formBasicEmail" as={Col}> */}
                <Form.Label Style="color:rgba(255,255,255,.55)" htmlFor="email">
                  Email address <label Style="color:red!important">*</label>
                </Form.Label>
                {/* <Form.Control type="email" name="email" placeholder="Enter Email" onChange={(event)=>{checkEmail(event)}}/> */}
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" as={Col}>
                {/* <Form.Group className="mb-3" controlId="formBasicEmail" as={Col}> */}
                <Form.Label Style="color:rgba(255,255,255,.55)" htmlFor="phone">
                  Phone <label Style="color:red!important">*</label>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  placeholder="Enter Phone"
                  onChange={(event) => {
                    setPhone(event.target.value);
                  }}
                />
              </Form.Group>
            </Row>

            <Row className="mb-1">
              <Form.Group className="mb-3" as={Col}>
                {/* <Form.Group className="mb-3" controlId="formBasicPassword" as={Col}> */}
                <Form.Label
                  Style="color:rgba(255,255,255,.55)"
                  htmlFor="password"
                >
                  Password <label Style="color:red!important">*</label>
                </Form.Label>
                <InputGroup className="mb-2">
                  <Form.Control
                    // type="password"
                    type={showpassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    onChange={(event) => {
                      lengthpassword(event);
                    }}
                  />
                  <Button
                    Style="padding:8px 8px;cursor: pointer;outline:none;background-color:#212529;color:white;"
                    onClick={() => setShowpassword(!showpassword)}
                  >
                    {showpassword ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
                  </Button>
                </InputGroup>

                {/* <Form.Control type="password" name="password" placeholder="Password"  onChange={(event)=>{setPassword(event.target.value)}} /> */}
              </Form.Group>

              <Form.Group className="mb-3" as={Col}>
                {/* <Form.Group className="mb-3" controlId="formBasicPassword" as={Col}> */}
                <Form.Label
                  Style="color:rgba(255,255,255,.55)"
                  htmlFor="confirm_password"
                >
                  Confirm Password <label Style="color:red!important">*</label>
                </Form.Label>

                <InputGroup className="mb-2">
                  <Form.Control
                    // type="password"
                    type={showpasswordcon ? "text" : "password"}
                    name="confirm_password"
                    placeholder="Confirm Password"
                    onChange={(event) => checkValidatepassword(event)}
                  />
                  <Button
                    Style="padding:8px 8px;cursor: pointer;outline:none;background-color:#212529;color:white;"
                    onClick={() => setShowpasswordcon(!showpasswordcon)}
                  >
                    {showpasswordcon ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
                  </Button>
                </InputGroup>

                {/* <Form.Control type="password" ame="confirm_password" placeholder="Confirm Password" onChange={(event)=>{setConfirm_password(event.target.value)}} /> */}
              </Form.Group>
            </Row>
            <Row>
              <Col>
                <h6 Style="color:red;text-align:center">{IsError}</h6>
                <h6 Style="color:red;text-align:center">{errorMatchmail}</h6>
              </Col>
            </Row>
            <Container>
              <Row Style="padding-bottom:20px;padding-top:20px">
                <Col></Col>
                {/* <Col ><Button variant="dark" Style="border: 3px solid #0d6efd;background-color:#0d6efd;width:100%" >Register</Button></Col>  */}

                <Col>
                  <Button
                    variant="dark"
                    Style="border: 2px solid #0d6efd;width:100%"
                    type="submit"
                  >
                    Register
                  </Button>
                </Col>
                <Col></Col>
              </Row>
            </Container>
          </Form>
        </Col>
        <Col xl={2} lg={2} md={"auto"} sm={"auto"}></Col>
      </Row>
    </Container>
  );
}
