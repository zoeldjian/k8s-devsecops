import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  useColorModeValue,
  Image,
  HStack,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { FaInstagram, FaFacebook, FaLinkedin, FaRegEnvelope } from 'react-icons/fa';
import { useRouter } from 'next/router';
const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer({ isMobile }: { isMobile: boolean }) {
  const router = useRouter();
  return (
    <Box
      bg={useColorModeValue('sirkaPrimary.500', 'gray.900')}
      color={useColorModeValue('white', 'gray.200')}
      display={isMobile ? 'none' : 'block'}
      as="footer"
    >
      <Container as={Stack} maxW={'100%'} py={10} px={{ md: '71px', base: '16px' }}>
        <SimpleGrid templateColumns={{ base: '1fr', md: '2fr 1fr 1fr 1fr 2fr' }} spacing={8}>
          <Stack spacing={6}>
            <Box as={'button'} onClick={() => router.replace('/')}>
              <Image
                src="/referral/icons/SirkaWhiteLgFooter.svg"
                alt="Sirka Logo Large"
                ml={'-16px'}
              />
              <Text
                fontSize={{ md: '14px', base: '12px' }}
                textAlign={'start'}
                lineHeight={{ md: '21px', base: '18px' }}
              >
                Partner Hidup Sehat Digital
              </Text>
            </Box>
            <HStack spacing={5}>
              <SocialButton label={'Email'} href={'mailto:contact@sirka.io'}>
                <FaRegEnvelope />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'https://instagram.com/sirka.io'}>
                <FaInstagram />
              </SocialButton>
              <SocialButton
                label={'Facebook'}
                href={'https://www.facebook.com/sirkaio-109399087596343'}
              >
                <FaFacebook />
              </SocialButton>
              <SocialButton
                label={'Linkedin'}
                href={'https://www.linkedin.com/company/sirkaio/mycompany/'}
              >
                <FaLinkedin />
              </SocialButton>
            </HStack>
          </Stack>

          <Stack align={'flex-start'} spacing={6} mt={{ md: 5 }}>
            <a href={'https://sirka.io/karir'} target={'_blank'} rel="noreferrer">
              Karir
            </a>
            <a href={'https://sirka.io/program'} target={'_blank'} rel="noreferrer">
              Program
            </a>
          </Stack>
          <Stack align={'flex-start'} spacing={6} mt={{ md: 5 }}>
            <a href={'#'} target={'_blank'} rel="noreferrer">
              Mitra Sirka
            </a>
            <a href={'https://sirka.io/blog'} target={'_blank'} rel="noreferrer">
              Blog
            </a>
            <a href={'/referral'} target={'_blank'} rel="noreferrer">
              Referral
            </a>
          </Stack>
          <Stack align={'flex-start'} spacing={6} mt={{ md: 5 }}>
            <a href={'https://sirka.io/tentang-kami'} target={'_blank'} rel="noreferrer">
              Tentang Kami
            </a>
            <a href={'https://sirka.io/'} target={'_blank'} rel="noreferrer">
              FAQ
            </a>
            <a href={'https://sirka.io/'} target={'_blank'} rel="noreferrer">
              Bantuan
            </a>
          </Stack>
          <Stack align={'flex-start'} mt={{ md: 5 }}>
            <ListHeader>Download Aplikasi Sirka</ListHeader>
            <Stack direction={{ lg: 'row', base: 'row' }} align={'flex-start'}>
              <a href="https://sirka.page.link/sirka-apps" target={'_blank'} rel="noreferrer">
                <Image
                  src="/referral/badges/AppleStoreComingSoonBadge.svg"
                  alt="Apple Store Badge"
                />
              </a>
              <a href="https://sirka.page.link/sirka-apps" target={'_blank'} rel="noreferrer">
                <Image src="/referral/badges/GooglePlayBadge.svg" alt="Google Play Badge" />
              </a>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
