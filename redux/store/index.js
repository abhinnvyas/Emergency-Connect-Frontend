import { combineReducers, configureStore } from "@reduxjs/toolkit";
import tokenReducer from "../slices/tokenSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer, persistStore } from "redux-persist";

// Combine all reducers into a single reducer function

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistTokenReducer = persistReducer(persistConfig, tokenReducer);

const rootReducer = combineReducers({
  token: persistTokenReducer,
});

// Create a Redux store
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
