import Axios from "axios";
const INIT_STATE = {
  supplierData: [],
};

const url = `https://mobile.dev.quadrant-si.id/developertest/Supplier`;
export const supplierReducer = async (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_SUPPLIER":
      const res = await Axios.get(
        `${url}/inquiry/${action.payload.page}/${action.payload.size}`
      );
      return {
        ...state,
        supplierData: res.data.data,
      };
    case "ADD_SUPPLIER":
      return { ...state };
    case "UPDATE_SUPPLIER":
      return { ...state };
    default:
      return state;
  }
};
