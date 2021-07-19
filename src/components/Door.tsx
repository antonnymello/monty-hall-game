import styles from '../styles/Door.module.css';
import Gift from './Gift';
import DoorModel from '../model/door';

interface DoorProps {
  value: DoorModel;
  onChange: (newDoor: DoorModel) => void;
}

export default function Door(props: DoorProps) {
  const door = props.value;
  const isSelected = door.selected && !door.isOpen ? styles.selected : '';

  const changeSelection = (e) => {
    props.onChange(door.changeSelection());
  };

  const open = (e) => {
    e.stopPropagation();
    props.onChange(door.open());
  };

  const renderDoor = () => {
    return (
      <div className={styles.door}>
        <div className={styles.number}>{door.number}</div>
        <div className={styles.handle} onClick={open}></div>
      </div>
    );
  };

  return (
    <div className={styles.area} onClick={changeSelection}>
      <div className={`${styles.frame} ${isSelected}`}>
        {door.isClosed ? renderDoor() : door.hasGift ? <Gift></Gift> : false}
      </div>
      <div className={styles.floor}></div>
    </div>
  );
}
