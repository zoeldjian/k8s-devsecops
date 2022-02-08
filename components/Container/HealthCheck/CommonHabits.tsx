import { FC, useState } from 'react';
import { Circle, Flex, Image, Text, Box } from '@chakra-ui/react';
import { FourthHeadline, SecondaryHeadline } from 'components/Texts';
import { COMMON_HABITS_DATA as DATA } from 'constants/HealthCheck';
import { CommonHabitsCarousel } from 'components/Carousel/HeakthCheck';

export const CommonHabits: FC<ContainerProps> = (props) => {
  const { ...rest } = props;
  const [stateActive, setStateActive] = useState<number>(0);
  function nextImg() {
    setStateActive(stateActive === 0 ? DATA[DATA.length - 1]!.index : stateActive - 1);
  }
  function prevImg() {
    setStateActive(stateActive === DATA[DATA.length - 1]!.index ? 0 : stateActive + 1);
  }

  return (
    <Flex
      flexDir={'column'}
      alignItems={'center'}
      justifyContent={'flex-start'}
      width={'100%'}
      {...rest}
    >
      <SecondaryHeadline
        color={'sirkaPrimary.500'}
        mb={{ md: '40px', base: '20px' }}
        textAlign={{ base: 'center', md: 'start' }}
      >
        3 Common Habits That We Often Do
      </SecondaryHeadline>
      <Flex
        flexDir={{ md: 'row', base: 'column' }}
        alignItems={'center'}
        justifyContent={'flex-start'}
        width={'100%'}
      >
        <CommonHabitsCarousel isActive={stateActive} setIsActive={setStateActive} DATA={DATA} />
        <Flex
          flexDir={'row'}
          alignSelf={{ md: 'flex-end', base: 'flex-start' }}
          mb={'28px'}
          mt={'21px'}
          width={'100%'}
          display={{ base: 'flex', md: 'none' }}
        >
          <Circle
            size={{ md: '48px', base: '24px' }}
            mr={'16px'}
            as="button"
            onClick={() => nextImg()}
          >
            <Image src="/referral/icons/ChevronLeft.svg" alt="button left" />
          </Circle>
          <Circle size={{ md: '48px', base: '24px' }} as="button" onClick={() => prevImg()}>
            <Image src="/referral/icons/ChevronRight.svg" alt="button right" />
          </Circle>
        </Flex>
        <Flex
          width={{ md: '40%' }}
          minH={{ md: '380px' }}
          flexDir={'column'}
          alignItems={'flex-start'}
          ml={{ md: '72px' }}
        >
          {DATA.filter((dataFiltered) => dataFiltered.index === stateActive).map((data) => (
            <Box key={data.index}>
              <FourthHeadline display={{ md: 'flex', base: 'none' }} color={'#000000'} mb={'16px'}>
                {data.title}
              </FourthHeadline>
              <FourthHeadline
                display={{ md: 'none', base: 'flex' }}
                color={'sirkaPrimary.500'}
                mb={'16px'}
              >
                {data.title}
              </FourthHeadline>

              <Text
                fontWeight={'500'}
                fontSize={{ md: '16px', base: '14px' }}
                lineHeight={{ md: '24px', base: '21px' }}
                mb={{ md: '72px', base: '24px' }}
              >
                {data.desc}
              </Text>
              <Text fontWeight={700} fontSize={'12px'} lineHeight={'20px'}>
                Source
              </Text>
              <Text fontWeight={400} fontSize={'12px'} lineHeight={'20px'}>
                {data.source}
              </Text>
            </Box>
          ))}
        </Flex>
      </Flex>
      <Flex
        flexDir={'row'}
        alignSelf={{ md: 'flex-end', base: 'flex-start' }}
        mt={{ md: '21px', base: '28px' }}
        width={'55%'}
        display={{ base: 'none', md: 'flex' }}
      >
        <Circle
          size={{ md: '30px', base: '40px' }}
          mr={'16px'}
          as="button"
          onClick={() => nextImg()}
        >
          <Image src="/referral/icons/ChevronLeft.svg" alt="button left" />
        </Circle>
        <Circle size={{ md: '30px', base: '40px' }} as="button" onClick={() => prevImg()}>
          <Image src="/referral/icons/ChevronRight.svg" alt="button right" />
        </Circle>
      </Flex>
    </Flex>
  );
};
