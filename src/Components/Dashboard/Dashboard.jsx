import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Switch, Box, Typography, AppBar, Toolbar } from '@mui/material';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Masonry from '@mui/lab/Masonry';
import TableComponent from './TableComponent/TableComponent';
import { apiData } from '../ApiData';
import LineChartComponent from './LineChartComponent/LineChartComponent';


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



    const [darkMode, setDarkMode] = useState(false);

    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
        },
    });



    let filteredApiData = apiData.map((item, index) => ({
        "Id": index + 1,
        "Symbol": item.symbol,
        "Name": item.name,
        "Image": item.image,
        "Current Price": item.current_price,
        "Market Capital": item.market_cap,
        "Market Capital Rank": item.market_cap_rank,
        "Total Volume": item.total_volume,
        "High": item.high_24h,
        "Low": item.low_24h,
        "Price Change": item.price_change_24h,
        "Price Change Percentage": item.price_change_percentage_24h,
        "Total Supply": item.total_supply,
        "Max Supply": item.max_supply,
        "Ath": item.ath,
        "Ath Change Percentage": item.ath_change_percentage,
        "Atl": item.atl,
        "Atl Change Percentage": item.atl_change_percentage,
    }))

    const savedLayout = [
        { id: '1', content: 'Summary Card 1' },
        { id: '2', content: 'Summary Card 2' },
        { id: '3', content: 'Summary Card 3' },
        { id: '4', content: 'Summary Card 4' },
        { id: '5', content: 'Summary Card 5' },
        { id: '6', content: 'Summary Card 6' },
        { id: '7', content: 'Summary Card 7' },
        { id: '8', content: 'Summary Card 8' },

    ];

    const [components, setComponents] = useState(savedLayout);

    const onDragEnd = (result) => {
        if (!result.destination) return;

        const items = Array.from(components);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setComponents(items);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Dashboard
                    </Typography>
                    <Switch
                        checked={darkMode}
                        onChange={() => setDarkMode(!darkMode)}
                        inputProps={{ 'aria-label': 'theme toggle' }}
                    />
                </Toolbar>
            </AppBar>
            <Box sx={{ padding: "16px" }}>
                <TableComponent
                    tableData={filteredApiData}
                    visibleFields={Object.keys(filteredApiData[0])}
                />
                <LineChartComponent data={filteredApiData} />
                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId="dashboard" direction="vertical">
                        {(provided) => (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                style={{
                                    padding: 20,
                                    background: theme.palette.background.default,
                                    minHeight: 400,
                                }}
                            >
                                <Masonry columns={{ xs: 2, sm: 3 }} spacing={2}>
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
                                                        backgroundColor: theme.palette.background.paper,
                                                        borderRadius: 4,
                                                        boxShadow: `0 1px 3px ${darkMode ? "#fff" : "rgba(0,0,0,0.2)"} `,
                                                        ...provided.draggableProps.style,
                                                    }}
                                                >
                                                    {comp.content}
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </Masonry>
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            </Box>
        </ThemeProvider>
    );
};

export default Dashboard;
