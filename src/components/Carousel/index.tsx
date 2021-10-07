import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import Link from 'next/link';
import { Box } from '@chakra-ui/react';

import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/pagination"

import styles from './Carousel.module.css';

SwiperCore.use([Navigation, Pagination]);

interface Continent {
    id: string;
    name: string;
    title: string;
    image: string;
}

interface CarouselProps {
    continents: Continent[];
}

export function Carousel({ continents }: CarouselProps): JSX.Element {

    return (
        <Swiper
            navigation
            pagination
            className={styles.swiper}
        >
            {continents.map(continent =>
                <SwiperSlide key={continent.id}>
                    <Link href={`/continent/${continent.id}`} passHref>
                        <Box as="a" className={styles['swiper-slide']} >
                            <h1>{continent.name}</h1>
                            <span>{continent.title}</span>
                            <img src={continent.image} alt={continent.name} />
                        </Box>
                    </Link>
                </SwiperSlide >
            )}
        </Swiper >
    );
}
