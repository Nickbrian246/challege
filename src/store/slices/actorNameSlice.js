import { createSlice} from '@reduxjs/toolkit';
import {fetchActorInformation} from '../thunks/fetchActorInformation';



const initialState = {
  actorName:[], 
  nameActor :'',
  isActorOnStage: false,
}


export const actorNameSlice = createSlice ({
  name: 'actorInformation',
  initialState,

  reducers:{
    setActorName:(state,action) => {
      state.nameActor = action.payload
      
    },
    isActorInStage: (state,action) => {
      state.isActorOnStage = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase (fetchActorInformation.fulfilled , (state, action) => {
      state.actorName = action.payload;
    }
  
    )}
});

export default actorNameSlice.reducer;

export const {setActorName,isActorInStage} = actorNameSlice.actions;

