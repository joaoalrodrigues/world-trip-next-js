import { Box, SimpleGrid, Flex, HStack, Text } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { CityCard } from "../../components/CityCard";
import { ContinentBanner } from "../../components/ContinentBanner";
import { ContinentInfo } from "../../components/ContinentInfo";
import { Header } from "../../components/Header";
import { api } from "../../services/api";

interface City {
    name: string;
    country: string;
    image: string;
    flag: string;
}

interface Continent {
    id: string;
    name: string;
    description: string;
    cities: City[];
    image: string;
    countries_number: number;
    languages_number: number;
}

interface ContinentProps {
    continent: Continent;
}

export default function Continent({ continent }: ContinentProps) {
    return (
        <Box>
            <Header />

            <ContinentBanner name={continent.name} image={continent.image} />

            <Box mx="20" >
                <SimpleGrid minChildWidth="50%">
                    <Text align="justify" py="14">{continent.description}</Text>

                    <ContinentInfo
                        cities_number={continent.cities.length}
                        countries_number={continent.countries_number}
                        languages_number={continent.languages_number}
                    />

                </SimpleGrid>

                <Box display="block" mb="20">
                    <Text fontSize="36px" fontWeight="500">Cidades +100</Text>

                    <HStack spacing="12" mt="10">
                        {continent.cities.map(city =>
                            <CityCard city={city} key={city.name} />
                        )}
                    </HStack>
                </Box>
            </Box>

        </Box>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const result = await api.get<Continent[]>('continent');

    const paths = result.data.map(continent => {
        return {
            params: {
                id: continent.id,
            },
        };
    });

    return {
        paths,
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const result = await api.get<Continent>(`continent/${params.id}`);

    return {
        props: {
            continent: result.data
        },
        revalidate: 60 * 60 * 24 // 24 hours
    }
};