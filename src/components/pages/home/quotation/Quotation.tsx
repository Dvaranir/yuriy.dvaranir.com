import React from "react";

import styles from "./Quotation.module.scss";

type Props = {};

function Quotation({}: Props) {
  return (
    <div className={styles.container}>
      <p className={styles.paragraph}>
        I only know that I know nothing, 
        <br />
        but others are not aware of even that
      </p>
      <p className={styles.sign}>- Socrates</p>
    </div>
  );
}

export default Quotation;
