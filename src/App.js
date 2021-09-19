import React from 'react';
import { Action } from './features/action/action';
import './App.css';
import Calendrier from './components/calendrier/calendrier';

import Actors from './features/actor/Actors';
import InvItems from './features/InvItem/InvItems';
import AddThing from './components/AddThing'
function App() {
  return (
    <div  className="App">
      <Calendrier />
      <div className='Bar'>
        <header className="detailBar">
          <Action />
          
          
        </header>

      </div>
      <div><AddThing />
      </div>
      <Actors />
      <InvItems />
      
      </div>
  );
}

export default App;
