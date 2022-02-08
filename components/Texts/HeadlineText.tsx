import { Flex } from '@chakra-ui/react';
import { MainHeadline, SubMainHeadline } from 'components/Texts';
import { FC } from 'react';

export const HeadlineText: FC<HeadlineTextProps> = (props) => {
  const {
    title,
    desc,
    titleColor,
    descColor,
    maxWidth,
    descFontSize,
    spacing,
    headLineFontSize,
    ...rest
  } = props;
  return (
    <Flex maxWidth={maxWidth} flexDir={'column'} {...rest}>
      <MainHeadline color={titleColor} mb={spacing} fontSize={headLineFontSize}>
        {title}
      </MainHeadline>
      <SubMainHeadline color={descColor} my={{ base: '8px', md: '12px' }} fontSize={descFontSize}>
        {desc}
      </SubMainHeadline>
    </Flex>
  );
};
