import { Flex, Image, Text } from '@chakra-ui/react';
import { OrangeButton } from 'components/Buttons';
import { MainHeadline } from 'components/Texts';

export const HealthCheckFooter = () => {
  return (
    <Flex
      flexDir={{ md: 'row', base: 'column' }}
      alignItems={'flex-start'}
      justifyContent={'flex-start'}
      bgColor={'sirkaSecondary.100'}
      width={'100%'}
      mt={{ md: '0px', base: '40px' }}
      height={{ md: '330px', base: '390px' }}
    >
      <Image
        alt="health check footer"
        src="/employee-health-check/images/health-check-footer.png"
        height={{ md: '330px', base: '175px' }}
        width={{ md: '648px', base: '100%' }}
      />
      <Flex
        flexDir={'column'}
        alignItems={'flex-start'}
        justifyContent={'center'}
        ml={{ md: '60px' }}
        py={{ md: '48px', base: '24px' }}
        maxW={{ md: '496px', base: '100%' }}
        px={{ md: '0px', base: '16px' }}
      >
        <MainHeadline color={'sirkaPrimary.500'}>Lets Get Started</MainHeadline>
        <Text
          fontSize={'16px'}
          lineHeight={'26px'}
          color={'#000000'}
          fontWeight={'400'}
          mt={{ md: '20px', base: '16px' }}
          mb={{ md: '40px', base: '24px' }}
        >
          And you&apos;ll get personalised diet plan by our Registered Dietitian/Nutritionist.
        </Text>
        <a href={'/employee-health-check/assessment'} rel="noreferrer">
          <OrangeButton
            width={{ md: '392px', base: '242px' }}
            height={{ md: '62px', base: '38px' }}
          >
            Get Your First Assessment
          </OrangeButton>
        </a>
      </Flex>
    </Flex>
  );
};
