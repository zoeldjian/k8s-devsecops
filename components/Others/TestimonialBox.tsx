import { Box, Flex, HStack, Image, Text } from '@chakra-ui/react';
import { FourthHeadline } from 'components/Texts';
import { FC } from 'react';

interface TestimonialBoxProps extends ContainerProps {
  data: {
    index: number;
    name: string;
    title: string;
    stars: number;
    imgPath: string;
    content: string;
  };
}

export const TestimonialBox: FC<TestimonialBoxProps> = (props) => {
  const { data, ...rest } = props;
  return (
    <Flex
      flexDir={'column'}
      alignItems={'flex-start'}
      justifyContent={'space-between'}
      width={{ md: '392px', base: '100%' }}
      {...rest}
    >
      <Flex
        flexDir={'row'}
        alignItems={'flex-start'}
        justifyContent={'flex-start'}
        mb={{ md: '40px', base: '36px' }}
      >
        <Image src={data.imgPath} alt="testi img" />
        <Box ml={{ md: '24px', base: '17px' }}>
          <FourthHeadline color="sirkaPrimary.500" mb={'5px'}>
            {data.name}
          </FourthHeadline>
          <Text mb={'8px'}>{data.title}</Text>
          <HStack>
            {[0, 1, 2, 3, 4].map((index) => (
              <Image src="/employee-health-check/icons/star.svg" alt="stars testi" key={index} />
            ))}
          </HStack>
        </Box>
      </Flex>

      <Image
        alt="quote img"
        src="/employee-health-check/icons/double-quote.svg"
        position={'absolute'}
        mt={{ md: '107px', base: '100px' }}
        ml={'18px'}
      />
      <Flex
        px={{ md: '20px', base: '16px' }}
        py={{ md: '28px', base: '20px' }}
        flexDir={'column'}
        alignItems={'center'}
        justifyContent={'center'}
        border={'1px solid #FF6112'}
        borderRadius={'20px 20px 20px 0px'}
        boxShadow={'0px 2px 30px rgba(0, 0, 0, 0.05)'}
        height={{ md: '200px', base: '184px' }}
      >
        <Text
          fontSize={{ md: '14px', base: '12pxs' }}
          lineHeight={{ md: '22px', base: '18px' }}
          fontWeight={{ md: '400', base: '300' }}
          color={'sirkaBlack.800'}
        >
          {data.content}
        </Text>
      </Flex>
    </Flex>
  );
};
