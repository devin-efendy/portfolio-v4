import { Box, Center, Divider, Flex, Heading } from "@chakra-ui/react";
import { IExperience } from "../../types";
import Experience from "../molecules/Experience";

interface Props {
  experience: Array<IExperience>;
}
const WorkExperience = ({ experience }: Props) => {
  return (
    <Center className={"work-experience--section"} my={"150px"} mx={"30px"}>
      <Flex flexDirection={"column"} maxWidth={"1000px"}>
        <Heading as={"h1"} px={[3, 5]} mb={5}>
          Work Experience 👨‍💻
        </Heading>
        {experience.map((exp) => (
          <Experience key={exp.id} {...exp} />
        ))}
      </Flex>
    </Center>
  );
};

export default WorkExperience;
