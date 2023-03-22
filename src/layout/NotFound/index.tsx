import { Container, Box, Image, Flex } from "@chakra-ui/react";
import LendsqrLogo from "../../assets/lendsqr-logo.svg";

interface NotFoundLayoutProps {
  content: React.ReactNode;
}

const NotFoundLayout = ({ content }: NotFoundLayoutProps) => {
  return (
    <Container>
      <Box
        w={{ base: "full", lg: "60%" }}
        maxW={"500px"}
        m={{ base: "0 auto" }}
        padding={{ base: "50px 18px 0" }}
        display={{ lg: "flex" }}
        flexDir={{ lg: "column" }}
        justifyContent={{ lg: "center" }}
      >
        <Box textAlign={"center"} pb="44px">
          <Image src={LendsqrLogo} alt="Logo" margin="0 auto" />
        </Box>
        <Flex
          flexDirection={{ base: "column" }}
          alignItems={{ base: "center" }}
        >
          {content}
        </Flex>
      </Box>
    </Container>
  );
};

export default NotFoundLayout;
