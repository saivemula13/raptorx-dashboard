import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const SummaryCard = ({ title, value, onRemove }) => {
    return (
        <Card sx={{ minWidth: 200, marginBottom: 2, boxShadow: 3 }}>
            <CardContent>
                <Typography variant="h6">{title}</Typography>
                <Typography variant="body2" color="text.secondary">
                    {value}
                </Typography>
                {onRemove && (
                    <Button
                        variant="outlined"
                        size="small"
                        color="error"
                        sx={{ marginTop: 1 }}
                        onClick={onRemove}
                    >
                        Remove
                    </Button>
                )}
            </CardContent>
        </Card>
    );
};

export default SummaryCard;
