import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

// function index() {
//     return (
//         <Container fluid="md">
//             <Row>
//             <Col sm={2} ></Col>
//                 <Col sm={8} >
//                 <h1 Style="text-align:center">สวัสดีหน้า Home</h1>
//                 </Col>
//             <Col sm={2} ></Col>


//             </Row>
//         </Container>

            
//     )
// }
// const index = ({user}) => {

//     return (
//         <div>
//             {user ? 'Hi ' + user : 'You are not logged in'}
//         </div>
//     );
// };
const index = (props) => {

    return (
        <Container fluid="md">
            <Row>
            <Col sm={2} ></Col>
            {/* <Col ls={8} > */}
            <Col>
                <h1 Style="text-align: center;">{props.userdata ? 'Hi ' + props.userdata : 'You are not logged in'}</h1>
            </Col>

               {/* </Col> */}
            <Col sm={2} ></Col>


            </Row>
        </Container>
    );
};




export default index
