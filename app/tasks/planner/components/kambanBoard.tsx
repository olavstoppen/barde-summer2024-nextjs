import { DragDropContext, DropResult, Droppable } from '@hello-pangea/dnd';
import KanbanTask from './kanbanTask';
import { task } from '@/app/lib/types';
import { Key } from 'react';
import { useState } from 'react';
import DatePicker from './datePicker';
import { InitialKanbanState, KanbandStateKeys, useKambanState } from '@/hooks/use-kanban-state';
import { Dispatch } from 'react';
import { SetStateAction } from 'react';
import Modal from 'react-modal';
import React from 'react';

export function closeModal() {
    console.log('clicked');
    const { kanbanState, setKanbanState } = useKambanState();

    setKanbanState({
        ...kanbanState,
        activeTask: undefined,
    });
}

export default function KanbanBoard() {
    const { kanbanState, setKanbanState } = useKambanState();

    function closeModal() {
        setKanbanState({
            ...kanbanState,
            activeTask: undefined,
        });
    }

    // Function is triggered when a task is moved from one column to another
    const handleColumns = (
        kanbanState: InitialKanbanState,
        setKanbanState: Dispatch<SetStateAction<InitialKanbanState>>,
        result: DropResult,
    ) => {
        // Get the source and destination column key eg: planned, unplanned, active, done
        const source = result.source.droppableId.toLowerCase() as KanbandStateKeys;
        const destination = result.destination?.droppableId.toLowerCase() as KanbandStateKeys;

        // Get the source and destination column from the board
        let sourceColumn = kanbanState.board[source];
        let destColumn = kanbanState.board[destination];

        let task = sourceColumn.column[result.source.index];

        // Remove the task from the source column
        sourceColumn.column.splice(result.source.index, 1);

        // Add the task to the destination column
        if (task != undefined) {
            destColumn.column.splice(result.destination!.index, 0, task);
        }

        let activeTask = source === 'unplanned' && destination === 'planned' ? task : undefined;

        // Update the hook state
        setKanbanState({
            ...kanbanState,
            activeTask: activeTask,
            board: {
                ...kanbanState.board,
                [source]: sourceColumn,
                [destination]: destColumn,
            },
        });
    };

    const customStyles = {
        content: {
            width: '300px',
            height: '300px',
            margin: 'auto',
            padding: '20px',
            borderRadius: '10px',
        },
    };

    return (
        <div className="self-stretch grow shrink basis-0 justify-start items-start gap-6 inline-flex">
            <Modal
                isOpen={kanbanState.activeTask != undefined}
                onRequestClose={closeModal}
                onAfterClose={() => {}}
                onAfterOpen={() => {}}
                ariaHideApp={false}
                contentLabel="Calendar Modal"
                style={customStyles}
            >
                <DatePicker />
            </Modal>
            <DragDropContext
                onDragEnd={result => {
                    handleColumns(kanbanState, setKanbanState, result);
                }}
            >
                {(Object.keys(kanbanState.board) as KanbandStateKeys[]).map((key, index) => {
                    const name = kanbanState.board[key].name;
                    const column = kanbanState.board[key].column;

                    return (
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                            key={name}
                        >
                            <div style={{ margin: 4 }}>
                                <div className="w-[242px] h-[484px] p-4 bg-stone-200 rounded-2xl flex-col justify-start items-start gap-4 inline-flex">
                                    <div className="text-stone-900 text-lg font-normal font-['Space Mono'] leading-normal">
                                        {
                                            {
                                                Unplanned: 'Ubehandlet',
                                                Planned: 'Planlagt',
                                                Active: 'Aktiv',
                                                Done: 'Ferdig',
                                            }[name]
                                        }
                                    </div>
                                    <Droppable droppableId={name} key={name}>
                                        {(provided, snapshot) => {
                                            return (
                                                <div
                                                    className="grow shrink basis-0 self-stretch rounded-2xl flex-col justify-start items-start inline-flex"
                                                    {...provided.droppableProps}
                                                    ref={provided.innerRef}
                                                    style={{
                                                        width: 250,
                                                        minHeight: 500,
                                                    }}
                                                >
                                                    {column.map((item, index: number) => {
                                                        return <KanbanTask key={item.id} item={item} index={index} />;
                                                    })}
                                                    {provided.placeholder}
                                                </div>
                                            );
                                        }}
                                    </Droppable>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </DragDropContext>
        </div>
    );
}
