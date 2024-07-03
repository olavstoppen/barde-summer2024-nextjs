import { DragDropContext, DropResult, Droppable } from '@hello-pangea/dnd';
import KanbanTask from './kanbanTask';
import { task } from '@/app/lib/types';
import { Key } from 'react';
import { useState } from 'react';
import DatePicker from './datePicker';
import { InitialKanbanState, KanbandStateKeys, useKambanState } from '@/hooks/use-kanban-state';
import { Dispatch } from 'react';
import { SetStateAction } from 'react';

const onDragEnd = (
    result: DropResult,
    columns: {
        [x: string]: any;
        [x: number]: {
            name: string;
            items: task[];
        };
    },
    setColumns: CallableFunction,
) => {
    if (!result.destination) return;
    const { source, destination } = result;
    const item = columns[source.droppableId].items[source.index];

    if (source.droppableId !== destination.droppableId) {
        // If the task is moved to another column
        const sourceColumn = columns[source.droppableId];
        const destColumn = columns[destination.droppableId];
        const sourceItems = [...sourceColumn.items];
        const destItems = [...destColumn.items];
        const [removed] = sourceItems.splice(source.index, 1);

        if (source.droppableId === '1' && destination.droppableId === '2') {
            console.log('Insert code for date insertion here!');
        }

        destItems.splice(destination.index, 0, removed);
        setColumns({
            ...columns,
            [source.droppableId]: {
                ...sourceColumn,
                items: sourceItems,
            },
            [destination.droppableId]: {
                ...destColumn,
                items: destItems,
            },
        });
    } else {
        // If the task is moved within the same column
        const column = columns[source.droppableId];
        const copiedItems = [...column.items];
        const [removed] = copiedItems.splice(source.index, 1);
        copiedItems.splice(destination.index, 0, removed);
        setColumns({
            ...columns,
            [source.droppableId]: {
                ...column,
                items: copiedItems,
            },
        });
    }
};

export default function KanbanBoard() {
    // const [columns, setColumns] = useState(columnsFromBackend);
    const { kanbanState, setKanbanState } = useKambanState();

    const handleColumns = (
        kanbanState: InitialKanbanState,
        setKanbanState: Dispatch<SetStateAction<InitialKanbanState>>,
        result: DropResult,
    ) => {
        const source = result.source.droppableId.toLowerCase() as KanbandStateKeys;
        const destination = result.destination?.droppableId.toLowerCase() as KanbandStateKeys;

        let sourceColumn = kanbanState.board[source];
        let destColumn = kanbanState.board[destination];

        destColumn.column.push(sourceColumn.column[result.source.index]);
        sourceColumn.column.splice(result.source.index, 1);

        setKanbanState({
            ...kanbanState,
            board: {
                ...kanbanState.board,
                [source]: sourceColumn,
                [destination]: destColumn,
            },
        });
    };

    return (
        <div className="self-stretch grow shrink basis-0 justify-start items-start gap-6 inline-flex">
            <DragDropContext
                onDragEnd={result => {
                    handleColumns(kanbanState, setKanbanState, result);
                    // setKanbanState({
                    //     ...kanbanState,
                    //     board: { ...kanbanState.board, [result.source.droppableId.toLowerCase()]: kancolumn.filter },
                    // });
                }}
            >
                {/* onDragEnd(result, columns, setColumns) */}
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
                                <Droppable droppableId={name} key={name}>
                                    {(provided, snapshot) => {
                                        return (
                                            <div
                                                className="grow shrink basis-0 self-stretch p-4 bg-stone-100 rounded-2xl flex-col justify-start items-start inline-flex"
                                                {...provided.droppableProps}
                                                ref={provided.innerRef}
                                                style={{
                                                    background: snapshot.isDraggingOver ? '#FFDBD0' : '#F7F3F2',
                                                    width: 250,
                                                    minHeight: 500,
                                                }}
                                            >
                                                <div className="text-stone-900 text-xs font-medium font-['Roboto'] leading-none tracking-wide">
                                                    {name}
                                                </div>
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
                    );
                })}
            </DragDropContext>
        </div>
    );
}
