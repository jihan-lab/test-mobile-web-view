"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { isDesktop } from "react-device-detect";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if (isDesktop) {
      location.replace("http://172.20.65.245:3001");
      return;
    }
  });

  return (
    <main className={styles.main}>
      <h1>Ini tampilan Web mobile view server 1</h1>
    </main>
  );
}
