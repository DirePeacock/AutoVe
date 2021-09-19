import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addActor} from '../features/actor/slice';
import { nanoid } from '@reduxjs/toolkit';

export default function AddThing(props)  {
   const dispatch = useDispatch();
  const [entityArgStr, setEntityArgStr] = useState('');

  const submit = () => {
    const actors = entityArgStr.split(',');
    // first method - dispatch separate actions for each item
    actors.forEach((actorStr) =>
       dispatch(addActor({ id: nanoid(), actorName: actorStr }))
     );
    // second method - dispatch one action for all items - better
    // dispatch(
    //   addActor(
    //     actors.map((item) => ({ id: nanoid(), actor: item, completed: false }))
    //   )
    // );
  };
  return (
    <div className='add-Thing'>
      <h1>ayylmao</h1>
      <p>
        <i>gimme a name!</i>
      </p>
      <input value={entityArgStr} onChange={(e) => setEntityArgStr(e.target.value)} />
      <button onClick={submit}>Add</button>
    </div>
  );
};

