// @ts-nocheck

import { HStack, Circle, Box, Image, Flex, Center } from '@chakra-ui/react';
import React, { Component, FC, useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';

const PrevArrow = ({ onClick }: { onClick?: any }) => {
  return (
    <Circle
      size={{ md: '48px', base: '40px' }}
      bgColor={'#FFFFFF !important'}
      as={'button'}
      onClick={onClick}
      className={'slick-prev'}
      style={{ left: '-50px' }}
      boxShadow={'0px 2px 20px rgba(0, 0, 0, 0.05)'}
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
      style={{ right: '-50px' }}
      boxShadow={'0px 2px 20px rgba(0, 0, 0, 0.05)'}
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

interface SlickCarouselProps {
  DATA: any[];
  setIsActive: any;
  isActive: number;
  [x: string]: any;
}

const SlickCarousel: FC<SlickCarouselProps> = (props) => {
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
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  function afterChangeHandler(currentSlide: any) {
    setIsActive(currentSlide);
  }

  return (
    <Box width={{ md: '272px', base: '178px' }} mb={'16px'} {...rest}>
      <Slider ref={carouselRef} {...settings} afterChange={afterChangeHandler}>
        {DATA.map((data, index) => (
          <Image src={data.imgPath} alt="carousel img" key={index} />
        ))}
      </Slider>
    </Box>
  );
};

export default SlickCarousel;
