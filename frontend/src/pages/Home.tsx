import Development_btn from '../images/Development_btn.png';
import Finance_btn from '../images/Finance_btn.png';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Home.module.scss';

function Home() {
  const navigate = useNavigate();
  return (
    <div className={styles['App']}>
      <div>
        <h1 className={styles['Title']}>📑 Class Selection</h1>
        <div style={{textAlign: 'center'}}>
          <img 
            src={Development_btn} 
            onClick={() => navigate("/Development")} 
            height="383px" 
            width="417px" 
            alt="Development_btn" 
            className={styles['Development-btn']}
          />
          <img 
            src={Finance_btn} 
            onClick={() => navigate("/Finance")} 
            height="383px" 
            width="417px" 
            alt="Finance_btn"
            className={styles['Finance-btn']} 
          />          
        </div>
      </div>
    </div>
  )
}

export default Home