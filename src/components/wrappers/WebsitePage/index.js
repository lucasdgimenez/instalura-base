/* eslint-disable react/jsx-indent */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Footer from '../../commons/Footer';
import Menu from '../../commons/Menu';
import Modal from '../../commons/Modal';
import { Box } from '../../foundation/layout/Box';
import FormCadastro from '../../patterns/FormCadastro';
import SEO from '../../commons/SEO';

export const WebsitePageContext = React.createContext({
  toggleModalCadastro: () => {},
});

export default function WebsitePageWrapper({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <WebsitePageContext.Provider
      value={{
        toggleModalCadastro: () => {
          setIsModalOpen(!isModalOpen);
        },
      }}
    >

      <SEO headtitle="Home" />
      <Box
        flex={1}
        display="flex"
        flexWrap="wrap"
        flexDirection="column"
        backgroundImage="url(/images/bubbles.svg)"
        backgroundRepeat="no-repeat"
        backgroundPosition="bottom right"
      >
        <Modal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
          }}
        >
          {(propsDoModal) => (
            <FormCadastro propsDoModal={propsDoModal} />
          )}
        </Modal>
        <Menu onCadastrarClick={() => setIsModalOpen(true)} />
          {children}
        <Footer />
      </Box>
    </WebsitePageContext.Provider>
  );
}

WebsitePageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};