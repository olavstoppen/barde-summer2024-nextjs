'use client';

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider/LocalizationProvider';
import React from 'react';
import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export default function DatePickerValue() {
    const [dateParams, setValue] = React.useState<Dayjs | null>(
        dayjs('2024-04-17'),
    );

    function handleSearch(term: Dayjs | null) {
        console.log(dateParams);
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                value={dateParams}
                onChange={newValue => setValue(newValue)}
            />
        </LocalizationProvider>
    );
}
