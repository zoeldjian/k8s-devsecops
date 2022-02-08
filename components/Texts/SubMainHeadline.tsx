import { Text } from '@chakra-ui/react';
import { FC } from 'react';
import { BoxProps } from '@chakra-ui/react';

export const SubMainHeadline: FC<TextProps & BoxProps> = (props) => {
  const { color, children, fontSize, ...rest } = props;
  return (
    <Text
      fontSize={fontSize ? fontSize : { base: '16px', md: '18px' }}
      fontWeight={'500'}
      lineHeight={{ md: '32px', base: '24px' }}
      textAlign={'left'}
      color={color}
      {...rest}
    >
      {children}
    </Text>
  );
};
