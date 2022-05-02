import React from "react";

import { Row, Col, Divider } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Button } from 'antd';
import {ArrowLeftOutlined } from '@ant-design/icons'

import { VertircalInformation } from "./components/VertircalInformation";
import {CardMovie} from '../actorData/components/cardMovieInfo';


const ActorInformation = () => {

  return(
    <>

      <div style={{
        margin: '5% auto 0 auto',
        background:'white',
        width:'900px',
        height:'800px',
        }}>

      <Divider orientation="center"/> 
      <Row>
        <Col
        span={24}
        >

          <Button type="primary">
          <ArrowLeftOutlined />
          Regresar
          </Button>
          
        </Col>
      </Row>

      <Divider orientation="center"> películas</Divider>
    <Row gutter={[5, 5]}>
      <Col  flex= "300px" >
        <div ><VertircalInformation/></div>
      </Col>
      <Col  xs={16}>
        <div ><CardMovie/></div>
      </Col>
    </Row>
      </div>

  
    </>
  )
}
export {ActorInformation}