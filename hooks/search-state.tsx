'use client';

import { useState } from 'react';

export const useSearchState = () => {
    const [searchState, setSearchState] = useState<string>('');

    return { searchState, setSearchState };
};
