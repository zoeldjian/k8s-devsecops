import { Box, Circle, Flex, HStack, Image, useDisclosure } from '@chakra-ui/react';
import { FC, useState } from 'react';
import { NEW_MEMBER_TUTORIAL_DATA as DATA } from 'constants/Referral';
import { SoftOrangeLongButton, WhiteLongButton } from 'components/Buttons';
import { FourthHeadline, SecondaryHeadline } from 'components/Texts';
import { keyframes } from '@chakra-ui/react';
import { Carousel } from 'components/Carousel';
import NewCarousel from 'components/Carousel/SlickCarousel';

export const NewMemberTutorial: FC<ContainerProps> = (props) => {
  const { ...rest } = props;
  const [isActive, setIsActive] = useState<number>(0);

  const MobileViewContent: FC<ContainerProps> = (props) => {
    const { ...rest } = props;
    return (
      <Flex
        width={'100%'}
        flexDir={'column'}
        alignItems={'center'}
        justifyContent={'flex-start'}
        {...rest}
      >
        <SecondaryHeadline
          color={'sirkaPrimary.500'}
          mb={'16px'}
          textAlign={'center'}
          width={'90%'}
        >
          Tutorial Bagi Pengguna Baru
        </SecondaryHeadline>
        <FourthHeadline
          color={'sirkaBlack.800'}
          mb={{ md: '60px', base: '24px' }}
          textAlign={'center'}
          width={'80%'}
        >
          Cara Menggunakan Kode Referral
        </FourthHeadline>
      </Flex>
    );
  };

  const DesktopViewContent: FC<ContainerProps> = (props) => {
    const { ...rest } = props;
    return (
      <Flex
        width={{ md: '55%', base: '100%' }}
        flexDir={'column'}
        alignItems={{ md: 'flex-start', base: 'center' }}
        justifyContent={'flex-start'}
        {...rest}
      >
        <SecondaryHeadline color={'sirkaPrimary.500'} mb={'16px'}>
          Tutorial Bagi Pengguna Baru
        </SecondaryHeadline>
        <FourthHeadline color={'sirkaBlack.800'} mb={{ md: '60px', base: '24px' }}>
          Cara Menggunakan Kode Referral
        </FourthHeadline>
        {DATA.map((data) => (
          <Flex
            key={data.index}
            flexDir={'row'}
            width={'100%'}
            justifyContent={'flex-start'}
            alignItems={'flex-start'}
          >
            <Box mr={'24px'}>
              <Circle
                size={'10px'}
                bgColor={data.index == isActive ? 'sirkaSecondary.500' : 'sirkaSecondary.300'}
                as={'button'}
              >
                {data.index === isActive && <Circle size={'24px'} border={'1px solid #5CA898'} />}
              </Circle>
              {data.index < DATA[DATA.length - 1].index && (
                <Box width={'1px'} height={'52px'} bgColor={'#5CA898'} ml={'4px'} />
              )}
            </Box>

            <SoftOrangeLongButton
              width={{ md: '548px', base: '100%' }}
              fontSize={{ md: '20px' }}
              mt={{ md: '-25px' }}
              index={data.index}
              isActive={data.index === isActive ? true : false}
              setIsActive={setIsActive}
            >
              {data.index + 1}. {data.content}
            </SoftOrangeLongButton>
          </Flex>
        ))}

        <Flex flexDir={'row'} mt={{ md: '60px', base: '24px' }}>
          <a href="https://sirka.page.link/sirka-apps" target={'_blank'} rel="noreferrer">
            <Image
              src="/referral/badges/apple-large.svg"
              alt="apple badge large"
              width={{ base: '122px', md: '226px' }}
              height={{ base: '40px', md: '72px' }}
              mr={{ md: '26px', base: '16px' }}
            />
          </a>
          <a href="https://sirka.page.link/sirka-apps" target={'_blank'} rel="noreferrer">
            <Image
              src="/referral/badges/google-play-large.svg"
              alt="Google play badge large"
              width={{ base: '122px', md: '226px' }}
              height={{ base: '40px', md: '72px' }}
            />
          </a>
        </Flex>
      </Flex>
    );
  };

  return (
    <Flex
      flexDir={{ md: 'row', base: 'column' }}
      alignItems={'flex-start'}
      justifyContent={'space-between'}
      bgColor={'white'}
      width={'100%'}
      px={{ md: '72px', base: '16px' }}
      py={{ md: '0px', base: '24px' }}
      {...rest}
    >
      <MobileViewContent display={{ md: 'none', base: 'flex' }} />

      <Flex
        width={{ md: '40%', base: '100%' }}
        flexDir={'column'}
        alignItems={'center'}
        minH={{ base: '520px' }}
      >
        <Carousel isActive={isActive} setIsActive={setIsActive} DATA={DATA} />

        <Flex
          minW={'100%'}
          bgColor={'sirkaSoftOrange.100'}
          p={{ base: '16px' }}
          borderRadius={'20px'}
          color={'#262626'}
          fontSize={'16px'}
          lineHeight={'24px'}
          fontWeight={'700'}
          display={{ md: 'none', base: 'flex' }}
        >
          {DATA.filter((dataFiltered) => dataFiltered.index === isActive).map((data) => (
            <Box key={data.index}>
              {data.index + 1}. {data.content}
            </Box>
          ))}
        </Flex>
        <Flex flexDir={'row'} mt={'24px'} display={{ md: 'none', base: 'flex' }}>
          <a href="https://sirka.page.link/sirka-apps" target={'_blank'} rel="noreferrer">
            <Image
              src="/referral/badges/apple-large.svg"
              alt="apple badge large"
              width={{ base: '122px', md: '226px' }}
              height={{ base: '40px', md: '72px' }}
              mr={{ md: '26px', base: '16px' }}
            />
          </a>
          <a href="https://sirka.page.link/sirka-apps" target={'_blank'} rel="noreferrer">
            <Image
              src="/referral/badges/google-play-large.svg"
              alt="Google play badge large"
              width={{ base: '122px', md: '226px' }}
              height={{ base: '40px', md: '72px' }}
            />
          </a>
        </Flex>
      </Flex>
      <DesktopViewContent display={{ md: 'flex', base: 'none' }} />
    </Flex>
  );
};
