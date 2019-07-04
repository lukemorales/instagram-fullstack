import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderWrapper, Container } from './styles';

import logo from '../../assets/logo.svg';
import camera from '../../assets/camera.svg';

const Header = () => (
  <HeaderWrapper>
    <Container>
      <Link to="/">
        <img src={logo} alt="InstaRocket" />
      </Link>
      <Link to="/new">
        <img src={camera} alt="Enviar Publicação" />
      </Link>
    </Container>
  </HeaderWrapper>
);

export default Header;
