import React from "react";
import {Typography} from 'antd';
import {
  Row,
  Col,
  Divider,
} from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import  {useSelector} from 'react-redux'

const {
  Title,
  Text,
  Paragraph,
} = Typography; 

const CardMovieInfo = (props) => {
  // const {results} = useSelector((state) => state.actorName.actorName);
//   const {id} = useSelector((state) => state.actorName.actorName.results[0]);
// console.log(results);
// console.log(id,'so id');
// console.log("hello there222")
// id,
//   original_title,
//   overview,
//   poster_path,
//   release_date,
//   title,
//   vote_average,
//   vote_count,
  console.log(props,'hola soy props');


  return (
    <>
    <div style={{width:'auto',height:'232px'}}>
    <Row justify="space-between" align="middle">
      <Col>
        <Title>{}</Title>
      </Col>
      <Col>
      <span>{}</span>
      </Col>
    </Row>

    <Row  justify="space-between" align="middle">
      <Col>
      <img style={{width:'100px'}}
      src={``} title="moviePicture"/>
      </Col>

      <Col>

      <div>
        <Text>{props.overview}</Text>
      </div>
      </Col>

    </Row>
    <Paragraph>{} </Paragraph>
      <Divider></Divider>
    </div>
    </>
  )
}

export {CardMovieInfo}