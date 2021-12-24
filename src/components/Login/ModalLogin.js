import React, { useRef, useEffect, useCallback, useState } from "react";
import { useSpring, animated } from "react-spring";
import {
  Background,
  ModalWrapper,
  ModalImg,
  ModalContent,
  CloseModalButton,
} from "./style";
import {
  Button,
  Container,
  Form,
  Row,
  Nav,
  Col,
  InputGroup,
  // Alert
} from "react-bootstrap";
// ModalLogin
import loginpic from "./cap.jpeg";
import {
  BsPersonFill,
  BsFillEyeFill,
  BsFillEyeSlashFill,
} from "react-icons/bs";
import { RiLockPasswordFill } from "react-icons/ri";
import axios from "axios";
import { useHistory } from "react-router-dom";




// const required = (value) => {
//   if (!value) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         This field is required!
//       </div>
//     );
//   }
// };

// function checklogin() {
//   return (
//     [
//       'primary',
//       'secondary',
//       'success',
//       'danger',
//       'warning',
//       'info',
//       'light',
//       'dark',
//     ].map((variant, idx) => (
//       <Alert key={idx} variant={variant}>
//         This is a {variant} alert with{' '}
//         <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you
//         like.

//       </Alert>
//     ))
//   )
// }

export const ModalLogin = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorlogin, setErrorlogin] = useState("");
  const [showpassword, setShowpassword] = useState(false);

  // const [name, setName] = useState({});

  // const [errors, setErrors] = useState([])

  // const [validated, setValidated] = useState(false);

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    // transform: showModal ? `translateY(-20%)` : `translateY(-100%)`
    transform: showModal ? `translateY(-20%)` : `translateY(50%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
        console.log("I pressed");
      }
    },
    [setShowModal, showModal]
  );

  // const onChangeEmail = (e) => {
  //   const email = e.target.value;
  //   setEmail(email);
  // };

  // const onChangePassword = (e) => {
  //   const password = e.target.value;
  //   setPassword(password);
  // };

  let history = useHistory();

  const loginModal = (e) => {
    e.preventDefault();

    // setErrors([])

    //   if(email === "" ){

    //     // document.getElementById('email').innerHTML="กรุณาใส่อีเมล์";
    // }
    // if(password === ""){

    //     // document.getElementById('password').innerHTML="กรุณาใส่รหัส";
    // }

    // e.preventDefault();
    axios
      .post("http://localhost:4001/user/api/signin", {
        email: email,
        password: password,
      })
      .then((res) => {
        // console.log("res", res);
        if (res.data.status === false) {
          // res.data.status = res.data.error
          const errorlogin = res.data.error;
          setErrorlogin(errorlogin);
        } else if (res.data.status === true) {
          // localStorage.setItem('access_token', res.data.user.access_token)
          sessionStorage.setItem("access_token", res.data.user.access_token);

          history.push("/profile");
          window.location.reload("/profile");
        }
        // console.log(res.data);
        // alert('ลงทะเบียนละ')
        // window.location.reload();
        // props.history.push("/");
        // window.location.reload();

        // localStorage.setItem("user", JSON.stringify(res.data))

        // history.push("/");
        // window.location.reload("/");

        // localStorage.setItem('access_token', res.data.user.access_token)
        // window.location.replace('/')
      })
      .catch((err) => {
        // setErrors(errors => [...errors, err.response.data])
        // console.log(err);
        console.log(err);
        // console.log(err.response.data)
        // checklogin()
      });
  };

  // if (localStorage.getItem("access_token") != null)
  // history.push(`/profiles/${JSON.parse(localStorage.getItem("access_token")).id}`)
  // history.push('/')
  // console.log(localStorage.getItem("access_token"));

  //   const renderErrors = () => {
  //     if (errors) {
  //         return (
  //             errors.map((err, idx) =>
  //                 <Alert key={idx} variant="danger">
  //                     {err}
  //                 </Alert>
  //             )
  //         )
  //     } else {
  //         return null
  //     }
  // }

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              {/* {renderErrors()} */}

              <ModalImg src={loginpic} alt="camera" />

              <ModalContent>
                <h1>Login</h1>
                <Form Style="width:70%" onSubmit={loginModal}>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="email">
                      <BsPersonFill /> Email address
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      name="email"
                      // value={email}
                      // onChange={onChangeEmail}
                      onChange={(event) => {
                        setEmail(event.target.value);
                      }}
                      // validations={[required]}
                      // required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="password">
                      <RiLockPasswordFill /> Password
                    </Form.Label>
                    <Col xs="auto">
                      <InputGroup className="mb-2">
                        <Form.Control
                          // type="password"
                          type={showpassword ? "text" : "password"}
                          placeholder="Password"
                          name="password"
                          // value={password}
                          onChange={(event) => {
                            setPassword(event.target.value);
                          }}
                          // onChange={onChangePassword}
                          // validations={[required]}

                          // required
                        ></Form.Control>

                        <Button
                          Style="padding:8px 8px;cursor: pointer;outline:none;background-color:transparent;color:black;"
                          onClick={() => setShowpassword(!showpassword)}
                        >
                          {showpassword ? (
                            <BsFillEyeFill />
                          ) : (
                            <BsFillEyeSlashFill />
                          )}
                        </Button>
                      </InputGroup>
                    </Col>

                    {/* <p  Style="color:red">{errorlogin ? errorlogin : ''}</p> */}
                    <Form.Text
                      className="text-muted"
                      Style="color:red!important"
                    >
                      {" "}
                      {errorlogin ? errorlogin : ""}{" "}
                    </Form.Text>
                  </Form.Group>
                  {/* <br /> */}
                  <Nav.Link href="/" Style="margin-top:-20px;margin-left:-8px">
                    Forgot Password ?
                  </Nav.Link>
                  <Container>
                    <Row>
                      <Button
                        variant="dark"
                        // onClick={loginModal}
                        type="submit"
                      >
                        Login
                      </Button>
                    </Row>
                  </Container>
                </Form>
              </ModalContent>
              <CloseModalButton
                aria-label="Close modal"
                onClick={() => setShowModal((prev) => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};
