import { Box } from '@chakra-ui/react';
import { TestimonialBox } from 'components/Others';

const Example = () => {
  return (
    <Box
      my={{ md: '200px', base: '100px' }}
      ml={{ md: '200px', base: '0px' }}
      alignItems={'center'}
      display={'flex'}
      justifyContent={'center'}
      height={'2000px'}
    >
      {/* <TestimonialBox /> */}
    </Box>
  );
};
export default Example;
