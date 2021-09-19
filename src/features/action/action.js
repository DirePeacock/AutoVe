import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './action.module.css';
import {
  setTitle,
  setDiceFunc,
  rollDiceFunction,
} from './slice';

export function Action() {
  // number is the goddamn name of ht thing in stor.js
  // const funcStr = useSelector((state) => state.number.func_str);
  // const title = useSelector((state) => state.number.title);

  const last_roll = useSelector((state)=>state.action.last_roll);
  const average = useSelector((state)=>state.action.diceFunc.average);
  const funcStr = useSelector((state)=>state.action.diceFunc.str);
  const title = useSelector((state)=>state.action.title);
  const dispatch = useDispatch();
  //const [funcStr, setDiceFunc] = useState('1d6');
  //const [title, setTitle] = useState('name');
  
  //const onDiceFuncChanged = e => setDiceFunc(e.target.value)
  //const onTitleChanged = e => setTitle(e.target.value)
  
  return (
    <div className={styles.action}>
      <div className={styles.row}>
        
      <span >average: {average}</span>
      </div>
      <div className={styles.row}>
        <span>last roll: {last_roll}</span>
      </div>
      <div className={styles.row}>title
        <input
          className={styles.textbox}
          aria-label="Set Dice Func"
          value={title}
          onChange={e => dispatch(setTitle(e.target.value))}
        />
      </div>

      <div className={styles.row}>
        Dice
        <input
          className={styles.textbox}
          aria-label="Set Dice Func"
          value={funcStr}
          onChange={e => dispatch(setDiceFunc(e.target.value))}
        />
        <button
          className={styles.button}
          onClick={() =>
            dispatch(rollDiceFunction())
          }
        >
          Roll
        </button>
          
      </div>
      <div className={styles.row}>
      <span className={styles.value}>{title} {funcStr}</span>
      </div>
    </div>
  );
}
