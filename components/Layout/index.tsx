import { Box } from '@chakra-ui/react';
import Footer from './Footer';
import Header from './Header';
import React, { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Layout: FC = ({ children }) => {
  const router = useRouter();
  const route = router.pathname;
  const [isMobile, setIsMobile] = useState<boolean>(false);
  useEffect(() => {
    async function getIsMobile() {
      const checkIsMobile = (await route.includes('mobile')) ? true : false;
      setIsMobile(checkIsMobile);
    }
    getIsMobile();
    setTimeout(() => {}, 500);
  }, []);

  if (route != undefined) {
    return (
      <Box minWidth="100%" h="100%" overflow="hidden">
        <Header isMobile={isMobile!} />
        <Box h={'100%'} mt={isMobile! ? '-130px' : '-65px'} pt={'4rem'} minH={'100vh'}>
          <Box h="100%" position="relative" overflow="hidden">
            {children}
          </Box>
        </Box>
        <Footer isMobile={isMobile!} />
      </Box>
    );
  } else {
    return <>Loading</>;
  }
};

export const paddingContainer = { base: '1rem', md: '2.5rem', lg: '100px' };

export default Layout;
