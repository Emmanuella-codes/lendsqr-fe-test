import {
  Box,
  Flex,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  FormControl,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

const LoginForm = () => {
  const PassWordInput = () => {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
    return (
      <InputGroup size="md">
        <Input
          pr="4.5rem"
          type={show ? "text" : "password"}
          placeholder="password"
          outlineColor="gray.300"
        />
        <InputRightElement width="4.5rem">
          <Button
            bgColor={"transparent"}
            h="1.75rem"
            size="sm"
            onClick={handleClick}
            color="rgba(57, 205, 204, 1)"
          >
            {show ? "HIDE" : "SHOW"}
          </Button>
        </InputRightElement>
      </InputGroup>
    );
  };

  return (
    <>
      <Flex>
        <form>
          <Stack spacing={4} w="full" maxW="md">
            <FormControl id="email">
              <Input
                id="email"
                type="email"
                name="email"
                outlineColor="gray.300"
              />
            </FormControl>
            <FormControl id="password">
              <PassWordInput />
            </FormControl>
            <Box>
              <Text
                fontSize="12px"
                lineHeight="16.39px"
                color="rgba(57, 205, 204, 1)"
              >
                FORGOT PASSWORD?
              </Text>
            </Box>
            <Button
              w="full"
              bgColor="rgba(57, 205, 204, 1)"
              fontSize="14px"
              color="#FFF"
              _hover={{
                bgColor: "teal.400",
              }}
            >
              LOG IN
            </Button>
          </Stack>
        </form>
      </Flex>
    </>
  );
};

export default LoginForm;
