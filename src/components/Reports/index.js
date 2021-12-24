import React from "react";
import Axios from "axios";
import { useState, useEffect } from "react";
import { Col, Container, Row, Table, Form } from "react-bootstrap";
import * as ReactBootStarp from "react-bootstrap";

function DataTable(props) {
  const [stateget, setStateget] = useState([]);
  const [ser, setSer] = useState("");
  const [isLoadding, setIsLoadding] = useState(false);

  const getdata = async () => {
    try {
      await Axios.get("http://localhost:4001/user/api/all").then((res) => {
        setStateget(res.data.user);
        // setIsLoadding(false);
      });
      setIsLoadding(true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setTimeout(function () {
      getdata();
    }, 500);
  }, []);

  //   useEffect(() => {
  //     //   setIsLoadding(true)
  //     Axios.get("http://localhost:4001/user/api/all")
  //       .then((res) => {
  //         // handle success
  //         //   console.log(res);
  //         setStateget(res.data.user);
  //       setIsLoadding(false)

  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }, []);

  //   let message =" " ;
  //   if (isLoadding) {
  //       message = <p>Getting Data......</p>
  //   }

  return (
    // <div className="App container-fluid bg-white text-dark " >
    //     <br></br>
    // <div className="table-responsive "  >
    // <br></br>

    <Container fluid="md">
      <br></br>
      {/* <Row className="justify-content-md-center"> */}
      <Row>
        <Col sm={1}></Col>
        

        <Col>
        
          {/* <p>{message}</p> */}
          {/* <Container Style="text-align:center"> */}
          <Container Style="text-align:center">
            {isLoadding ? (
              getdata
            ) : (
              <ReactBootStarp.Spinner
                Style="text-align:center;"
                animation="border"
              />
            )}
          <Form.Control
            type="text"
            placeholder="search..."
            onChange={(event) => {
              setSer(event.target.value);
            }}
          ></Form.Control>
          <br></br>

          {/* {<ReactBootStarp.Spinner animation="border" />} */}
          {/* </Container> */}

          <br></br>

          {/* {<ReactBootStarp.Spinner animation="border" />} */}

          {/* <div className="table-responsive" >  */}

          {props.userdata ? (
            <Table
              striped
              bordered
              hover
              variant="dark"
              responsive="sm"
              Style="overflow: auto;
                // text-align:center;
                table-layout: auto;"
            >
              <thead>
                <tr className="align-bottom">
                  <th scope="col">First name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Create time</th>
                  {/* <th scope="col">Action</th> */}
                </tr>
              </thead>
              {stateget
                .filter((val) => {
                  if (ser === "") {
                    return val;
                  } else if (
                    val.first_name.toLowerCase().includes(ser.toLowerCase()) ||
                    val.email.toLowerCase().includes(ser.toLowerCase())
                  ) {
                    return val;
                  }
                  return false;
                })
                .map((getDatas) => (
                  <tbody
                    Style="overflow: auto;"
                    hover="true"
                    key={getDatas._id}
                  >
                    <tr>
                      <td>{getDatas.first_name}</td>
                      <td>{getDatas.email}</td>
                      <td>{getDatas.phone}</td>
                      <td>{getDatas.datetime}</td>
                      {/* <td>Delete</td> */}
                    </tr>
                  </tbody>
                ))}
            </Table>
          ) : (
            <Container fluid="md">
              <br></br>
              {/* <Row className="justify-content-md-center"> */}
              <Row>
                <Col sm={1}></Col>
                <Col>
                  <h1 Style="text-align: center;">Page for member</h1>
                </Col>
                <Col Col sm={1}></Col>
              </Row>
            </Container>
          )}
          </Container>

        </Col>
        
        <Col sm={1}></Col>
      </Row>
    </Container>

    // </div>
    // </div>
  );
}

export default DataTable;
