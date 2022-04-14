import * as React from "react";

type IAppProps = {
  children: any;
};

const HOC = (props: IAppProps) => {
  const { children } = props || {};

  return (
    <div>
      My HOC
      <br />
      {children}
    </div>
  );
};

export default HOC;
