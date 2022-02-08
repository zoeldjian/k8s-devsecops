import { Text } from '@chakra-ui/react';
import { FC } from 'react';
import { BoxProps } from '@chakra-ui/react';

export const FourthHeadline: FC<TextProps & BoxProps> = (props) => {
  const { color, children, ...rest } = props;
  return (
    <Text
      fontSize={{ md: '24px', base: '20px' }}
      fontWeight={'700'}
      lineHeight={{ md: '30px', base: '25px' }}
      color={color}
      {...rest}
    >
      {children}
    </Text>
  );
};
