import actionsRepository from '../functions/actionsRepository';
import styles from '../styles/Switch.module.scss';
import { SwitchProps } from '../types';

function Switch(props: SwitchProps) {
  return (
    <div>
      Senior:&ensp; 
      <label className={styles['switch']}>
      <input type="checkbox" defaultChecked={props.mode} onClick={() => actionsRepository.updateRank(props.id, props.rank, props.setRank)} />
        <span className={`${styles['slider']} ${styles['round']}`}></span>
      </label>
    </div>
  )
}

export default Switch
