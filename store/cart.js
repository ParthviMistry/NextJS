import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    products: [],
    price: 0,
  },
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const findProduct = state.value.products.find(
        (item) => item.product === action.payload.product
      );
      if (findProduct) {
        findProduct.quantity += 1;
      } else {
        state.value.products.push({
          product: action.payload.product,
          data: action.payload.data,
          quantity: 1,
        });
      }
    },
    decreaseToCart: (state, action) => {
      const findProduct = state.value.products.find(
        (item) => item.product === action.payload.product
      );
      if (findProduct.quantity > 1) {
        findProduct.quantity -= 1;
      } else {
        state.value.products = state.value.products.filter(
          (item) => item.product !== action.payload.product
        );
      }
    },
    removeFromCart(state, action) {
      state.value.products.map((cartItem) => {
        if (cartItem.product === action.payload.id) {
          state.value.products = state.value.products.filter(
            (item) => item.product !== action.payload.id
          );
        }
      });
    },
    clearCart: (state) => {
      state.value.products = [];
      state.value.price = 0;
    },
    getTotals(state, action) {
      let { total, quantity } = state.value.products.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
  },
});

export const { addToCart, decreaseToCart, clearCart, removeFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
