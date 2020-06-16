import React from 'react';
import { Box, Flex, Heading, Close } from 'theme-ui';

type PropTypes = {
  children: React.ReactElement[];
  onClose: (event: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => void;
  visible: boolean;
  title: string;
};

const Modal: React.FC<PropTypes> = (props: PropTypes) => {
  const { children, onClose, visible, title } = props;
  return (
    <>
      {visible && (
        <Flex variant="modal">
          <Box variant="modalOverlay" onClick={onClose} />
          <Box variant="modalBody">
            <Flex pb={6} sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
              {title !== '' && <Heading as="h3">{title}</Heading>}
              <Close onClick={onClose} />
            </Flex>
            {children}
          </Box>
        </Flex>
      )}
    </>
  );
};

Modal.defaultProps = {
  visible: false,
};

export default Modal;
