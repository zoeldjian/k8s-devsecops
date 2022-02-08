import { Button } from '@chakra-ui/button';
import { Box, Text } from '@chakra-ui/react';
import { BoxProps } from '@chakra-ui/layout';
import { FC } from 'react';

interface DefaultLongButtonProps extends ButtonProps {
  isActive: boolean;
  setIsActive: any;
  index: number;
  content?: string;
}

export const DefaultLongButton: FC<DefaultLongButtonProps> = (props) => {
  const { children, width, height, index, isActive, setIsActive, content, ...rest } = props;
  return (
    <Box
      p={'16px'}
      bg="transparent"
      zIndex="2"
      borderRadius={20}
      height={height ? height : { base: '80px', md: '62px' }}
      width={width}
      transition="all 0.3s ease-out"
      onClick={() => setIsActive(index)}
      _before={{
        content: "''",
        display: 'inline-block',
        position: 'absolute',
        height: '30px',
        left: '10px',
        right: '10px',
        zIndex: '-1',
        color: '#ABAEB8',
        transition: 'all 0.3s ease-out',
        transform: isActive ? 'scale(1.03)' : '',
        ':before': {
          bottom: '3px',
          filter: 'blur(6px) brightness(1)',
        },
      }}
      _hover={{
        filter: 'brightness(0.9) contrast(1.2)',
        color: '#262626',
        transform: 'scale(1.03)',
        ':before': {
          bottom: '3px',
        },
      }}
      _focus={{
        outline: 'none',
      }}
      justifyContent={'flex-start'}
      {...rest}
    >
      <Text color={isActive ? '#262626' : '#ABAEB8'} fontWeight={600} textAlign={'start'}>
        {children}
      </Text>
      {isActive && (
        <Text
          mt={{ md: '10px' }}
          textAlign={'start'}
          fontSize={{ md: '14px' }}
          lineHeight={{ md: '22px' }}
          color={'#000000'}
          ml={'2px'}
        >
          {content}
        </Text>
      )}
    </Box>
  );
};
