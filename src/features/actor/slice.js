import { createAsyncThunk, createEntityAdapter,createSlice } from '@reduxjs/toolkit';
import {schema, normalize} from 'normalizr';
const actorAdapter = createEntityAdapter({
    selectId: (actor) => actor.actor_id,
  })
export const actorSelectors = actorAdapter.getSelectors((state) => state.actors);


export const fetchData = createAsyncThunk('actor/fetchData/', async (_, { dispatch }) => {
    const data = await fetch("http://localhost:3456/actor").then((res) => res.json() )
    console.log("data")
    console.log(data)
    // schema
    const actor_schema = new schema.Entity('actor',{}, {idAttribute:'actor_id'});
  
    const actor_list_schema = [actor_schema];
    
    const normalizred_data = normalize(data, actor_list_schema);
    console.log("normalizred_data")
    console.log(normalizred_data)
    
    //
    
    dispatch(setActors(normalizred_data.entities.actor))
  })
  

export const actorSlice = createSlice({
    name:'actors',
    selectedId:0,
    initialState: actorAdapter.getInitialState(),
    reducers:{
        
        addActor: actorAdapter.addOne,
        addActors: actorAdapter.addMany,
        setActors(state, action){
            actorAdapter.setAll(state, action.payload )
        },
        deleteActor(state, action) {

            actorAdapter.removeOne(state, action);
        },
        updateActor:actorAdapter.updateOne,
        
    }
});
export const {setActorName, addActor,addActors, setActors, deleteActor, updateActor  } = actorSlice.actions;
export default actorSlice.reducer;