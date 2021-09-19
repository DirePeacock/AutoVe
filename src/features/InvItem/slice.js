import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
  createSelector,
} from '@reduxjs/toolkit'
import {schema, normalize} from 'normalizr';

export const fetchData = createAsyncThunk('inv_item/fetchData/', async (_, { dispatch }) => {
  const data = await fetch("http://localhost:3456/inv_item").then((res) =>
    res.json()
  )
  // schema
  const inv_item_schema = new schema.Entity('inv_item',{}, {idAttribute:'inv_item_id'});

  const inv_item_list_schema = [inv_item_schema];
  
  const normalizred_data = normalize(data, inv_item_list_schema);
  
  
  //
  
  dispatch(setInvItems(normalizred_data.entities.inv_item))
})

const invItemAdapter = createEntityAdapter({
  selectId: (inv_item) => inv_item.inv_item_id,
})

const init_state =
{
  ids: [0, 1],
  entities: [{ inv_item_id: 0, inv_item_name: "ayy" }, { inv_item_id: 1, inv_item_name: "lmao" }]
};


export const invItemSelectors = invItemAdapter.getSelectors((state) => state.invItems);

export const invItemSlice = createSlice({
  name: 'invItems',
  initialState: invItemAdapter.getInitialState(),
  reducers: {

    addInvItem: invItemAdapter.addOne,
    addInvItems: invItemAdapter.addMany,
    setInvItems(state, action){
      invItemAdapter.setAll(state, action.payload )
    },
    deleteInvItem(state, action) {

      invItemAdapter.removeOne(state, action);
    },
    updateInvItem: invItemAdapter.updateOne,

  }
});
export const { setInvItemName, addInvItem, addInvItems, setInvItems, deleteInvItem, updateInvItem } = invItemSlice.actions;
export default invItemSlice.reducer;