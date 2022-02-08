import { Button } from '@chakra-ui/button';
import { BoxProps } from '@chakra-ui/layout';
import { FC } from 'react';

interface WhiteReferralButtonProps extends ButtonProps {
  menuActive: boolean;
  setMenuActive: any;
  index: number;
}

export const WhiteReferralButton: FC<WhiteReferralButtonProps> = (props) => {
  const { children, width, height, menuActive, setMenuActive, index, ...rest } = props;

  return (
    <Button
      bg={menuActive ? '#FF6112' : '#FFFFFF'}
      color={menuActive ? '#FFFFFF' : '#555555'}
      fontWeight={600}
      zIndex="2"
      borderRadius={100}
      height={height ? height : { base: '30px', md: '44px' }}
      width={width}
      minW={width}
      transition="all 0.3s ease-out"
      _before={{
        content: "''",
        display: 'inline-block',
        position: 'absolute',
        height: '30px',
        left: '10px',
        right: '10px',
        zIndex: '-1',
        color: '#555555',
        borderRadius: '2em',
        transition: 'all 0.3s ease-out',
        transform: menuActive ? 'scale(1.03)' : '',
        background: menuActive ? '#FF6112' : '#FFFFFF',
        ':before': {
          bottom: '3px',
          filter: 'blur(6px) brightness(1)',
        },
      }}
      _hover={{
        filter: 'brightness(0.9) contrast(1.2)',
        color: '#FFFFFF',
        transform: 'scale(1.03)',
        background: '#FF6112',
        ':before': {
          background: '#FF6112',
          height: height ? height : { base: '30px', md: '44px' },
          left: '0px',
          right: '0px',
        },
      }}
      _focus={{
        outline: 'none',
      }}
      onClick={() => setMenuActive(index)}
      {...rest}
    >
      {children}
    </Button>
  );
};
