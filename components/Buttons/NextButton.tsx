import { Circle, Image } from '@chakra-ui/react';
import { FC } from 'react';

export const NextButton: FC<CircleButtonProps> = (props) => {
  const { children, size, stateActive, setStateActive, lastIndex, onClick, ...rest } = props;
  return (
    <Circle
      size={size ? size : { md: '48px', base: '40px' }}
      as="button"
      zIndex={'19'}
      bgColor={'white'}
      boxShadow={'0px 2px 20px rgba(0, 0, 0, 0.05)'}
      onClick={() =>
        onClick ? onClick : setStateActive(stateActive === lastIndex ? 0 : stateActive + 1)
      }
      {...rest}
    >
      <Image src="/referral/icons/ChevronRight.svg" alt="button right" boxSize={'18px'} />
    </Circle>
  );
};
