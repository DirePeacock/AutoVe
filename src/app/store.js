import { configureStore, combineReducers} from '@reduxjs/toolkit';
import actionSlice from '../features/action/slice';
import { actorSlice } from '../features/actor/slice';
import { invItemSlice } from '../features/InvItem/slice';
export default configureStore({  
  reducer: {
    action: actionSlice,
    actors: actorSlice.reducer,
    invItems: invItemSlice.reducer
  },
});
