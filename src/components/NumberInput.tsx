import styles from '../styles/NumberInput.module.css';

interface NumberInputProps {
  text: string;
  value: number;
  onChange: (newValue: number) => void;
}

export default function NumberInput(props: NumberInputProps) {
  const decrement = () => props.onChange(props.value - 1);
  const increment = () => props.onChange(props.value + 1);

  return (
    <div className={styles.numberInput}>
      <span className={styles.text}> {props.text}</span>
      <span className={styles.value}> {props.value}</span>
      <div className={styles.buttons}>
        <button className={styles.btn} onClick={decrement}>
          -
        </button>
        <button className={styles.btn} onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
}
