'use client';

import dayjs, { Dayjs } from 'dayjs';
import React from 'react';
import { useState } from 'react';

export const useSearchState = () => {
    const [dateState, setDateState] = React.useState<Dayjs | null>(dayjs('2024-04-17'));

    return { dateState, setDateState };
};
