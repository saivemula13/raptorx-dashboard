import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';

export default function TableComponent({ tableData, visibleFields }) {
  const columns = visibleFields.map((field) => ({
    field,
    headerName: field,
    width: 150,
    renderCell: (params) => {
      const value = params.value;

      if (typeof value === 'string' && (value.startsWith('http') || value.startsWith('data:image'))) {
        return (
          <Box
            component="img"
            src={value}
            alt={field}
            sx={{
              maxWidth: 50,
              maxHeight: 50,
              borderRadius: '4px',
            }}
          />
        );
      }

      if (typeof value === 'number') {
        return (
          <Box
            sx={{
              color: value > 0 ? 'green' : value < 0 ? 'red' : 'inherit',
              fontWeight: 'bold',
            }}
          >
            {value}
          </Box>
        );
      }

      return <span>{value}</span>;
    },
  }));

  const rows = tableData.map((row) => {
    const filteredRow = { id: row.Id }; 
    visibleFields.forEach((field) => {
      filteredRow[field] = row[field];
    });
    return filteredRow;
  });

  const paginationModel = { page: 0, pageSize: 10 };

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      initialState={{ pagination: { paginationModel } }}
      pageSizeOptions={[ 10,20]}
      sx={{ border: 0 }}
      hideFooterSelectedRowCount
    />
  );
}
