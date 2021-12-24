import React, { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import {
  Background,
  ModalWrapper,
  ModalImg,
  ModalContent,
  CloseModalButton,
} from "./style";
import { Button, Container, Form, Row } from "react-bootstrap";
// ModalLogin
import loginpic from "./zenitsu.jpeg";

export const ModalRegister = ({ showModalRes, setShowModalRes }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModalRes ? 1 : 0,
    transform: showModalRes ? `translateY(-10%)` : `translateY(-100%)`,
    // transform: showModalRes ? `translateY(-20%)` : `translateY(50%)`
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModalRes(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModalRes) {
        setShowModalRes(false);
        console.log("I pressed");
      }
    },
    [setShowModalRes, showModalRes]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModalRes ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModalRes={showModalRes}>
              <ModalContent>
                <h1>Register</h1>
                <Form Style="width:70%">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>First name</Form.Label>
                    <Form.Control type="firstname" placeholder="First name" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control type="lastname" placeholder="Last name" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Confirm Password"
                    />
                  </Form.Group>
                  <Container>
                    <Row>
                      <Button variant="dark">Register</Button>
                    </Row>
                  </Container>
                </Form>
              </ModalContent>
              <ModalImg src={loginpic} alt="camera" />

              <CloseModalButton
                aria-label="Close modal"
                onClick={() => setShowModalRes((prev) => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};
