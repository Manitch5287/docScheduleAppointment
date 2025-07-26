'use client'

import { Button, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';



const BookingForm = ({
    doctor: doctor,
    selectedSlot: selectedSlot
}: {
    doctor: any,
    selectedSlot: any
}) => {

      console.log(doctor, "doctor")

    const [name, setName] = useState("");
    const handleClick = () => {
        console.log({ 'GTM_EVENT': 'Booking_Submitted' });
        console.log(
            {
                patientName: name,
                doctor: doctor.name,
                time: selectedSlot
            }
        )

      
        toast.success("Your Bookings confirmed")
    }
    return (
        <Stack>
            <ToastContainer />
            <Typography variant="body1">
                Booking for : {doctor.name}
            </Typography>

            <Typography variant="body1">
                Time slot : {doctor.time}
            </Typography>

            <TextField label="Your name" value={name} onChange={(e) => { setName(e.target.value) }} />
            <Button sx={{my:2}} variant="contained" onClick={handleClick} > Submit</Button>
        </Stack>
    )
}


export default BookingForm;