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
  useToast,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { useState } from "react";
import * as yup from "yup";
import { LOGINVALIDATOR } from "../validator/LoginValidator";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const toast = useToast({
    position: "top",
    containerStyle: {
      zIndex: 9,
    },
  });

  const validationSchema = yup.object().shape(LOGINVALIDATOR);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      setLoading(true);
      if (values.email !== "" && values.password !== "") {
        toast({
          status: "success",
          description: "Logged in successfully",
        });
        navigate("/");
      } else {
        toast({
          status: "error",
          description: "oops something went wrong",
        });
      }
    },
  });
  // use formik and yup to handle login?

  const PassWordInput = () => {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
    return (
      <InputGroup size="md">
        <Input
          pr="4.5rem"
          name="password"
          type={show ? "text" : "password"}
          placeholder="Password"
          outlineColor="gray.300"
          color="gray.600"
          value={formik.values.password}
          onChange={formik.handleChange}
          isRequired
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
        <form onSubmit={formik.handleSubmit}>
          <Stack spacing={4} w="full" maxW="md">
            <FormControl id="email">
              <Input
                id="email"
                type="email"
                name="email"
                outlineColor="gray.300"
                color="gray.600"
                placeholder="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
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
              onClick={() => formik.handleSubmit}
              isLoading={loading}
              isDisabled={formik.isValid || loading === false ? false : true}
              type="submit"
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
