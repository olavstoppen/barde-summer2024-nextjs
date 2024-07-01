'use client';
import React, { useState } from "react";
import { DragDropContext, Draggable, DropResult, Droppable } from "@hello-pangea/dnd";
import {v4 as uuid} from "uuid";

export default function Page(){

  // TODO: Make status-based 
  // Replace with actually getting data from the database
  const itemsFromBackend = [
    { id: "51bf09cb-fea0-4136-bd36-c88c7a71c4b7", content: "First task" },
    { id: 'f1edaf26-830f-48e0-9dff-426d70266fae', content: "Second task" },
    { id: 'a7324057-121a-4f21-be00-cf2cdb3221c0', content: "Third task" },
    { id: '70c4d379-3be5-474b-b2b9-fd0588034180', content: "Fourth task" },
    { id:  '1c1afd97-fd4c-40b5-9936-8255a2ea63df', content: "Fifth task" }
  ];

  // The different columns
  const columnsFromBackend = {
    ['247d448e-011e-462c-9633-e87174163087']: {
      name: "Requested",
      items: itemsFromBackend
    },
    ['6480b0ae-8999-46e3-a752-4db1cf8372fc']: {
      name: "To do",
      items: []
    },
    ['fcb4120b-8216-4b1c-938f-90cb07e61048']: {
      name: "In Progress",
      items: []
    },
    ['e6677603-ab42-4774-9753-5016622b6306']: {
      name: "Done",
      items: []
    }
  };
  
  const onDragEnd = (result: DropResult, columns: { [x: string]: any;[x: number]: { name: string; items: { id: any; content: string; }[]; }; }, setColumns: { (value: React.SetStateAction<{ [x: number]: { name: string; items: { id: any; content: string; }[]; }; }>): void; (arg0: any): void; }) => {
    if (!result.destination) return;
    const { source, destination } = result;
    
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems
        }
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems
        }
      });
    }

  };
  
  const [columns, setColumns] = useState(columnsFromBackend);
  console.log("columns", columns)

    return (
      <div style={{ display: "flex", justifyContent: "center", height: "100%" }}>
      <DragDropContext
        onDragEnd={result => onDragEnd(result, columns, setColumns)}
        >
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
            key={columnId}
            >
              <h2>{column.name}</h2>
              <div style={{ margin: 8 }}>
                <Droppable droppableId={columnId} key={columnId}>
                  {(provided, snapshot) => {
                    return (
                      <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      style={{
                        background: snapshot.isDraggingOver
                            ? "lightblue"
                            : "lightgrey",
                            padding: 4,
                            width: 250,
                            minHeight: 500
                          }}
                          >
                        {column.items.map((item, index) => {
                          return (
                            <Draggable
                            key={item.id}
                            draggableId={item.id}
                            index={index}
                            >
                              {(provided, snapshot) => {
                                return (
                                  <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  style={{
                                    userSelect: "none",
                                    padding: 16,
                                    margin: "0 0 8px 0",
                                    minHeight: "50px",
                                    backgroundColor: snapshot.isDragging
                                    ? "#263B4A"
                                    : "#456C86",
                                    color: "white",
                                    ...provided.draggableProps.style
                                  }}
                                  >
                                    {item.content}
                                  </div>
                                );
                              }}
                            </Draggable>
                          );
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