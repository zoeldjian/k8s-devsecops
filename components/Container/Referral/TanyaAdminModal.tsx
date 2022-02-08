import { FC } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Circle,
} from '@chakra-ui/react';
import { OrangeButton } from 'components/Buttons';
import 'twin.macro';

export const TanyaAdminModal: FC<ChakraModalProps> = (props) => {
  const { isOpen, onOpen, onClose, ...rest } = props;
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size={'xs'} {...rest}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader color={'sirkaPrimary.500'} fontSize={'21px'}>
          Tanya Admin
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <div tw="flex flex-row items-start justify-start mb-6">
            <Circle size="6px" bg="#FF6112" mr={'8px'} />
            <p tw="mt-[-8px] text-sm font-medium text-[#262626]">
              Chat Admin Sirka melalui WhatsApp{' '}
              <span tw="font-semibold text-[#FF6112]">+6282136358135</span> atau
            </p>
          </div>
          <div tw="flex flex-row items-start justify-start mb-6">
            <Circle size="6px" bg="#FF6112" mr={'8px'} />
            <p tw="mt-[-8px] text-sm font-medium text-[#262626]">
              Chat Admin Sirka melalui aplikasi Sirka pada menu Chat
            </p>
          </div>
          <div tw="flex flex-row items-start justify-start">
            <Circle size="6px" bg="#FF6112" mr={'8px'} />
            <p tw="mt-[-8px] text-sm font-medium text-[#262626]">
              Lalu pilih <span tw="font-semibold text-[#FF6112]">Chat Admin</span>
            </p>
          </div>
        </ModalBody>
        <ModalFooter>
          <OrangeButton
            width={{ md: '120px', base: '80px' }}
            height={{ md: '40px', base: '32px' }}
            onClick={onClose}
          >
            Tutup
          </OrangeButton>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
