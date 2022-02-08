import { Flex, VStack, Box } from '@chakra-ui/react';
import { HealthCheckLanding } from './HealthCheckLanding';
import { CommonHabits } from './CommonHabits';
import { HowItWorks } from './HowItWorks';
import { Testimonial } from './Testimonial';
import { HealthCheckFooter } from './HealthCheckFooter';

export const HealthCheck = () => {
  return (
    <Flex flexDir={'column'}>
      <HealthCheckLanding />
      <Box
        mt={{ md: '110px', base: '40px' }}
        pl={{ md: '0px', base: '16px' }}
        pr={{ md: '72px', base: '16px' }}
      >
        <CommonHabits />
      </Box>
      <VStack
        spacing={{ md: '110px', base: '40px' }}
        my={{ md: '110px', base: '40px' }}
        pr={{ md: '0px', base: '16px' }}
        pl={{ md: '72px', base: '16px' }}
      >
        <HowItWorks />
        <Testimonial />
      </VStack>
      <HealthCheckFooter />
    </Flex>
  );
};
