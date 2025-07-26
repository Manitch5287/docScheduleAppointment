'use client'

import { Button, Stack } from '@mui/material';
import React from 'react';

const TimeSlotPicker = ({
    slots: slots,
    onSelect: onSelect
}: {
    slots: any,
    onSelect: any
}) => {
    return (
        <Stack >
            {
                slots.map((slot: string) => (
                    <Button sx={{ my: "5px" }} key={slot} variant='outlined' onClick={() => onSelect(slot)}>
                        {slot}
                    </Button>
                ))
            }
        </Stack>
    )
}

export default TimeSlotPicker;