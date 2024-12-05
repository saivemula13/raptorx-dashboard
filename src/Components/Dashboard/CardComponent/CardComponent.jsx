import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const SummaryCard = ({ data, onRemove }) => {
    // Calculate metrics for each item
    const highestPrice = data.High;
    const lowestPrice = data.Low;
    const avgMarketCap = (highestPrice + lowestPrice) / 2;

    return (
        <Card sx={{ minWidth: 200, marginBottom: 2, boxShadow: 3 }}>
            <CardContent sx={{ position: "relative" }}>
                <Typography variant="h6">{data.Name}</Typography>
                <Typography variant="body2" color="text.secondary">
                    Highest Price: ${highestPrice.toFixed(2)} <br />
                    Lowest Price: ${lowestPrice.toFixed(2)} <br />
                    Avg Market Cap: ${avgMarketCap.toFixed(2)} <br />
                </Typography>
                {onRemove && (
                    <Button
                        variant="outlined"
                        size="small"
                        color="error"
                        sx={{ margin: "16px", padding: 0,position:"absolute",top:0,right:0 }}
                        onClick={onRemove}
                    >
                        <b>x</b>
                    </Button>
                )}
            </CardContent>
        </Card>
    );
};

export default SummaryCard;
