import { nanoid } from '@reduxjs/toolkit';
import {React, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actorSelectors, fetchData} from './slice';
import Actor from './actor';

const Actors = () => {
    const dispatch = useDispatch()
    useEffect(()=> {dispatch(fetchData())}, [dispatch])
    const allActors = useSelector(actorSelectors.selectEntities);
    const actorList = [];
    for (const id in allActors){
        if(Object.hasOwnProperty.call(allActors, id)){
            const actorItem = allActors[id];
            actorList.push(
                <Actor className='Actor' key={actorItem.actor_id}
                actor_id={actorItem.actor_id}
                actor_name={actorItem.actor_name}
                />
            );
        }
    }
    return(
        <div><h3>myActors</h3><div>{actorList}</div></div>
    );

}
export default Actors;