import React from "react";
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
import { useSelector } from "react-redux";

import { useNavigate} from "react-router-dom";

import {setActorName,isActorInStage} from "../../../store/slices/actorNameSlice"
import { fetchActorInformation} from '../../../store/thunks/fetchActorInformation'






const { Dragger } = Upload;
const {Title, Paragraph} = Typography; 

const URL = "https://whois.nomada.cloud/upload";




const DragAndDrop = () => {
  const {isActorOnStage} = useSelector((state) => state.actorName)
  const navigate = useNavigate();
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
    // if (status !== 'uploading') {
    //   console.log('soy fileLis',info.file, info.fileList);
    // }
    if (status === 'done') {
      message.success(`${info.file.name} Imagen subida de manera exitosa.`);
      console.log(info.file.response.actorName );
      dispatch(fetchActorInformation(info.file.response.actorName))
      dispatch(setActorName(info.file.response.actorName))
      dispatch(isActorInStage(true));
    } else if (status === 'error') {
      message.error(`${info.file.name} Error al subir el archivo.`);
    }
    
  },
  // onDrop(e) {
  //   console.log('Dropped files', e.dataTransfer.files);
  // },
};
if (isActorOnStage=== true){
  navigate('/actor');
}

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