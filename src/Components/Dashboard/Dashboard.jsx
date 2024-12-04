import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { TableComponent } from './TableComponent/TableComponent';

const Dashboard = () => {
    // Load saved layout from local storage or use the default layout
    // const savedLayout = JSON.parse(localStorage.getItem('dashboardLayout')) || [
    //     { id: '1', content: 'sai Component' },
    //     { id: '2', content: 'Graph Component' },
    //     { id: '3', content: 'Summary Card' },
    // ];

    // const [components, setComponents] = useState(savedLayout);

    // Save the layout to local storage whenever it changes
    // useEffect(() => {
    //     localStorage.setItem('dashboardLayout', JSON.stringify(components));
    // }, [components]);



    // Load saved layout from local storage or use the default layout
    const savedLayout = [
        { id: '1', content: <TableComponent/> },
        { id: '2', content: 'Graph Component' },
        { id: '3', content: 'Summary Card' },
    ];

    const [components, setComponents] = useState(savedLayout);

    // Handle drag-and-drop functionality
    const onDragEnd = (result) => {
        if (!result.destination) return; // Exit if dropped outside a valid destination

        const items = Array.from(components); // Clone current layout
        const [reorderedItem] = items.splice(result.source.index, 1); // Remove dragged item
        items.splice(result.destination.index, 0, reorderedItem); // Insert it at the new position

        setComponents(items); // Update state with the new layout
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="dashboard">
                {(provided) => (
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                            padding: 20,
                            background: '#f8f9fa',
                            minHeight: 400,
                        }}
                    >
                        {components.map((comp, index) => (
                            <Draggable key={comp.id} draggableId={comp.id} index={index}>
                                {(provided) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        style={{
                                            userSelect: 'none',
                                            padding: 16,
                                            marginBottom: 8,
                                            backgroundColor: 'white',
                                            borderRadius: 4,
                                            boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
                                            ...provided.draggableProps.style,
                                        }}
                                    >
                                        {comp.content}
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default Dashboard;
