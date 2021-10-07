import { Flex, Text } from "@chakra-ui/react";
import { useBreakpointValue } from '@chakra-ui/media-query';

interface ContinentBannerProps {
    name: string;
    image: string;
}

export function ContinentBanner({ name, image }: ContinentBannerProps) {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    });

    return (
        <Flex
            w="100%"
            minH={["44", "500px"]}
            m="auto"
            backgroundImage={image}
            backgroundRepeat="no-repeat"
            backgroundSize="100%"
            align="end"
        >
            <Text
                fontSize="4xl"
                fontWeight="medium"
                color="gray.50"
                marginBottom="0"
                paddingBottom="10"
                paddingLeft="20"
            >
                {name}
            </Text>
        </Flex>
    )
}