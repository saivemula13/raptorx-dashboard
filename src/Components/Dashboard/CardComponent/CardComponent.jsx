import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { Grid } from '@mui/system';

const SummaryCard = ({ data, onRemove }) => {
    const highestPrice = data.High;
    const lowestPrice = data.Low;
    const avgMarketCap = (highestPrice + lowestPrice) / 2;

    return (
        <Card sx={{ minWidth: 200, boxShadow: 3 }}>
            <CardContent sx={{ position: "relative" }}>
                <Grid container alignItems={"center"} justifyContent={"space-between"}>
                    <Grid item xs={8}>
                        <Typography variant="h6" sx={{ mb: 2 }}>{data.Name}</Typography>
                        <Typography variant="body2" color="text.secondary">
                            Highest Price: ${highestPrice.toFixed(2)}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lowest Price: ${lowestPrice.toFixed(2)}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Avg Market Cap: ${avgMarketCap.toFixed(2)}
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <img src={data.Image} width="50" alt="" />
                    </Grid>
                </Grid>
                {onRemove && (
                    <Button
                        variant="outlined"
                        size="small"
                        color="error"
                        sx={{ margin: "16px", padding: 0, position: "absolute", top: 0, right: 0 }}
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
