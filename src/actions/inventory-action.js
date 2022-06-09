import Axios from "axios";

const url = `https://mobile.dev.quadrant-si.id/developertest/InventoryItem`;

function getInventoryById(id) {
  return async (dispatch) => {
    try {
      const res = await Axios.get(`${url}/${id}`);
      dispatch({
        type: "GET_INVENTORY_BY_ID",
        payload: res.data,
      });
    } catch (e) {
      console.error(e.toString());
    }
  };
}

function getInventories(page, size) {
  return async (dispatch) => {
    try {
      const res = await Axios.get(`${url}/inquiry/${page}/${size}`);
      dispatch({
        type: "GET_INVENTORY",
        payload: res.data,
      });
    } catch (e) {
      console.error(e.toString());
    }
  };
}

function addInventory(body) {
  return async (dispatch) => {
    try {
      const res = await Axios.post(`${url}/AddItem`, body);
      console.log(res);
      dispatch({
        type: "ADD_INVENTORY",
        payload: res,
      });
    } catch (e) {
      console.error(e.toString());
    }
  };
}

function updateInventory(body) {
  return async (dispatch) => {
    try {
      const res = await Axios.put(`${url}/UpdateItem`, body);
      console.log(res);
      dispatch({
        type: "UPDATE_INVENTORY",
        payload: res,
      });
    } catch (e) {
      console.error(e.toString());
    }
  };
}

export const InventoryAction = {
  getInventories,
  getInventoryById,
  addInventory,
  updateInventory,
};
