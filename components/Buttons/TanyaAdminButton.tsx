import { Button } from '@chakra-ui/button';
import { Flex, Image, Text } from '@chakra-ui/react';
import { FC } from 'react';

interface TanyaAdminButtonProps {
  width?: { base: string; md: string };
  height?: { base: string; md: string };
  [x: string]: any;
}

export const TanyaAdminButton: FC<TanyaAdminButtonProps> = (props) => {
  const { width, height, ...rest } = props;
  return (
    <Button
      bg="sirkaPrimary.500"
      color="#FFFFFF"
      fontWeight={600}
      zIndex="21"
      borderRadius={100}
      transition="all 0.3s ease-out"
      width={width ? width : { base: '145px', md: '180px' }}
      height={height ? height : { base: '38px', md: '44px' }}
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
        transform: 'scale(1.06)',
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
      <Flex flexDir="row">
        <Image
          src={'/referral/icons/whatsapp.svg'}
          alt="whatsapp icon"
          mr={{ md: '8px', base: '4px' }}
        />
        <Text
          fontWeight={600}
          fontSize={{ md: '16px', base: '14px' }}
          lineHeight={{ md: '16px', base: '14px' }}
          color={'white'}
        >
          Tanya Admin
        </Text>
      </Flex>
    </Button>
  );
};
