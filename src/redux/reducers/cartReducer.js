import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cartItems',
  initialState: [],
  reducers: {
    cartInitialized: () => false,
    setCartItems: (state, action) => {
      // state = [...state, action.payload];

      let setData = state;
      setData.push(action.payload);
      state = setData;
    },
    removeCartItem: (state, action) => {
      state = state.filter(item => item.id !== action.payload);
    },
    clearCart: state => {
      state = [];
    },
    updateCartItem: (state, action) => {
      const {id, quantity} = action.payload;

      const itemIndex = state.findIndex(item => item.id === id);
      if (quantity == -1 && state[itemIndex].quantity <= 0) {
        return;
      }
      state[itemIndex].quantity += quantity;
    },
  },
});

const {actions, reducer} = cartSlice;

export const {
  cartInitialized,
  setCartItems,
  removeCartItem,
  clearCart,
  updateCartItem,
} = actions;
export default reducer;

//
// [
//   {
//     id: 1,
//     name: 'item name',
//     description: ' item description',
//     price: 100,
//     quantity: 1,
//   },

// ]
