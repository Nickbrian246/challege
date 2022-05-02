import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';

// export const fetchActorInformation = createAsyncThunk(
//   'actorInformation/fetchActorInformation',
//   async (actorName) => {
//     // const {clientID}= unreadData;
//     // const {adcID} = unreadData;

//     const data = await fetch("https://api.themoviedb.org/3/search/person?api_key=f98de19a3ed6c42f7facfd63b230d5da&language=en-US&query=Dwayne%20Johnson&page=1&include_adult=false")
//     const response =  await data.json()
//     console.log(response,'hello desde response asynthunk')
//     return response;    
//   }
// );
const initialState = {
  actorName:[]
}


export const actorNameSlice = createSlice ({
  name: 'actorInformation',
  initialState,

  reducers:{
    setActorName:(state,action) => {
      state.actorName = action.payload
      
    }
    
  }
});

export default actorNameSlice.reducer;

export const {setActorName} = actorNameSlice.actions;


// extraReducers: (builder) =>{
//   builder
//     .addCase(fetchActorInformation.fulfilled, (state, action) => {
//       const {payload} = action;
//       state.actorInformationRedux = 10
//     });
// },
