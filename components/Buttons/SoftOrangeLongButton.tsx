import { Button } from '@chakra-ui/button';
import { BoxProps } from '@chakra-ui/layout';
import { FC } from 'react';

interface SoftOrangeLongButtonProps extends ButtonProps {
  isActive: boolean;
  setIsActive: any;
  index: number;
}

export const SoftOrangeLongButton: FC<SoftOrangeLongButtonProps> = (props) => {
  const { children, width, height, index, isActive, setIsActive, ...rest } = props;
  return (
    <Button
      bg={isActive ? '#FFF8F4' : 'transparent'}
      color={isActive ? '#262626' : '#ABAEB8'}
      fontWeight={600}
      zIndex="2"
      borderRadius={20}
      height={height ? height : { base: '80px', md: '58px' }}
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
        borderRadius: '2em',
        transition: 'all 0.3s ease-out',
        transform: isActive ? 'scale(1.02)' : '',
        background: isActive ? '#FFF8F4' : 'transparent',
        ':before': {
          bottom: '3px',
          filter: 'blur(6px) brightness(1)',
        },
      }}
      _hover={{
        filter: 'brightness(0.9) contrast(1.2)',
        color: '#262626',
        transform: 'scale(1.02)',
        background: '#FFF8F4',
        ':before': {
          bottom: '3px',
          filter: 'blur(6px) brightness(1)',
        },
      }}
      _focus={{
        outline: 'none',
      }}
      justifyContent={'flex-start'}
      {...rest}
    >
      {children}
    </Button>
  );
};
