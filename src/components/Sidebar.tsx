import React from 'react';
import { useDispatch } from 'react-redux';
import {Box, Drawer, List, ListItem, ListItemText, Typography} from '@mui/material';
import { useAppSelector } from '@src/hooks';
import { RootState } from '@src/redux/store';

const Receipt = () => {
    const products = useAppSelector((state: RootState) => state.product.notification);
    const dispatch = useDispatch();

    const handleItemClicked = (id: string) => {
        // wellsee
    };

    const calculateTotal = () => {
        return products.reduce((total, product) => total + (product.price * product.quantity), 0);
    };

    return (
        <Drawer variant="permanent" open>
            <Box sx={{ padding: 2 }}>
                <Typography variant="h5">
                    Total: $ {calculateTotal().toFixed(2)}
                </Typography>
            </Box>
            <List style={{ width: '500px' }}>
                {products.map((item) => (
                    <ListItem button key={item.id} onClick={() => handleItemClicked(item.id)}>
                        <ListItemText
                            primary={`${item.name} - Qty: ${item.quantity}: $ ${item.price.toFixed(2)}`}
                        />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};

export default Receipt;