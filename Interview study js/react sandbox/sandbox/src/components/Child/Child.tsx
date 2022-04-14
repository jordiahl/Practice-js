import * as React from "react";
import styles from "./Child.module.scss";

type IChildProps = {
  className?: string;
};

const Child = React.memo(function (props: IChildProps) {
  const { className = "" } = props;

  console.log("render child");

  return <div className={className}>Child</div>;
});

export default Child;
