import { Flex, Image } from "@chakra-ui/react";
import Link from 'next/link';

export function Header() {
    return (
        <Flex
            as="header"
            w="100%"
            maxW={1400}
            h="20"
            mx="auto"
            my="4"
            px="6"
            align="center"
            justify="center"
        >
            <Link href="/" passHref>
                <a>
                    <Image src="/assets/Logo.svg" alt="logo" />
                </a>
            </Link>
        </Flex>
    );
}