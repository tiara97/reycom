const INIT_STATE = {
  id: null,
  inventoryData: [],
  inventoryDataById: null,
};

export const inventoryReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_INVENTORY":
      return {
        ...state,
        inventoryData: action.payload.data,
      };
    case "GET_INVENTORY_BY_ID":
      return {
        ...state,
        inventoryDataById: action.payload,
      };
    case "ADD_INVENTORY":
      return { ...state };
    case "UPDATE_INVENTORY":
      return { ...state };
    default:
      return state;
  }
};
