import styles from '../styles/Form.module.css';
import Card from '../components/Card';
import Link from 'next/link';
import NumberInput from '../components/NumberInput';
import { useState } from 'react';
import Head from 'next/head';

export default function Form() {
  const [doorsQuantity, setDoorsQuantity] = useState(3);
  const [doorWithGift, setDoorWithGift] = useState(1);

  return (
    <>
      <Head>
        <title>Monty Hall Game</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className={styles.form}>
        <div>
          <Card bgcolor='#c0392c'>
            <h1>Monty Hall</h1>
          </Card>

          <Card>
            <NumberInput
              text='How many doors?'
              value={doorsQuantity}
              onChange={(quantity) => setDoorsQuantity(quantity)}
            ></NumberInput>
          </Card>
        </div>

        <div>
          <Card>
            <NumberInput
              text='Which door has the gift?'
              value={doorWithGift}
              onChange={(giftDoor) => setDoorWithGift(giftDoor)}
            ></NumberInput>
          </Card>

          <Card bgcolor='#28a085'>
            <Link href={`/game/${doorsQuantity}/${doorWithGift}`}>
              <h2 className={styles.link}>Start!</h2>
            </Link>
          </Card>
        </div>
      </div>
    </>
  );
}
