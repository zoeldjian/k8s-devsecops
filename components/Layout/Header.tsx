import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Image,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';
import { OrangeButton } from 'components/Buttons';
import { useEffect, useState } from 'react';
import { WhiteOutlineButton } from 'components/Buttons';

export default function Header({ isMobile }: { isMobile: boolean }) {
  const { isOpen, onToggle } = useDisclosure();
  const router = useRouter();
  const [clientWindowHeight, setClientWindowHeight] = useState<number>(0);
  const route = router.pathname;

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <Box position={'fixed'} top={0} zIndex="999" display={isMobile ? 'none' : 'block'}>
      <Flex
        backgroundColor={'sirkaPrimary.500'}
        transition="background-color 1s ease 0s"
        minH={'60px'}
        width={'100vw'}
        py={{ base: 2 }}
        px={{ base: '16px', md: '71px' }}
        backdropFilter={'blur(6px)'}
        align={'center'}
        boxShadow="rgba(46, 50, 70, 0.2) 0px 1px 10px"
      >
        <Flex flex={{ base: 1 }} justify={{ base: 'start', md: 'space-between' }}>
          <Image
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            src={'/referral/icons/SirkaWhite.svg'}
            alt="sirka logo"
            mt={{ md: '-2px' }}
            mr={'16px'}
            onClick={() => router.replace('/')}
          />
          <DesktopNav />
          <a
            href={
              route.includes('employee-health-check')
                ? '/employee-health-check/assessment'
                : 'https://sirka.io/assessment'
            }
            target={'_blank'}
            rel="noreferrer"
          >
            <WhiteOutlineButton
              width={{ md: '300px', base: '200px' }}
              display={{ md: 'flex', base: 'none' }}
            >
              <Text
                fontSize={'16px'}
                color={'white'}
                textAlign={'center'}
                fontWeight={'600'}
                py={{ md: '10px' }}
              >
                GET YOUR FIRST ASSESSMENT
              </Text>
            </WhiteOutlineButton>
          </a>
        </Flex>

        <Flex
          flex={{ base: 1, md: 'auto' }}
          display={{ base: 'flex', md: 'none' }}
          alignItems={'flex-end'}
          flexDir={'row-reverse'}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? (
                <CloseIcon w={3} h={3} color={'white'} />
              ) : (
                <HamburgerIcon w={6} h={6} color={'white'} />
              )
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav route={route} />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  return (
    <Stack direction={'row'} spacing={'36px'} display={{ md: 'flex', base: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Text
                p={2}
                fontSize={'16px'}
                fontWeight={500}
                color={'#FFFFFF'}
                _hover={{
                  textDecoration: 'none',
                  color: '#FFFFFF',
                }}
              >
                <a target={'_blank'} href={navItem.href ?? '#'} rel="noreferrer">
                  {navItem.label}
                </a>
              </Text>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={'#FFFFFF'}
                p={4}
                rounded={'xl'}
                minW={'sm'}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: '#FFFFFF' }}
    >
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text transition={'all .3s ease'} _groupHover={{ color: 'pink.400' }} fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}
        >
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = ({ route }: { route: string }) => {
  return (
    <Stack bg={'sirkaPrimary.500'} p={4} display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
      <a
        href={
          route.includes('employee-health-check')
            ? '/employee-health-check/assessment'
            : 'https://sirka.io/assessment'
        }
        rel="noreferrer"
      >
        <WhiteOutlineButton
          width={{ md: '200px', base: '100%' }}
          my={'10px'}
          fontWeight="400"
          fontSize={'14px'}
          lineHeight={'14px'}
        >
          GET YOUR FIRST ASSESSMENT
        </WhiteOutlineButton>
      </a>
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text fontWeight={400} color={'#FFFFFF'} fontSize={'16px'} lineHeight={'24px'}>
          <a href={href ?? '#'} target={'_blank'} rel="noreferrer">
            {label}
          </a>
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={'#FFFFFF'}
          align={'start'}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'TENTANG KAMI',
    href: 'https://sirka.io/tentang-kami',
  },
  {
    label: 'PROGRAM',
    href: 'https://sirka.io/program',
  },
  {
    label: 'KARIR',
    href: 'https://sirka.io/karir',
  },
  {
    label: 'MITRA SIRKA',
    href: 'https://sirka.io/mitra',
  },
  {
    label: 'BLOG',
    href: 'https://sirka.io/blog',
  },
];
