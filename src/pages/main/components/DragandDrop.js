import React,{useEffect, useState} from "react";
import './styless.css';

import {
  Upload,
  message,
  Typography,
  Space,
} from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { Row, Col} from 'antd';

import { useDispatch } from "react-redux";
import {setActorName} from "../../../store/slices/actorNameSlice"






const { Dragger } = Upload;
const {Title, Paragraph} = Typography; 

const URL = "https://whois.nomada.cloud/upload";




const DragAndDrop = () => {
  const  [isActorName, setIsActorName] = useState(false);

  const dispatch = useDispatch();
  

const props = {
  name: 'file',
  multiple: true,

  action: URL,
  headers:{
    "Nomada": "ZjRiMjhhYzgtYTU3NS00ZDE0LWI1OGMtNDlkODdlNjkwMzIz",
  },
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log('soy fileLis',info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} Imagen subida de manera exitosa.`);
      console.log(info.file.response.actorName )
      getInfoActor(info.file.response.actorName)
      setIsActorName(true)
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
    
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};
const getInfoActor = async (actorName) => {
  const data = await fetch("https://api.themoviedb.org/3/search/person?api_key=f98de19a3ed6c42f7facfd63b230d5da&language=en-US&query=Dwayne%20Johnson&page=1&include_adult=false")
  const response =  await data.json()
  console.log(response,'hello desde response')
  dispatch(setActorName(response));
}

useEffect(()=> {
getInfoActor()
console.log("hello there");
},[!isActorName])

  return (
    <>
    <div className='dragAndDrop-container'>

    <Row justify="center">

      <Col>

      <Title style={{textAlign:'center'}}>¿Quién es este actor?</Title>

      <Dragger {...props}  multiple={true}  className='dragger-container'>

        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>

        <Space direction="vertical" >
        <Title style={{textAlign:'center'}} level={2}>Haz click o arrastra una  imagen</Title>
        <Paragraph style={{textAlign:'center',fontSize:'20px'}} >
          Selecciona la foto de un actor famoso para saber quién es y en qué <br/> películas ha salido
        </Paragraph>
        </Space>

      </Dragger>

    </Col>

  </Row>

    </div>
    </>
  )
}

export {DragAndDrop}