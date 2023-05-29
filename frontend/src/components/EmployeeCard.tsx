import { useState, useEffect } from 'react';
import { EmployeeData } from '../types';
import actionsRepository from '../functions/actionsRepository';
import axios from 'axios';
import styles from '../styles/EmployeeCard.module.scss';
import Switch from './Switch';

function EmployeeCard(props: EmployeeData) {
  const [rank, setRank] = useState(props.senior);
  const [currentColor, setCurrentColor] = useState(props.favoriteColor);
  const [colorOptions, setColorOptions] = useState([]);

  useEffect(() => {
    // Load Color Options
    const getData = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/getColor/`);
        setColorOptions(res.data.data);
        console.log(res.data.data);
        return res.data.data;
      } catch (err) {
          console.log({ err });
      } 
    }
    getData();
  }, [])

  return (
    <div className={styles['Card']}>  
      <div>ID: <span style={{fontWeight: 'normal'}}>{props.id}</span></div>
      <div>Name: <span style={{fontWeight: 'normal'}}>{props.name}</span></div>
      <div>Age: <span style={{fontWeight: 'normal'}}>{props.age}</span></div>
      <Switch id={props.id} rank={rank} setRank={setRank} mode={rank ? true : false}/>
      <div>Favorite Color: <span style={{fontWeight: 'normal'}}>{currentColor}</span></div>
      <select defaultValue={'0'} onChange={(e) => {actionsRepository.updateColor(e, props.id, setCurrentColor)}}>
        <option value='0' disabled>Change Color...</option>
        {colorOptions.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
    </div>
  )
}

export default EmployeeCard
