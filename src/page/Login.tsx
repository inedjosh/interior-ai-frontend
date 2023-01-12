import { Box, Flex, Image, Input, Checkbox, Show, Text, Heading, Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <Box p="10">
      <Flex justifyContent={"flex-end"} w="100%">
        <Link
          to="/"
          style={{
            color: "#7723FE",
            textDecoration: "underline",
            fontSize: 13,
            fontWeight: 500,
          }}
        >
          {" "}
          Go back to homepage
        </Link>
      </Flex>
      <Flex flexDirection={["column", "column", "column", "row"]}>
        <Show above="lg">
          <Box flex=".4" h="90vh" overflow={"hidden"} borderRadius="40">
            <Image
              src="login.png"
              w="100%"
              h="100%"
              objectFit={"cover"}
              alt="login-description"
            />
          </Box>
        </Show>
        <Flex
          flex=".5"
          flexDirection={"column"}
          ml={["0", "0", "0", "10"]}
          mt="5"
          justifyContent={"space-around"}
          p={"0"}
        >
          <Box>
            <Heading fontSize="30" fontWeight="bold">
              Welcome Back
            </Heading>
            <Text fontSize="14" py="5">
              Trade your card with SB exchange 24-hour client support Get
              assistance with your trading account around the clock
            </Text>
          </Box>
          <Flex flexDirection={"column"}>
            <Box w="100%">
              <Text fontWeight="bold">Email Address</Text>
              <Input
                bg="#f5f5f5"
                borderColor={"#f5f5f5"}
                outline="#f5f5f5"
                borderRadius={"30"}
                height="12"
                my="3"
                placeholder="inedu joshua"
              />
            </Box>
            <Box w="100%">
              <Text fontWeight="bold">Password</Text>
              <Input
                bg="#f5f5f5"
                borderColor={"#f5f5f5"}
                outline="#f5f5f5"
                borderRadius={"30"}
                height="12"
                my="3"
                placeholder="inedu joshua"
                type="password"
              />
            </Box>

            <Flex my="2" justifyContent={"space-between"} alignItems="center">
              <Checkbox defaultChecked>
                <Text fontWeight="bold">Remeber me</Text>
              </Checkbox>
                          <Link
                              to='register'
                color="#5326FF"
              >
                {" "}
                Forgot Password
              </Link>
            </Flex>
            <Box my="5">
              <Button w="100%">Login</Button>
              <Text fontSize="14" mt="5" textAlign="center">
                Dont have an account?{" "}
                <Link
                  to="/signup"
                  style={{ color: "#7723FE", textDecoration: "underline" }}
                >
                  Register
                </Link>
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Login;
