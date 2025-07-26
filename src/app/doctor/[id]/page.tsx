'use client'

import React from 'react';
import { useState } from 'react';
import Doctors from "../../../data/doctor.json"
import TimeSlotPicker from '@/components/TimeSlotPicker';
import BookingForm from '@/components/BookingForm';
import styles from "./page.module.css";

export default function DoctorPage({
    params: params
}:
    {
        params: any
    }
) {

    
    const doctor = Doctors.find((item) => item.id === params.id);
    const [selectedslot, setSelectedSlot] = useState(null);

    if (!doctor) return <div><h1>No Doctors Found!</h1></div>

    return (
        <main className={styles.page} style={{ padding: '2rem' }}>
            <h2>{doctor?.name}</h2>
            <p>{doctor?.speciality}</p>
            {
                !selectedslot ?
                    <TimeSlotPicker slots={doctor.slots} onSelect={setSelectedSlot} />
                    :
                    <BookingForm doctor={doctor} selectedSlot={selectedslot} />
            }
        </main>
    )
} 
