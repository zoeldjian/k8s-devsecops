import { Flex, Image } from '@chakra-ui/react';
import { WhiteButton } from 'components/Buttons/WhiteButton';
import { HeadlineText } from 'components/Texts';
import { FC } from 'react';

export const HealthCheckLanding: FC<ContainerProps> = (props) => {
  const { ...rest } = props;
  return (
    <Flex flexDir={{ base: 'column-reverse', md: 'row' }} width={'100%'} {...rest}>
      <Flex
        flexDir={'column'}
        justifyContent={'center'}
        alignItems={{ md: 'center', base: 'flex-start' }}
        backgroundColor="sirkaPrimary.500"
        height={{ md: '690px', base: '230px' }}
        borderRadius={{ base: '0px 0px 0px 30px', md: '0px 0px 0px 100px' }}
        width={{ md: '50%', base: '100%' }}
        px={{ md: '0px', base: '16px' }}
        pt={{ md: '0px', base: '16px' }}
        pb={{ md: '0px', base: '24px' }}
      >
        <Flex flexDir={'column'} width={{ md: '70%', base: '100%' }}>
          <HeadlineText
            headLineFontSize={{ base: '28px', md: '48px' }}
            descFontSize={{ base: '16px', md: '20px' }}
            titleColor={'white'}
            descColor="white"
            spacing={{ md: '12px', base: '8px' }}
            mb={{ md: '24px', base: '24px' }}
            title="Become The Better Version Of Yourself"
            desc="Being health is one of the best investments for your life"
          />
          <a href={'/employee-health-check/assessment'} rel="noreferrer">
            <WhiteButton
              width={{ md: '392px', base: '242px' }}
              height={{ md: '60px', base: '38px' }}
            >
              Get Your First Assessment
            </WhiteButton>
          </a>
        </Flex>
      </Flex>

      <Image
        src="/employee-health-check/images/landing.png"
        width={{ md: '50%', base: '100%' }}
        height={{ md: '720px', base: '280px' }}
        borderRadius={{ md: '0px 0px 0px 30px', base: '0px 0px 0px 0px' }}
        alt="Landing Referral"
        mt={{ base: '60px', md: '0px' }}
      />
    </Flex>
  );
};
