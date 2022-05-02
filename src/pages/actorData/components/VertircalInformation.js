import React from "react";
import './styless.css';
import {
  Row,
  Col,
  Typography
} from 'antd';


const {Title, Text,} = Typography; 

const VertircalInformation = () => {

  return(
    <>
    <div className="actorInfo-container">
      
        <Row justify="center">
          <Col>
          <img style={{width:'200px'}} src ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStpy5AJ7T5ogRTjgXmakPRf0SaxtG5fA-7YtfI7aqZKjBCSi7R' alt="actor" />
          </Col>
          
        </Row>
        <Row justify="center">
          <Col>
          <Title >Name</Title>
          </Col>
        </Row>
        <Row justify="center">
          <Col>
          <Text mark>Gender</Text>
          </Col>
        </Row>
        <Row justify="center">
          <Col>
          <Title level={2}>popularity : 18</Title>
          </Col>
        </Row>

    </div>
      
    </>
  )
}
export {VertircalInformation}