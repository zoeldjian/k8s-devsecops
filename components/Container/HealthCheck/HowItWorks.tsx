import { HOW_IT_WORKS_DATA as DATA } from 'constants/HealthCheck';
import { Flex, Box, Image, Text, Circle, HStack } from '@chakra-ui/react';
import { SecondaryHeadline } from 'components/Texts';
import { useState } from 'react';
import { DefaultLongButton, NextButton, PrevButton, SliderButton } from 'components/Buttons';
import { HowItWorksCarousel } from 'components/Carousel/HeakthCheck';

export const HowItWorks = () => {
  const [stateActive, setStateActive] = useState<number>(0);

  return (
    <Flex flexDir={{ md: 'row', base: 'column-reverse' }} width={'100%'} alignItems={'center'}>
      <Flex flexDir={'column'} width={{ md: '50%', base: '100%' }} minH={{ md: '363px' }}>
        <SecondaryHeadline color={'sirkaPrimary.500'} mb={{ md: '28px', base: '24px' }}>
          How It Works
        </SecondaryHeadline>
        {DATA.map((data) => (
          <Flex
            key={data.index}
            flexDir={'row'}
            width={'100%'}
            justifyContent={'flex-start'}
            alignItems={'flex-start'}
            ml={{ md: '8px', base: '2px' }}
          >
            <Box mr={{ md: '20px', base: '10px' }}>
              <Circle
                size={'10px'}
                bgColor={data.index == stateActive ? 'sirkaSecondary.500' : 'sirkaSecondary.300'}
                as={'button'}
                onClick={() => (data.index !== stateActive ? setStateActive(data.index) : '')}
              >
                {data.index === stateActive && (
                  <Circle size={'24px'} border={'1px solid #5CA898'} />
                )}
              </Circle>
              {data.index < DATA[DATA.length - 1].index && (
                <Box
                  width={'1px'}
                  height={{
                    md:
                      data.index === 0
                        ? stateActive === 0
                          ? '100px'
                          : '60px'
                        : data.index === 2
                        ? '70px'
                        : '60px',
                    base:
                      data.index === 0
                        ? stateActive === 0
                          ? '120px'
                          : '47px'
                        : data.index === 2
                        ? '70px'
                        : '47px',
                  }}
                  bgColor={'#5CA898'}
                  ml={'4px'}
                />
              )}
            </Box>
            <Box>
              <DefaultLongButton
                width={{ md: '556px', base: '100%' }}
                fontSize={{ md: '20px' }}
                mt={{ md: '-26px', base: '-23px' }}
                height={{
                  md: data.index === 2 ? '85px' : '62px',
                  base: data.index === 2 ? '85px' : '62px',
                }}
                index={data.index}
                isActive={data.index === stateActive ? true : false}
                setIsActive={setStateActive}
                content={data.content}
              >
                {data.title}
              </DefaultLongButton>
            </Box>
          </Flex>
        ))}
      </Flex>
      <Flex
        flexDir={'column'}
        alignItems={'center'}
        justifyContent={'center'}
        width={{ md: '50%', base: '100%' }}
        ml={{ md: '110px' }}
      >
        <Box width={'100%'}>
          <HowItWorksCarousel setIsActive={setStateActive} isActive={stateActive} DATA={DATA} />
        </Box>
        <SliderButton
          mt={{ md: '24px', base: '8px' }}
          mb={{ md: '0px', base: '24px' }}
          stateActive={stateActive}
          setStateActive={setStateActive}
          DATA={DATA}
        />
      </Flex>
    </Flex>
  );
};
