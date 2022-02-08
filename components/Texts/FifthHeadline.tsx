import { Text } from '@chakra-ui/react';
import { FC } from 'react';
import { BoxProps } from '@chakra-ui/react';

export const FifthHeadline: FC<TextProps & BoxProps> = (props) => {
  const { color, children, ...rest } = props;
  return (
    <Text
      fontSize={{ md: '20px', base: '16px' }}
      fontWeight={'700'}
      lineHeight={{ md: '32px', base: '24px' }}
      color={color}
      {...rest}
    >
      {children}
    </Text>
  );
};
