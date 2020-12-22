import AsyncStorage from "@react-native-async-storage/async-storage";
import { AnyAction, createStore, Store } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import reducer from "./reducers";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducer);
export default () => {
  let store: Store<any, AnyAction> = createStore(persistedReducer);
  let persistor = persistStore(store);
  return { store, persistor };
};
