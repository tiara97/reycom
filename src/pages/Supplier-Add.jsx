import {
  Box,
  Button,
  Form,
  FormField,
  Grommet,
  Heading,
  Select,
  TextInput,
} from "grommet";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { SupplierAction } from "../actions/supplier-action";

const SupplierAdd = () => {
  const [event, setEvent] = useState("mobilePhone");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(value) {
    const body = {
      name: value.name,
      address: value.address,
      city: value.city,
      postCode: value.postCode,
      contacts: [
        {
          name: value.contactName,
          contactType: value.contactType,
          value: value.contactValue,
        },
      ],
    };
    dispatch(SupplierAction.addSupplier(body));
    navigate("/");
  }

  return (
    <Grommet full>
      <Box fill align="center" flex overflow={{ horizontal: "hidden" }}>
        <Heading level="3" margin="none">
          Supplier Add Page
        </Heading>
        <Box flex align="center" justify="center" pad="medium">
          <Form onSubmit={({ value }) => handleSubmit(value)}>
            <FormField
              required
              name="name"
              htmlFor="text-input-id"
              label="Supplier Name"
            >
              <TextInput id="text-input-id" name="name" />
            </FormField>
            <FormField
              required
              name="address"
              htmlFor="text-input-id"
              label="Address"
            >
              <TextInput id="text-input-id" name="address" />
            </FormField>
            <FormField
              required
              name="city"
              htmlFor="text-input-id"
              label="City"
            >
              <TextInput id="text-input-id" name="city" />
            </FormField>
            <FormField
              required
              name="postCode"
              htmlFor="text-input-id"
              label="Post Code"
            >
              <TextInput id="text-input-id" name="postCode" />
            </FormField>
            <FormField
              required
              name="contactName"
              htmlFor="text-input-id"
              label="Contact Name"
            >
              <TextInput id="text-input-id" name="contactName" />
            </FormField>
            <FormField
              name="contactType"
              htmlFor="text-input-id"
              label="Contact Type"
            >
              <Select
                name="contactType"
                options={["mobilePhone", "officePhone"]}
                value={event}
                onChange={({ option }) => setEvent(option)}
              />
            </FormField>
            <FormField
              required
              name="contactValue"
              htmlFor="text-input-id"
              label="Contact Value"
            >
              <TextInput id="text-input-id" name="contactValue" />
            </FormField>
            <Button primary type="submit" label="Submit" />
          </Form>
        </Box>
      </Box>
    </Grommet>
  );
};

export default SupplierAdd;
