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

const AllInventories = () => {
  let { page, size } = useParams();
  const dispatch = useDispatch();
  const { inventoryData } = useSelector((state) => {
    return {
      inventoryData: state.inventoryReducer.inventoryData,
    };
  });

  useEffect(() => {
    dispatch(InventoryAction.getInventories(parseInt(page), parseInt(size)));
  }, []);

  return (
    <Grommet full>
      <Box fill flex overflow={{ horizontal: "hidden" }}>
        <Heading level="3" margin="none" alignSelf="center">
          Inventories Page
        </Heading>
        <Box flex direction="row" align="center" justify="evenly">
          {inventoryData.map((item, i) => {
            return (
              <Card key={i} background="light-1">
                <CardHeader pad="medium">{item.name}</CardHeader>
                <CardBody pad="medium">
                  <Text> SKU : {item.sku}</Text>
                  <Text> Qty : {item.qty}</Text>
                  <Text> Cost Price : {item.costPrice}</Text>
                  <Text> Retail Price : {item.retailPrice}</Text>
                </CardBody>
              </Card>
            );
          })}
        </Box>
      </Box>
    </Grommet>
  );
};

export default AllInventories;
