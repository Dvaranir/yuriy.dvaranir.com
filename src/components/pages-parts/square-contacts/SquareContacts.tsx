import React from "react";

import SquareContact from "./SquareContact";
import { ISquareContactProps } from "./square-contacts.interfaces";

import styles from "@/components/pages/home/contacts/Contacts.module.scss";

function SquareContacts(props: { squareContactsList: ISquareContactProps[] }) {
  const { squareContactsList } = props;
  return (
    <div className={styles["contacts-container"]}>
      <h3 className={styles["contacts-heading"]}>{props.contacts_contacts_heading}</h3>
      {squareContactsList.map((contact, i) => (
        <SquareContact key={`scon${i}`} {...contact} />
      ))}
    </div>
  );
}

export default SquareContacts;
