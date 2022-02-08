import { HStack, Circle } from '@chakra-ui/react';
import SlickCarousel from './SlickCarousel';
import { FC } from 'react';

interface CarouselProps {
  isActive: number;
  contentActive?: number;
  setIsActive: any;
  DATA: any[];
}

export const Carousel: FC<CarouselProps> = (props) => {
  const { isActive, setIsActive, DATA } = props;

  return (
    <>
      <SlickCarousel DATA={DATA} isActive={isActive} setIsActive={setIsActive} />
      <HStack mb={{ md: '0px', base: '24px' }}>
        {DATA.map((data) => (
          <Circle
            size={{
              md: DATA.length > 5 && data.index === 5 ? (isActive === 5 ? '16px' : '8px') : '16px',
              base: '8px',
            }}
            bgColor={data.index === isActive ? '#FF6112' : '#FFE7DA'}
            key={data.index}
            as={'button'}
            onClick={() => (data.index !== isActive ? setIsActive(data.index) : '')}
          />
        ))}
      </HStack>
    </>
  );
};
