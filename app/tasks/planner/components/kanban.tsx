'use client';
import React, { useState } from 'react';
import Modal from 'react-modal';
import {
    DragDropContext,
    Draggable,
    DropResult,
    Droppable,
} from '@hello-pangea/dnd';
import { task } from '@/app/lib/types';
import {
    ArrowRightIcon,
    AdjustmentsHorizontalIcon,
    MagnifyingGlassIcon,
} from '@heroicons/react/16/solid';
import KanbanTask from './kanbanTask';
import KanbanBoard from './kambanBoard';
import Search from './search';
import Filter from './filter';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

export default function Kanban(taskData: any) {
    // The different columns
    interface Column {
        name: string;
        items: task[];
    }

    const columnsFromBackend: { [key: string]: Column } = {
        '1': {
            name: 'Unplanned',
            items: [],
        },
        '2': {
            name: 'Planned',
            items: [],
        },
        '3': {
            name: 'Active',
            items: [],
        },
        '4': {
            name: 'Done',
            items: [],
        },
    };

    for (let i = 0; i < taskData.data.length; i++) {
        let taskInfo = taskData.data[i];
        let task: task = {
            id: taskInfo.id,
            name: taskInfo.name,
            type: taskInfo.type,
            status: taskInfo.status,
            description: taskInfo.description,
            historic_data: taskInfo.historic_data,
            start_date: taskInfo.start_date,
            due_date: taskInfo.due_date,
        };

        switch (task.status) {
            case 'Planned':
                if (task.due_date == '') {
                    columnsFromBackend['1'].items.push(task);
                } else {
                    columnsFromBackend['2'].items.push(task);
                }
                break;
            case 'Active':
                columnsFromBackend['3'].items.push(task);
                break;
            case 'Done':
                columnsFromBackend['4'].items.push(task);
                break;
            default:
                break;
        }
    }

    let subtitle: { style: { color: string } };
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                height: '100%',
            }}
        >
            <div className=" p-6 bg-stone-200 rounded-[28px] flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="self-stretch justify-start items-start gap-2 inline-flex">
                    <Search />
                    <Filter />
                </div>
                <KanbanBoard columnsFromBackend={columnsFromBackend} />
            </div>
        </div>
    );
}
