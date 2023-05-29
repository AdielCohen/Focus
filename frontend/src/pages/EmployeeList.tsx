import { useState, useEffect } from 'react'
import { EmployeeListProps, EmployeeData } from '../types';
import EmployeeCard from '../components/EmployeeCard'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from '../styles/EmployeeList.module.scss';

function EmployeeList(props: EmployeeListProps) {
  const navigate = useNavigate();
  const [cardsData, setCardsData] = useState<EmployeeData[]>([]);

  useEffect(() => {
    // Load Employees Data
    const getData = async() => {
      try {
        const res = await axios.get(`http://localhost:4000/${props.endPoint}`)
        setCardsData(res.data.data);
        console.log(res.data.data)
        return res.data.data
      } catch (err) {
          console.log({ err });
      } 
    }
    getData()
  }, [])
  
  return (
    <div className={styles['App']}>
      <div className={styles['Title']}>{props.className} List</div>
      <div className={styles['Cards']}> 
        {cardsData.map((card: EmployeeData, index: number) => (
          <span key={index}>
            <EmployeeCard
              id={card.id}
              name={card.name}
              age={card.age}
              senior={card.senior}
              favoriteColor={card.favoriteColor}
              department={card.department}
            />
          </span>
        ))}
        <br /><br />
        &emsp;➜ <u onClick={() => navigate('/')} style={{cursor: 'pointer'}}>Back</u>
      </div>
    </div>
  )
}

export default EmployeeList