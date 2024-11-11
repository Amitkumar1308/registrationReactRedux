import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Uses localStorage as the default storage

// Define persist config
const persistConfig = {
  key: 'root',          // Key for the root of the persisted data
  storage,              // Storage engine to use (localStorage in this case)
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, userReducer);

// Create the store with the persisted reducer
const store = configureStore({
  reducer: {
    user: persistedReducer, // Apply persistence to the user slice
  },
});

// Create a persistor
const persistor = persistStore(store);

export { store, persistor };
