import Axios from "axios";

const url = `https://mobile.dev.quadrant-si.id/developertest/Supplier`;

async function getSuppliers(page, size) {
  console.log(page,size, 'action')
  // return async (dispatch) => {
    try {
      console.log('masuk')
      const res = await Axios.get(`${url}/inquiry/${page}/${size}`);
      // dispatch({
      //   type: "GET_SUPPLIER",
      //   payload: res.data,
      // });
      console.log(res.data)
      return res.data
    } catch (e) {
      console.error(e.toString());
    }
  // };
}

function addSupplier(body) {
  return async (dispatch) => {
    try {
      console.log(body);
      const res = await Axios.post(`${url}/AddSupplier`, body);
      dispatch({
        type: "ADD_SUPPLIER",
        payload: res,
      });
    } catch (e) {
      console.error(e.toString());
    }
  };
}

function updateSupplier(body) {
  return async (dispatch) => {
    try {
      const res = await Axios.put(`${url}/UpdateSupplier`, body);
      dispatch({
        type: "UPDATE_SUPPLIER",
        payload: res,
      });
    } catch (e) {
      console.error(e.toString());
    }
  };
}

export const SupplierAction = { getSuppliers, addSupplier, updateSupplier };
