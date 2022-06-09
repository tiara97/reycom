import { Box, Button, Grommet, Text } from "grommet";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Grommet full>
      <Box fill direction="row" flex overflow={{ horizontal: "hidden" }}>
        <Box flex align="center" justify="center">
          <Text>WELCOME INVENTORY MANAGEMENT APP</Text>
          <Link to="/">
            <Button variant="outlined">Back to home</Button>
          </Link>
        </Box>
      </Box>
    </Grommet>
  );
};

export default Home;
