import { HStack, Circle } from '@chakra-ui/react';
import { FC } from 'react';

export const SliderButton: FC<SliderButtonProps> = (props) => {
  const { circleSize, stateActive, setStateActive, onClick, DATA, ...rest } = props;
  return (
    <HStack {...rest}>
      {DATA.map((data) => (
        <Circle
          size={circleSize ? circleSize : { md: '16px', base: '8px' }}
          bgColor={data.index === stateActive ? '#FF6112' : '#FFE7DA'}
          key={data.index}
          as={'button'}
          onClick={() =>
            onClick ? onClick : data.index !== stateActive ? setStateActive(data.index) : ''
          }
        />
      ))}
    </HStack>
  );
};
