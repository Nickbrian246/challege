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

const CardMovieInfo = () => {
  const state = useSelector((state) => state.actorName);
console.log(state);
console.log("hello there222")

  return (
    <>
    <div style={{width:'auto',height:'232px'}}>
    <Row justify="space-between" align="middle">
      <Col>
        <Title>{state.actorName.results[0].known_for[0].title}</Title>
      </Col>
      <Col>
      <span>{state.actorName.results[0].popularity}</span>
      </Col>
    </Row>

    <Row  justify="space-between" align="middle">
      <Col>
      <img style={{width:'100px'}}
      src={`
      https://api.themoviedb.org/3"${state.actorName.results[0].known_for.profile_path}`} title="moviePicture"/>
      </Col>

      <Col>

      <div>
        <Text>{state.actorName.results[0].known_for[0].overview}</Text>
      </div>
      </Col>

    </Row>
    <Paragraph>{state.actorName.results[0].known_for[0].release_date} </Paragraph>
      <Divider></Divider>
    </div>
    </>
  )
}

export {CardMovieInfo}