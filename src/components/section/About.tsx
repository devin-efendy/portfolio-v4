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
    <Box className={"profile--section"} my={"150px"} mx={"30px"}>
      <Center flexDirection={["column", null, null, null, "row"]}>
        <Flex direction={"column"} maxWidth={"600px"}>
          <Heading as={"h1"} mb={"24px"}>
            👋 Hi, I&apos;m Devin Efendy!
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
            I'm a final year Computer Science HonoursCo-op student at the
            University of Manitoba and will be graduating in December 2022. I
            am very passionate about tech and I like to build things with it.
            Through multiple co-op terms, I gained industry experience in
            building web applications and using technologies such as Next.js,
            React, Node, TypeScript, SQL, Docker, Jest, and React Testing
            Library. My areas of interest are front-end development, distributed
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
              alt="Devin Efendy profile image"
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
