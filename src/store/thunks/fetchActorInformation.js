import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchActorInformation = createAsyncThunk(
  'actorInformation/fetchActorInformation',

async (actorName) => {
    try {
      const data = await fetch(`https://api.themoviedb.org/3/search/person?api_key=f98de19a3ed6c42f7facfd63b230d5da&language=en-US&query=${actorName}&page=1&include_adult=false`);
      const response =  await data.json();
  
      return response;  

    } catch (e) {
      console.log(e,'soy error')
    }  
  }
);

// export const fetchActorInformation = createAsyncThunk(
//   'actorInformation/fetchActorInformation',

//  async (actorName) => {
//     try {
//       const data = await fetch(`https://api.themoviedb.org/3/search/person?api_key=f98de19a3ed6c42f7facfd63b230d5da&language=en-US&query=${actorName}&page=1&include_adult=false`);
//       const response =  await data.json();
  
//       return response;  

//     } catch (e) {
//       console.log(e,'soy error')
//     }  
//   }
// );