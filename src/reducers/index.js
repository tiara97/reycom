import { combineReducers } from "redux";

import { inventoryReducer } from "./inventory-reducer";
import { supplierReducer } from "./supplier-reducer";

export const rootReducers = combineReducers({
  inventoryReducer,
  supplierReducer,
});
