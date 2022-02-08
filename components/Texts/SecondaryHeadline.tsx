import { Text } from '@chakra-ui/react';
import { FC } from 'react';
import { BoxProps } from '@chakra-ui/react';

export const SecondaryHeadline: FC<TextProps & BoxProps> = (props) => {
  const { color, children, ...rest } = props;
  return (
    <Text
      fontSize={{ md: '36px', base: '24px' }}
      fontWeight={'700'}
      lineHeight={{ md: '48px', base: '30px' }}
      color={color}
      {...rest}
    >
      {children}
    </Text>
  );
};
