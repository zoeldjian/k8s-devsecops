import { Flex, Box, Image, Text, HStack } from '@chakra-ui/react';
import { NextButton, PrevButton } from 'components/Buttons';
import { TestimonialCarousel } from 'components/Carousel/HeakthCheck';
import { SecondaryHeadline } from 'components/Texts';
import { FC, useState } from 'react';
import { TESTIMONIAL_DATA as DATA } from 'constants/HealthCheck';

export const Testimonial: FC<ContainerProps> = (props) => {
  const { ...rest } = props;
  const [stateActive, setStateActive] = useState<number>(0);

  return (
    <Flex flexDir={{ md: 'row', base: 'column' }} alignItems={'center'} width={'100%'} {...rest}>
      <Flex
        flexDir={{ md: 'column', base: 'row' }}
        width={{ md: '20%', base: '100%' }}
        justifyContent={{
          md: 'center',
          base: 'space-between',
        }}
        alignItems={{ md: 'flex-start', base: 'center' }}
        mb={{ base: '27px', md: '0px' }}
      >
        <SecondaryHeadline
          color={'sirkaPrimary.500'}
          mb={{ md: '16px', base: '0px' }}
          mt={{ md: '20px', base: '0px' }}
        >
          Testimonial
        </SecondaryHeadline>
        <HStack spacing={'8px'}>
          <PrevButton
            lastIndex={DATA.length}
            stateActive={stateActive}
            setStateActive={setStateActive}
            size={{ md: '32px', base: '32px' }}
            border={'1px solid #FF6112'}
          />
          <NextButton
            lastIndex={DATA.length}
            stateActive={stateActive}
            setStateActive={setStateActive}
            size={{ md: '32px', base: '32px' }}
            border={'1px solid #FF6112'}
          />
        </HStack>
      </Flex>
      <Flex flexDir={'row'} width={{ md: '80%', base: '100%' }}>
        <TestimonialCarousel isActive={stateActive} setIsActive={setStateActive} DATA={DATA} />
      </Flex>
    </Flex>
  );
};
