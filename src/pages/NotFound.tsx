import { Box, Image, Text } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import NotFoundLayout from "../layout/NotFound";

const NotFound = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <>
      <NotFoundLayout
        content={
          <>
            <Box>
              <Image src="" alt="not found" margin="0 auto" />
            </Box>
            <Text>Sorry, Nothing here!</Text>
            <Box>
              <Text>
                The page you tried to access is not available.{" "}
                <span style={{ textDecoration: "underline" }}>
                  <span onClick={goBack}>Go back to the previous page</span>
                </span>{" "}
                or{" "}
                <span style={{ textDecoration: "underline" }}>
                  <Link to={"/"}>Go home</Link>
                </span>
              </Text>
            </Box>
          </>
        }
      />
    </>
  );
};

export default NotFound;
