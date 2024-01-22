import { ReactNode } from "react";
import "./style.scss";

interface IProps {
  initNumber?: String | number;
  prop1?: string;
  prop2?: number;
  checkEmit: (a: string) => void;
  children?: ReactNode;
}

interface IpObj {
  a: string;
  b: number;
  c: boolean;
}
export default function WellcomeReact(props: IProps) {
  //   const { initNumber } = props;
  const { checkEmit, children } = props;
  const a: string = "emmited";
  const IpureObj: IpObj = {
    a: "1",
    b: 2,
    c: true,
  };
  console.log(IpureObj);

  const strArray: string[] = ["a", "b", "c"];

  console.log(strArray);

  const pureArray: IpObj[] = [
    {
      a: "1",
      b: 2,
      c: true,
    },
    {
      a: "1",
      b: 2,
      c: true,
    },
    {
      a: "1",
      b: 2,
      c: true,
    },
  ];

  console.log(pureArray);

  return (
    <div>
      <div>{children}</div>
      <button
        onClick={() => {
          checkEmit(a);
        }}
      >
        click
      </button>
    </div>
  );
}
