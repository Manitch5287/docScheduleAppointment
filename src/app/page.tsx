'use client'

import DoctorCard from "@/components/DoctorCard";
import styles from "./page.module.css";
import Doctor from "../data/doctor.json"
import { ToastContainer } from "react-toastify";

export default function Home() {

  return (
    <div className={styles.page}>
      <h2 className={styles.h2}>Doctor's Listing</h2>
      <ToastContainer />
      <div>
        {
          Doctor.map((item) => (
            <DoctorCard key={item.id} Doctor={item} />
          ))
        }
      </div>
    </div>
  );
}
