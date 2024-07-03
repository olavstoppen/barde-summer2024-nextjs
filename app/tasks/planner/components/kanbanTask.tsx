import { Draggable } from '@hello-pangea/dnd';
import { ArrowRightIcon } from '@heroicons/react/16/solid';
import DatePicker from './datePicker';
import { MouseEventHandler } from 'react';
import { useKambanState } from '@/hooks/use-kanban-state';

export default function KanbanTask({ item, index }: { item: any; index: number }) {
    const { kanbanState, setKanbanState } = useKambanState();

    return (
        <>
            <DatePicker />
            <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
                {(provided, snapshot) => {
                    return (
                        <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={{
                                userSelect: 'none',
                                padding: 8,
                                margin: '0 0 0px 0',
                                minHeight: '50px',
                                backgroundColor: snapshot.isDragging ? '#263B4A00' : '#456C8600',
                                color: 'white',
                                ...provided.draggableProps.style,
                            }}
                        >
                            <div
                                className="w-[198px] p-3 bg-zinc-100 rounded-xl shadow flex-col justify-start items-start gap-2.5 inline-flex scale-on-hover"
                                onClick={() => setKanbanState({ ...kanbanState, activeTask: item.id })}
                            >
                                <div className="self-stretch justify-between items-center inline-flex">
                                    <div className="text-zinc-700 text-xs font-medium font-['Roboto'] leading-none tracking-wide">
                                        {item.id}
                                    </div>
                                    <div className="w-[69px] h-[15px] text-right text-zinc-700 text-xs font-medium font-['Roboto'] leading-none tracking-wide">
                                        {item.start_date}
                                    </div>
                                </div>
                                <div className="self-stretch text-stone-900 text-sm font-medium font-['Roboto'] leading-tight tracking-tight">
                                    {item.name}
                                </div>
                                <div className="self-stretch justify-between items-center inline-flex">
                                    <div className="text-zinc-700 text-[11px] font-medium font-['Roboto'] leading-none tracking-wide">
                                        {item.type}
                                    </div>

                                    <ArrowRightIcon className="w-6 h-6 relative" color="#1C1B1B" />
                                </div>
                            </div>
                        </div>
                    );
                }}
            </Draggable>
        </>
    );
}
