'use client';

import { Datepicker } from 'flowbite-react';
import { useState } from 'react';

export function DatepickerButton() {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDatePickerChange = (date: Date) => {
        setSelectedDate(date);
    };

    return (
        <Datepicker
            name="selectedDate"
            onSelectedDateChanged={handleDatePickerChange}
        />
    );
}
