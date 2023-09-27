import React from "react";

import SquareContacts from "@/components/pages-parts/square-contacts/SquareContacts";
import { ISquareContactProps } from "@/components/pages-parts/square-contacts/square-contacts.interfaces";

import styles from "./Contacts.module.scss";

export default function Contacts(props: {
  squareContactsList: ISquareContactProps[];
}) {
  const { squareContactsList } = props;
  return (
    <section className={styles["section-container"]}>
      <div className={styles["heading-line-container"]}>
        <h2 className={styles["heading"]}>
          <span className={`${styles["heading-cage"]} primary-color`}>#</span>
          contacts
        </h2>
        <div className={`${styles["heading-line"]} line`}></div>
      </div>
      <div className={styles["text-contacts-container"]}>
        <div className={styles["text-container"]}>
          <p className={styles["text"]}>
            I’m interested in freelance opportunities. However, if you have
            other request or question, don’t hesitate to contact me
          </p>
        </div>
        <SquareContacts squareContactsList={squareContactsList} />
      </div>
    </section>
  );
}
