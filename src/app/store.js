import { configureStore, combineReducers} from '@reduxjs/toolkit';
import CLIReducer from '../features/CLI/CLISlice';

const 
export default configureStore({
  //const rootReducer
  reducer: {
    number: CLIReducer,
  },
});
