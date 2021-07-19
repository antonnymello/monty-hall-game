import styles from '../../../styles/Game.module.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Door from '../../../components/Door';
import { createDoors, updateDoors } from '../../../functions/doors';

export default function game() {
  const router = useRouter();

  const [valid, setValid] = useState(false);
  const [doors, setDoors] = useState([]);

  useEffect(() => {
    const doors = +router.query.doors;
    const hasGift = +router.query.hasGift;

    const isQuantityValid = doors >= 3 && doors <= 100;
    const isGiftedDoorValid = hasGift >= 1 && hasGift <= doors;

    setValid(isQuantityValid && isGiftedDoorValid);
  }, [doors]);

  useEffect(() => {
    const doors = +router.query.doors;
    const hasGift = +router.query.hasGift;
    setDoors(createDoors(doors, hasGift));
  }, [router?.query]);

  const renderDoors = () => {
    return doors.map((door) => {
      return (
        <Door
          key={door.number}
          value={door}
          onChange={(newDoor) => setDoors(updateDoors(doors, newDoor))}
        />
      );
    });
  };

  return (
    <div id={styles.game}>
      <div className={styles.doors}>
        {valid ? renderDoors() : <h1>Invalid values!!</h1>}
      </div>
      <div className={styles.buttons}>
        <Link href='/'>
          <button>Restart</button>
        </Link>
      </div>
    </div>
  );
}
