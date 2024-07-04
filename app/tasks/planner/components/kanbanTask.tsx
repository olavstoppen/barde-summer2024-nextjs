import { Draggable } from '@hello-pangea/dnd';
import { ArrowRightIcon } from '@heroicons/react/16/solid';
import DatePicker from './datePicker';
import { MouseEventHandler } from 'react';
import { useKambanState } from '@/hooks/use-kanban-state';

export default function KanbanTask({ item, index }: { item: any; index: number }) {
    const { kanbanState, setKanbanState } = useKambanState();

    return (
        <>
            <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
                {(provided, snapshot) => {
                    return (
                        <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={{
                                userSelect: 'none',
                                padding: 0,
                                margin: '0 0 8px 0',
                                minHeight: '50px',
                                backgroundColor: snapshot.isDragging ? '#263B4A00' : '#456C8600',
                                color: 'white',
                                ...provided.draggableProps.style,
                            }}
                        >
                            <div
                                className="w-[210px] h-[120px] p-3 bg-zinc-100 rounded-xl shadow flex-col justify-start items-start gap-2 inline-flex scale-on-hover"
                                onClick={() => setKanbanState({ ...kanbanState, activeTask: item.id })}
                            >
                                <div className="h-4 px-1 bg-orange-800 rounded-[100px] justify-center items-center inline-flex">
                                    <div className="grow shrink basis-0 text-center"></div>
                                </div>
                                <div className="self-stretch justify-between items-center inline-flex">
                                    <div className="text-stone-900 text-xs font-normal font-['Space Mono'] leading-none tracking-wide">
                                        {item.id}
                                    </div>
                                    <div className="text-right text-stone-900 text-xs font-normal font-['Space Mono'] leading-none tracking-wide">
                                        {item.start_date}
                                    </div>
                                </div>
                                <div className="self-stretch h-10 flex-col justify-start items-start gap-1 flex">
                                    <div className="self-stretch text-stone-900 text-sm font-bold font-['Space Mono'] leading-tight tracking-tight">
                                        {item.name}
                                    </div>
                                    <div className="self-stretch text-stone-900 text-xs font-normal font-['Space Mono'] leading-none tracking-wide">
                                        {item.start_date === item.end_date
                                            ? 'Ikke planlagt'
                                            : `${item.start_date} - ${item.end_date}`}
                                    </div>
                                </div>
                                <div className="self-stretch justify-between items-center inline-flex">
                                    <div className="h-6 px-2 py-1 rounded border-2 border-orange-400 justify-center items-center gap-2.5 flex">
                                        <div className="text-stone-900 text-xs font-normal font-['Space Mono'] leading-none tracking-wide">
                                            {item.type}
                                        </div>
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
