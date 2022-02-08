import { Flex, Text, Circle, Image } from '@chakra-ui/react';
import { SecondaryHeadline } from 'components/Texts';
import { FC } from 'react';

export const ReferralOffer: FC<ContainerProps> = (props) => {
  const { ...rest } = props;
  return (
    <Flex
      flexDir={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      pt={{ md: '34px', base: '16px' }}
      pb={{ md: '34px', base: '28px' }}
      px={{ md: '0px', base: '16px' }}
      bgColor={'sirkaSecondary.100'}
      borderRadius={'20px'}
      w={'100%'}
      {...rest}
    >
      <Circle size={{ md: '90px', base: '60px' }} bg={'white'}>
        <Image src="/referral/icons/gift.svg" boxSize={{ md: '52px', base: '36px' }} />
      </Circle>
      <SecondaryHeadline color={'sirkaPrimary.500'} mt={'27px'} mb={'18px'} textAlign={'center'}>
        Apa itu Referral Program Sirka?
      </SecondaryHeadline>
      <Text
        fontWeight={500}
        fontSize={{ md: '20px', base: '16px' }}
        lineHeight={{ md: '32px', base: '24px' }}
        textAlign={'center'}
        color={'sirkaBlack.800'}
        maxW={'1021px'}
      >
        Program dimana kamu bisa mendapatkan bonus (
        <span style={{ fontStyle: 'italic' }}>cash</span>) dengan mengajak teman untuk ikut Program
        Diet Sirka selama 3 atau 6 bulan.
      </Text>
    </Flex>
  );
};
