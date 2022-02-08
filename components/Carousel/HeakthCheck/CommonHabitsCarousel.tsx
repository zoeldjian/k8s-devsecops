// @ts-nocheck

import { HStack, Circle, Box, Image, Flex, Center, useBreakpointValue } from '@chakra-ui/react';
import React, { Component, FC, useEffect, useRef, useState } from 'react';
import { FaBoxOpen } from 'react-icons/fa';
import Slider from 'react-slick';

interface SlickCarouselProps {
  DATA: any[];
  setIsActive: any;
  isActive: number;
  [x: string]: any;
}

export const CommonHabitsCarousel: FC<SlickCarouselProps> = (props) => {
  const { DATA, setIsActive, isActive, ...rest } = props;
  const carouselRef = useRef(null);
  useEffect(() => {
    if (carouselRef.current?.slickGoTo) {
      carouselRef.current.slickGoTo(isActive);
    }
    setTimeout(() => 500);
  }, [isActive]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1.15,
    centerMode: true,
    slidesToScroll: 1,
    cssEase: 'linear',
    rtl: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  function afterChangeHandler(currentSlide: any) {
    setIsActive(currentSlide);
  }

  return (
    <Box w={{ md: '50%', base: '100%' }} h={{ md: '452px', base: '296px' }}>
      <Slider ref={carouselRef} {...settings} afterChange={afterChangeHandler}>
        {DATA.map((data, index) => (
          <Box
            w={{ md: '496px', base: '100%' }}
            h={{ md: '452px', base: '296px' }}
            ml={{ md: '210px', base: '0px' }}
            px={{ base: '1px', md: '10px' }}
            key={index}
          >
            <Image src={data.imgPath} alt="carousel img" opacity={isActive !== index ? 0.6 : 1} />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};
