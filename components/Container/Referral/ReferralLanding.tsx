import { Flex, Image } from '@chakra-ui/react';
import { HeadlineText } from 'components/Texts';
import { FC } from 'react';

export const ReferralLanding: FC<ContainerProps> = (props) => {
  const { ...rest } = props;
  return (
    <Flex flexDir={{ base: 'column-reverse', md: 'row' }} width={'100%'} {...rest}>
      <Flex
        flexDir={'column'}
        justifyContent={'center'}
        alignItems={{ md: 'center', base: 'flex-start' }}
        backgroundColor="sirkaPrimary.500"
        height={{ md: '720px', base: '170px' }}
        borderRadius={{ base: '0px 0px 0px 30px', md: '0px 0px 0px 100px' }}
        width={{ md: '50%', base: '100%' }}
        px={{ md: '0px', base: '16px' }}
      >
        <HeadlineText
          width={{ md: '75%', base: '100%' }}
          headLineFontSize={{ base: '28px', md: '48px' }}
          titleColor={'white'}
          descColor="white"
          descFontSize={{ md: '20px', base: '16px' }}
          mb={{ md: '14px', base: '8px' }}
          title="Referral Program Sirka"
          desc="Ajak teman untuk hidup sehat bersama Sirka dan dapatkan hadiahnya!"
        />
      </Flex>

      <Image
        src="/referral/images/landing.png"
        width={{ md: '50%', base: '100%' }}
        height={{ md: '750px', base: '280px' }}
        borderRadius={{ md: '0px 0px 0px 30px', base: '0px 0px 0px 0px' }}
        alt="Landing Referral"
        mt={{ base: '60px', md: '0px' }}
      />
    </Flex>
  );
};
