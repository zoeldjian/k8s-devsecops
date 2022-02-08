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

const PrevArrow = ({ onClick }: { onClick?: any }) => {
  return (
    <Circle
      size={{ md: '48px', base: '40px' }}
      bgColor={'#FFFFFF !important'}
      as={'button'}
      onClick={onClick}
      className={'slick-prev'}
      left={{ md: '-20px', base: '-12px' }}
      boxShadow={'0px 2px 20px rgba(0, 0, 0, 0.05)'}
      zIndex={'29'}
    >
      <Image
        src="/referral/icons/ChevronLeft.svg"
        alt="prev img"
        marginLeft={'-24px'}
        zIndex={'30'}
      />
    </Circle>
  );
};

const NextArrow = ({ onClick }: { onClick?: any }) => {
  return (
    <Circle
      size={{ md: '48px', base: '40px' }}
      bgColor={'#FFFFFF !important'}
      as={'button'}
      onClick={onClick}
      className={'slick-next'}
      right={{ md: '32px', base: '-10px' }}
      boxShadow={'0px 2px 20px rgba(0, 0, 0, 0.05)'}
      zIndex={'29'}
    >
      <Image
        src="/referral/icons/ChevronRight.svg"
        alt="next img"
        marginLeft={'-18px'}
        zIndex={'30'}
      />
    </Circle>
  );
};

export const HowItWorksCarousel: FC<SlickCarouselProps> = (props) => {
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
    slidesToShow: 1,
    centerMode: false,
    slidesToScroll: 1,
    cssEase: 'linear',
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  function afterChangeHandler(currentSlide: any) {
    setIsActive(currentSlide);
  }

  return (
    <Box w={{ md: '100%', base: '100%' }} h={{ md: '473px', base: '248px' }} {...rest}>
      <Slider ref={carouselRef} {...settings} afterChange={afterChangeHandler}>
        {DATA.map((data, index) => (
          <Box
            w={{ md: '496px', base: '100%' }}
            h={{ md: '473px', base: '248px' }}
            px={{ base: '1px', md: '0px' }}
            key={index}
          >
            <Image src={data.imgPath} alt="carousel img" />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};
