import { FC } from "react";
import clasess from "./Avatar.module.css";
import { FaUser } from "react-icons/fa";

interface Props {
  name?: string;
  avatar?: string;
}
const Avatar: FC<Props> = ({ name, avatar }) => {
  return (
    <>
      <div className={clasess.avatar_container}>
        <div className={clasess.avatar}>
          {avatar ? (
            <>
              <img src={avatar} alt={name} />
            </>
          ) : (
            <>
              <FaUser />
            </>
          )}
        </div>
        <div className={clasess.avatar_name}>{name}</div>
      </div>
    </>
  );
};

Avatar.defaultProps = {
  name: "",
};

export default Avatar;
