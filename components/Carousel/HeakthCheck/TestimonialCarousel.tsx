// @ts-nocheck

import { HStack, Circle, Box, Image, Flex, Center, useBreakpointValue } from '@chakra-ui/react';
import { TestimonialBox } from 'components/Others';
import React, { Component, FC, useEffect, useRef, useState } from 'react';
import { FaBoxOpen } from 'react-icons/fa';
import Slider from 'react-slick';

interface SlickCarouselProps {
  DATA: any[];
  setIsActive: any;
  isActive: number;
  [x: string]: any;
}

export const TestimonialCarousel: FC<SlickCarouselProps> = (props) => {
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
    slidesToShow: 2.4,
    centerMode: true,
    slidesToScroll: 1,
    cssEase: 'linear',
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
    <Box w={{ md: '100%', base: '100%' }} h={{ md: '320px', base: '100%' }} {...rest}>
      <Slider ref={carouselRef} {...settings} afterChange={afterChangeHandler}>
        {DATA.map((data, index) => (
          <Box h={{ md: '330px', base: '100%' }} ml={{ md: '120px', base: '0px' }} key={index}>
            <TestimonialBox data={data} />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};
