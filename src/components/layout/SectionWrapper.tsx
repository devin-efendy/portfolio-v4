import { Center, Flex, Heading } from "@chakra-ui/react";

interface Props {
  title: string;
  children: any;
}
const SectionWrapper = ({ title, children }: Props) => {
  return (
    <Center className={"work-experience--section"} my={"150px"} mx={"30px"}>
      <Flex flexDirection={"column"} maxWidth={"1000px"}>
        <Heading as={"h1"} px={[3, 5]} mb={5}>
          {title}
        </Heading>
        {children}
      </Flex>
    </Center>
  );
};

export default SectionWrapper;
