import { Flex, VStack, Text, Image, Box } from "@chakra-ui/react";
import { useBreakpointValue } from '@chakra-ui/media-query';

export function Banner() {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    });

    return (
        <Flex
            w="100%"
            minH={["44", "80"]}
            mx="0"
            backgroundImage="/img/banner.png"
        >
            <VStack
                spacing="4"
                align="flex-start"
                paddingLeft={["4", "40"]}
                py={["6", "20"]}
            >
                <Text
                    fontSize={["20px", "36px"]}
                    fontWeight="medium"
                    color="white"
                >
                    5 Continentes,
                    <Text>infinitas possibilidades.</Text>
                </Text>
                <Text
                    w={["100%", "524px"]}
                    fontSize={["14px", "20px"]}
                    fontWeight="400"
                    lineHeight="30px"
                    color="gray.100"
                >
                    Chegou a hora de tirar do papel a viagem que você sempre sonhou.
                </Text>
            </VStack>

            {isWideVersion &&
                <Box m="auto" marginBottom="-8">
                    <Image src="/assets/airplane.svg" alt="airplane" w="96" transform="rotate(3deg)" />
                </Box>
            }
        </Flex>
    )
}