import { createSlice } from '@reduxjs/toolkit';

// Load cart from localStorage for a specific user
const loadCart = (username) => {
  if (!username) return {};
  try {
    const savedCart = localStorage.getItem(`cart_${username}`);
    return savedCart ? JSON.parse(savedCart) : {};
  } catch (error) {
    console.error(`Failed to load cart for user ${username}:`, error);
    return {};
  }
};

// Save cart to localStorage
const saveCart = (username, cart) => {
  if (!username) return;
  try {
    localStorage.setItem(`cart_${username}`, JSON.stringify(cart));
  } catch (error) {
    console.error(`Failed to save cart for user ${username}:`, error);
  }
};

const initialState = {
  items: {},
  user: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    initializeCart(state, action) {
      const username = action.payload;
      const loadedCart = loadCart(username);
      state.user = username;
      state.items = loadedCart;
    },

    addToCart(state, action) {
      const item = action.payload;
      const quantity = item.quantity || 1;
      const existingItem = state.items[item.id];
      if (existingItem) {
        existingItem.quantity += quantity;
        existingItem.quantity = existingItem.quantity> existingItem.stock ? existingItem.stock : existingItem.quantity; 
      } else {
        state.items[item.id] = { ...item, quantity: quantity};
      }
      saveCart(state.user, state.items);
    },

    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      if (quantity <= 0) {
        delete state.items[id];
      } else {
        state.items[id].quantity = quantity > state.items[id].stock ? state.items[id].stock : quantity;
      }
      saveCart(state.user, state.items);
    },

    removeItem(state, action) {
      const id = action.payload;
      if (state.items[id]) {
        delete state.items[id];
        saveCart(state.user, state.items);
      }
    },

    clearCart(state) {
      state.items = {};
      saveCart(state.user, {});
    },
  },
});

export const { initializeCart, addToCart, updateQuantity, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;