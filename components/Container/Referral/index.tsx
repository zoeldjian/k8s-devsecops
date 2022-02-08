import { Box, Flex, useDisclosure, VStack } from '@chakra-ui/react';
import { ReferralLanding } from './ReferralLanding';
import { ReferralOffer } from './ReferralOffer';
import { ReferralBonus } from './ReferralBonus';
import { ReferralFooter } from './ReferralFooter';
import { MemberTutorial } from './MemberTutorial';
import { NewMemberTutorial } from './NewMemberTutorial';
import { TanyaAdminButton } from 'components/Buttons/TanyaAdminButton';
import { TanyaAdminModal } from './TanyaAdminModal';

export const Referral = ({ isMobile }: { isMobile: boolean }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex flexDir={'column'}>
      <ReferralLanding />
      <TanyaAdminButton
        position={'fixed'}
        right={{ md: '71px', base: '16px' }}
        top={{ md: '678px', base: '618px' }}
        onClick={onOpen}
        display={isMobile ? 'flex' : 'none'}
      />
      <a href={'https://wa.me/6282136358135'} target={'_blank'} rel="noreferrer">
        <TanyaAdminButton
          position={'fixed'}
          right={{ md: '71px', base: '16px' }}
          top={{ md: '678px', base: '618px' }}
          display={isMobile ? 'none' : 'flex'}
        />
      </a>
      <TanyaAdminModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      <Box my={{ md: '90px', base: '45px' }} px={{ md: '72px', base: '16px' }}>
        <ReferralOffer />
      </Box>
      <VStack spacing={{ md: '90px', base: '45px' }}>
        <ReferralBonus />
        <MemberTutorial />
        <NewMemberTutorial />
      </VStack>
      <Box mt={{ md: '180px', base: '100px' }}>
        <ReferralFooter />
      </Box>
    </Flex>
  );
};
