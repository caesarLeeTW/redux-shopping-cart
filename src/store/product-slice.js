import { createSlice } from "@reduxjs/toolkit";

const initialProductState = {
  products: [
    {
      id: Math.random(),
      title: "Test",
      description: "This is a first product - amazing!",
      price: 6,
    },
    {
      id: Math.random(),
      title: "Test2",
      description: "This is a second product - amazing!",
      price: 7,
    },
  ],
};

const product = createSlice({
  name: "product",
  initialState: initialProductState,
  reducers: {},
});

export default product.reducer;
