import React from "react";
import cx from "classnames";
import styles from "./LoadBar.module.scss";
//rafce -> fast creation of a component

const Test = () => {
  const [percentage, setPercentage] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<any>) => {
    let value = event.target.value;

    if (!isNaN(value)) {
      if (+value > 100) {
        value = 100;
      }
      if (value === "") {
        value = 0;
      }
      setPercentage(value);
    }
  };

  return (
    <div className={cx()}>
      <div className={cx(styles.loadbarContainer)}>
        <div
          style={{
            backgroundColor: "rgb(14,247,0)",
            width: `${percentage}%`,
            height: "20px",
            borderRadius: "5px",
          }}
        ></div>

        <div className={cx(styles.percentageIndicator)}>{percentage} %</div>
      </div>
      <input
        onChange={handleChange}
        value={percentage}
        type={"number"}
        min={"0"}
        max={"100"}
      />
    </div>
  );
};

export default Test;
