'use client'

import { Box, Button, Modal, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import Doctor from "../data/doctor.json";
const ThankyouModal = ({
    open,
    slots,
    onSelect
}: {
    open: any,
    slots: any,
    onSelect: any
}) => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
    };

    const handleOpen = () => {

    }

    const handleClose = () => {

    }

    return (


        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
        >
            <Box sx={{ ...style, width: 400 }}>
                {/* <DoneOutlineIcon color={"green"} /> */}
                <Typography sx={{textAlign:"center"}} id="modal-modal-title" variant="h6" component="h2">
                    Thankyou for scheduling the appointment
                </Typography>
                
            </Box>
        </Modal>
    )


}

export default ThankyouModal;
