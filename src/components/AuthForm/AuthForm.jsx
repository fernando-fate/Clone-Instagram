import {
  Box,
  VStack,
  Image,
  Input,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";

//const initialForm = { email: "", password: "", confirmPassword: "" };

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const { inputs, onInputChange } = useForm({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleAuth = () => {
    console.log(inputs);
    if (!inputs.email || !inputs.password) {
      alert("Please fill all the fields");
      return;
    }
    console.log("Authenticating...");
    navigate("/");
  };
  return (
    <>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <VStack spacing={4}>
          <Image src="./logo.png" h={24} />
          <Input
            placeholder="Email"
            fontSize={14}
            type="email"
            name="email"
            value={inputs.email}
            onChange={onInputChange}
          />
          <Input
            placeholder="Password"
            fontSize={14}
            type="password"
            value={inputs.password}
            name="password"
            onChange={onInputChange}
          />
          {!isLogin ? (
            <Input
              placeholder="Confirm Password"
              fontSize={14}
              type="password"
              name="confirmPassword"
              value={inputs.confirmPassword}
              onChange={onInputChange}
            />
          ) : null}
          <Button
            fontSize={14}
            w={"full"}
            size={"sm"}
            colorScheme="blue"
            onClick={handleAuth}
          >
            {isLogin ? "Login" : "Sign Up"}
          </Button>
          {/* ------------------- OR Text ---------------------- */}
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            my={4}
            w={"full"}
            gap={1}
          >
            <Box flex={2} h={"1px"} bg={"gray.400"}></Box>
            <Text mx={1} color={"white"}>
              OR
            </Text>
            <Box flex={2} h={"1px"} bg={"gray.400"}></Box>
          </Flex>
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            cursor={"pointer"}
          >
            <Image src="/google.png" w={5} alt="Gogle logo" />
            <Text mx={2} color={"blue.500"}>
              Log in with google
            </Text>
          </Flex>
        </VStack>
      </Box>

      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Box mx={2} fontSize={14}>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </Box>
          <Box
            mx={2}
            fontSize={14}
            onClick={() => {
              setIsLogin(!isLogin);
            }}
          >
            <Text
              color={"blue.500"}
              cursor={"pointer"}
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Sign Up" : "Login"}
            </Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default AuthForm;
