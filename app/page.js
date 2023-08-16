"use client";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import { ReduxProvider } from "@/redux/provider";

export default function Home() {
  return (
    <>
      <ReduxProvider>
        <Navbar />
      </ReduxProvider>
    </>
  );
}
