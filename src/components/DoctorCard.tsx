'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { Button, Card, CardContent, Typography } from '@mui/material';
import TimeSlotModal from './TimeSlotModal';
import BookingForm from './BookingForm';
import ThankyouModal from './ThankyouModal';

const DoctorCard = (
    {
        Doctor: Doctor
    }: {
        Doctor: any
    }

) => {
    const [open, setOpen] = useState(false);
    const [slot, setSlot] = useState();
    const [selectedslot, setSelectedSlot] = useState(null);

    const HandleSetItem = (event: any, slots: any) => {
        setOpen(true);
        setSlot(slots)
    }

    return (
        <>

            <Card sx={{ my: 2, display: 'flex', alignItems:"center", justifyContent:"space-between"}}>
                <Link href={`/doctor/${Doctor.id}`}>
                <CardContent>
                    <Typography variant='h6'>{Doctor.name}</Typography>
                    <Typography color='grey'>{Doctor.speciality}</Typography>
                </CardContent>

            </Link>
            <Button onClick={(event) => HandleSetItem(event, Doctor.slots)}>
                Book Appointment
            </Button>
        </Card >


            {
        !selectedslot ?
        <TimeSlotModal onSelect={setSelectedSlot} open={open} slots={slot} />
        :
        (
            <ThankyouModal onSelect={setSelectedSlot} open={open} slots={slot} />
        )
}



        </>
    )
}

export default DoctorCard;
