import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';

export default function TableComponent({ tableData, visibleFields }) {
  const colorFields = [
    'Price Change',
    'Price Change Percentage',
    'Ath Change Percentage',
    'Ath',
    'Atl',
    'Atl Change Percentage',
  ];

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

      if (typeof value === 'number' && colorFields.includes(field)) {
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

  const rows = tableData.map((row, index) => ({
    id: index + 1,
    ...row,
  }));

  const paginationModel = { page: 0, pageSize: 10 };

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      initialState={{ pagination: { paginationModel } }}
      pageSizeOptions={[10, 20]}
      sx={{ border: 0 }}
      hideFooterSelectedRowCount
    />
  );
}
