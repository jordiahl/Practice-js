import styles from "./Checkbox.module.scss";

type CheckboxProps = {
  id: number;
  label: string;
  checked: boolean;
  onDeleteClick: (id: number) => void;
  onSelectedClick: (id: number) => void;
};

const Checkbox = (props: CheckboxProps) => {
  const { id, label, checked, onDeleteClick, onSelectedClick } = props;

  return (
    <div className={styles.checkboxContainer}>
      <input
        tabIndex={-1}
        type="checkbox"
        id={id + ""}
        checked={checked}
        onClick={(e) => onSelectedClick(id)}
      />
      <label htmlFor={id + ""}>{label}</label>
      <button
        type="button"
        className={styles.delete}
        onClick={() => onDeleteClick(id)}
        tabIndex={0}
      >
        X
      </button>
    </div>
  );
};

export default Checkbox;
