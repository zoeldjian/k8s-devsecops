import { Text } from '@chakra-ui/react';
import { FC } from 'react';
import { BoxProps } from '@chakra-ui/react';

export const MainHeadline: FC<TextProps & BoxProps> = (props) => {
  const { color, children, fontSize, ...rest } = props;
  return (
    <Text
      fontSize={fontSize ? fontSize : { base: '36px', md: '48px' }}
      fontWeight={'700'}
      lineHeight={{ md: '48px', base: '30px' }}
      color={color}
      {...rest}
    >
      {children}
    </Text>
  );
};
