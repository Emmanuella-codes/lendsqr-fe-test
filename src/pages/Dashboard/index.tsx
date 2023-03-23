import { Box, Text, Flex, Grid } from "@chakra-ui/react";
import UserCardCmp from "../../components/UserCardCmp";
import UserDashboard from "../../layout/Dashboard/UserDashboard";

const User = () => {
  return (
    <>
      <Box color="rgba(33, 63, 125, 1)">
        <UserDashboard />
        <Grid
          /* templateColumns="repeat(2, 1fr)" */
          gap={2}
          justifyContent="center"
          alignItems="center"
          bgColor="#E5E5E5"
          w="100%"
          mx="0 auto"
        >
          <Box w="200px"></Box>
          <Box pl="12rem">
            <Box display="flex" py={6}>
              <Text fontSize="24px" fontWeight="600">
                Users
              </Text>
            </Box>
            <Box>
              <UserCardCmp />
            </Box>
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default User;
