import React from "react";
import Image from "next/image";

import { ISquareContactProps } from "./square-contacts.interfaces";

import styles from "@/components/pages/home/contacts/Contacts.module.scss";

export default function SquareContact({
  href,
  image,
  imageAlt,
  text,
}: ISquareContactProps) {
  return (
    <a
      href={href}
      className={styles["contacts-link"]}
      target="_blank"
      rel="noopener noreferrer"
    >
      <p className={styles["contacts-contact"]}>
        <Image
          src={image}
          width={30}
          height={30}
          alt={imageAlt}
          className={styles["contacts-link-image"]}
        />
        <span className={styles["contacts-contact-text"]}>{text}</span>
      </p>
    </a>
  );
}
