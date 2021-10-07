import { SwiperSlide } from 'swiper/react';

import styles from './Carousel.module.css';


interface CarouselItemProps {
    image: string;
    title: string;
    subtitle: string;
}

export function CarouselItem({ image, title, subtitle }: CarouselItemProps) {
    return (
        <SwiperSlide className={styles['swiper-slide']}>
            {title}
            {subtitle}

            <img src={image} alt={title} />
        </SwiperSlide >
    );
}