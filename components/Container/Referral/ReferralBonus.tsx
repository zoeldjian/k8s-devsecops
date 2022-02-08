import { Flex, Text, Circle, Image, VStack } from '@chakra-ui/react';
import { SecondaryHeadline } from 'components/Texts';
import { FC } from 'react';

const BONUS_CONTENT = [
  'Dapatkan bonus sebesar Rp 100,000 dengan mengajak minimal 2 teman (tidak boleh kurang).',
  'Hadiah berlaku kelipatan (4, 6, 8 teman dan seterusnya).',
  'Uang dapat dicairkan ke rekening bank kamu setiap tanggal 14 dan tanggal 28 di setiap bulannya.',
];

export const ReferralBonus: FC<ContainerProps> = (props) => {
  const { ...rest } = props;
  return (
    <Flex
      flexDir={{ md: 'row', base: 'column' }}
      width={'100%'}
      justifyContent={'space-between'}
      alignItems={'center'}
      {...props}
    >
      <Image
        src="/referral/images/bonus.png"
        minW={{ md: '648px', base: '390px' }}
        height={{ md: '400px', base: '240px' }}
        borderRadius={'20px'}
        ml={{ md: '-55px', base: '-30px' }}
        mb={{ md: '0px', base: '16px' }}
      />
      <Flex
        flexDir={'column'}
        w={{ md: '54%', base: '100%' }}
        height={{ md: '480px', base: '100%' }}
        justifyContent={'center'}
        alignItems={{ md: 'flex-start', base: 'center' }}
        px={{ md: '0px', base: '16px' }}
      >
        <SecondaryHeadline
          color={'sirkaPrimary.500'}
          mb={{ md: '32px', base: '24px' }}
          textAlign={{ md: 'start', base: 'center' }}
        >
          Bonus Menarik!
        </SecondaryHeadline>
        <VStack
          spacing={'24px'}
          display={'flex'}
          alignItems={'flex-start'}
          maxW={{ md: '90%', base: '100%' }}
        >
          {BONUS_CONTENT.map((bonus, index) => (
            <Flex
              flexDir={'row'}
              alignItems={'flex-start'}
              justifyContent={'flex-start'}
              key={index}
            >
              <Circle
                size={{ md: '10px', base: '6px' }}
                bgColor={'sirkaSecondary.500'}
                mr={{ md: '12px', base: '6px' }}
              />
              <Text
                fontWeight={'500'}
                fontSize={{ md: '20px', base: '16px' }}
                lineHeight={{ md: '32px', base: '24px' }}
                color={'sirkaBlack.800'}
                mt={{ md: '-10px', base: '-8px' }}
              >
                {bonus}
              </Text>
            </Flex>
          ))}
        </VStack>
      </Flex>
    </Flex>
  );
};
