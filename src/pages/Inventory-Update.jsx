import {
  Box,
  Button,
  Form,
  FormField,
  Grommet,
  Heading,
  TextInput,
} from "grommet";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { InventoryAction } from "../actions/inventory-action";

const InventoryUpdate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(value) {
    const body = {
      id: value.id,
      isDeleted: true,
      sku: value.sku,
      name: value.name,
      costPrice: parseInt(value.costPrice),
      retailPrice: parseInt(value.retailPrice),
      qty: parseInt(value.quantity),
      marginPercentage: parseInt(value.marginPercentage),
      supplierId: parseInt(value.supplierId),
    };
    console.log(body);
    dispatch(InventoryAction.updateInventory(body));
    navigate("/"); 
  }

  return (
    <Grommet full>
      <Box fill align="center" flex overflow={{ horizontal: "hidden" }}>
        <Heading level="3" margin="none">
          Inventory Edit Page
        </Heading>
        <Box flex align="center" justify="center" pad="medium">
          <Form onSubmit={({ value }) => handleSubmit(value)}>
            <FormField
              required
              name="id"
              htmlFor="text-input-id"
              label="Inventory ID"
            >
              <TextInput type="number" id="text-input-id" name="id" />
            </FormField>
            <FormField required name="sku" htmlFor="text-input-id" label="SKU">
              <TextInput id="text-input-id" name="sku" />
            </FormField>
            <FormField
              required
              name="name"
              htmlFor="text-input-id"
              label="Inventory Name"
            >
              <TextInput id="text-input-id" name="name" />
            </FormField>
            <FormField
              required
              name="costPrice"
              htmlFor="text-input-id"
              label="Cost Price"
            >
              <TextInput type="number" id="text-input-id" name="costPrice" />
            </FormField>
            <FormField
              required
              name="retailPrice"
              htmlFor="text-input-id"
              label="Retail Price"
            >
              <TextInput type="number" id="text-input-id" name="retailPrice" />
            </FormField>
            <FormField
              required
              name="quantity"
              htmlFor="text-input-id"
              label="Quantity"
            >
              <TextInput type="number" id="text-input-id" name="quantity" />
            </FormField>
            <FormField
              required
              name="marginPercentage"
              htmlFor="text-input-id"
              label="Margin Percentage"
            >
              <TextInput
                type="number"
                id="text-input-id"
                name="marginPercentage"
              />
            </FormField>
            <FormField
              required
              name="supplierId"
              htmlFor="text-input-id"
              label="Supplier ID"
            >
              <TextInput type="number" id="text-input-id" name="supplierId" />
            </FormField>
            <Button primary type="submit" label="Submit" />
          </Form>
        </Box>
      </Box>
    </Grommet>
  );
};

export default InventoryUpdate;
