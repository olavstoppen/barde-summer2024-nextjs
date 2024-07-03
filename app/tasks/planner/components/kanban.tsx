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
import { useKambanState } from '@/hooks/use-kanban-state';

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
    const { kanbanState, setKanbanState } = useKambanState();

    console.log(kanbanState);
    // The different columns
    // let subtitle: { style: { color: string } };
    // const [modalIsOpen, setIsOpen] = React.useState(false);

    // function openModal() {
    //     setIsOpen(true);
    // }

    // function afterOpenModal() {
    //     // references are now sync'd and can be accessed.
    //     subtitle.style.color = '#f00';
    // }

    // function closeModal() {
    //     setIsOpen(false);
    // }

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
                <KanbanBoard />
            </div>
        </div>
    );
}
