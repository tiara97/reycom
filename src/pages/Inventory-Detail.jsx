import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Grommet,
  Heading,
  Text,
} from "grommet";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { InventoryAction } from "../actions/inventory-action";

const InventoryDetail = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const { inventoryDataById } = useSelector((state) => {
    return {
      inventoryDataById: state.inventoryReducer.inventoryDataById,
    };
  });

  useEffect(() => {
    dispatch(InventoryAction.getInventoryById(id));
  }, []);

  if (inventoryDataById)
    return (
      <Grommet full>
        <Box fill flex overflow={{ horizontal: "hidden" }}>
          <Heading level="3" margin="none" alignSelf="center">
            Inventory Detail Page
          </Heading>
          <Box flex align="center" justify="center">
            <Card height="small" width="small" background="light-1">
              <CardHeader pad="medium">Title</CardHeader>
              <CardBody pad="medium">
                <Text> SKU : {inventoryDataById.sku}</Text>
                <Text> Qty : {inventoryDataById.qty}</Text>
                <Text> Cost Price : {inventoryDataById.costPrice}</Text>
                <Text> Retail Price : {inventoryDataById.retailPrice}</Text>
              </CardBody>
            </Card>
          </Box>
        </Box>
      </Grommet>
    );
};

export default InventoryDetail;
