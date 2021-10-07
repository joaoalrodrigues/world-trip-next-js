import { Flex, Image, Text } from "@chakra-ui/react";

interface TripTypeProps {
    title: string;
    icon: string;
}

export function TripType({ title, icon }: TripTypeProps) {
    return (
        <Flex
            direction="column"
        >
            <Image src={icon} alt={title} h="20" />
            <Text pt="4" fontWeight="semibold">{title}</Text>
        </Flex>
    );
}