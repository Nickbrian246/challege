import React from "react";

import { Row, Col, Divider } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Button } from 'antd';
import {ArrowLeftOutlined } from '@ant-design/icons'

import { VertircalInformation } from "./components/VertircalInformation";
import {CardMovie} from '../actorData/components/cardMovieInfo';

import {isActorInStage} from "../../store/slices/actorNameSlice"

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { useNavigate} from "react-router-dom";


const ActorInformation = () => {
  const dispatch = useDispatch();
  const {isActorOnStage} = useSelector((state)=> state.actorName);
  const navigate = useNavigate();


  const handleBackButton = () => {
    dispatch( isActorInStage(false) );
  }
  if (isActorOnStage === false) {
    navigate('/')
  }



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

          <Button type="primary" onClick={handleBackButton}>
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