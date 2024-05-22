import {useDispatchTyped} from "@src/hooks";
import React, {useState} from "react";
import {addProduct} from "@redux/features";
import {Box, Button, MenuItem, Select, TextField} from "@mui/material";
import {Alerts} from "@src/components";

function ProductList () {
    const dispatch = useDispatchTyped();
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState<number>(0);
    const [productQuantity, setProductQuantity] = useState<number>(1)

    const handleProductChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setProductName(event.target.value);
    };

    const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setProductPrice(Number(event.target.value));
    };

    const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setProductQuantity(Number(event.target.value));
    };
    const handleSubmitProduct = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispatch(addProduct({name: productName, price: productPrice, quantity: productQuantity}));
        setProductName("");
        setProductPrice(0);
    }



    return (
        <Box component="form" onSubmit={handleSubmitProduct} sx={{
            width: '100%',
            mt: 3,
            backgroundColor: 'white',
            padding: 200,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh' }}>
            <TextField id="outlined-basic" label="Product" value={productName} onChange={handleProductChange} />
            <TextField id="outlined-basic" label="Quantity" type="number" value={productQuantity} onChange={handleQuantityChange}/>
            <TextField id="outlined-basic" label="Price" type="number" value={productPrice} onChange={handlePriceChange} />

            <Button type="submit" variant="contained" color="primary" style={{ margin: 10 }}>
                Add Product
            </Button>
        </Box>




    );
}

export default ProductList;