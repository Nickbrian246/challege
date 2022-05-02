import React from "react";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import { Main } from "../pages/main";
import { NotFound } from "../pages/NotFaund";
import {ActorInformation} from '../pages/actorData';

const RoutesApp = ()=>{

  return (

  <>
  <BrowserRouter>
    <Routes>
    <Route path="/" element= {<Main/>} />
    <Route path="/*" element= {<NotFound/>} />
    <Route path="/actor" element= {<ActorInformation/>} />

    </Routes>
    
  </BrowserRouter>
  </>
  );
;}
export {RoutesApp}