import { Box, Circle, Flex, HStack, Image, Grid, GridItem, Text } from '@chakra-ui/react';

import { FifthHeadline, SecondaryHeadline } from 'components/Texts';
import { WhiteReferralButton, WhiteLongButton } from 'components/Buttons';
import { FC, useState, useEffect } from 'react';
import {
  MEMBER_SHARE_DATA,
  MEMBER_SEE_REFERRAL_DATA,
  TUTORIAL_MENU,
  MEMBER_CLAIM_BONUS,
  MEMBER_CLAIM_BONUS_NOTES,
} from 'constants/Referral';
import { Carousel } from 'components/Carousel';

interface MemberTutorialTabsProps {
  isActive: number;
  setIsActive: any;
  DATA: any[];
  contentActive: number;
}
export const MemberTutorial: FC<ContainerProps> = (props) => {
  const { ...rest } = props;
  const [isActive, setIsActive] = useState<number>(0);
  const [menuActive, setMenuActive] = useState<number>(0);
  const [DATA, setDATA] = useState<any[]>([]);
  useEffect(() => {
    setDATA(menuActive === 0 ? MEMBER_SHARE_DATA : MEMBER_SEE_REFERRAL_DATA);
    setTimeout(() => 500);
  });

  return (
    <Flex
      flexDir={{ md: 'row', base: 'column' }}
      alignItems={'flex-start'}
      justifyContent={'space-between'}
      bgColor={'sirkaSecondary.100'}
      borderRadius={{ md: '0px 100px 0px 0px', base: '0px 30px 0px 0px' }}
      width={'100%'}
      minH={{ md: '700px' }}
      px={{ md: '72px', base: '16px' }}
      py={{ md: '60px', base: '24px' }}
      {...rest}
    >
      <Flex
        width={{ md: menuActive !== 2 ? '55%' : '100%', base: '100%' }}
        flexDir={'column'}
        alignItems={{ md: 'flex-start', base: 'center' }}
        justifyContent={'flex-start'}
      >
        <SecondaryHeadline
          color={'sirkaPrimary.500'}
          mb={{ md: '20px', base: '16px' }}
          textAlign={{ md: 'left', base: 'center' }}
          width={{ base: '80%', md: '100%' }}
        >
          Tutorial Bagi Member Sirka
        </SecondaryHeadline>
        <Box
          overflowX={{ base: 'scroll', md: 'hidden' }}
          width={'100%'}
          // css config to hide scrollbar view
          css={{
            '&::-webkit-scrollbar': {
              width: '0px',
            },
            '&::-webkit-scrollbar-track': {
              width: '0px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: '#EDF9F6',
              borderRadius: '0px',
            },
          }}
        >
          <HStack spacing={'16px'} mb={{ md: '60px', base: '24px' }}>
            {TUTORIAL_MENU.map((menu) => (
              <WhiteReferralButton
                width={{ md: '218px', base: '162px' }}
                key={menu.index}
                fontSize={{ md: '16px', base: '12px' }}
                menuActive={menu.index === menuActive ? true : false}
                index={menu.index}
                setMenuActive={setMenuActive}
              >
                {menu.content}
              </WhiteReferralButton>
            ))}
          </HStack>
        </Box>

        <MemberMenu
          contentActive={menuActive}
          isActive={isActive}
          setIsActive={setIsActive}
          DATA={DATA}
        />
        <MemberClaimBonus
          contentActive={menuActive}
          isActive={isActive}
          setIsActive={setIsActive}
          DATA={DATA}
        />
      </Flex>
      <MemberContent
        contentActive={menuActive}
        isActive={isActive}
        setIsActive={setIsActive}
        DATA={DATA}
      />
    </Flex>
  );
};

const MemberMenu: FC<MemberTutorialTabsProps> = (props) => {
  const { isActive, setIsActive, contentActive, DATA } = props;

  return (
    <Flex
      flexDir={'column'}
      alignItems={'flex-start'}
      justifyContent={'flex-start'}
      display={{ md: contentActive === 1 || contentActive === 0 ? 'flex' : 'none', base: 'none' }}
    >
      {DATA.map((data) => (
        <Flex
          key={data.index}
          flexDir={'row'}
          width={'100%'}
          justifyContent={'flex-start'}
          alignItems={'flex-start'}
        >
          <Box mr={'24px'}>
            <Circle
              size={'10px'}
              bgColor={data.index == isActive ? 'sirkaSecondary.500' : 'sirkaSecondary.300'}
              as={'button'}
            >
              {data.index === isActive && <Circle size={'24px'} border={'1px solid #5CA898'} />}
            </Circle>
            {data.index < DATA[DATA.length - 1].index && (
              <Box
                width={'1px'}
                height={contentActive === 1 && data.index == 0 ? '92px' : '72px'}
                bgColor={'#5CA898'}
                ml={'4px'}
              />
            )}
          </Box>

          <WhiteLongButton
            width={{ md: '548px', base: '100%' }}
            height={
              contentActive === 1 && data.index == 0
                ? { md: '92px', base: '80px' }
                : { md: '62px', base: '80px' }
            }
            fontSize={{ md: '20px' }}
            mt={
              contentActive === 1 && data.index == 0
                ? { md: '-30px', base: '0px' }
                : { md: '-25px', base: '0px' }
            }
            index={data.index}
            isActive={data.index === isActive ? true : false}
            setIsActive={setIsActive}
          >
            {data.index + 1}. {data.content}
          </WhiteLongButton>
        </Flex>
      ))}
    </Flex>
  );
};

const MemberContent: FC<MemberTutorialTabsProps> = (props) => {
  const { isActive, setIsActive, contentActive, DATA } = props;

  return (
    <Flex
      width={{ md: '40%', base: '100%' }}
      flexDir={'column'}
      alignItems={'center'}
      display={contentActive === 1 || contentActive === 0 ? 'flex' : 'none'}
      minH={{ base: '520px' }}
    >
      <Carousel isActive={isActive} setIsActive={setIsActive} DATA={DATA} />

      <Flex
        minW={'100%'}
        bgColor={'white'}
        p={{ base: '16px' }}
        borderRadius={'20px'}
        color={'#262626'}
        fontSize={'16px'}
        lineHeight={'24px'}
        fontWeight={'700'}
        display={{ md: 'none', base: 'flex' }}
      >
        {DATA.filter((dataFiltered) => dataFiltered.index === isActive).map((data) => (
          <Box key={data.index}>
            {data.index + 1}. {data.content}
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};

const MemberClaimBonus: FC<MemberTutorialTabsProps> = (props) => {
  const { isActive, setIsActive, contentActive, DATA } = props;
  return (
    <>
      {/* For Desktop View */}
      <Grid
        h="450px"
        templateRows="repeat(4, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={'24px'}
        display={{ md: contentActive === 2 ? 'grid' : 'none', base: 'none' }}
        width={'100%'}
      >
        {MEMBER_CLAIM_BONUS.map((bonus) => (
          <GridItem
            rowSpan={2}
            colSpan={3}
            bg="#FFFFFF"
            borderRadius={'20px'}
            display={'flex'}
            flexDir={'column'}
            px={{ md: '24px' }}
            key={bonus.index}
          >
            <Circle
              size={{ md: '80px' }}
              bgColor={'#FFF8F4'}
              ml={{ md: '24px' }}
              mt={{ md: '-30px' }}
              mb={{ md: '24px' }}
            >
              <Image src={`/referral/icons/${bonus.icon}.svg`} />
            </Circle>
            <Flex flexDir={'row'}>
              <FifthHeadline color={'#262626'} mr={{ md: '8px' }}>
                {bonus.index + 1}.
              </FifthHeadline>
              <Flex flexDir={'column'}>
                <FifthHeadline color={'#262626'}>{bonus.title} </FifthHeadline>

                <Text
                  color={'#262626'}
                  fontSize={{ md: '16px' }}
                  lineHeight={{ md: '26px' }}
                  fontWeight={'500'}
                >
                  {bonus.content}
                </Text>
              </Flex>
            </Flex>
          </GridItem>
        ))}
        <GridItem
          rowSpan={2}
          colSpan={6}
          bg="#FFF8F4"
          borderRadius={'20px'}
          p={{ md: '24px' }}
          display={'flex'}
          flexDir={'column'}
        >
          {MEMBER_CLAIM_BONUS_NOTES.map((note, index) => (
            <>
              <Flex flexDir={'row'} alignItems={'center'} my={{ md: '2px' }} key={index}>
                <Circle size={'4px'} bgColor={'#262626'} mr={{ md: '8px' }} />
                <Text>{note.content}</Text>
              </Flex>
              {note.children &&
                note.children.map((children, index) => (
                  <Flex
                    flexDir={'row'}
                    alignItems={'center'}
                    ml={{ md: '21px' }}
                    my={{ md: '2px' }}
                    key={index}
                  >
                    <Circle size={'4px'} bgColor={'#262626'} mr={{ md: '8px' }} />
                    <Text>{children}</Text>
                  </Flex>
                ))}
            </>
          ))}
          <Flex flexDir={'row'} alignItems={'flex-start'} my={'7px'}>
            <Text fontWeight={'400'} fontSize={'14px'} lineHeight={'24px'}>
              *Data hanya diberikan diawal saja
            </Text>
          </Flex>
        </GridItem>
      </Grid>

      {/* For Mobile View */}
      <Flex
        flexDir={'column'}
        py={'24px'}
        display={{ base: contentActive === 2 ? 'grid' : 'none', md: 'none' }}
      >
        {MEMBER_CLAIM_BONUS.map((bonus) => (
          <Flex
            bg="#FFFFFF"
            borderRadius={'20px'}
            display={'flex'}
            flexDir={'column'}
            px={'16px'}
            py={'24px'}
            mb={'46px'}
            key={bonus.index}
          >
            <Circle size={'60px'} bgColor={'#FFF8F4'} ml={'24px'} mt={'-56px'} mb={'12px'}>
              <Image src={`/referral/icons/${bonus.icon}.svg`} boxSize={'42px'} />
            </Circle>
            <Flex flexDir={'row'}>
              <FifthHeadline color={'#262626'} mr={'8px'}>
                {bonus.index + 1}.
              </FifthHeadline>
              <Flex flexDir={'column'}>
                <FifthHeadline color={'#262626'} mb={'2px'}>
                  {bonus.title}{' '}
                </FifthHeadline>
                <Text color={'#262626'} fontSize={'14px'} lineHeight={'21px'} fontWeight={'500'}>
                  {bonus.content}
                </Text>
              </Flex>
            </Flex>
          </Flex>
        ))}
        <Flex
          flexDir={'column'}
          px={'16px'}
          pt={'26px'}
          pb={'16px'}
          bgColor={'#FFF8F4'}
          borderRadius={'20px'}
          width={'100%'}
          fontSize={'14px'}
          lineHeight={'21px'}
          color={'#262626'}
        >
          {MEMBER_CLAIM_BONUS_NOTES.map((note, index) => (
            <>
              <Flex flexDir={'row'} alignItems={'flex-start'} my={'7px'} key={index}>
                <Circle size={'3px'} bgColor={'#262626'} mr={'8px'} />
                <Text mt={'-10px'}>{note.content}</Text>
              </Flex>
              {note.children &&
                note.children.map((children, index) => (
                  <Flex
                    flexDir={'row'}
                    ml={'21px'}
                    my={'7px'}
                    alignItems={'flex-start'}
                    key={index}
                  >
                    <Circle size={'3px'} bgColor={'#262626'} mr={'8px'} />
                    <Text mt={'-10px'}>{children}</Text>
                  </Flex>
                ))}
            </>
          ))}
          <Flex flexDir={'row'} alignItems={'flex-start'} my={'7px'}>
            <Text fontWeight={'300'} fontSize={'12px'} lineHeight={'18px'}>
              *Data hanya diberikan diawal saja
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
