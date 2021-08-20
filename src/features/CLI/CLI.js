import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  // setTitle,
  // setDiceFunc,
  rollDiceFunction,
} from './CLISlice';
import styles from './CLI.module.css';

export function CLI() {
  // number is the goddamn name of ht thing in stor.js
  // const funcStr = useSelector((state) => state.number.func_str);
  // const title = useSelector((state) => state.number.title);

  const last_roll = useSelector((state)=>state.number.last_roll);
  const average = useSelector((state)=>state.number.average);
  const dispatch = useDispatch();
  const [funcStr, setDiceFunc] = useState('1d6');
  const [title, setTitle] = useState('name');
  
  //const onDiceFuncChanged = e => setDiceFunc(e.target.value)
  //const onTitleChanged = e => setTitle(e.target.value)
  
  return (
    <div>
      <div className={styles.row}>
        
      <span >average: {average}</span>
      </div>
      <div className={styles.row}>
        <span className={styles.value}>last roll: {last_roll}</span>
      </div>
      <div className={styles.row}>title
        <input
          className={styles.textbox}
          aria-label="Set Dice Func"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </div>

      <div className={styles.row}>
        Dice
        <input
          className={styles.textbox}
          aria-label="Set Dice Func"
          value={funcStr}
          onChange={e => setDiceFunc(e.target.value)}
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
      <span className={styles.value}>{funcStr}</span>
      </div>
    </div>
  );
}
