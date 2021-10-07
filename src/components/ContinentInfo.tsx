import { HStack, VStack, Text } from "@chakra-ui/react";

interface ContinentInfoProps {
    countries_number: number;
    languages_number: number;
    cities_number: number;
}

export function ContinentInfo({ countries_number, languages_number, cities_number }: ContinentInfoProps) {

    return (
        <HStack spacing="12" m="auto">
            <VStack spacing="2">
                <Text color="yellow" fontSize="48px" fontWeight="600">{countries_number}</Text>
                <Text color="gray.400" fontSize="24px" fontWeight="600">países</Text>
            </VStack>
            <VStack spacing="2">
                <Text color="yellow" fontSize="48px" fontWeight="600">{languages_number}</Text>
                <Text color="gray.400" fontSize="24px" fontWeight="600">línguas</Text>
            </VStack>
            <VStack spacing="2">
                <Text color="yellow" fontSize="48px" fontWeight="600">{cities_number}</Text>
                <Text color="gray.400" fontSize="24px" fontWeight="600">cidades +100</Text>
            </VStack>
        </HStack>
    );
}