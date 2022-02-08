import { Flex, Circle, Text, Image, useBreakpointValue, HStack } from '@chakra-ui/react';
import { SecondaryHeadline } from 'components/Texts';
import { FC, MutableRefObject, useEffect, useRef, useState } from 'react';

export const ReferralFooter: FC<ContainerProps> = (props) => {
  const { ...rest } = props;
  const [isShown, setIsShown] = useState(false);
  const [hoverState, setHoverState] = useState<number>(0);
  function hoverEnter(index: number) {
    setIsShown(true);
    setHoverState(index);
  }

  const ICONS = [
    {
      name: 'Email',
      src: '/referral/icons/email.svg',
      srcHover: '/referral/icons/email-white.svg',
      href: 'mailto:contact@sirka.io',
    },
    {
      name: 'FAQ',
      src: '/referral/icons/faq.svg',
      srcHover: '/referral/icons/faq-white.svg',
      href: 'https://sirka.io/faq',
    },
    {
      name: 'Tentang Sirka',
      src: '/referral/icons/about.svg',
      srcHover: '/referral/icons/about-white.svg',
      href: 'https://sirka.io/tentang-kami',
    },
  ];

  return (
    <Flex
      flexDir={{ md: 'row', base: 'column' }}
      alignItems={{ md: 'center', base: 'flex-start' }}
      justifyContent={'space-between'}
      bgColor={'sirkaSoftOrange.100'}
      borderRadius={'0px 100px 0px 0px'}
      width={'100%'}
      height={{ md: '245px', base: '345px' }}
      {...rest}
    >
      {/* Desktop view image */}
      <Image
        ml={'-10px'}
        mt={'0px'}
        display={{ md: 'flex', base: 'none' }}
        src={'/referral/images/footer.png'}
        minWidth={'398px'}
        minHeight={'333px'}
        alt="referral footer"
      />
      {/* Mobile view image */}
      <Image
        ml={'14px'}
        mt={'-100px'}
        display={{ md: 'none', base: 'flex' }}
        src={'/referral/images/footer-mobile.svg'}
        minWidth={'169px'}
        minHeight={'174px'}
        alt="referral footer"
      />
      <Flex
        flexDir={'column'}
        alignItems={'flex-start'}
        justifyContent={'flex-start'}
        maxW={{ md: '334px', base: '100%' }}
        px={{ md: '0px', base: '16px' }}
      >
        <SecondaryHeadline color={'sirkaPrimary.500'} mb={{ md: '12px', base: '10px' }}>
          Ada pertanyaan?
        </SecondaryHeadline>
        <Text
          color={'sirkaBlack.600'}
          fontWeight={{ md: '500', base: '300' }}
          fontSize={{ md: '20px', base: '14px' }}
          lineHeight={{ md: '32px', base: '21px' }}
        >
          Kami siap menjawab semua pertanyaanmu.
        </Text>
      </Flex>
      <HStack
        pb={{ md: '0px', base: '40px' }}
        minW={{ md: '250px', base: '100%' }}
        px={{ md: '0px', base: '16px' }}
        pr={{ md: '120px', base: '0px' }}
        spacing={{ md: '80px', base: '40px' }}
      >
        {ICONS.map((icon, index) => (
          <Flex
            flexDir={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            color={'#000000'}
            _hover={{
              color: 'sirkaPrimary.500',
            }}
            key={index}
            onMouseEnter={() => hoverEnter(index)}
            onMouseLeave={() => setIsShown(false)}
          >
            <a href={icon.href} target={'_blank'} rel="noreferrer">
              <Circle
                as={'button'}
                size={'60px'}
                bgColor={'sirkaSoftOrange.300'}
                mb={'8px'}
                _hover={{
                  bgColor: '#FF6112',
                }}
              >
                <Image
                  src={isShown && hoverState === index ? icon.srcHover : icon.src}
                  alt="icon img"
                />
              </Circle>
            </a>
            <Text fontWeight={'600'} fontSize={'14px'} lineHeight={'17px'}>
              {icon.name}
            </Text>
          </Flex>
        ))}
      </HStack>
    </Flex>
  );
};
