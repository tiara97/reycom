import { Box, Grommet } from "grommet";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import InventoryDetail from "./pages/Inventory-Detail";
import InventoryAdd from "./pages/Inventory-Add";
import InventoryUpdate from "./pages/Inventory-Update";
import NotFound from "./pages/Not-Found";
import SupplierDetail from "./pages/Supplier";
import SupplierAdd from "./pages/Supplier-Add";
import SupplierUpdate from "./pages/Supplier-Update";
import AllInventories from "./pages/Inventory";

const theme = {
  global: {
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
};

const App = () => {
  return (
    <Grommet theme={theme} full>
      <Box fill>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route
            path="/supplier/inquiry/:page/:size"
            element={<SupplierDetail />}
          />
          <Route path="/supplier/addsuplier" element={<SupplierAdd />} />
          <Route path="/supplier/editsuplier" element={<SupplierUpdate />} />
          <Route path="/inventoryitem/:id" element={<InventoryDetail />} />
          <Route path="/inventoryitem/inquiry/:page/:size" element={<AllInventories />} />
          <Route path="/inventoryitem/additem" element={<InventoryAdd />} />
          <Route path="/inventoryitem/updateitem" element={<InventoryUpdate />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Box>
    </Grommet>
  );
};

export default App;
