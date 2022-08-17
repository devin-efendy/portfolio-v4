import {
  Box,
  Center,
  Flex,
  Heading,
  Text,
  Image,
  Button,
} from "@chakra-ui/react";

const About = () => {
  return (
    <Box className={"profile--section"} my={"120px"} mx={"30px"}>
      <Center flexDirection={["column", null, null, null, "row"]}>
        <Flex direction={"column"} maxWidth={"500px"}>
          <Heading as={"h1"} mb={"24px"}>
          👋 Hi, I'm Devin Efendy!
          </Heading>
          <Heading
            mb={"36px"}
            color={"gray.500"}
            size={"md"}
            fontWeight={"semibold"}
            letterSpacing={"wide"}
          >
            Software Engineer
          </Heading>
          <Text as={"p"} color={"gray.700"} mb={"3rem"} textAlign={"justify"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
          <Button id="contact-me--button" width={"130px"}>
            Contact me
          </Button>
        </Flex>
        <Center
          ml={[0, null, null, "3rem", "10rem"]}
          mt={["4rem", null, null, 0, 0]}
        >
          <Box
            borderRadius={"full"}
            borderColor={"twitter.400"}
            borderWidth={"7px"}
          >
            <Image
              boxSize={["250px", null, null, "300px"]}
              borderRadius={"full"}
              src="/static/about-img-sqr.png"
            />
          </Box>
        </Center>
      </Center>
    </Box>
  );
};

export default About;
