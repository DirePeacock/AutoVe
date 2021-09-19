import React from 'react';
// import s from './../../a'
import sprite from "./../../assets/actors/iso_Zyz.png";
//import HealthBar from '../../components/health-bar';
import { actorSlice } from './slice';
import { useDispatch } from 'react-redux';

import rsuite from 'rsuite';

const Actor = ({ actor_id, actor_name }) => {
  // const dispatch = useDispatch();
  
  return (
    <div>
      <div style={{
          position: 'absolute',
          // backgroundImage: `url('${sprite}')`,
          top:'50%',
          left:'50%',
          width: '40px',
          height: '40px',
          
        }}>
          

      </div>
      <p>actor_id: {actor_id}, actor_name:{actor_name}</p>
    </div>
  );
  // top: actor.position[1],
  //       left: actor.position[0],
  //       opacity: actor.visible ? 1 : 0,
  //       transition: 'left .35s ease-in-out .15s, top .35s ease-in-out .15s, opacity .35s ease-in-out'
};

export default Actor;
