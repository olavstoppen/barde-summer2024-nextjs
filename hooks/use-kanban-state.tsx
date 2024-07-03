import { useState } from 'react';

export const useKambanState = () => {
    const [kanbanState, setKanbanState] = useState<InitialKanbanState>({
        activeTask: undefined,
        board: {
            unplanned: {
                name: 'Unplanned',
                column: [{ id: '1', date: new Date(), name: 'Task 1', type: 'Task' }],
            },
            planned: {
                name: 'Planned',
                column: [],
            },
            active: {
                name: 'Active',
                column: [],
            },
            done: {
                name: 'Done',
                column: [],
            },
        },
    });

    return { kanbanState, setKanbanState };
};

export type KanbandStateKeys = 'unplanned' | 'planned' | 'active' | 'done';

export type InitialKanbanState = {
    activeTask: number | undefined;
    board: {
        [key in KanbandStateKeys]: KanbanColumn;
    };
};

export type KanbanColumn = {
    name: string;
    column: KanbanTask[];
};

export type KanbanTask = {
    id: string;
    date: Date;
    name: string;
    type: string;
};
