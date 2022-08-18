import {
  Box,
  Center,
  Flex,
  Heading,
  Text,
  Image,
  Button,
  Icon,
  Link,
} from "@chakra-ui/react";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoIosPaper } from "react-icons/io";
import { useRouter } from "next/router";

const About = () => {
  const router = useRouter();

  return (
    <Center
      className={"profile--section"}
      flexDirection={["column", null, null, null, "row"]}
      height={"100vh"}
      p={["40px", null, null, null, 0]}
    >
      <Flex direction={"column"} maxWidth={"600px"}>
        <Heading as={"h1"} mb={"24px"}>
          Hi 👋, I&apos;m Devin Efendy!
        </Heading>
        <Heading
          mb={"36px"}
          color={"gray.500"}
          size={"md"}
          fontWeight={"semibold"}
          letterSpacing={"wide"}
        >
          Software Developer
        </Heading>
        <Text as={"p"} color={"gray.700"} mb={"3rem"} textAlign={"justify"}>
          I'm a final year Computer Science Honours (Co-op) student at the
          University of Manitoba and will be graduating in December 2022. I am
          very passionate about tech and I like to build things with it. Through
          multiple co-op terms, I gained industry experience in building full-stack web
          applications. My areas of interest are web development, DevOps, and distributed systems.
        </Text>
        <Flex gap={3} wrap={"wrap"}>
          <Link href="https://github.com/devin-efendy" isExternal>
            <Button id="github--button" colorScheme="gray">
              <Icon as={FaGithub} w={5} h={5} />
            </Button>
          </Link>
          <Link href="https://www.linkedin.com/in/devinefendy/" isExternal>
            <Button id="linkedin--button" colorScheme="linkedin">
              <Icon as={FaLinkedinIn} w={5} h={5} />
            </Button>
          </Link>
          <Link
            href="mailto:devinefendy.dev@gmail.com"
            _hover={{ textDecoration: "none" }}
          >
            <Button
              id="contact-me--button"
              colorScheme="purple"
              leftIcon={<Icon as={MdEmail} w={5} h={5} />}
            >
              Contact
            </Button>
          </Link>
          <Button
            id="contact-me--button"
            colorScheme="teal"
            leftIcon={<Icon as={IoIosPaper} w={5} h={5} />}
            onClick={() => router.push("/resume")}
          >
            Resume
          </Button>
        </Flex>
      </Flex>
      <Center
        display={["none", null, null, null, "flex"]}
        ml={[0, null, null, "3rem", "10rem"]}
        mt={["4rem", 0]}
      >
        <Box
          borderRadius={"full"}
          borderColor={"twitter.400"}
          borderWidth={"5px"}
        >
          <Image
            alt="Devin Efendy profile image"
            boxSize={"300px"}
            borderRadius={"full"}
            src="/static/about-img-sqr.png"
          />
        </Box>
      </Center>
    </Center>
  );
};

export default About;
