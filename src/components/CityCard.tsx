import { Box, Flex, VStack, Image, Text, Avatar } from "@chakra-ui/react";

interface City {
    name: string;
    country: string;
    image: string;
    flag: string;
}

interface CityCardProps {
    city: City;
}

export function CityCard({ city }: CityCardProps) {
    return (
        <Box
            w="64"
            h="80"
            border="2px"
            borderColor="yellow"
            boxShadow="sm"
        >
            <Image
                src={city.image}
                alt={city.name}
                h="173px"
                w="100%"
                m="0"
                p="0"
            />

            <Flex
                m="autor"
                p="5"
                align="center"
                justify="center"
            >
                <VStack
                    spacing="3"
                    w="80%"
                    align="flex-start"
                    fontStyle="Barlow"
                >
                    <Text color="gray.400" fontWeight="600" fontSize="20px">{city.name}</Text>
                    <Text color="gray.200" fontWeight="500" fontSize="16px">{city.country}</Text>
                </VStack>

                <Avatar
                    align="center"
                    size="sm"
                    src={city.flag}
                />
            </Flex>

        </Box >
    );
}