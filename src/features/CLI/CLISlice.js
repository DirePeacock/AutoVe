import { createSlice } from '@reduxjs/toolkit';
import *  as Dice from './../Dice/Dice.js';
import *  as CommandParser from './../Dice/CommandParser';


export const CLISlice = createSlice({
  name: 'CLI',
  initialState: {
    title:'name',
    last_roll:'0',
    func_str:'1d6',
    average:3.5
  },
  reducers: {
    rollDiceFunction: (state, action) => {
      console.log(action);
      let retval = String(Dice.cmdRoll(state.func_str));
      console.log(retval)
      state.last_roll = retval;
    },
    setDiceFunc: (state, action) => {
      state.func_str = action.payload;
      let retval = String(Dice.cmdRoll(state.func_str));
      state.last_roll = retval;
    },
    setTitle: (state, action) => {
      state.title = action.payload;
    }

  },
});

export const {  setTitle, setDiceFunc, rollDiceFunction } = CLISlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice selectCLI. For example: `useSelector((state) => state.counter.value)`



export default CLISlice.reducer;
