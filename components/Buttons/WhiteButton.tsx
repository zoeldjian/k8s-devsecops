import { Button } from '@chakra-ui/button';
import { FC } from 'react';

export const WhiteButton: FC<ButtonProps> = (props) => {
  const { children, width, height, ...rest } = props;
  return (
    <Button
      bg="#FFFFFF"
      color="sirkaPrimary.500"
      fontWeight={600}
      zIndex="2"
      borderRadius={100}
      transition="all 0.3s ease-out"
      width={width}
      height={height ? height : { base: '30px', md: '44px' }}
      fontSize={{ md: '20px', base: '14px' }}
      _before={{
        content: "''",
        display: 'inline-block',
        position: 'absolute',
        height: '30px',
        left: '10px',
        right: '10px',
        bottom: '-1px',
        zIndex: '-1',
        borderRadius: '2em',
        filter: 'blur(14px) brightness(0.9)',
        background: 'primarySirka.500',
        transition: 'all 0.3s ease-out',
      }}
      _hover={{
        filter: 'brightness(0.9) contrast(1.2)',
        transform: 'scale(1.03)',
        ':before': {
          bottom: '3px',
          filter: 'blur(6px) brightness(1)',
        },
      }}
      _focus={{
        outline: 'none',
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};
