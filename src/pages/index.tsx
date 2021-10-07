import { Box, Flex, HStack, Divider, Text } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { TripType } from "../components/TripType";
import { Carousel } from "../components/Carousel";
import { GetStaticProps } from "next";
import { api } from "../services/api";
import { useEffect, useState } from "react";

interface Continent {
    id: string;
    name: string;
    title: string;
    image: string;
}

interface HomeProps {
    continentsList: Continent[];
}

export default function Home({ continentsList }: HomeProps) {
    const [continents, setContinents] = useState<Continent[]>(continentsList);

    useEffect(() => {
        setContinents(continentsList);
    }, [continentsList]);

    return (
        <Box>
            <Header />

            <Banner />

            <HStack
                spacing="40"
                display="flex"
                justify="center"
                py="20"
            >
                <TripType title="vida noturna" icon="/assets/drink.svg" />
                <TripType title="praia" icon="/assets/beach.svg" />
                <TripType title="moderno" icon="/assets/building.svg" />
                <TripType title="clássico" icon="/assets/museum.svg" />
                <TripType title="e mais..." icon="/assets/earth.svg" />
            </HStack>

            <Divider w="20" m="auto" borderBottom="2px" />

            <Flex
                direction="column"
                align="center"
                m="auto"
                pt="20"
                fontSize="2xl"
                fontWeight="medium"
            >
                <Text>Vamos nessa?</Text>
                <Text>Então escolha seu continente</Text>
            </Flex>

            <Flex
                w={["100%", "85%"]}
                m="auto"
                py={["10", "20"]}
            >
                <Carousel continents={continents} />
            </Flex>

        </Box >
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const result = await api.get<Continent[]>('continent');

    return {
        props: {
            continentsList: result.data
        },
        revalidate: 60 * 60 * 24 // 24 hours
    }
};