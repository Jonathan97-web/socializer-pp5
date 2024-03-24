import React from "react";
import styles from "../styles/Avatar.module.css";

type AvatarProps = {
  src: string;
  height: number;
  text: string;
};

const Avatar: React.FC<AvatarProps> = ({ src, height = 45, text }) => {
  return (
    <>
      <img
        className={styles.Avatar}
        src={src}
        height={height}
        width={height}
        alt="avatar"
      />
      {text}
    </>
  );
};

export default Avatar;
