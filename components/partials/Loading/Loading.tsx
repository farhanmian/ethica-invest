import React from "react";
import styles from "./Loading.module.css";

const Loading: React.FC<{ color: string }> = ({ color }) => {
  return (
    <div className={`${styles.loadingContainer} w-16 h-16`}>
      <div className={styles.loadingInnerContainer}>
        <div className={styles.loading} style={{ borderColor: color }} />
      </div>
    </div>
  );
};

export default Loading;
