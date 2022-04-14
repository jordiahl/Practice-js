import React from "react";
import { createContext, Dispatch, SetStateAction, useState } from "react";

const initialValue = {
  init: "init",
  myInit: "myInit",
};

type IFormContext = {
  init: string;
  myInit: string;
  setValues: ({ init, myInit }: { init: string; myInit: string }) => any;
};

export const FormContext = createContext<IFormContext>();

type IFormContextProvider = {
  init?: string;
  myInit?: string;
  children?: any;
};

const FormContextProvider = (props: IFormContextProvider) => {
  const { children } = props;
  console.log("render context");

  const [values, setValues] = useState(initialValue);

  const setProperties = ({
    init,
    myInit,
  }: {
    init: string;
    myInit: string;
  }) => {
    setValues({ init, myInit });
  };

  const val = { ...values, setValues: setProperties };

  return <FormContext.Provider value={val}>{children}</FormContext.Provider>;
};

export default FormContextProvider;