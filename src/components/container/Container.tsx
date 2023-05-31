import { FC, ReactNode } from "react";
import clasess from "./Container.module.css";

interface Props {
  children: ReactNode;
}
const Container: FC<Props> = ({ children }) => {
  return (
    <>
      <div className={clasess.container}>{children}</div>
    </>
  );
};

export default Container;
