import { FC } from "react";

interface Props {
  placeholder?: string;
  value?: number;
  onChange: (val: number) => void;
}
const Input: FC<Props> = ({ placeholder, value, onChange }) => {
  return (
    <>
      <input
        placeholder={placeholder}
        type="number"
        value={value}
        onChange={(e) => {
          onChange(+e.target.value);
        }}
      />
    </>
  );
};

Input.defaultProps = {};

export default Input;
