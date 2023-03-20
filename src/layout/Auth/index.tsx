import { Box, Container, Flex, Image, Text } from "@chakra-ui/react";
import LendsqrLogo from "../../assets/lendsqr-logo.svg";
import LoginAvatar from "../../assets/signin-avatar.svg";

interface LayoutProps {
  heading: string;
  subheading: string;
  content: React.ReactNode;
}

const LoginLayout = ({ heading, subheading, content }: LayoutProps) => {
  return (
    <Container
      maxW={"100%"}
      bgColor="#FFF"
      minH={"100vh"}
      p={0}
      display="flex"
      flexDir={{ base: "column", md: "row" }}
    >
      <Box
        w={{ base: "full", md: "50%" }}
        display={"flex"}
        flexDir="column"
        bgColor="#FBFBFB"
        alignItems="center"
      >
        <Box mt={"100px"} alignSelf="flex-start" ml={"92px"}>
          <Image
            src={LendsqrLogo}
            alt="logo"
            cursor="pointer"
            w={{ base: "120px", md: "174px" }}
          />
        </Box>
        <Box display="flex" alignSelf="center" mt={12}>
          <Image src={LoginAvatar} alt="login avatar" />
        </Box>
      </Box>
      <Box
        w={{ base: "full", md: "50%" }}
        m={{ base: "0 auto" }}
        display="flex"
        flexDir={"column"}
        justifyContent="center"
        fontFamily="Lato"
      >
        <Flex flexDir="column" alignItems="center" m="auto">
          <Box
            display="flex"
            flexDir="column"
            alignSelf="flex-start"
            w="200px"
            mb="60px"
          >
            <Text
              fontSize={{ base: "25px", md: "35px" }}
              fontWeight="700"
              color="rgba(33, 63, 125, 1)"
            >
              {heading}
            </Text>
            <Text fontSize="18px" fontWeight="400" color="rgba(84, 95, 125, 1)">
              {subheading}
            </Text>
          </Box>
          <Box>{content}</Box>
        </Flex>
      </Box>
    </Container>
  );
};

export default LoginLayout;
