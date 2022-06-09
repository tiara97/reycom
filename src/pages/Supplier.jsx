import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Grommet,
  Heading,
  Text,
} from "grommet";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

const SupplierDetail = () => {
  let { page, size } = useParams();
  const [supplierData, setData] = useState([]);

  const url = `https://mobile.dev.quadrant-si.id/developertest/Supplier`;
  useEffect(() => {
    const fetchData = async () => {
      const res = await Axios.get(`${url}/inquiry/${page}/${size}`);
      setData(res.data.data);
    };
    fetchData();
  }, []);

  console.log("HERE", supplierData);
  return (
    <Grommet full>
      <Box fill flex overflow={{ horizontal: "hidden" }}>
        <Heading level="3" margin="none">
          Supplier Detail Page
        </Heading>
        <Box flex direction="row" align="center" justify="evenly">
          {supplierData.length > 0 &&
            supplierData.map((item, i) => {
              return (
                <Card key={i} height="small" width="small" background="light-1">
                  <CardHeader pad="medium">{item.name}</CardHeader>
                  <CardBody pad="medium">
                    <Text> Adress : {item.address}</Text>
                    <Text> City : {item.city}</Text>
                    <Text> Post Code : {item.postCode}</Text>
                  </CardBody>
                </Card>
              );
            })}
        </Box>
      </Box>
    </Grommet>
  );
};

export default SupplierDetail;
